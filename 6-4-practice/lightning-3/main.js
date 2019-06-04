let family = [
    {
      name: "Fred Jones",
      age: 49,
      title: "parent"
    },
    {
      name: "Pat Jones",
      age: 50,
      title: "parent"
    },
    {
      name: "Bubba Jones",
      age: 20,
      title: "adult child"
    },
    {
      name: "Kelly Jones",
      age: 12,
      title: "dependent child"
    },
    {
      name: "Bartleby",
      age: 3,
      title: "pet"
    }
  ]

familySection = document.querySelector("#family");

function insertFamily (family) {
   return `
   <h3>${family.name}</h3>
   <p>Age: ${family.age}</p>
   <p>${family.name} is the ${family.title} in the family.</p>
   `
}

for (let i = 0; i < family.length; i ++) {
    familySection.innerHTML += insertFamily(family[i])
}
 