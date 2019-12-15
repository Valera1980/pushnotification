import { InjTestService } from './../inj-test.service';
import { ModelUser } from './../models/model-user';
import { Component, OnInit, Self, SkipSelf, Optional, Host } from '@angular/core';
import { PersonOrAnimal, Person, Animal, isAnimal, isPerson } from './types';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { pluck, share, shareReplay } from 'rxjs/operators';
interface PageInfo {
  title: string;
}
type Page = 'home' | 'about' | 'contacts';

type some_type<T> = T extends string ? string : number;
type FFF<T> = T extends { aaa: infer U, bbb: infer U } ? U : never;
type sn = FFF<{ aaa: string, bbb: number }>;

interface III {
  ayyyyy: number;
  byyyyyy: number;
  cmmmm: number;
}

type ggg = Omit<III, 'ayyyyy'>;

const u: ggg = { byyyyyy: 9, cmmmm: 7}

@Component({
  selector: 'app-typcecheck',
  templateUrl: './typcecheck.component.html',
  styleUrls: ['./typcecheck.component.scss'],
  providers: [
    InjTestService
  ]
})
export class TypcecheckComponent implements OnInit {
  item: Readonly<Person> = {
    name: 'Valera',
    age: 39
  };
  itemA: Animal = {
    name: 'Murchik',
    type: 'cat'
  };

  behaviorOne$ = new BehaviorSubject<number>(0);
  replayOne$ = new AsyncSubject<number>();
  iteratorsub = 0;
  iteratorrepl = 0;
  constructor(
    private _injSelf: InjTestService,
    @SkipSelf() private _injSkipSelf: InjTestService,
  ) {
    // this.next();
  }


  next() {


    // this.behaviorOne$.next(this.iteratorsub++);
    // this.replayOne$.next(++this.iteratorrepl);

  }
  subscribe1() {
    this.replayOne$
      .subscribe(d => {
        console.log('replay1: ', d);
      });
  }
  subscribe2() {
    this.replayOne$
      .subscribe(d => {
        console.log('replay2: ', d);
      });
  }
  subscribe3() {
    this.replayOne$
      .subscribe(d => {
        console.log('replay3: ', d);
      });
    this.replayOne$.complete();
  }
  ngOnInit() {
    // simulate url change with subject
    const routeEnd = new Subject<{ data: any, url: string }>();

    // grab url and share with subscribers
    const lastUrl = routeEnd.pipe(
      pluck('url'),
      shareReplay(1)
    );

    // initial subscriber required
    const initialSubscriber = lastUrl.subscribe((d) => {
      // console.log('+++++++++++++++++++++++++++++++++++++++');
      // console.log(d);
    });

    // simulate route change
    routeEnd.next({ data: {}, url: 'my-path5' });

    // nothing logged
    const lateSubscriber = lastUrl.subscribe((d) => {
      // console.log('0000000000000000000000000000000000000000000000');
      // console.log(d);
    });

    const s: some_type<string> = '9';
    console.log(typeof s);
  }

  someFun(p: number): string {
    if (p === 0) {
      return '';
    }
    return '    oooo      ';
  }
  printSome(): void {
    this.print(this.itemA);
  }
  print(perOrAn: PersonOrAnimal): void {
    // console.log(perOrAn.type);
    if (isAnimal(perOrAn)) {
      console.log(perOrAn.type);
    } else if (isPerson(perOrAn)) {
      console.log(perOrAn.age);
    }
  }
  alertMsg(): void {
    alert('HHHHH');
  }

}
