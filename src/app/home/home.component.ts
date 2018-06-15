import { Component, OnInit } from '@angular/core';

// import to add animation to home component
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

// to share data between components (define 'goals' in data.service.ts
// and than use it in home (home.component.ts) and about (about.component.ts) components)
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // we can define css right here, but it's bad style
  // styles: ['p {font-weight:bold} div {color:red}']
  animations: [

    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('0.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item'; // если не написать string, то на кнопке будет "unrecognized"
  goalText = 'My first life goal';
  goals = [];

  // create DataService throught Dependency Injection
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
}
