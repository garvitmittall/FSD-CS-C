async function orderfood(name,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Order for" + name + "has been prepared");
        },time);
    });
}
async function restaurant(){
    console.log("Order Food");
    let pizza = await orderfood ("Pizza",2000);
    console.log(pizza);
    let burger = await orderfood ("Burger",3000);
    console.log(burger);
    let noodles = await orderfood ("Noodles",4000);
    console.log(noodles);
    console.log("All order prepared0");
}
restaurant();