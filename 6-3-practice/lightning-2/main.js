const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};

console.log("Wardrobe")
console.log("Height: ", wardrobe.height);
console.log("Manufacturer: ", wardrobe.manufacturer);
console.log("Contents: ", wardrobe.contents);
console.log("Depth: ", wardrobe.depth);
console.log("Width: ", wardrobe.width);

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log("")

console.log("Empire State Building")
console.log("Empire stories: ", empireStateBuilding["stories"]);
console.log("Empire height: ", empireStateBuilding["height"]);
console.log("Empire square footage: ", empireStateBuilding["squareFeet"]);
console.log("Empire EW length: ", empireStateBuilding["eastWestLength"]);
console.log("Empire NS length: ", empireStateBuilding["northSouthLength"] );

let addressEmpire = "address";
let constructionEmpire = "constructionDate";
let costEmpire = "cost";
let ownerEmpire = "owner";
let architectEmpire = "architect";

console.log("Empire address: ", empireStateBuilding[addressEmpire]);
console.log("Empire Construction Date: ", empireStateBuilding[constructionEmpire]);
console.log("Empire cost: ", empireStateBuilding[costEmpire]);
console.log("Empire owner: ", empireStateBuilding[ownerEmpire]);
console.log("Empire architect: ", empireStateBuilding[architectEmpire]);

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log("")

console.log(nashvilleSoftwareSchool.instructors.fullTime);
console.log(nashvilleSoftwareSchool.instructors.partTime);
console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0]);