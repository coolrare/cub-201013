import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  form: FormGroup;

  data: any = {
    email: '',
    pwd: '',
    rememberMe: true
  };

  existingBodyClassName = '';

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.existingBodyClassName = document.body.className;
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      email: '123',
      pwd: '444',
      rememberMe: true
    });
  }

  ngOnDestroy(): void {
    document.body.className = this.existingBodyClassName;
  }

  doLogin(form: FormGroupDirective) {
    if (form.valid) {
      localStorage.setItem('token', '123123123213');
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('returnUrl'));
    }
  }

}
