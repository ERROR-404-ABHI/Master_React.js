// ? component
/*
component is a block of code 
Rules:
1.Component name should starts with Uppercase
2.Rename is not posiible
3.to invoke a component  we have to invoke as element in the index.js file
ex:<App></App>   --->Paired way
ex:<App/>        --->Self Closing way

*/

/* ?Types Of components
  1.Class Based Component
  2.Function Bases Component

*/

// 1.Class Based Components
/*
1.Class Based Components are the old way of creating the components
2.To use this we have to use
     class ComponentName extends Component
3.Class Based Components allows lot of methods out of all render()
 method  is mandatory to display    
*/
// import React ,{Component}from "react";

// class App extends Component{
//     render() {
//         return (
//         <h1>I am App Component</h1>
//         );
//     }

// }export default App;

// ?2. Function Based Component
// case 1:
// function App(){
//   return <h1>Hi,I am function based component</h1>
// }export default App;

// case 2:
// let App=function(){
//   return <h1>Hi, I am funnction based component(anonymous)</h1>

// };
// export default App;

// ?case 3:
// let App=()=>{
//   return <h1>Hi, I am funnction based component(Arrow Function)</h1>

// };
// export default App;

//? case 4:
// let App=()=>{

//     return <div>
//     <h1>Hi, I am funnction based component1</h1>
//           <h2>hi, i am function based componeent2</h2>
//           <h3>hi, i am function based componeent3</h3>
//           </div>

//   };
//   export default App;

//? case 5.:React Fragment
// import React from "react";
// let App=()=>{

//   return <React.Fragment>
//   <h1>Hi, I am funnction based component1</h1>
//         <h2>hi, i am function based componeent2</h2>
//         <h3>hi, i am function based component3</h3>
//         </React.Fragment>

// };
// export default App;

//? Case 5.1:React.Fragment
// import React from "react";
// let App = () => {
//   return (
//     <>
//       <h1>Hi,I am React component1</h1>
//       <h2>Hi,I am React Component2</h2>
//       <h1>Hi,I am React component3</h1>
//     </>
//   );
// };
// export default App;


// !===========JSX===============
/*
1.JSx stands for javaScriptXML
2.JSX used to write html and js code together
*/
// rule 1:
//  we should not returrn more than one element
// import React from "react";
// let App=()=>{
// return(
//   <>
//   <h1>Hii,I am jsx code </h1>
//   <h2>Hii,I am jsx code </h2>

//   </>
// );
// };
//  export default App;


// rule 2:
/*
jsx looks like html but it's strickter than html
jsx elements are case sensitive
*/
// import React from "react";
// let App=()=>{
// return(
//   <>
//   <H1>Hii,I am jsx code </H1>

//   </>
// );
// };
//  export default App;

// rule 3:
/*
jsx follows lowerCamel case convention
common name in html and js will change in jsx
*/

// import React from "react";

// let App=()=>{
//   return(
//     <>
//     <h1 onClick="">  I am app component</h1>
//     <section className="Container">
//       <div className="items">item1</div>
//       <div className="items">item2</div>
//       <div className="items">item3</div>
//     </section>
//     <label htmlFor="username"></label>
//     <input type="text"  id="username"/>
//     </>
//   );
// };export default App;

// rule 4:
// to use javascript code in html we have to use expression{}
// to use html code in javascript we have to use expression return keyword

// import React from "react";

// let App=()=>{
//   console.log("i am app component");
//   let Sname="muskann";
//   let Course="react.js";
//   return(
//     <>
//     <h1> i am app component</h1>
//     <h2> Student name:{Sname}</h2>
    
//     <h2>Student Course:{Course}</h2>
//     <h2>2+2:{2+2}</h2>
//     </>
//   );
// };export default App;

// rule 5:
// all jsx elements should be closed
// either by paired way or self closing way

// import React from "react";

// let App=()=>{
//   return(
//     <>
//     <h1>hi,iam app component</h1>

//     <header>header part</header>
//     <hr></hr>
//     <hr />
//     <section> this is section tag</section>
//     <img src="" alt=""></img>
//     <input type="text" />
//     </>
//   );
// };export default App;



// !==============props============
/*
properties inshort we call it as props
properties are the way of storing the data from one 
component to another.
in react to share the data b/w components we have to use props;
to pass the props we have to send as html properties. 
*/

// !===Passing Props=====

// import React from "react";
// import ChildComponent from "./ChildComponent";

// let App=() =>{
//   return(
//     <>
//     <h1>Amazon Cards</h1>
//     <ChildComponent image="image1" title="men's shirt 1"
//     price="200"/><hr/>
//     <ChildComponent image="image2" title="women's t-shirt 1"
//     price="400"/><hr/>
//     <ChildComponent image="image3" title="kid's pant 1"
//     price="800"/><hr/>
    
