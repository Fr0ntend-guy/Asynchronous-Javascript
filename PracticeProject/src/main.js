// create plan for it
// we have to create a restaurant business
// firstly take the order form customer
// after order immediately start production
// serve the food to customer
// if order not available in the stock say sorry

let menu = {
  veg: ["noodles", "momos", "burger", "paneer tikka", "Dosa", "idli sambar"],
  nonVeg: ["chicken momos", "fried chicken", "chicken biryani"],
};

let Shop_is_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (Shop_is_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("sorry!, our shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(1000);
    console.log("Waiter:- Sir What would you you like to order?");

    await time(3000);
    console.log(`Customer:- I would like to eat ${menu.veg[0]}`);

    await time(1000);
    console.log("Order was placed");
    await time(0000);
    console.log("Production has been started");

    await time(3000);
    console.log(`${menu.veg[0]} is ready for serve`);

    await time(2000);
    console.log("Serve the food to customer ");

    await time(1000);
    console.log("Now we get money from customer let's buy a lambo 😍😂");
  } catch (error) {
    console.log("Customer Left :(", error);
  } finally {
    console.log("Day end! Our shop is closed");
  }
}
kitchen();
