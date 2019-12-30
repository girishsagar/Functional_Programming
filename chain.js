// class Airthmatic{
//     constructor(){
//         this.value=2
//     }
   
// add(value){
//    let addition =this.value =this.value+value
//     console.log("the addition is ", addition)
//     return this;
// }
// sub(value){
//     let subst=this.value=this.value-value
//    console.log("the substractin is ", subst);
//     return this
// }
// }
// operator=new Airthmatic()
// let output=operator.add(5).sub(1).value

airt =function(){
    this.value =1;
}
add=function(value){
    let addition=this.value =this.value+value
    console.log("the add is ",addition)
return this;
}
sub=function(value){
    let substractin=this.value=this.value-value
console.log("the sub is ",substractin)    
return this;

}
let ab=add(5).sub(2).value
console.log(ab);



