

let   result=document.getElementById("inputext");
const msg = document.querySelector('.msg')

let calculate =(number)=>{
    result.value+=number
}


let Result=()=>{
try{
    
    result.value=eval(result.value)
}

catch(err){
  alert('Enter a valide input')
  
}
   
 
}





function clr (){
    result.value= "";
}

function del(){
    result.value=result.value.slice(0,-1);
}











class person{
  constructor(firstname, lastname, age, dob){
    this.fname = firstname;
    this.lastname =   lastname;
    this.age = age;
    this.bob = dob;
  }


  getfullnname(){
      console.log(`${this.fname} ${this.lastname}`)
  }
}

const person1 = new person("johnson", "morrison",  32, 4-6-1990);
const person2 = new person("Godwill", "thompson", 32, 12 / 6 / 2022);
const person3 = new person("wilson", "wilfred", 32, 12 / 6 / 2022);


console.log(person1.getfullnname())
