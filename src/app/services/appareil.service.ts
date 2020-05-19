import {Subject} from 'rxjs/Subject';


export class AppareilService {
  appareilsSubject = new Subject<any[]>();
  
  
    private appareils = [
        {
          id:1,
          name: 'Frigo',
          status: 'eteint'
        },
        {
          id:2,
         name: 'Radio',
         status: 'allume'
       },
       {
        id:3,
         name: 'Tele',
         status: 'eteint'
       },
       {
        id:4,
         name: 'Lamp',
         status: 'allume'
       }
      
      ];

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

  