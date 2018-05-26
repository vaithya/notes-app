//var square = (a) => {
//  var res = a * a;
//  return res;
//};

var square = (x) => x * x;
console.log(square(9));

//One argument => Paranthesis is not needed.for arrow function.
// var square = x => x * x;
//Arrow functions lets you simplify your code.

var user = {
  name: 'Vaithya',
  sayHi: () => {
    //console.log(`Hi.`);
    console.log(arguments); //Not bound to this object. So returns the global arguments for the wrapper fucntion.
    console.log(`Hi. I'm ${this.name}`);//Will not work.
  },
  sayHiAlt () {
    console.log(arguments); //Bound to this function.
    console.log(`Hi. I'm ${this.name}`); //"this" bnding.
  }
};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);
//Arrow functions do not bind a this keyword.
