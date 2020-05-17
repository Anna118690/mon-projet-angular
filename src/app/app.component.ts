import { Component , OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils'])
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

 








 //pour que AppComponent puisse recupere les informatopns stockess ands AppareilSercice nous devons implementer la methode ngOnInit()
 //umieszczamy po konstruktorze ale przed innymi metodami komponentu
 //teraz mozemy odzyskac informacje z AppareilService w metodzie ngOnInit()

 

 

}
