import {Component, Input, ChangeDetectionStrategy} from "@angular/core";


class Glyphs {
    constructor(public icon: string, public code: string, public index:number) {
        
    }
}

@Component({
    selector: "my-app",
    templateUrl:`app.component.html`,
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public glyphs:Array<Glyphs>;
    private counter:number;
    constructor() {
        this.counter = 0;
        this.glyphs=[]
        for (var charCode = 0xe903; charCode <= 0xeaea; charCode++) {
            this.glyphs.push(new Glyphs(String.fromCharCode(charCode), charCode.toString(16),this.counter));
            this.counter++; 
            console.log("array size "+this.glyphs.length);
        }
    }
    
  
     public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }
}
