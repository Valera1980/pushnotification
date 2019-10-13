import { IData } from './../parent/parent.component';
import { DataService } from './../data.service';
import { Component, OnInit, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
// declare const gapi;
declare var gapi: any;
@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss'],
  providers:[ DataService]
})
export class GoogleComponent implements OnInit {

  loadGapi$ = new BehaviorSubject<boolean>(false);
  key = '315356854331-2l4d037tic0m4tt0jfcl0cuo8eoljonp.apps.googleusercontent.com';
  constructor(
    private _dataService: DataService,
    @SkipSelf() private _dddd: DataService
  ) { 
    console.log(this._dddd.data);
    _dataService.data = [{name:'sss', age: 22}];
    _dddd.data = [{name:'lkjlkjkj', age: 999999}];

    console.log('ddddd ',this._dddd.data);
    console.log('ssssss ',this._dataService.data);


  }

  ngOnInit() {
     const me = this;
     gapi.load('auth2', function() {
        console.log('HERE');
        me.loadGapi$.next(true);
        const t: any = gapi.auth2.init({
          client_id: me.key,
          scope: `https://www.google.com/analytics/feeds/data https://adwords.google.com/api/adwords https://www.googleapis.com/auth/analytics.edit`
        });
        const isLogin = t.isSignedIn.get();
        console.log('isLogin ',isLogin);
        t.isSignedIn.listen(function(u){
          console.log(u);
        })
        /* Ready. Make a call to gapi.auth2.init or some other API */
      });

  }

  googleSignIn(): void {
    this.loadGapi$
    .pipe(
      filter(r => r === true)
    )
    .subscribe(() => {
      const t: any = gapi.auth2.init({
        client_id: this.key,
        scope: `https://www.google.com/analytics/feeds/data https://adwords.google.com/api/adwords https://www.googleapis.com/auth/analytics.edit`
      });
      // t.then(res => {
      //    console.log(res);
      //  });
      t.signIn().then(iii => {
        console.log(iii);
      });
    
    });
  }
}
