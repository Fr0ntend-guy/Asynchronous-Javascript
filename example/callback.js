function one(call_two) {
  console.log("step one complete please call the step 2 two");
  call_two();
}
function two() {
  console.log("step two");
}
one(two);
