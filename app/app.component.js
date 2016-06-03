"use strict";
var core_1 = require("@angular/core");
var Glyphs = (function () {
    function Glyphs(icon, code, index) {
        this.icon = icon;
        this.code = code;
        this.index = index;
    }
    return Glyphs;
}());
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 0;
        this.glyphs = [];
        for (var charCode = 0xe903; charCode <= 0xeaea; charCode++) {
            this.glyphs.push(new Glyphs(String.fromCharCode(charCode), charCode.toString(16), this.counter));
            this.counter++;
            console.log("array size " + this.glyphs.length);
        }
    }
    AppComponent.prototype.onItemTap = function (args) {
        console.log("------------------------ ItemTapped: " + args.index);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map