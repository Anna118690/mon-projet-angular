export class AppareilService {
    appareils = [
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
    getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
}


}

  