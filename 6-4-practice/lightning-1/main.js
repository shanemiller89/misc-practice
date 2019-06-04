let list = [
    {
      name: "Bob",
      department: "sales",
      title: "sales manager"
    },
    {
      name: "Tina",
      department: "finance",
      title: "director of finance"
    },
    {
      name: "Randy",
      department: "IT",
      title: "hardware guy"
    },
    {
      name: "Glenda",
      department: "C-suite",
      title: "CEO"
    }
  ];


let counter;
let x;


for (let i = 0; i < list.length; i++) {
    console.log(`${list[i].name}'s job title is ${list[i].title}`);
};

list.forEach( function(list){
    console.log(`${list.name}'s job title is ${list.title}`);
});


function dogLover(breed) {
    if (breed === undefined) {
        x = "I like cats";
    } else {
        x = `My favorite dog breed is ${breed}`;
    }
    console.log(`When it comes to pets, ${x}`)
};

dogLover();

dogLover("Husky");