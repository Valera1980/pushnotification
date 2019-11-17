import { Component, OnInit } from '@angular/core';
import { PersonOrAnimal, Person, Animal, isAnimal, isPerson } from './types';

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
