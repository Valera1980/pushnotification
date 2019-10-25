import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Bird {
  name: string;
  fly(): any;
}
interface Animal {
  name: string;
  roar(): any;
}
class Voron implements Bird {
  name: 'Voron';
  fly() {
    console.log('fly');
  }
}
class Bear implements Animal {
  name: 'Voron';
  roar(){
    console.log('roar');
  }
}

type nnn = Bird | Animal;
@Component({
  selector: 'app-life-ciles',
  templateUrl: './life-ciles.component.html',
  styleUrls: ['./life-ciles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCilesComponent implements OnInit {
  form: FormGroup;
  ttt = 688;
  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this._fb.group({
      items: this._fb.array([this.createCombo()])
    }, { validators: this.fff });

    this.form.valueChanges
      .subscribe(d => {
        console.log(d);
      });
  }
  fff(form: FormGroup) {
    if (form.dirty) {
      console.table(form.get('items').value);

    }
  }

  createCombo() {
    return this._fb.group({
      a: true,
      b: true,
      c: true,
    });
  }

  isBird(val: nnn): val is Bird {
    return (val as Bird).fly !== undefined;
  }
  isAnimal(val: nnn): val is Animal {
    return (val as Animal).roar !== undefined;
  }

  getAnimal(): nnn {
    return new Voron();
  }

  types(): void {
    const animal = this.getAnimal();
    if (this.isBird(animal)) {
      animal.fly();
    } else {
      console.log(animal.name);
    }
  }
}

// interface IHandler {
//   setNext(h: any): void;
//   handle(r: any): void;
// }
// class BaseHandler implements IHandler {
//    private _handler: BaseHandler;
//    setNext(h: BaseHandler): void {
//      this._handler = h;
//    }
//    get handler(){
//      return this._handler
//    }
//    handle(r: any): void {
//      if (this._handler !== null) {
//        this._handler.handle(r);
//      }
//    }
// }

// class HandlerA extends BaseHandler {
//   handle(r: any): void {
//     if(r == 2){
//       console.log('1111');
//     } else {
//       this.handler.handle(r);
//     }

//   }

// }
// class HandlerB extends BaseHandler {
//   handle(r: any): void {
//     if(r == 3){
//       console.log('222');
//     } else {
//       this.handler.handle(r);
//     }

//   }

// }
// class HandlerC extends BaseHandler {
//   handle(r: any): void {
//     if(r > 4){
//       console.log('333');
//     }

//   }

// }
