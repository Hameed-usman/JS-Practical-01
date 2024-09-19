// console.log("Helo..!!");


let marks = +prompt("Enter your marks::");


if (marks < 0 || marks > 100) {
    alert("Invalid input. Please enter marks between 0 and 100.");
} else if (marks >= 90) {
    alert("Your grade is A");
} else if (marks >= 80) {
    alert("Your grade is B");
} else if (marks >= 70) {
    alert("Your grade is C");
} else if (marks >= 60) {
    alert("Your grade is D");
} else {
    alert("Your grade is F");
}
