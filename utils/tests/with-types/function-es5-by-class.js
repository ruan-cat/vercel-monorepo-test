// canNew: new (a: number, ...args: any[]) => CanNew;
// / <reference path="./types/CanNewTypeByClass.ts" />

// import { type  CanNewTypeByClass} from "./types/CanNewTypeByClass.d.ts";

// this: CanNewTypeByClass,
function CanNewTypeByClass() {
	this.init.apply(this, arguments);
}

// this: CanNewTypeByClass,
CanNewTypeByClass.prototype.init = function () {
	this.a = 1;
	this.showValue();
};

CanNewTypeByClass.prototype.showValue = function () {
	this.a++;
	console.log(` a =  `, this.a);
};