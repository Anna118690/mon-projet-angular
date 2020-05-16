import { AppareilService } from './../services/appareil.service';
import { Component, OnInit , Input} from '@angular/core';


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
 
  //appareilStatus: string = 'etient';
  @Input() appareilStatus: string;
  @Input() index: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allume') {
      return 'green';
    }
    else if (this.appareilStatus === 'eteint') {
      return 'red';
    }
  }

  onSwitch() {
    if(this.appareilStatus === 'allume') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'eteint') {
      this.appareilService.switchOnOne(this.index);
    }
}

}
