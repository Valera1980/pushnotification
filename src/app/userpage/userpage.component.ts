import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ModelUser, UserSerialize } from './../models/model-user';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../user.service';
import { CopyModelsService } from '../services/deepcopy/copy.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserpageComponent implements OnInit {

  users$: Observable<ModelUser[]>;
  selectedId: number;
  users: ReadonlyArray<ModelUser> = [];
  constructor(
    private _usersService: UserService,
    private _cd: ChangeDetectorRef,
    private _copyService: CopyModelsService
  ) { }

  ngOnInit() {
    this.queryUsers()
    .subscribe(u => {
      this.users = u;
      this._cd.detectChanges();
    });
  }

  queryUsers(): Observable<ModelUser[]> {
    return this._usersService.queryUsers()
    .pipe(
      map((users: ReadonlyArray<ModelUser>) => {
        const a = users.map(u => u.clone());
        return a;
      })
    );
  }
  add(): void {
    const copyArray = this.users.map(u => u.clone());
    copyArray.push(new ModelUser({name: '876', email: 'email@ooo.oo', isNew: true}));
    this.users = copyArray;
  }
  editUser(id: number) {
    this.selectedId = id;
    const copyArray = this._copyArray();
    const foundUser = copyArray.find(u => u.id === id);
    console.log(foundUser);
    if (foundUser) {
      foundUser.name = foundUser.name + '999';
      this.users = copyArray;
    }
  }
  save(): void {
    this._usersService.save(this.users)
    .subscribe(u => {
      console.log(u);
    });
  }
  private _copyArray(): ModelUser[] {
    return this._copyService.copyArray<ModelUser, UserSerialize>(this.users);
  }

}
