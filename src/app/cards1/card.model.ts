export class Card{
    title:string;
    imagePath:string;
    description:string;

    constructor({title, imagePath, description} :
    {title:string, imagePath:string, description:string}){
        this.title = title;
        this.imagePath = imagePath;
        this.description = description;
    }

}