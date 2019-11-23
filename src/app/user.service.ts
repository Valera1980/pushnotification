import { ModelUser, IUser } from './models/model-user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CopyModelsService } from './services/deepcopy/copy.service';
import { filter, map } from 'rxjs/operators';

type ReadUserOrNull  = ReadonlyArray<Readonly<ModelUser>> | null;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users$ = new BehaviorSubject<ReadUserOrNull>(null);
  private _api_users_get = 'http://localhost:3000/user';
  constructor(
    private _http: HttpClient,
    private _copyService: CopyModelsService
  ) { }

  queryUsers(): Observable<ReadonlyArray<ModelUser>> {
    return this._http.get<IUser[]>(this._api_users_get)
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
        filter((u: ReadUserOrNull) => Array.isArray(u)),
        map((u: ReadUserOrNull) => {
          const newUsers = users.filter(currUser => currUser.isNew);
          console.log(this._copyService);
          const changed = this._copyService.getDifference(u!, users);
          return [...changed, ...newUsers];
        })
      );
  }
}
