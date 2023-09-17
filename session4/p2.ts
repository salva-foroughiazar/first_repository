const Bag : string = []
function AddCard(add:string):string{
    Bag.push(add);
    if(Bag==null) {
        console.log("Bag is free!");
    } else{
        return add;  
    }
}
AddCard("chocolate");
AddCard("juice");

console.log(Bag);