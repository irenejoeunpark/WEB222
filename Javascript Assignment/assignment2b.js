
/*******************************************************************************

*

WEB222 – Assignment 2

* I declare that this assignment is my own work in accordance with Seneca

* Academic Policy.

No part of this assignment has been copied manually or

* electronically from any other source (including web sites) or distributed to

* other students.

*

* Name: Jo Eun Park Student ID: 147 824 189 Date: June 5, 2019

*

******************************************************************************/



// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1


var last = courses.pop();

console.log("*** Task 1 ***\n\n");
console.log("Course ",last.code, " was deleted from the array (courses)");
console.log("Adding new course objects into the array (courses)\n\n");
console.log("Course objects in the array (course):\n");



courses.push({ code: 'IBC233', name: 'iSERIES Business Computing', hours: 4, url: 'https://scs.senecac.on.ca/~ibc233/' });
courses.push({ code: 'OOP244', name: 'Introduction to Object Oriented Programming', hours: 4, url: 'https://scs.senecac.on.ca/~oop244/' });
courses.push({ code: 'WEB222', name: 'Internet I - Internet Fundamentals', hours: 4, url: 'https://scs.senecac.on.ca/~web222/' });
courses.push({ code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'https://scs.senecac.on.ca/~dbs201/'});






for (var i=0; i<courses.length; i++){
    console.log('"',courses[i].code,", ",courses[i].name,", ",courses[i].hours, " hours/week, website: ", courses[i].url, '"' );
    
};

// task 2


var st0 = Object.create(student);
st0.name = "John Smith";
st0.dob =  new Date(1999,9,10);
st0.sid = "010456101";
st0.program = "CPA";
st0.gpa = 4;


var st1 = Object.create(student);
st1.name = "Jim Carrey";
st1.dob =  new Date(1992,1,17);
st1.sid =  "012345678";
st1.program = "CPD";
st1.gpa = 3.5


var st2 = Object.create(student);
st2.name = "Justin Bieber";
st2.dob = new Date(1994,3,1);
st2.sid = "0987654321";
st2.program = "CAN";
st2.gpa = 3;


var st3 = Object.create(student);
st3.name = "Justin Trudeau";
st3.dob = new Date(1992,1,12);
st3.sid = "123456789";
st3.program = "CAN";
st3.gpa = 4;


var students = [];

students.push(st0, st1, st2, st3);


console.log("Student objects in the array (students):\n\n");

function showArray(students) {
   var i = 0;
   message = ""
   students.forEach(function(element){
     console.log(i,": Student info for",element.name,": born on",element.dob.getMonth(),"/",element.dob.getDate(),"/",element.dob.getFullYear(),", student id",element.sid,", progrem",element.program,", current GPA ",element.gpa);
     i ++;
   });
   
    

} 


showArray(students);


