# React Course

# Props --> Props stands for properties basically just like in function we pass arguments similarly props are arguments which we pass into the component.

# Config Driven UI --> Lets suppose the case of swiggy website they show offers and coupons based on your locations and every locations will have some differenet offers so the developer will not make different set of offers for each location ,they will be controlling the UI using data or using configs which will be different for different locations as provided by backend API's.

# Why we need to use the key in map function --> Supoose we have not given unique id to the div which we are rendering on the DOM inside map function and we want to add a new div at end to the map so react will not know where to add it it will re render all the existing div and then this new added div is also rendered,but when you give the key it will treat every div as a unique element and will only rendered the div which is updating. IN SHORT REACT DOES NOT UNIQUELY IDENTIFIES THE ELEMENT IT WILL RE-RENDER EVERTHING INSIDE THE CONTAINER IF WE DO NOT PASS THE KEY PROP.

# DO NOT USE INDEXES AS KEY--> Index as a key is an anti-pattern,but it is better than not using key.

# FOLDER STRUCTURE --> There is a convention that is followed when using react library, we generally keep our project code in src folder.

# PROJECT DETAILS

/\*\*

- Header
- -Logo
- -Nav Items
-
- Body
- -Search
- -RestaurantContainer
-      -RestaurantCard
-        -Image
-        -Name of Res,Rating,cusinies
-
- Footer
- -Copyright
- -Links
- -Address
- -Contact
  \*/

# default vs named export/import --> In a single file i can have only one default export.i.e. (export default YourComponent at end of the function) ,so named export is used here to export multiple function from one file.i.e (export const YourComponent = () => {}).Difference in importi g them default import --> import YourComponet from './YourComponent' && named import --> import {YourComponent} from './YourComponent'.

# React is fast of its ability to do DOM manipulations quickly(concept of virtual DOM).

# React and other JS libraries like angular are solving one issue which is keeping the UI and data layer in sync with each other.