// your notes here!
console.log("hello objects!");

var person={ name: "Varma", age:22};

var persons=[
  { name: "Varma", age:22},
  { name: "Satish", age:54}
]

console.log(person.name); //Correct
console.log(person["name"]); //Correct

console.log(person[name]); //Incorrect

var nameKey="name";
console.log(person[nameKey]); //Correct

var lines = {
  1: "line 1",
  2: "line 2"
}

//console.log(lines.2) //Incorrect
console.log(lines["2"]) //Correct

//Mutate object using dot and bracket notations
person["qualification"]="BTech";
person.college="Gayatri";
console.log(person);

var keys=Object.keys(person);
console.log(keys);
var values=keys.map(function(key) { return person[key]; })
console.log(values);

//Nested objects
var tweet = {
    "text": " this is an awesome tweet!",
    "created_at": "Mon Oct 20 14:06:17 +0000 2014",
    "source": "<a href='http://twitter.com' rel='nofollo'>Twitter Web Client</a>",
    "user": {
        "name": "Semmy Purewal",
        "screen_name": "semmypurewal",
        "followers_count": 483
    },
    "dayOfTweet": function(){
      return getDay(this.created_at);
    }
};

console.log(tweet.user.name);

//Checking object type
typeof(tweet);
