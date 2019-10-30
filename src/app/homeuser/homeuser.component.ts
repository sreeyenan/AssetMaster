import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.scss']
})
export class HomeuserComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

    userDisplayName='';
    ngOnInit() {
      this.userDisplayName=sessionStorage.getItem('login');
    }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}