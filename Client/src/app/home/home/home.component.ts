import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public registerMode = new BehaviorSubject<boolean>(false);

  public registerToggle() {
    this.registerMode.next(true);
  }

  public cancelRegister() {
    this.registerMode.next(false);
  }
}
