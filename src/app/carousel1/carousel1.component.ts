import { Component } from '@angular/core';
import { CardInfo } from '../cards1/card-info.model';
import { CardInfoService } from '../cards1/card-info.service';
import { Card } from '../cards1/card.model';

@Component ({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ["./carousel1.component.css"]
})
export class Carousel1Component {
  cards:Card[] = [];

  constructor(private cardService: CardInfoService) {
    this.cardService.getCardInfo().subscribe((data:CardInfo[]) => {
      console.log(data);
      for(let i = 0; i < data.length; i++){
        var card:(CardInfo | undefined)  = data[i];
        this.cards.push(new Card(card));
      }
    })
  }

  ngOnInit(): void{
    console.log('showing card data');
    this.showCardInfo();
  }

  showCardInfo(){
    this.cardService.getCardInfo().subscribe((data: CardInfo[]) => {
      console.log(data);
      this.cards = data;
    })
  }
}