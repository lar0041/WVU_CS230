import { Component } from '@angular/core';
import { CardInfo } from '../cards1/card-info.model';
import { CardInfoService } from '../cards1/card-info.service';
import { Card } from '../cards1/card.model';
// import { mock_cards } from '../cards1/mock-cards';

@Component ({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ["./carousel1.component.css"]
})
export class Carousel1Component {
  cards:Card[] = [];

  constructor(private cardService: CardInfoService) {
    this.cardService.getCardInfo().subscribe((data:CardInfo[]) => {
      for(let i = 0; i < data.length; i++){
        var card:(CardInfo | undefined)  = data[i];
        this.cards.push(new Card(card));
      }
    })
  }
}
