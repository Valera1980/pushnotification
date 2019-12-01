import { InjTestService } from './../inj-test.service';
import { ModelUser } from './../models/model-user';
import { Component, OnInit, Self, SkipSelf, Optional, Host } from '@angular/core';
import { PersonOrAnimal, Person, Animal, isAnimal, isPerson } from './types';
import { Subject, BehaviorSubject } from 'rxjs';
import { pluck, share, shareReplay } from 'rxjs/operators';
interface PageInfo {
  title: string;
}
type Page = 'home' | 'about' | 'contacts';

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

  constructor(
    private _injSelf: InjTestService,
    @SkipSelf() private _injSkipSelf: InjTestService,
  ) { }

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
      console.log('+++++++++++++++++++++++++++++++++++++++');
      console.log(d);
    });

    // simulate route change
    routeEnd.next({ data: {}, url: 'my-path5' });

    // nothing logged
    const lateSubscriber = lastUrl.subscribe((d) => {
      console.log('0000000000000000000000000000000000000000000000');
      console.log(d);
    });
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
