//const pieDescriptor=Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(pieDescriptor);


// change Object value property for flag

const item={
    name:'tea',
    price:230,
    isAvailable:true,
    orderItem:function () {
        console.log('Oder under process...');
    }
}

const itemDescriptor=(Object.getOwnPropertyDescriptor(item,"name"))
console.log(itemDescriptor);

Object.defineProperty(item,"name",{
    writable:false,
    enumerable:true
})

console.log(Object.getOwnPropertyDescriptor(item,"name"))

for (const [key,value] of Object.entries(item)) {

    if (typeof value!=='function') {
        console.log(`${key} : ${value}`);
    }
}