//2 ways to declare an object - like a 1) literal 2)constructor
//singleton(constructor se agr bnega toh hamesha singleton banega and if literal se banega then singleton nhi hoga isko dhyan rkhna)

//object literals 

const mySym=Symbol("key1")

const JsUser={
    name:"Prathit",
    "full name":"Prathit Singh",
    age: 18,
    [mySym]:"key1",// correct syntax for declaring symbol in object if u declare it normally it will take it as string
    email: "prathit@google.com",
    isLoggedIn:false,
    lastLoggedinDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
//console.log(JsUser["full name"]);// fullname dot krke access ni kr skte

//console.log(JsUser[mySym]);// now typeof give as symbol


JsUser.email="prathit@gpt.com"
//console.log(JsUser.email)
//Object.freeze(JsUser)
JsUser.email="Ps@ms.com"
//console.log(JsUser)



JsUser.greeting=function(){
    console.log("Hello user");
    
}
console.log(JsUser.greeting());
JsUser.greetingtwo=function(){
    console.log(`Hello user,${this.name}`);
    
}

console.log(JsUser.greetingtwo());