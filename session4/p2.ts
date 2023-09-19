interface Shopping {
    product: string;
}
const Bag: Shopping[] = []
function AddCard(product) {
    const sabad:Shopping = {
        product: product,
    }
    Bag.push(product);
    if(Bag==null) {
        console.log("Bag is free!");
    } else{
        return product;  
    }
}
AddCard("chocolate");
AddCard("juice");

console.log(Bag);