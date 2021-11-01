import { Component, Input } from '@angular/core';
import { CardInfo } from './card-info.model';
import { CardInfoService } from './card-info.service';

@Component ({
  selector: 'app-cards1',
  templateUrl: './cards1.component.html',
  styleUrls: ['./cards1.component.css']
})
export class Cards1Component{
  @Input()
  title! :string;
  @Input()
  imagePath! :string;
  @Input()
  description! :string;
}