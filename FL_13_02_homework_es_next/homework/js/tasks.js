//Task 1
const arr = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
function maxEl(arrayToFindMaxEl) {
    return Math.max.apply(null, arrayToFindMaxEl);
}
console.log('Task 1');
console.log(maxEl(arr));
//Task 2
const arr2 = [1, 2, 3];
let copiedArray;
function CopyArray() {
    copiedArray = arr2.slice();
}

console.log('Task 2');
CopyArray();
console.log(arr2, copiedArray);
console.log(arr2===copiedArray);

//Task 3
let employee = {
    name: 'Ilya',
    surname: 'Davydenko'
};
let enhanced_human;
    function addUniqueId(iden) {
        let id = Symbol();
        id = iden;
    enhanced_human = {...employee};
    enhanced_human.id = id;
    console.log(enhanced_human.id);

    return enhanced_human;
}

console.log('Task 3');
console.log(addUniqueId(123));

//Task 4
const oldObj = {name:'Someone', details:{id:1, age: 11, university:'UNI'}};
function regroupObject(regroup) {
    let {name:firstName, details} = regroup;
    let {id, age, university} = details;
    return {university, user:{age, firstName, id}};
}

console.log('Task 4');
console.log(regroupObject(oldObj));
//Task 5

const uniqueArr = [1,1,23,3,4,5,6,5,4,23,2,1,1,1,1,1];
function findUniqueElements(arr5) {
    let uniqueNumbers = new Set();
    for (let i=0; i<arr5.length; i++){
        uniqueNumbers.add(arr5[i]);
    }
    return uniqueNumbers;
}

console.log('Task 5');
console.log(findUniqueElements(uniqueArr));

//Task 6
const phoneNumber = '0123456789';
function hideNumber(number) {
    const last4 = number.slice(-4);
    return last4.padStart(number.length, '*');
}

console.log('Task 6');
console.log(hideNumber(phoneNumber));

//Task 7
const isRequired = () => { throw new Error('param is required'); };
const add = (a = isRequired(), b = isRequired()) => a+b;
//console.log is placed in the bottom to prevent web page from crushing

//Task 8
 function callsSomeApi(url) {
     fetch(url)
         .then(response => response.json())
         .then(json => {
             let names = json.map(item => item.name).sort();
             console.log(names);
         });
 }


console.log(callsSomeApi('https://jsonplaceholder.typicode.com/users'));    //It is shown at the bottom of a web page


     //Task 9
    // async function* callAnotherApi(url) {
    //     const response = await fetch(url);
    //     const arr9 = await response.json();
    //     let names2 = yield json => {
    //         let names2 = json.map(item => item.name).sort();
    //         console.log(names2);
    //     };
    //     return names2();
    //  }
    //  callAnotherApi('https://jsonplaceholder.typicode.com/users');


console.log('Task 7');
console.log(add(1,3));
console.log(add(1));


