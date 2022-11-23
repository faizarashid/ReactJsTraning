// A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. Given an integer, , rotate the array that many steps left and return the result.
// Example
// After  rotations, .
// Function Description
// Complete the rotateLeft function in the editor below.
// rotateLeft has the following parameters:
// int d: the amount to rotate by
// int arr[n]: the array to rotate
// Returns
// int[n]: the rotated array
// Input Format
// The first line contains two space-separated integers that denote , the number of integers, and , the number of left rotations to perform.
// The second line contains  space-separated integers that describe 
 'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    // Write your code here
    // console.log(d)
    if(!(d >= 1 && d<= arr.length-1)||!(arr.length-1>=1 && arr.length-1<=100000)){
        return;
    }
    
    for(var i=0;i<d;i++){
        var temp=arr[0];
        for(var j=1;j<arr.length;j++){
            // console.log(arr)
            arr[j-1]=arr[j];
        }
        arr[arr.length-1]=temp;
        // console.log(arr);
    }
    
    return arr;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = rotateLeft(d, arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

