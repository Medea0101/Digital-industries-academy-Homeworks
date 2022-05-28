//task 1
/*  
    დაწერეთ ფუნქცია რომელიც მიიღებს ორ რიცხვს და აღნიშნული ფუნქცია
    დააბრუნებს ამ ორი რიცხვის უდიდეს საერთო გამყოფს . 
    იგივე ფუნქცია დაწერეთ რეკურსიული ფუნცქიის გამოყენებით იპოვეთ უდიდესი საერთო გამყოფი 
    gcd(a,b)
    
// */

function gcd(a, b){
    while(a !== b){
        if(a > b){
            a = a - b;
        } else if (b > a){
            b = b - a;
        }   
    } return a
}
console.log(gcd(30, 50))

// rekursiulit ver davwere




//Task 2 
/*
დაწერეთ ფუნქცია ციფრების ჯამი , sumOfDigits(n) რომელიც იღებს ერთ პარამეტრს 
და აბრუნებს გადაცემული მნიშვნელობის შემადგენელი ციფრების ჯამს . 
sumOfDigits(1312) = 1+3+1+2 = 7;

აღნიშნული დავალება შეასრულეთ ორნაირად , როგორც ჩვეულებრივი ასევე რეკურსიული
ფუნქციის გამოყენებით . 

*/

const number = 1234;
const digits = Array.from(String(number), Number);

let sumOfDigits = digits
   .reduce((total, num) => total + num, 0)

console.log(sumOfDigits);

// rekursiulit ver davwere




//Task 3
/*
   გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
   ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
   და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
   დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
   მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
   გვაქვს 
   დალოგეთ calculateWorkload და formatArray შედეგები; 
   !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/
let factory = {
   facName : 'Volkswagen Wolfsburg Plant',

   calculateWorkload : function (){
   for (let i = 0; i < workloadData.employeeWeeklyWorkload.length; i++){
   let workData = workloadData.employeeWeeklyWorkload[i].workload;
   console.log(workData);
}
},
   formatArray : function () {
       for(let i = 0; i < factoryEmployees.employees.length; i++){
       let employeeName = factoryEmployees.employees[i].name;
       let contractDuration = 5;
       let timeLeft = contractDuration - factoryEmployees.employees[i].timeSpent;
       console.log(employeeName + ': ' + timeLeft);
   }
   }
}

let workloadData = {
   employeeWeeklyWorkload : [
       {name : "John", workload : 40 },
       {name : "Sam", workload : 25 },
       {name : "Maria", workload : 28 },
       {name : "Dan", workload : 30 },
       {name : "Lorelai", workload : 31 }
   ]
}

let factoryEmployees = {
   employees : [
       {name : "John", timeSpent : 1 },
       {name : "Sam", timeSpent : 3 },
       {name : "Maria", timeSpent : 2 },
       {name : "Dan", timeSpent : 4 },
       {name : "Lorelai", timeSpent : 5 }
   ],
   //employeeNum : this.employees.length, ???????? 
}

let workCalc = factory.calculateWorkload.bind(workloadData);
workCalc();

let workerTimeLeft = factory.formatArray.bind(factoryEmployees, "");
workerTimeLeft();


//Task 4

/*
დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.

hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 
*/

let numbersSum = {
   sumOfNumbers: function(x,y){
   return x + y
   }    
}
let sumFunction = numbersSum.sumOfNumbers.apply(null, [5,10]);
console.log(sumFunction)


//Task 5
/*
დაწერეთ რეკურსიული ფუნქცია checkIfEven(n) . აბრუნებს გადაცემული მნიშვნელობა
არის თუ არა ლუწი . აუცილებლად გამოიყენეთ რეკურსია

*/

function checkIfEven(number){
   console.log(number);
   let newNumber = number - 1;
   if (newNumber > 0){
       checkIfEven(newNumber);
   }
}

console.log(checkIfEven(4))

