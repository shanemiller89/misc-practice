let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

let meaning = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;

console.log(meaning)

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
  }

console.log(`Our company's lawyer is ${employee.name}`);
console.log(`Jeff was hired on ${employee["hire_date"]}`)

employee.vacation_days = 20;

console.log(employee.vacation_days);
console.log(employee)

let eom = "employee_of_the_month";

employee[eom] = false;

console.log (employee);

let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    goWork: function (action) {
        console.log(`The painter used the ${painter.tools[0]} to ${action}!`);
    },
    newTools: function (tool) {
        painter.tools.push(tool);
        console.log(painter.tools)
    }
  };

painter.goWork("brush the house");

painter.newTools("paint");



/*
1. Add an action that the painter can perform.
2. Have her take that action by execucting the method you created.

BONUS:
Add a method that allows us to add new tools for the painter.
*/