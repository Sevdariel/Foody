import { Component } from '@angular/core';
import { NavBarService } from './../../shared/nav-bar/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(public navBarService: NavBarService) {

  }
}
