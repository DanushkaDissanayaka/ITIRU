export class NewsCardModel {
    private date:string;
    private title:string;
    private message:string;

    
    public get Date() : string {
        return this.date;
    }
    
    public set Date(v : string) {
        this.date = v;
    }

    
    public get Title() : string {
        return this.title
    }
    
    public set Title(v : string) {
        this.title = v;
    }

    
    public set Message(v : string) {
        this.message = v;
    }

    
    public get Message() : string {
        return this.message;
    }
}