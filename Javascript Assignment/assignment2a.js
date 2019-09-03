
/*****************************

Assignment #2 
Jo Eun Park
147 824 189

WEB222 SBB

*****************************/

/*******************************************************************************

*

WEB222 – Assignment 2

* I declare that this assignment is my own work in accordance with Seneca

* Academic Policy.

No part of this assignment has been copied manually or

* electronically from any other source (including web sites) or distributed to

* other students.

*

* Name: Jo Eun Park  Student ID: 147 824 189 Date: June 5, 2019

*

******************************************************************************/


/*************
Data
************/


var people = [{"id":1,"first_name":"Lester","last_name":"Jandourek","gender":"Male","birthDate":"1999-02-23T13:56:54Z","email":"ljandourek0@ning.com","web":"http://yale.edu","creditScore":374,"rating":6.51},
{"id":2,"first_name":"Genni","last_name":"Tevlin","gender":"Female","birthDate":"1999-02-08T04:51:54Z","email":"gtevlin1@ca.gov","web":"https://oaic.gov.au","creditScore":656,"rating":12.73},
{"id":3,"first_name":"Carmon","last_name":"Hance","gender":"Female","birthDate":"1994-04-27T12:04:00Z","email":"chance2@imageshack.us","web":"https://tripadvisor.com","creditScore":365,"rating":19.94},
{"id":4,"first_name":"Gonzales","last_name":"Harmeston","gender":"Male","birthDate":"1995-05-24T19:28:51Z","email":"gharmeston3@disqus.com","web":"https://vk.com","creditScore":573,"rating":3.71},
{"id":5,"first_name":"Doria","last_name":"Cockrell","gender":"Female","birthDate":"1992-05-26T20:26:28Z","email":"dcockrell4@arstechnica.com","web":"https://wikimedia.org","creditScore":723,"rating":14.03},
{"id":6,"first_name":"Rhodia","last_name":"Corpe","gender":"Female","birthDate":"1993-09-21T17:58:50Z","email":"rcorpe5@lycos.com","web":"https://springer.com","creditScore":610,"rating":3.84},
{"id":7,"first_name":"Armando","last_name":"McGreal","gender":"Male","birthDate":"1992-02-07T08:25:13Z","email":"amcgreal6@domainmarket.com","web":"http://taobao.com","creditScore":784,"rating":18.68},
{"id":8,"first_name":"Godfree","last_name":"Schwaiger","gender":"Male","birthDate":"1993-07-29T16:40:15Z","email":"gschwaiger7@mit.edu","web":"https://bizjournals.com","creditScore":236,"rating":2.36},
{"id":9,"first_name":"Wilton","last_name":"Yardy","gender":"Male","birthDate":"1998-11-11T09:03:19Z","email":"wyardy8@squidoo.com","web":"https://ucsd.edu","creditScore":391,"rating":17.78},
{"id":10,"first_name":"Wilmer","last_name":"Foyle","gender":"Male","birthDate":"1993-01-25T22:19:48Z","email":"wfoyle9@tinyurl.com","web":"http://ted.com","creditScore":601,"rating":17.59}];


/**********
Task 1
**********/

function capNotFirstLetter(name){
  var len = name.length;
  var first = name.charAt(0).toLowerCase();
  var rest = name.substr(1,len-1).toUpperCase();
  
  var caps = first.concat(rest);
  
  
  return caps;

  
  
  
}





/**********
Task 2
**********/

var data = people.map(p => p);

for (var i = 0; i < data.length; i++ ){
  
  data[i].first_name = capNotFirstLetter(data[i].first_name);
}


for (var i = 0; i < data.length ; i ++){
  
console.log(data[i].first_name);
}



/*********
Task 3
*********/


var newCreditScore = data.filter(item => {
    return item.creditScore >400
  });

console.log(newCreditScore);






/********
Task 4
********/

 data.sort(function(a, b){
    var dateA=new Date(a.Bdate), dateB=new Date(b.Bdate)
    return dateA-dateB //sort by date ascending
});
console.log(data); 

