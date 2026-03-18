// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result


// Solution:

// 1
let courseName = "JavaScript Basics";
let coursePrice = 49.99;
let mainGoals = ["Learn the fundamentals of JavaScript", "Build interactive web applications", "Understand asynchronous programming"];

// 2
alert(courseName);
alert(coursePrice);
alert(mainGoals);

// 3
let courseInfo = {
    name: courseName,
    price: coursePrice,
    goals: mainGoals
};

alert(courseInfo.name);
alert(courseInfo.price);
alert(courseInfo.goals);

// 4

alert(mainGoals[1]);

// 5

function getGoalByIndex(goals, index) {
    if (index >= 0 && index < goals.length) {
        return goals[index];
    } else {
        return "Index out of bounds";
    }
}

// 6
alert(getGoalByIndex(mainGoals, 0)); // Output: "Learn the fundamentals of JavaScript"