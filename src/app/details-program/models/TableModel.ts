export class TableModel {
    public title:string;
    public chair:string;
    public coChair:string;
    public content:TableContent[];
}

export interface TableContent{
    time:string;
    Presenter:string;
    Paper:string;
}