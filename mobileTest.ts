import {Mobile} from './mobile';

var mNokia3210 = new Mobile("Nokia","Nokia3210","Nokia",20,"Negro",false,1,50);
var miPhone3G = new Mobile("iPhone","iPhone3G","Apple",20,"Blanco",false,2,1000);
var miSamsungGalax = new Mobile("Samsung","Samsung Galaxy 10","Samsung",20,"Rojo",true,2,500);
// mNokia3210.print();
// miPhone3G.print();
// miSamsungGalax.print();
mNokia3210.setis5G(true);
mNokia3210.setCameraNumber(4);
// mNokia3210.print();
// miPhone3G.print();
// miSamsungGalax.print();

var array:Mobile[] = new Array();

array = [
    new Mobile("Nokia","Nokia3210","Nokia",20,"Negro",false,1,50),
    new Mobile("iPhone","iPhone3G","Apple",20,"Blanco",false,2,1000),
    new Mobile("Samsung","Samsung Galaxy 10","Samsung",20,"Rojo",true,2,500)
]

for (let i = 0; i < array.length; i++) {
    array[i].print();;
    
}