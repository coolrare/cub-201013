import { environment } from './../../environments/environment';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  form: FormGroup;

  data = {
    users: [
      {
        email: 'user1@example.com',
        pwd: '123123'
      },
      {
        email: 'user2@example.com',
        pwd: '321321'
      }
    ],
    rememberMe: true
  };

  existingBodyClassName = '';

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.existingBodyClassName = document.body.className;
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      users: this.fb.array([]),
      rememberMe: true
    });

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.data.users.length; i++) {
      this.addUser();
    }

    this.form.reset(this.data);
  }

  ngOnDestroy(): void {
    document.body.className = this.existingBodyClassName;
  }

  doLogin(form: FormGroupDirective) {
    if (form.valid) {
      localStorage.setItem('token', environment.apiBase + '123123123213');
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('returnUrl'));
    }
  }

  addUser() {
    const fa = this.form.get('users') as FormArray;
    fa.push(
      this.fb.group({
        email: this.fb.control('', {
          // updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.email,
            Validators.minLength(3),
            Validators.maxLength(50)
          ]
        }),
        pwd: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      }));
  }

}
