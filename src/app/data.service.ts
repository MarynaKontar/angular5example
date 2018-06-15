import { Injectable } from '@angular/core';

// the best way to share data between components is to use rxjs BehaviorSubject
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable(
  // {
  // providedIn: 'root'
// }
)
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another life goal']);

  // BehaviorSubject extends Subject extend Observable; BehaviorSubject и Observable отличаются тем,
  // что в BehaviorSubject можно что-то передавать
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
