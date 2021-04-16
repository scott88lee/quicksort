function quickSort(arr, start, end) {
  
  // Base case or terminating case
  if (start >= end) {
      return;
  }
  
  // Returns pivotIndex
  let index = partition(arr, start, end);
  
  // Recursively apply the same logic to the left and right subarrays
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
  
}

function partition(arr, start, end){
  // Taking the last element as the pivot
  let pivotIndex = start; 
  const pivotValue = arr[end];
  for (let i = start; i < end; i++) {
      if (arr[i] > pivotValue) {
      // Swapping elements
        swap(arr, i, pivotIndex)
      // Moving to next element
      pivotIndex++;
      }
  }
  
  // Putting the pivot value in the middle
  swap(arr, pivotIndex, end)

  return pivotIndex;
};

function swap(array, pos1, pos2){
  let temp = array[pos1];
  array[pos1] = array[pos2]
  array[pos2] = temp;
  console.log(array)
}


/******************* Testing Quick sort algorithm *********************/

// Returns a random integer between min (inclusive) and max (inclusive). Using Math.round() will give a non-uniform distribution, which we dont want in this case.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
// By adding 1, I am making the maximum inclusive ( the minimum is inclusive anyway). Because, the Math.random() function returns a floating-point, pseudo-random number in the range from 0 inclusive up to but not including 1
}

var array = [];

for (var i = 0; i < 10; i++) { //initialize a random integer unsorted array
  array.push(getRandomInt(1, 100));
}

console.log("Unsorted array: ");
console.log(array); //printing unsorted array

arr = quickSort(array, 0, array.length - 1);
console.log("Sorted array: ");
console.log(array);