import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable } from "rxjs";
import { Card } from "../cards1/card.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    //items: Observable<Object | null>;
    items: Observable<Card []>;
    constructor(private db:AngularFireDatabase){
        console.log("Setting up Firebase communication");
        this.items = this.db.list<Card>("Cards").valueChanges();
    }

    public showData() {
        this.items.subscribe((data: Card[]) => {
            console.log("Data recieved");
            for (let item of data){
                console.log(item);
            }
        })
    }

}