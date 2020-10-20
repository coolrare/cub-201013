import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  data: any = {
    email: 'doggy.huang@gmail.com',
    pwd: '123123',
    rememberMe: true
  };

  existingBodyClassName = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.existingBodyClassName = document.body.className;
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = this.existingBodyClassName;
  }

  doLogin() {
    localStorage.setItem('token', '123123123213');
    this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('returnUrl'));
  }

}
