import food from "./food.js";

// print items in a list
function listAllItems(arr) {
  arr.forEach((item) => {
    console.log(item);
  });
}
listAllItems(food);

// filter by category
function filterByCategory(arr, category) {
  const newArr = arr.filter((item) => {
    return item.category.toLowerCase() === category.toLowerCase();
  });
  return newArr;
}
const vegetable = filterByCategory(food, "vegetable");
const fruit = filterByCategory(food, "fruit");
const protein = filterByCategory(food, "protein");
const nuts = filterByCategory(food, "nuts");
const grain = filterByCategory(food, "grain");
const dairy = filterByCategory(food, "dairy");

console.log("Vegetable", vegetable);
console.log("Fruit", fruit);
console.log("Protein", protein);
console.log("Nuts", nuts);
console.log("Grain", grain);
console.log("Dairy", dairy);

// filter by calorie
function filterByCalorie(arr, calorie) {
  const newArr = arr.filter((item) => {
    if (calorie === "above") {
      return item.calorie > 100;
    } else if (calorie === "below") {
      return item.calorie < 100;
    }
  });
  return newArr;
}
const calorieGreaterThan100 = filterByCalorie(food, "above");
const calorieLessThan100 = filterByCalorie(food, "below");
console.log("Calorie greater than100", calorieGreaterThan100);
console.log("Calorie less than 100", calorieLessThan100);

// Sort by count
function sortByCount(arr, property, order) {
  if (order == "asc") {
    return arr.sort((a, b) => a[property] - b[property]);
  } else if (order === "desc") {
    return arr.sort((a, b) => b[property] - a[property]);
  }
}
const sortedProtein = sortByCount(food, "protiens", "desc");
const sortedCab = sortByCount(food, "cab", "asc");
console.log("Sorted Protein", sortedProtein);
console.log("Sorted Cab", sortedCab);
