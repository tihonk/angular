import { Component } from '@angular/core';
import {UserService} from './user.service';
import {TestService} from './service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent {
  users = [];
  title = 'SkyWalker';
  constructor(private usersService: UserService,
              private testService: TestService) {
    // this.users = this.usersService.users;
    this.testService.getUser(1).subscribe( () => console.log('success'));
    this.usersService.getUsers().subscribe(users => {this.users = users; });
  }
}
