// Place order
// cut the fruit
// Add water and ice
// start the machine
// Select the holder
//Select toppings
// Serve ice cream

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  Liquid: ["water", "ice"],
  Holder: ["cone", "cup", "stick"],
  Toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  // 1
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);

    call_production();
  }, 2000);
};

let production = () => {
  // 2
  setTimeout(() => {
    console.log("production has started");
    // 3
    setTimeout(() => {
      console.log("the fruit has been chopped");
      // 4
      setTimeout(() => {
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);
        // 5
        setTimeout(() => {
          console.log("the machine was started");
          // 6
          setTimeout(() => {
            console.log(`ice cream was placed on ${stocks.Holder[0]}`);
            // 7
            setTimeout(() => {
              console.log(`${stocks.Toppings[0]} was added as toppings`);
              //8
              setTimeout(() => {
                console.log("serve strawberry flavour Ice Cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order("0", production);
