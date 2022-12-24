/*      A promise is made 
               |
            Pending
    resolve          reject
       |                |
    .then             
        |
    .then             catch
            finally
*/
// we need to understand four more things first :
// Relationship between time and work
// promise chaining = .then
// error handling = .catch
// the .finally handler

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  Liquid: ["water", "ice"],
  Holder: ["cone", "cup", "stick"],
  Toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => { 
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0000, () => {
      console.log("production has started");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("the fruits was chopped");
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("the machine has been started");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`ice cream was placed on ${stocks.Holder[0]}`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.Toppings[0]} was added as toppings`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("serve strawberry flavour ice cream");
    });
  })

  .catch(() => {
    console.log("Customer Left");
  })
  .finally(() => {
    console.log("day ended, our shop is closed");
  });
