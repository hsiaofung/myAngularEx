import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user: User;
  public message: string;

  constructor(private userService: UserService, private router: Router) {
    this.user = { name: '', password: '' };
  }

  ngOnInit(): void {}
  register() {
    this.userService.register(this.user).subscribe(
      (resp) => {
        console.log('Success register');
        this.message = resp.msg;
        this.router.navigate(['login']);
      },
      (err) => {
        console.log('failed register');
        this.message = err.error.msg;
      }
    );
  }
}
