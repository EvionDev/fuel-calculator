function calc() {
  let fuel = document.querySelector("#fuel-price").value;
  let route = document.querySelector("#route-length").value;
  let avg = document.querySelector("#fuel-cons").value;

  let cost = ((route * avg) / 100) * fuel;
  cost = cost.toFixed(2);

  document.querySelector(
    "#info"
  ).innerHTML = `this is how much you will pay for fuel ${cost} where the length of the route is ${route} kilometers`;
}
