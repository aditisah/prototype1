import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../auth/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
private userSub: Subscription;
isAuthenticated = false;
  constructor(private loginServ: LoginService) { }

  ngOnInit(): void {
    this.userSub = this.loginServ.user.subscribe(user =>
      {
    this.isAuthenticated = !user ? false : true ;
      });
  }
  onLogout(){
    this.loginServ.logout();
  }
 ngOnDestroy(){
  this.userSub.unsubscribe();
 }
}
