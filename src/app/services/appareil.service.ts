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
          appareil.status = 'allume';
        }
    }
    
        switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'eteint';
        }
    }

    switchOnOne(i: number) {
      
        this.appareils[i].status = 'allume';
   
  }

    switchOffOne(i: number) {
      
    this.appareils[i].status = 'eteint';

}


}

  