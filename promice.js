// var promise = new Promise(function(resolve, reject) { 
// const x = 25; 
// const y = 25
// if(x === y) { 
// 	resolve(x+y); 
// } else { 
// 	reject("not equal"); 
// } 
// })
// .then(res=> {console.log(res) }) 
// .catch(error=>{
//     console.log(error)
// })

var promise =new Promise (function (resolve,reject){
    const x=25
    const y=25
    if(x===y){
        resolve();
    } else{
        reject();
    }
}) .then(function(){
    console.log("is equal")
}) .catch(function(){
    console.log("not equal")
})