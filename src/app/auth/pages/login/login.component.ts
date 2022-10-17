import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent  {

  constructor(private router: Router,
              private authService: AuthService) { }


  login() {
    
    this.authService.login()
        .subscribe({
          next: user => {
            if (user.id) {
              this.router.navigate(['./heroes'])
            }
          }
        })
    

  }

}
