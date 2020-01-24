import { ModelUser } from './../models/model-user';
import { Component, OnInit } from '@angular/core';
import { of, combineLatest, ReplaySubject, BehaviorSubject, partition } from 'rxjs';
import { take, delay, withLatestFrom, filter, distinct, groupBy, mergeMap, toArray } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

enum Colors {
  RED = 1,
  YELLOW = 2,
  GREEN = 3
}
type enumKeys = keyof Colors;
@Component({
  selector: 'app-rxjs-learn',
  templateUrl: './rxjs-learn.component.html',
  styleUrls: ['./rxjs-learn.component.scss']
})
export class RxjsLearnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getSome(1);
  }

  test(): void {
    const u1 = new ModelUser({ name: '111', email: 'user1@uuu.ioo' });
    const u2 = new ModelUser({ name: '222', email: 'user2@uuu.ioo' });
    const u3 = new ModelUser({ name: '333', email: 'user3@uuu.ioo' });
    const u4 = new ModelUser({ name: '111', email: 'user4@uuu.ioo' });

    of([u1, u2, u3, u4])
      .pipe(
        // partition((u: ModelUser) => u.name === '111'),
        // mergeMap(t$ => t$.pipe(toArray()))
      )
      .subscribe(uu => console.log(uu));
  }
  getSome(p: Colors): string {
    return '';
  }

}