//     </>
    
//   );
// };export default App;

// import React from "react";
 //import ChildComponent from "./ChildComponent";
// import FlipkartComponent from "./FlipkartComponent";

// let App=()=>{
//   return(
//     <>
//     <h1>Flipkart's Card</h1>
//     <FlipkartComponent image="image1" title="Puma Running Shoes" price="2000"></FlipkartComponent><hr></hr>
//     <FlipkartComponent image="image2" title="Nike Running Shoes" price="4000"></FlipkartComponent><hr></hr>
//     <FlipkartComponent image="image3" title="Red Tape Casual Shoes" price="3000"></FlipkartComponent><hr></hr>
//     </>
//   );
// };export default App;

// ? props Children
// import React from "react";
// import ChildComponent from "./ChildComponent";

// let App=()=>{
//   return(
//   <>
//   <h1>I am App component</h1>
//   <ChildComponent Sname="Abhay" age="{21}">
//     <h3>I am Child Component</h3>
//   </ChildComponent>
//   </>
//   );
// };
// export default App;

// ? Props Destucturing
/*
import React from "react";
import ChildComponent from "./ChildComponent";

let App=()=>{

  let Sname="abhay";
  let percentage=80;
  let course="React.js";
  let isPlaced=false;
  let Classes=["advance java","react.js","core Java ","SQL"];
  let skills={
    frontend:{
      first_fe:"html",
      second_fe:"css",
      third_fe:"javascript",  
    },
    database:{
    first_db:"Mysql",
    secomd_db:"Postgresql",
    },
    backend:{
      first_be:"core java",
      second_be:"spring boot"
    },
  };

  let hobbies={
    dayTime:["reading","attending calsses"],
    nighttime:["chatting","depression","usingtinder"]
  };
  
  let fn1=()=>{
    alert("click event triggred");
  };

  let fn2=()=>{
    alert("hover event triggred");
  };

  let girlFriendCount=undefined;

  let kids=null;

 return(
  <>
  <h1>I am App Component</h1>
  <ChildComponent
  sname={Sname}
  percentage={percentage}
  course={course}
  isPlaced={isPlaced}
  skills={skills}
  hobbies={hobbies}
  fun1={fn1}
  fun2={fn2}
  girlFriendCount={girlFriendCount}
  kids={kids}
  Classes={Classes}
  ></ChildComponent>
  
  </>
 ) ;
};
export default App;
*/

// ?props example 2

// import React from "react";
// import ChildComponent from "./ChildComponent"; 


// let App=()=>{
//   return(
//     <>
//     <ChildComponent
//     name="Abhay" age={18} course="React.js"></ChildComponent>
//      <ChildComponent
//     name="Arun" age={20} course="Advance java"></ChildComponent>
//      <ChildComponent
//     name="abhishek" age={22} course="python"></ChildComponent>
//     </>
//   );
// };export default App;

// default props
// import React from "react";
// import ChildComponent from "./ChildComponent"; 


// let App=()=>{
//   return(
//     <>
//     <ChildComponent
//     name="Abhay" age={18} course="React.js"></ChildComponent>
//      <ChildComponent
//     name="Arun" course="Advance java" gender="male"></ChildComponent>
//      <ChildComponent
//     name="abhishek"  isplaced="yes" course="core java"></ChildComponent>
//     </>
//   );
// };export default App;


// ? props drilling
// import React from "react";
// import ChildComponent from "./ChildComponent";

// let App=()=>{
//   let data="Asteroid";
//   return(<>
//   <h1>I am App component</h1>
//   <h1>App-{data}</h1>
//   <ChildComponent latestNews={data}></ChildComponent>
//   </>);

// };export default App;

// ? Props types
/*
import React from "react";
import ChildComponent from "./ChildComponent";

let App = () =>{
  return (
    <>
    <h1>I am App component</h1>
    <ChildComponent 
    name="Abhay"
    age={20}
    isPlaced={true}
    isMarried={true}
    skills={["html","css","javascript"]}
    StudentNames={["Abhay","Akash","Shubham","Arun"]}
    StudentMarks={[80,50,70,69]}
    address={{
      city:"New Delhi",
      state:"Delhi",
      pincode:110077,
    }}
    fun={()=>{
      console.log("function triggered");  
    }}
    friend={{
      fname:"Swati",
      age:"Twenty",
      course:["java","SQL","Webtech"]

    }}
    ></ChildComponent>
    </>
  );
};export default App;
*/
// !============CSS===================