let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

// LA TERCERA VERSION

let array = ["who", "action", "what", "when"];
let excuse = [];

const RandmIndex = arr => Math.floor(Math.random() * (arr.length - 1));
const Item = (arr, i) => arr[i];
const JoinArrElements = (arr, delimiter) => arr.join(delimiter);

const randomExcuse = array_of_arrays => {
  for (let value of array) {
    let item = Item(value, RandomIndex(value));
    excuse.push(item);
  }

  return JoinArrElements(excuse, " ");
};

console.log("excuse");

// LA SEGUNDA VERSION

// let array = ["who", "action", "what", "when"];
// let excuse = [];

// const random_excuse = (array) =>
// {
//     for (let element of array){
//       excuse.push(value[Math.floor(Math.random() * (value.length - 1))]);

//       return excuse.join (" ");
//     }

// }

// console.log (random_excuse)

// LA PRIMER VERSION

// const generate_random_excuse = (who, action, what, when) => {
//   var random_who = who[Math.floor(Math.random() * (who.length - 1))];
//   var random_action = action[Math.floor(Math.random() * (action.length - 1))];
//   var random_what = what[Math.floor(Math.random() * (what.length - 1))];
//   var random_when = when[Math.floor(Math.random() * (when.length - 1))];

//   var random = [Math.floor(Math.random() * (who.length - 1))];

//   return (
//     random_who + " " + random_action + " " + random_what + " " + random_when
//   );
// };

// console.log(generate_random_excuse(who, action, what, when));
