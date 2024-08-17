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

# React Hooks (useState,useEffect etc) --> A react hook is just a normal JS function which is given to us by react it is prebuilt, thr only thing is that it is a utility function.

# useState --> Super powerful react variables , 
  ## why it is called a state variable because it maintains state of our component.
  ## Its scope is inside the component in which it is used.

# Whenever a  state variable changes/updates react will rerender the components.

# Reconciliation algorithm (react fiber) --> Read it online. 

# Virtual DOM --> It is a object reprenstation of an actual DOM,it is nothing but a normal JS object. 

# Diffing algorithm --> It basically tries out to find the difference between the old virtual DOM and new virtual DOM. It will calculate the difference and actually update the DOM on every render cycle.

## EP 6 --> Exploring thw world

# Monolith architecture --> All the BE,FE,Authrization,Database etc all services are written together for a project.

# Microservice architecture --> Here we have different service for different job and all these micro services talk to each other depending upon the use cases ,for each and every small thing we have a different project and this is known as seperationof concerns and follows single responsiblity principle where each and every services has it's own job.

# API calls  --> two ways to call 
  1.Page loads --> (wait for 500ms) API call success --> render the data on UI.
  2.Page loads --> Render the UI --> API call success --> re render data on UI.
  will be following the second approach

# useEffetc(()=>{
    console.log('useEffect called here')
  },[])
  ## The above empty dependency useEffect will be called as soon as the UI is rendered on the page.

# Now to fetch data from the API we will be using fetch() 
  NOTE--> fetch() is given by the browsers and not by javascript.

# Suppose we have a let variable named btnName which is initially assigned to a value 'login' and i have a click handler on a button which updates the btnName to logout when i click it athough btnName is changing/updating to logout but our button is still showing 'login' why?? --> because the page has not rendered again /updated again when the btnName changes so therfore so change from login to logout on UI we need to use state.

# So we have used the state variable and when the state is updated not only the login button updates but our whole header component updates. 

# Whenever state variables update,react triggers a reconciliation cycle(re renders the component).
