// !==========props==========
import React from "react";

let FlipkartComponent=props=>{
    console.log(props);

return(
    <>
    <section className="Cards">
        <h2>Product Image:{props.image}</h2>
        <h2>Product Title:{props.title}</h2>
        <h2>Product Price:{props.price}</h2>
    </section>
    </>
);   
};export default FlipkartComponent;