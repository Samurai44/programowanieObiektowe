

function Phone(brand, price, color, system) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.system = system;
}
Phone.prototype.printInfo = function(){
  console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".")
}
Phone.prototype.sysType = function(){
  console.log(this.brand + " uses " + this.system + "as the operating system .")
}
var Iphone6S = new Phone("apple", 300, "black", "IOS");
var GalaxyS6 = new Phone("samsung", 400, "silver", "android");
var One = new Phone("onePlus", 350, "white", "android");

Iphone6S.printInfo();
GalaxyS6.printInfo();
One.printInfo();
Iphone6S.sysType();
GalaxyS6.sysType();
One.sysType();


function Button(text){
	this.text = text || 'Hello';
}
Button.prototype = {
	create: function(){
		var self = this;
		this.element = document.createElement('button');
		this.element.innerText = this.text;
		this.element.addEventListener('click', function(){
			alert(self.text);
		});
		document.body.appendChild(this.element);
	}
}

var btn1 = new Button('Hello');
btn1.create();
