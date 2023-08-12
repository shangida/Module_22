
//write a function  called foo()which prints"foo" and a function called bar() which print "bar". call function bar()in the foo() after printng. what will be the output. now call the foo() to see the output

function bar(){
    console.log("bar");
}

function foo(){
    console.log("foo");
    bar(); //calling function
}
foo();
//ends

// string length
let str ='A non-negative integer.'
console.log(str.length)
//ends

// Math.abs() use
let num1 = 25;
let num2 = 45;

let gap = Math.abs(num1 - num2);
console.log(gap);

if(gap < 5){
    console.log("Ture");
}
else{
    console.log("false");
}
//ends

//write a function that will 3 numbers will return the max numbers. using if else

function findMaxNumber(){
   
    let num1 = 88;
    let num2 = 95;
    let num3 = 90;

    if(num1 > num2 && num1 > num3){
        document.write("Max number is : " + num1 +"</br>");
    }

    else if(num2 > num1 && num2 > num3){
        document.write("Max number is : " + num2 +"</br>");
    }

    else{
        document.write("Max number is : " + num3 +"</br>");
    }
}
findMaxNumber();
//ends

//write a function that will 3 paramaters will return the min numbers. using if else

function findMinNumber(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        document.write("Min number is : " + num1 +"</br>");
    }

    else if(num2 < num1 && num2 < num3){
        document.write("Min number is : " + num2 +"</br>");
    }
    else{
        document.write("Min number is : " + num3 +"</br>");
    }
}
findMinNumber(90, 70, 80);
//ends

//write a function that will 3 numbers will return the max numbers. using Math.max

function maxNumberFind(){
    var num1 = 77;
    var num2 = 99;
    var num3 = 88;
    let maxNumber = Math.max(num1, num2, num3)

    document.write("Max number is : " + maxNumber +"</br>");

}
maxNumberFind();
//ends

//write a function that will 3 parameters will return the max numbers. using Math.min

function minNumberFind(num1, num2, num3){
    
    let minNumber = Math.min(num1, num2, num3)
    document.write("Max number is : " + minNumber +"</br>");
}
minNumberFind(77, 99, 88);
//ends

//write a function to get the hightes number in an array

function maxInArrray(numbers){
    
    let highest = numbers[0]
    
    for(let i = 0; i< numbers.length; i++){
        const element = numbers[i];
        
        if(element > highest){
            highest = element;
        }
    }
    return highest;
}
const numbers  =[167, 190, 165, 137, 165];
const result = maxInArrray(numbers);
console.log(result);
//ends

//write a function to get the lowest number in an array

function minInArrray(numbers){
    
    let lowest = numbers[0]
    
    for(let i = 0; i< numbers.length; i++){
        const element = numbers[i];
        
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}
const numbers2  =[167, 190, 165, 137, 165];
const result2 = minInArrray(numbers2);
console.log(result2);
//ends

//reverse charters a string

function reverseStr(str){
    //for(i = 0; i < str.length; i++){}  forward

    let reverseChar =str.split(''); //charter vag kora
    
    for(let i = str.length - 1; i >= 0; i--){  //backward or reverse way
        const element =str[i];
        reverseChar = reverseChar + element
        //console.log(element, reverseWord)
    }
    return reverseWord;
}
const text ="I am a good person"
const result3 = reverseStr(text);
//console.log(result3);
//ends

//revers words in a sentence

function reverseWord(text){
    let words = text.split(' ');   //word vag kra                                                                                     
    let array =[];

    for(let i = words.length - 1; i >=0; i--){
        const element = words[i]
        array.push(element);
        
    }
    const result = array.join(' ')
    return result;
}
const text1 = "I am a good girl";
const finalResult = reverseWord(text1);
console.log(finalResult);
//ends

//Fibonacci Series using a for loop
/* 
    let fibo =[0, 1, 1, 2, 3, 5, 8, 13, 21, 38, 55, 89, 144]

    fibo[3] = fibo[2] + fibo[1];
    fibo[5] = fibo[4] + fibo[3];
    fibo[50] = fib0[49] + fibo[48];
    fibo[n]  = fibo[n-1] + fibo[n-2];
    fibo[i]  = fibo[i-1] + fibo[i-2];
    
 */

let fibo = [0,1];
for(i = 2; i<=20; i++){
    fibo[i]  = fibo[i-1] + fibo[i-2];
}
console.log(fibo);
//end

//get avg
function avg(numberOfArray){
    let sum = 0;
    for(i = 0; i < numberOfArray.length; i++){
        sum = sum +numberOfArray[i];
        
    }
    const finalAvg = sum / numberOfArray.length;
    return finalAvg;

}

const numberOfArray =[12, 44, 56, 78, 45, 88, 32, 66, 95 ];
const numberOfArrayInAvg =avg(numberOfArray);
console.log(numberOfArrayInAvg.toFixed(2));
//ends

//আয়তক্ষেত্র এর area (আয়তন) 
function getArea(whidh, height){
    
    const area = whidh * height;
    return area;
}

const whidh = 35;
const height = 12;
let resultArea = getArea(whidh, height);
console.log(resultArea);
//ends

function getThe2ndLargestNumber(newArray){

}

const newArray = [45, 65, 68, 94, 34, 12];
//ends