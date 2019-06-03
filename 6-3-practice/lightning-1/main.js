let food_obj = {
    meal: "lunch",
    sandwhich: "peanut butter and jelly",
    bread: "whole wheat",
    drink: "grape juice",
    fruit: "apple"
};

let food_array = ["lunch", "peanut butter and jelly", "whole wheat", "grape juice","apple"];

const age = 30;
const timeSpan = 25;
const futureAge = age + timeSpan;
const name = "Biff";
const generationStereotype = "millenial";
const dadJoke = "milleni-old";

console.log("Hi. My name is ${name}, and I am ${age}, years old. They say that makes me a ${generationStereotype}. In ${timeSpan} I'll be ${futureAge}! I guess that means I'll be a ${dadJoke} then. Ha ha!")

/* querySelector will only select the first element with the .blogPosts class
while querySelectorAll will select all elements with the .blogArticles class.
*/

const blogContainer = document.querySelector('.blogPosts');
const myArticles  = document.querySelectorAll('.blogArticle');

blogContainer.classList.add("currentBlog");

for (let i = 0; i < myArticles.length; i++) {
    myArticles[i].classList.add("currentBlog");
}
