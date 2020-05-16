import { Component , OnInit} from '@angular/core';
import { AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuth = false;
  

  appareils: any[]; //un array de type any




 constructor(private appareilService: AppareilService) {
   setTimeout(
     () =>{
       this.isAuth = true;
     },  2000
   );
 }

 //pour que AppComponent puisse recupere les informatopns stockess ands AppareilSercice nous devons implementer la methode ngOnInit()
 //umieszczamy po konstruktorze ale przed innymi metodami komponentu
 //teraz mozemy odzyskac informacje z AppareilService w metodzie ngOnInit()

 ngOnInit() {
  this.appareils = this.appareilService.appareils;
}

 onAllumer() {
  if(confirm('Etes-vous sûr de vouloir allumer tous vos appareils ?')) {
    this.appareilService.switchOnAll();
  } else {
    return null;
  }
  
 }

 onEteindre() {
  if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
    this.appareilService.switchOffAll();
  } else {
    return null;
  }
}

}
