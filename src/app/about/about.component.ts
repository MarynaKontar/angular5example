import { Component, OnInit } from '@angular/core';

// надо для того, чтобы писать about/id и потом можно было бы, например, обратиться к АРI (и базе данных)
import { ActivatedRoute} from '@angular/router';

// need for component based router navigation (c одной страницы (component) перейти на другую)
import { Router } from '@angular/router';


// to share data between components (define 'goals' in data.service.ts
// and than use it in home (home.component.ts) and about (about.component.ts) components)
import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;

  // create DataService throught Dependency Injection
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome() {
    // correspond to the path: '' in app-routing.module.ts (const routes)  => HomeComponent (отошлет на home.component.html)
    this.router.navigate(['']);
  }

}
