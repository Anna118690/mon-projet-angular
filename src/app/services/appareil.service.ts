import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppareilService {

  appareilsSubject = new Subject<any[]>();
  
  
    private appareils = [];
      constructor(
        private httpClient: HttpClient
      ) {}

      saveAppareilsToServer(){
        this.httpClient.put('https://projektangular-2f5ca.firebaseio.com/appareils.json', this.appareils)
        .subscribe(
          () => {
            console.log('Enregistrement termine!');
          },
          (error) => {
            console.log('Erreur ! :' + error)
          }
        );
      }

      getAppareilsFromServer() {
        this.httpClient.get<any[]>('https://projektangular-2f5ca.firebaseio.com/appareils.json'
        ).subscribe(
          (response) => {
            this.appareils = response;
            this.emitAppareilSubject();
          },
          (error) => {
            console.log('Erreur ! :' + error);
  
          }
        );
      }

      

      emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());
      }
    
    switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'allume';
        }
        this.emitAppareilSubject();
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'eteint';
          this.emitAppareilSubject();
        }
    }
    
    switchOnOne(i: number) {
        this.appareils[i].status = 'allume';
        this.emitAppareilSubject();
    }
    
    switchOffOne(i: number) {
        this.appareils[i].status = 'eteint';
        this.emitAppareilSubject();
    }
    
    getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
}

    addAppareil(name:string, status: string) {
      const appareilObject = {
        id: 0, 
        name: '',
        status: ''
      };
      appareilObject.name= name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
    }


}

  