export class AppareilService {
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

      switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'allumé';
        }
    }
    
        switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'éteint';
        }
    }
  }


  

  