import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  public registerMode = new BehaviorSubject<boolean>(false);

  public registerToggle() {
    this.registerMode.next(true);
  }

  public cancelRegister() {
    this.registerMode.next(false);
  }
}
