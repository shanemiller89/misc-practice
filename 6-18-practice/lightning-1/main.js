let array = ["Shane", "Juinor Developer", "test@gmail.com"];

function contactFactory(contactData) {
    let contact = {
      name: null,
      title: null,
      email: null
    };
    for (let i=0; i < contactData.length; i++) {
        if (i === 0) {
            contact.name = contactData[0];
        } 
        else if ( i === 1) {
            contact.title = contactData[1];
        } 
        else if ( i === 2) {
            contact.email = contactData[2];
        }
  }
  return contact
}

function createContact(name, title, email) {
    let newContact = [name, title, email]
    console.table(contactFactory(newContact))
  }
 
createContact("Shane", "Developer", "test@gmail.com")