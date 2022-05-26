//Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

*/

let sampleObject = {
    isItarable : true,
    sampleArray : [12,63,21,34,98,57]
}

 function checkItarable(object){
     if(object.isItarable){
        return (sampleObject.sampleArray);
     } else {
         console.log("provided array isn't itarable")
     }
 }
 let result = checkItarable(sampleObject);
 console.log(result);



//Task 2
/*
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
    
*/

function checkPythagoras (x, y, z){
    if (((x**2 + y**2) == z**2) || 
    ((x**2 + z**2) == z**2) || 
    ((y**2 + z**2) == x**2)) {
        return true
    }
    return false
}

let exponentiation = checkPythagoras();
console.log(checkPythagoras(3,4,5))


//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/

let array = [2,14,25,75,11,6];

function minMax(a){
    let max = a[0];
    let min = a[0];
    for ( let i = 0; i < a.length; i++){
        if(a[i] > max){
            max = a[i];
        }
        if (a[i] < min){
            min = a[i];
        }
    }
    return 'Min is ' + min + ' Max is ' + max
}

console.log(minMax(array));

//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/
let x = 0;
 function checkAngle(x){
     if(x == 90){
        return 'Right angle: An 90 degree angle.'
     }else if (x < 90 && x > 0){
        return 'Acute angle: An angle between 0 and 90 degrees.'
    } else if (x > 90 && x < 180){
        return 'Obtuse angle: An angle between 90 and 180 degrees.'
    } else if (x == 180){
        return 'Straight angle: A 180 degree angle.'
    }
 }
 
console.log(checkAngle(145))

//Task 5
/*დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .
    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A
    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]
*/
 function checkStudentGrade(scoreIndex){
     for (let i = 0; i < scoreIndex.length; i++){
         let grade = studentsGrades[i].grade;
         if (grade >= 0 &&  grade<= 50){
            studentsGrades[i].finalResult = "F";
         }
         else if (grade > 50 && grade <=60){
            studentsGrades[i].finalResult = "E";
         }
         else if (grade > 60 && grade <=70){
            studentsGrades[i].finalResult = "D";
         }
         else if (grade > 70 && grade <= 80){
            studentsGrades[i].finalResult = "c";
         }
         else if (grade > 80 && grade <= 100){
            studentsGrades[i].finalResult = "A"
         }
     }
     return scoreIndex;
 }
let studentsGrades = [
    {name: 'student1', grade : 91},
    {name: 'student2', grade : 71},
    {name: 'student3', grade : 45},
    {name: 'student3', grade : 65},
    {name: 'student2', grade : 21}, ];
console.log(checkStudentGrade(studentsGrades))