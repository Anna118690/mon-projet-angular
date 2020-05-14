import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 isAuth = false;
 appareilOne="Frigo";
 appareilTwo = "Radio";
 appareilThree="Czikiki";


 constructor() {
   setTimeout(
     () =>{
       this.isAuth = true;
     },  2000
   );
 }

 onAllumer() {
   console.log('On allume tout aaaaaaaaaaaa');
 }
}
