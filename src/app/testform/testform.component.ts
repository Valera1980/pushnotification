import { FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

interface Item {
  id: number;
  attrs: {
    id?: number,
    sections: any[]
  };
  name: string;
}
@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {

  arr: Item[] = [
    {id: 1, name: '111', attrs: { id: 111, sections: []}},
    {id: 2, name: '222', attrs: { id: 222, sections: []}},
    {id: 3, name: '333', attrs: { id: 333, sections: []}},
    {id: 4, name: '444', attrs: { id: 444, sections: []}},
    {id: 5, name: '555', attrs: { sections: [
          {id: 11, name: '1----1', attrs: {id: 511, sections: []}},
          {id: 22, name: '2----2', attrs: { id: 522, sections: []}},
          {id: 33, name: '3----3', attrs: { id: 533, sections: []}},
          {id: 44, name: '4---4', attrs: { id: 544, sections: [
                {id: 777, name: 'плорд длор долр длор длорд ол', attrs: { id: 7777, sections: []}},
              ]}},
        ]}},
  ];
  m_form: FormGroup;
  constructor(
    private _fb: FormBuilder
  ) { }
  ngOnInit() {
    this.m_form = this._fb.group({
      one: [''],
      two: [''],
      three: [''],
    });
    this.m_form.valueChanges
      .subscribe(d => {
        console.log(d);
        const rrr = this._getDoubles();
        console.log(rrr);
      });

    // console.log(this.m_form.controls);
  }

  private _getDoubles(): any {
    const d = {};
    for (const [name, control] of Object.entries(this.m_form.controls)) {
      for (const [namei, controli] of Object.entries(this.m_form.controls)) {
        if (name !== namei && control.value === controli.value && control.value.length) {
          d[name] = control;
        }
      }
    }
    return d;
  }

  isExist(name: string, t: AbstractControl, obj): boolean {
    for (const [n, c] of Object.entries(obj)) {
      if (n !== name) {
        const d: any = c;
        if (d.value == t.value) {
          return true;
        }
      }

    }
    return false;
  }

  private _findReccursion(id: number, arr: any): any {
    let ttt = null;
    for (const t of arr) {
      if (t.attrs.id == id) {
        ttt = t;
        return t;
      } else {
        ttt = this._findReccursion(id, t.attrs.sections );
      }
    }
    return  ttt;
  }

  testRecc() {
    const a = this._findReccursion(7777, this.arr);
    console.log(a);
  }

}
