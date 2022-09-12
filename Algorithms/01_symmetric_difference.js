/*
Find the Symmetric Difference
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. 
For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences 
among three elements (A △ B △ C), you must complete one operation at a time. 
Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

*/


function sym(...args) {
      let result = [];
      let fistArray = [];
      let secondArray = [];
      if(args[0] >= args[1]){
            fistArray = args[0];
            secondArray = args[1];
      } else{
            fistArray = args[1];
            secondArray = args[0];
      }
      for(let i = 0; i < args.length - 1; i++){
            result = symDifference(fistArray,secondArray);
            console.log(result);
            fistArray = result;
            secondArray = args[i+2];

      }
      console.log(result);
      return result;
}

function symDifference(array1,array2){

      array1 = filterArray(array1);
      array2 = filterArray(array2);

      let result = [];
      let index = 0;
      if(array1.length >= array2.length){
            array1.map((element) =>{
                  if(array2.indexOf(element) !== -1){
                        index = array2.indexOf(element);
                        array2.splice(index,1);
                  } else{
                        result.push(element);
                  }
            });
            result = result.concat(array2);
      } else{
            array2.map((element) =>{
                  if(array1.indexOf(element) !== -1){
                        index = array1.indexOf(element);
                        array1.splice(index,1);
                  } else{
                        result.push(element);
                  }
            });
            result = result.concat(array1);
      }
      result.sort((a,b)=>{
            return a - b;
      });

      result = filterArray(result);

      return result;
}

function filterArray(array){
      array = array.filter((element,index) =>{
            return array.indexOf(element) === index;
      });
      return array;
}
