import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *   -Logo
 *   -Nav Items
 *   
 * Body
 *   -Search
 *   -RestaurantContainer
 *      -RestaurantCard
 * 
 * Footer
 *   -Copyright
 *   -Links
 *   -Address
 *   -Contact
 */


//JSX -- HTML like syntax

const jsxHeading = <h1>JSX Heading</h1>


// React Component  --> i.Class based component ii.Functional component.

const HeadingComponent = () =>{
    return <h1>This is a heading Component.</h1>
}

// Component Composition

const HeaderOne = () => (
    <h1>This is HeaderOne.</h1>
)

// So this HeaderTwo component which is using HeaderOne component inside it ,so this is called component composition.
const HeaderTwo = () => (
    <>
        <HeaderOne/>
        <h1>This is HeaderTwo.</h1>
    </>
)