function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }


function checkAge(age){
    return age > 18 ? true : confirm ('allowed?')
}
function checkAge(age){
    return age > 18 || confirm ('allowed?')
}

function minNum(num1, num2){
    let result = 0;
    if(num1 > num2){
        return num2
    } else {
        return num1;
    }
}
console.log(minNum(4,2))

function maxNUm(num3, num4){
     return num3 > num4 ? num3 : num4
 }
console.log(maxNUm(6, 9))

function pow(x,n){
    x = x**n;

}
console.log(pow(2,3))



let student = {
    name: 'saxeli',
    gvari: 'gvari'
}
function changeObject(obj){
    obj.fullName = 'saxeli gvari'
}
changeObject(student);
console.log(student)



// this

let person = {
    name: 'lore',
    lasName: 'smith',
    fullName: function(){
        return this.name + ' ' + this.lasName;
    }
}
console.log(person.fullName())

// globalurshi this

let x = this;
console.log(x) 