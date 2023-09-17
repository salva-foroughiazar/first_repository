const contact = {
    name:"",
    phone_number:"",
};
const ContactList = [];
function AddToContact(name:string , phone_number:number) {
    const list = Object.create(contact);
    list.name=name;
    list.phone_number=phone_number;

    ContactList.push(list);
}
AddToContact("salva" , 123);
AddToContact("mojtaba" , 456);
console.log(ContactList);

function search(Sname:string) {
    let SearchResult = ContactList.find(element => element.name === Sname);
    if (SearchResult){
        console.log("Done!")
    } else {
        console.log("Not here!")
    }
}
search("salva");