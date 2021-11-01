import { Component } from "@angular/core";
import { CardInfo } from "../cards1/card-info.model";
import { CardInfoService } from "../cards1/card-info.service";
import { DatabaseService } from "../listen-now-body/database.service";

let counter: number = -1;

@Component({
    selector: 'app-edit-card-info',
    templateUrl: 'edit-card-info.component.html'
})

export class EditCardInfoComponent{
    constructor(private cardService:CardInfoService, private dbService:DatabaseService){
        dbService.showData();
    }

    onEditCardInfo(data:CardInfo){
        console.log("input is here");
        console.log(data);

        counter = counter + 1;
        if(counter == 4){
            counter = 0;
        }

        console.log(counter);

        this.cardService.editCardInfo(data, counter).subscribe(data => {
            console.log("data posted");
            console.log(data);
        });
    }
}