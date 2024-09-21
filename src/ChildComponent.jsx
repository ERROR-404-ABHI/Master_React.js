// ! ==============props===========
/*
to recieve the props we have to use a parameter .
the passed props will store in the form of object with the 
key value pair.
*/
// ?==========Receiving props========
// import React from "react";
// let ChildComponent = props=>{
//     console.log(props);
//     return(
//         <>
//         <section className="cards">
//             <h1>Product Image:{props.image}</h1>
//             <h1>Product title:{props.title}</h1>
//             <h1>Product Price:{props.price}</h1>
//         </section>
//         </>
//     );
// };export default ChildComponent;

// ? props Children

// import React from "react";

// let ChildComponent=props=>{
//     console.log(props);
//     return(
//         <>
//         <h1>I am Child Component</h1>
//         <h2>Sname:{props.Sname}</h2>
//         <h2>Age:{props.age}</h2>
//         {props.children}
//         </>
//     );
// };
// export default ChildComponent;

// ? Props Destucturing
/*
import React from "react";

let ChildComponent=props=>{
console.log(props);

let {
    Sname,
    percentage,
    course,
    isPlaced,
    skills,
    hobbies,
    fun1,
    fun2,
    girlFriendCount,
    kids, 
    classes,

} = props;

console.log(Sname);
console.log(percentage);
console.log(course);
console.log(isPlaced);
console.log(skills);
console.log(hobbies);
console.log(fun1);
console.log(fun2);
console.log(girlFriendCount);
console.log(kids);
console.log(classes);

let{frontEnd,database,backEnd}=skills;
let{first_fe,second_fe,third_fe}=frontEnd;
let{first_db,second_db}=database;
let{first_be,second_be}=backEnd;

return(
    <>
    <h2>I am ChildComponent</h2>
    <h3>Sname:{Sname}</h3>
    <h3>percentage:{percentage}</h3>
    <h3>course:{course}</h3>
    <h3>placed:{isPlaced? "YES":"NO"}</h3>
    <h3>girlFriendCount:
     {girlFriendCount==undefined?"Many girlfrieds":"no girlfriends"}</h3>
    <h3>kids:{kids==null?"no kids ":"lot of kids"}</h3>
    <h3>
        Classes:{
            classes.map((val,ind)=>{
            console.log(val);
            return <li key={ind}>{val}</li>
            })}
    </h3>
    <h3>skills:</h3>
    <h4>Front End</h4>
    <li>{first_fe}</li>
    <li>{second_fe}</li>
    <li>{third_fe}</li>
    </>


);
};
export default ChildComponent;
*/
// import React from "react";

// let ChildComponent=props=>{
//     console.log(props);
//     let {name ,age,course}=props;

//     return(
//         <>
//         <h2> I Am child Component</h2>
//         <h3>Nmae:{name}</h3>
//         <h3>Age:{age}</h3>
//         <h3>Course:{course}</h3>

//         </>
//     );
// };
// export default ChildComponent;
// default props
// import React from "react";

// let ChildComponent=props=>{
//     console.log(props);
//      let {name="no name" ,age=20,course="confused", isplaced="no" ,gender="not updated yet"}=props;
//     // let{name,age,gender,isplaced,course}=props;
//     return(
//         <>
//         <h2> I Am child Component</h2>
//         <h3>Name:{name}</h3>
//         <h3>Age:{age}</h3>
//         <h3>Course:{course}</h3>
//         <h3>isPlaced:{isplaced}</h3>
//         <h3>gender:{gender}</h3>

//         </>
//     );
// };

// ChildComponent.defaultProps={
//       Name:"no name",
//         Age:20,
//         Course:"confused",
//         isPlaced:"no",
//         gender:"not updated yet",

// }
//export default ChildComponent;

// ? props drilling
// import React from "react";
// import GrandChildComponent from "./GrandChildComponent";

// let ChildComponent=(props)=>{
//     console.log(props);
//     return(
//     <>
//     <h2>I am child component</h2>
//     <h2>ChildComponent-{props.latestNews}</h2>
//     <GrandChildComponent newdata={props}/>
//     </>);
// };export default ChildComponent;

// ? props types
/*
import React from "react";
import checktypes from "prop-types";

let ChildComponent = (props) => {
  let {
    name,
    age,
    isPlaced, //to render boolean value we have to make use of ternary operator
    skills,//to render array we make use of map()iteration
    address,
    isMarried,
    fun,
    StudentNames,
    StudentMarks,
    gender,
    friend,
  } = props;
  return (
    <>
      <h2>I am ChildComponent</h2>
      <h2>name</h2>
      <h2>age</h2>
      <h2>isPlaced</h2>
      <h2>
        skills:
        {skills.map((val, ind) => {
          return <li key={ind}>{val}</li>;
        })}
      </h2>

      <h2>address</h2>
      <h2>isMarried:{isMarried ? "yes" : "no"}</h2>
      <h2>
        {StudentNames.map((val, ind) => {
          console.log(val);
          return <li key={ind}>{val}</li>;
        })}
      </h2>
      <h2>
        {StudentMarks.map((val, ind) => {
          console.log(val);
          return <li key={ind}>{val}</li>;
        })}
      </h2>
      <button>Click Here</button>
    </>
  );
};
ChildComponent.prototypes = {
  name: checktypes.string,
  age: checktypes.number,
  isPlaced: checktypes.bool,
  skills: checktypes.array,
  address: checktypes.object,
  isMarried: checktypes.func,
  gender: checktypes.oneOf(["male", "female", "others"]),
  StudentNames: checktypes.arrayOf(checktypes.String),
  StudentMarks: checktypes.arrayOf(checktypes.number),
  friend: checktypes.shape({
    fname: checktypes.String,
    age: checktypes.number,
    course: checktypes.array,
  }),
};
export default ChildComponent;
*/
// !=================CSS===================