import { ModelUser, IUser } from './models/model-user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CopyModelsService } from './services/deepcopy/copy.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users$ = new BehaviorSubject<ReadonlyArray<ModelUser>>(null);
  private _api_users_get = 'http://localhost:3000/user';
  constructor(
    private _http: HttpClient,
    private _copyService: CopyModelsService
  ) { }

  queryUsers(): Observable<ReadonlyArray<ModelUser>> {
    return this._http.get(this._api_users_get)
      .pipe(
        map((users: IUser[]) => {
          const arr = users.map(u => new ModelUser(u));
          this._users$.next(arr);
          return arr;
        })
      );
  }
  save(users: ReadonlyArray<ModelUser>): Observable<any> {
    return this._users$
      .pipe(
        map((u: ReadonlyArray<ModelUser>) => {
          const newUsers = users.filter(u => u.isNew);
          console.log(this._copyService);
          const changed = this._copyService.getDifference(u, users);
          return [...changed, ...newUsers];
        })
      );
  }
}
