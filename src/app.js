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

const generate_random_excuse = (who, action, what, when) => {
  var random_who = who[Math.floor(Math.random() * (who.length - 1))];
  var random_action = action[Math.floor(Math.random() * (action.length - 1))];
  var random_what = what[Math.floor(Math.random() * (what.length - 1))];
  var random_when = when[Math.floor(Math.random() * (when.length - 1))];

  return (
    random_who + " " + random_action + " " + random_what + " " + random_when
  );
};

console.log(generate_random_excuse(who, action, what, when));
