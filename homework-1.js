// Task 1 

let girl = "ana";
let boy = "levan";
let ageGirl = 28;
let ageBoy = 21;

let ageCheck = girl + " " + boy + "ze" + " " + (ageGirl - ageBoy) + " " + "wlit ufrosia";
console.log(ageCheck);


// Task 2

let studentsArray = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den'];
let middle = (studentsArray.length - 1)/2;

for(i = middle; i <= middle; i++){
    console.log(studentsArray[i]);
}


// Task 3

let students = {
    firstName: "medea",
    lastName: "gulbatashvili",
    age: 30,
    subject:["math", "geo", "hist", "music", "sport"],
    roommate:{
        fullname:"nino metreveli",
        age:31
    }
}
let fullName = students.firstName + " " + students.lastName;
students.fullName = fullName;
console.log(students);

let result = fullName + " " + "aris" + " " + students.age + " " + "wlis da misi roommate aris:" + " " + students.roommate.fullname
console.log(result);

for (let i = 0; i < students.subject.length; i++);
console.log(students.subject);


// Task 4

let fruits = ["Banana", "Orange", "Apple", "Mango",2,12];
let i = 0;
    while (i < fruits.length && typeof(fruits[i]) === "string"){
        console.log(fruits[i])
        i++;
    }
    

// Task 5

let numbers = [12,23,43,11,9,2,121,90];

for (i = 0; i < numbers.length; i++){
    if (numbers[i] > 31 && numbers[i]%2 == 0){
        console.log(numbers[i] + " " + 'Element is greater than provided value and is EVEN');
    } 
    else if (numbers[i] < 31 && numbers[i]%2 !=0){
        console.log(numbers[i] + " " + 'Element is less than provided value and is ODD')
    }
}

// Task 6

const BREAKVALUE = 12;
let array = [41,31,81,9,2,12,71,21,32];
let x = 0;

while(true){
    console.log(array[x]);
    x++;
    if(array[x] == BREAKVALUE){
        console.log(array[x])
        break;
    }
}




