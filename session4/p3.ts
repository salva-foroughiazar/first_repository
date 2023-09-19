interface List {
    name: string;
    phone: string;
    gender: string;
}
const ContactList: List[] = [
    {
      name: "salva",
      phone: "09141100873",
      gender: "female",
    },
  ];
function AddToContact(name, phone, gender) {
  const Contact:List = {
    name: name,
    phone: phone,
    gender: gender,
  };

  ContactList.push(Contact);
}
AddToContact("yashar","09120000","female");
AddToContact("raha", "093677777", "female");

console.log(ContactList);


function search(Sname) {
    let SearchResult = ContactList.find(element => element.name === Sname);
    if (SearchResult){
        console.log("Done!")
    } else {
        console.log("Not here!")
    }
}
search("salva");