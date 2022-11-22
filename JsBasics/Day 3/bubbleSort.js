// Working of Bubble Sort
// Suppose we are trying to sort the elements in ascending order.

// First Iteration (Compare and Swap)

// Starting from the first index, compare the first and the second elements.
// If the first element is greater than the second element, they are swapped.
// Now, compare the second and the third elements. Swap them if they are not in order.
// The above process goes on until the last element.

// Remaining Iteration

// The same process goes on for the remaining iterations.

// After each iteration, the largest element among the unsorted elements is placed at the end.



function bubbleSort(arr){
    for( var i=0;i<arr.length-1;i++){
        console.log("Outer iteration: ",i+1);
        for(var j=0;j<arr.length-i-1;j++){
            console.log("Inner iteration: ",j+1);
            console.log(arr)
            if(arr[j]>arr[j+1]){
                let temp= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log(arr);
}
let arr=[4,7,9,45,0];
bubbleSort(arr);
