import { Component } from "@angular/core";
import { UserInfo } from "./user-info.model";

import { UserInfoService } from "./user-info.service";

@Component({
    selector: 'app-edit-user-info',
    templateUrl: 'edit-user-info.component.html'
})
export class EditUserInfoComponent{
    constructor(private infoService:UserInfoService){

    }

    onEditUserInfo(data:UserInfo){
        console.log(data);

        this.infoService.editUserInfo(data).subscribe(data => {
            console.log("data posted");
            console.log(data);
        });
    }
}