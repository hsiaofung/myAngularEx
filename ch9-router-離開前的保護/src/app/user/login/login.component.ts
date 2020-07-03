import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: User;
  public message: string;

  constructor(private userService: UserService, private router: Router) {
    this.user = { name: '', password: '' };
  }

  ngOnInit(): void {}
  login() {
    this.userService.login(this.user).subscribe(
      (resp) => {
        console.log('Success register');
        this.message = resp.msg;
        this.router.navigate(['stocks', 'list']);
      },
      (err) => {
        console.log('failed register');
        this.message = err.error.msg;
      }
    );
  }
}
