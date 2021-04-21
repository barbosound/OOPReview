import {Mobile} from './mobile';

var mNokia3210 = new Mobile("Nokia","Nokia3210","Nokia",20,"Negro",false,1,50);
var miPhone3G = new Mobile("iPhone","iPhone3G","Apple",20,"Blanco",false,2,1000);
var miSamsungGalax = new Mobile("Samsung","Samsung Galaxy 10","Samsung",20,"Rojo",true,2,500);
console.log(mNokia3210);
console.log(miPhone3G);
console.log(miSamsungGalax);
mNokia3210.is5G = true;
mNokia3210.cameraNumber = 4;
console.log(mNokia3210);
console.log(miPhone3G);
console.log(miSamsungGalax);