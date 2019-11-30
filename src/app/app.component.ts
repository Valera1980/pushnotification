import { InjTestService } from './inj-test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'immutTest';
  constructor(private _injTest: InjTestService) {
  }

  ngOnInit(): void {
    this._injTest.arr = [1, 2, 3, 4, 5];
  }
}
