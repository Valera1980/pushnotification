import { FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {

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
    const d = { };
    for (const [name, control] of Object.entries(this.m_form.controls)) {
      for (const [namei, controli] of Object.entries(this.m_form.controls)) {
        if (name !== namei && control.value == controli.value && control.value.length) {
          d[name] = control;
        }
      }
    }
    return d;
  }

  isExist(name: string, t: AbstractControl, obj): boolean {
    for (const [n, c] of Object.entries(obj)) {
      if (n !== name) {
        let d: any = c;
        if (d.value == t.value) {
          return true;
        }
      }

    }
    return false;
  }

}
