import { ModelUser } from './../models/model-user';
import { Component, OnInit } from '@angular/core';
import { PersonOrAnimal, Person, Animal, isAnimal, isPerson } from './types';
interface PageInfo {
  title: string;
}
type Page = 'home' | 'about' | 'contacts';

@Component({
  selector: 'app-typcecheck',
  templateUrl: './typcecheck.component.html',
  styleUrls: ['./typcecheck.component.scss']
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

  constructor() { }

  ngOnInit() {
    const x: Record<Page, PageInfo> = {
      about: { title: '000' },
      contacts: { title: '000' },
      home: { title: '000' }
    };
    const sss: string = this.someFun(0);
    const iii = sss.trim();
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

}