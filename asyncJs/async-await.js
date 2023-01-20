// need to understand:
// how to use try and catch keyword
// how to use await keyword

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  Liquid: ["water", "ice"],
  Holder: ["cone", "cup", "stick"],
  Toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function toppings_choice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which topping would you love?"));
    }, 3000);
  });
}

async function kitchen() {
  console.log("A");
  console.log("B");
  console.log("C");

  await toppings_choice();

  console.log("D");
  console.log("E");
}

// Trigger the function

kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking orders");
console.log("Start production");
