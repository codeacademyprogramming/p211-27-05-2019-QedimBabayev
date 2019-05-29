// FIRST TASK OF HOME WORK STARTS HERE (TYPE-- CALLBACK FUNC)
//  let filtered = [];

// let ArrayFilter = function(numbers, callBackFunc){
//     for( let i = 0; i < numbers.length; i++){
//         if(callBackFunc(numbers[i])){
//             filtered.push(numbers[i])
//         }
//     }
//     return filtered;
// }

// function IsDivisibleByFive (number){
//     return number % 5 ===0;
// }
//  ArrayFilter([5, 10, 8, 20, 9, 30], IsDivisibleByFive); 

//  console.log(filtered);

// FIRST TASK OF HOME WORK ENDS HERE 



// FIRST TASK OF HOME WORK STARTS HERE 

// let numbers = [10,  5, 7 ,15];
// let filtered = numbers.filter(item => item % 5 === 0);
// console.log(filtered);

//FIRST TASK OF HOME WORK ENDS HERE 




// SECOND TASK OF HOME WORK STARTS HERE

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  let  twoTimes = array.map(num => num *2);
//  console.log (twoTimes);
//  console.log(array);

// SECOND TASK OF HOME WORK ENDS HERE




//  THIRD TASK OF HOME WORK STARTS HERE


// let words = ["qedim", "sabir", "sahlar", "azerbaycan"];



// let resultTwo = words.map(function(soz){
//     if(soz.length % 2 ===0){
//         soz = soz.slice(soz.length  /2, soz.length);
//     }
//     else {
//         soz = soz.slice((soz.length +1 ) /2, soz.length) ;
//     }

//     return soz;
// });

// console.log(resultTwo);


// let result = words.map(function(soz){
//     if(soz.length % 2 ===0){
//         soz = soz.slice(soz.length[0], soz.length  /2 );
//     }
//     else {
//         soz = soz.slice( soz.length[0], soz.length /2 +1);
//     }

//     return soz;

// });
// console.log(result);


// THIRD TASK OF HOME WORK ENDS HERE







// FOURTH TASK OF HOME WORK STARTS HERE


// let numbers = [10, 8, 7, 12, 3, 18];
// let reducedArray = numbers.reduce(function (sum, current){
//     if( current % 2 === 0 ){
//             sum += current;
//     }
//      return sum;
// }, 0);


// console.log(reducedArray);

// FOURTH TASK OF HOME WORK ENDS HERE







// FIFTH TASK OF HOME WORK STARTS HERE


// let numbers = [10,8, 7, 25, 50, 100, 24];
// let reducedArray = numbers.reduce(function(sum, current){
//     if (current % 5 === 0 ){
//         sum += current;
//     }
//     return sum;
// }, 0);
// console.log(reducedArray);

// FIFTH TASK OF HOME WORK ENDS HERE








// LAST TASK OF HOME WORK STARTS HERE

// let emails = [
//     {user: "abc", domain: "gmail.com"},
//     {user: "abc", domain: "mail.com"},
//     {user: "abc", domain: "box.com"},
//     {user: "abc", domain: "code.edu.az"},
//     {user: "abc", domain: "list.com"}
// ]
//  let getDomain = emails.find(mail => mail.domain === "code.edu.az");
//  console.log(getDomain);



// let getDomain = emails.find(function(element){
//     return element = "code.edu.az";
// });
// console.log(getDomain);


// LAST TASK OF HOME WORK ENDS HERE


// document.body.style.background = "red"     ;
// setTimeout(() => 

//  document.body.style.background =  "" , 1000);

// let elem = document.getElementById('elem')

// elem.style.background = 'red';

// let elem = document.getElementById('elem')
// elem.hidden = false;


const mybtn = document.getElementsByClassName('mybtn')[0];
const input = document.getElementById('text');
const wrapper = document.getElementsByClassName("tag-wrapper")[0];
// mybtn.onclick = function () {
//     let tagValue = input.value;


//     const newDiv = document.createElement("div");

//     newDiv.classList.add("tag");
//     newDiv.innerHTML = tagValue;
//     wrapper.appendChild(newDiv);

// }
document.onkeyup = function (e) {
    if (e.keycode === 13) {
        const tagValue = input.value;

        const newDiv = document.createElement('div');
        newDiv.classList.add("tag");
        newDiv.innerHTML = tagValue;
        wrapper.appendChild(newDiv);
    }

}