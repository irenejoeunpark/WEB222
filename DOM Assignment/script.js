var course_code = ["WEB222","WEB322","WEB122","OOP244","MAT101"];
var course_title = ["Web Programming Principles","Object Oriented Programming","Intro to programming","Object Oriented Programming","Calculus I"];

var credit =[3,2,3,3,5];
var BANK = [course_code,course_title,credit];

var courseGrade = [];
var coursePoint = [];






var k;


let button = document.querySelector("#button");



button.addEventListener("click", ()=>{
  let name = document.getElementById("name");
  let stuID = document.getElementById("stuID");
  let courseCode = document.querySelectorAll("#code");
  let courseMark = document.querySelectorAll("#mark");

  var courseGrade = [];
  var coursePoint = [];





  k=0;
  for (i=0;i<5;i++){
    var c = String(courseCode[i].value).toUpperCase();
    var v = course_code.includes(c);

    

    if( (v || courseCode[i].value =='') && courseMark[i].value >=0 && courseMark[i].value<= 100){
      k = k;
    } else{
      k += 1;
    }
  }

  if (k==0)
  {
    let totalPoint = 0;
    let totalCredit = 0;  
    let stName = name.value;
    let stID = stuID.value;

    let displayTranscript = document.getElementById("transcript");

    displayTranscript.innerHTML=`<p style ="text-decoration: underline">Student Transcript</p><p>Name: ${stName} </p><p>ID: ${stID} </p><p>Semester Code: Summer 2019</p><br>`;

    var point;


    for(i=0;i<5;i++){
     
      var course = String(courseCode[i].value).toUpperCase();
      var idx = course_code.indexOf(course);
      var title = course_title[idx];
      var grade;
      var mark = parseFloat(courseMark[i].value);

      if (course != ''){
        if (mark >= 90){
          grade = "A";
          point = parseFloat(4 * parseFloat(credit[idx]));
        
        }else if(mark <90 && mark>=85){
          grade = "B+";
          point = parseFloat(3.5 * parseFloat(credit[idx]));

        }else if(mark<85 && mark >= 80){
          grade= "B";
          point = parseFloat(3 * parseFloat(credit[idx]));

        }else if(mark<80 && mark >=75){
          grade= "C+";
          point = parseFloat(2.5 * parseFloat(credit[idx]));

        }else if(mark<75 && mark>=70){
          grade = "C";
          point = parseFloat(2 * parseFloat(credit[idx]));
        
        }else if(mark<70 &&mark>=65){
          grade = "D+";
          point = parseFloat(1.5 * parseFloat(credit[idx]));

        }else if(mark<65 &&mark>=60){
          grade = "D";
          point = parseFloat(1 * parseFloat(credit[idx]));

        }else{
          grade = "F";
          point = parseFloat(0);

        }
        totalPoint = totalPoint + point;
        console.log(totalPoint);
        totalCredit = totalCredit + parseFloat(credit[idx]);
        console.log(totalCredit);

      
        let report = document.getElementById("report");
        report.innerHTML +=`<p>Course Code: ${course}</p><p>Course Title: ${title}</p><p>Mark: ${mark}</p><p>Grade: ${grade}</p><p></p><br><br>`;
    }
      }
    let calc = parseFloat(totalPoint)/parseFloat(totalCredit);
    let gpa = parseFloat(calc).toFixed(1);

    let gpaReport = document.getElementById("gpa");
    gpaReport.innerHTML=`<p>Student GPA: ${gpa}</p>`;


  }
  else
  {
    alert("Please Enter Valid Course Code");
    
    /*
    let displayTranscript = document.getElementById("transcript");
    displayTranscript.innerHTML =`<p>Please Enter Valid Course Code<\p>`;
    */
  }


  
});








