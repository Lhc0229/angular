import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { INCREMENT, DECREMENT, RESET } from '../state/counter';
import {Observable} from "rxjs";

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-ponser',
  templateUrl: './ponser.component.html',
  styleUrls: ['./ponser.component.less']
})
export class PonserComponent implements OnInit {
  counter: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
  }

  ngOnInit(): void {
  }
  increment(){
    this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  reset(){
    this.store.dispatch({ type: RESET });
  }
}
