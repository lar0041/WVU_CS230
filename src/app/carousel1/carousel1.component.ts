import { Component } from '@angular/core';
import { Card } from '../cards1/card.model';
import { mock_cards } from '../cards1/mock-cards';

@Component ({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ["./carousel1.component.css"]
  
})
export class Carousel1Component {
  cards:Card[] = [];

  constructor() {
    for(var card of mock_cards){
      this.cards.push(new Card(card));
    }
  }
}
