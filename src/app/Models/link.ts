export class Link {
    public title : string;
    public url? : string;
    public children? : Link[];
    public isVisible? : boolean;

    constructor(title : string = "Lien", url? : string, children? : Link[], isVisible? : boolean){
        this.title = title;
        this.url = url;
        this.isVisible = isVisible;
        if (children === undefined)
            children = [];
        this.children = children;
    }
}
