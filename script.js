/* var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradiant");
color1.addEventListener("input",function(){
    body.style.background="linear-gradient(to right,"
    +color1.value
    +","
    +color2.value
    +")";
    
})
color2.addEventListener("input",function(){
    body.style.background="linear-gradient(to right,"
    +color1.value
    +","
    +color2.value
    +")";
}) */
// const array=[1,2,10,16];
// const double=[];
// const newArray=array.forEach(num=>{
//     double.push(num*2);
// });
// console.log(newArray);

// const mapArray=array.map(num=>num*2);
// const filterArray=array.filter(num=>true);
// const reduceArray=array.reduce((accumulator,num)=>accumulator+num,2);
class player{
	constructor (name,type){
		this.name=name;
		this.type=type;
	}
	introduce(){
		console.log('yo les bro je suis '+this.name+'et je suis un '+this.type)
	}
}
class wizard extends player{
	constructor (name,type){
		super(name,type);
	}
	play(){
		console.log('I\'m a '+this.type)
	}
}
 
const wizard1=new wizard("Angelo","healer");