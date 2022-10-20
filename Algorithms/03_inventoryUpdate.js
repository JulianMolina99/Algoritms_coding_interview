/*

Inventory Update
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.  The returned inventory array should be in alphabetical order by item.

*/

function updateInventory(arr1, arr2) {
      let numOfString = 0;
      arr1.map((element, index)=>{
            numOfString = isProduct(arr2, element[1]);
            if(numOfString !== -1){
                  arr1[index][0] += arr2[numOfString][0]; 
                  arr2.splice(numOfString,1);
            }
      });
      arr1 = orderArray(arr1.concat(arr2));
      return arr1;
  }


let orderArray = (array) =>{
      array.sort(compareSecondColumn);

      function compareSecondColumn(a, b) {
      if (a[1] === b[1]) {
            return 0;
      }
      else {
            return (a[1] < b[1]) ? -1 : 1;
      }
      }
      return array;
}

let isProduct = (array, product) =>{
      let index = -1;
      for(let i = 0; i < array.length; i++){
            if(product === array[i][1]){
                  index = i;
                  break;
            }
      }
      return index;
}
  // Example inventory lists
  var curInv = [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"]
  ];
  
  var newInv = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"]
  ];
