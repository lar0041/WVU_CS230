import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
 import { CardInfo } from "./card-info.model";

@Injectable({providedIn: 'root'})
export class CardInfoService{
    url: string = "https://applemusic-app-default-rtdb.firebaseio.com/Cards.json";
    
    constructor(private http:HttpClient){
    }

    getCardInfo() {
         return this.http.get<CardInfo[]>(this.url);
    }
}