import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 isAuth = false;
 lastUpdate = new Promise((resolve, reject) => {
   const date = new Date();
   setTimeout(
     () => {
       resolve(date);

     }, 2000
   );
 });

 appareils = [
   {
     name: 'Frigo',
     status: 'eteint'
   },
   {
    name: 'Radio',
    status: 'allume'
  },
  {
    name: 'Tele',
    status: 'eteint'
  },
  {
    name: 'Lamp',
    status: 'allume'
  }

 ];





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
