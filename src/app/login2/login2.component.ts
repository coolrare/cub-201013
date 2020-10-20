import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  data: any = {
    email: '',
    pwd: '',
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

  doLogin(form: NgForm) {
    if (form.valid) {
      localStorage.setItem('token', '123123123213');
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('returnUrl'));
    }
  }

}
