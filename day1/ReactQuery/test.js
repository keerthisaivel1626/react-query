function person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}
//creating new instances of person object
let person1 = new person('Mukul', 'Latiyan');
let person2 = new person('Rahul', 'Avasthi');

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

function TestData(){
    this.x='test data'
}
let val=new TestData();

function Validate(t1,t2){
  this.val=t1;
  this.val2=t2;
}

let find=new Validate('keerthana','vadivel')

console.log( val.x);

console.log( find.val, find.val2);