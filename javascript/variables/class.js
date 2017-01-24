console.log("Hello Variables");

var school={
          "name":"Nueve",
          "count":10
        };

console.log(school.name);
console.log(school["name"]);

var key="name";
console.log(school[key]);

var myFruits=["orange","apple","mango","banana"];
//myFruits.splice(2,0,”grape”,”strawberry”);
//myFruits.splice(2,1,”grape”,”strawberry”);

myFruits.forEach(function(fruit) {
	console.log(fruit);
});

var names=["Varma","Bala",22];

var isAllStrings=names.every(function(name){
  return typeof(name) === "string";
})

console.log(isAllStrings);
