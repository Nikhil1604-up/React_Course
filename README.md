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

# Whenever a state variable changes/updates react will rerender the components.

# Reconciliation algorithm (react fiber) --> Read it online.

# Virtual DOM --> It is a object reprenstation of an actual DOM,it is nothing but a normal JS object.

# Diffing algorithm --> It basically tries out to find the difference between the old virtual DOM and new virtual DOM. It will calculate the difference and actually update the DOM on every render cycle.

## EP 6 --> Exploring thw world

# Monolith architecture --> All the BE,FE,Authrization,Database etc all services are written together for a project.

# Microservice architecture --> Here we have different service for different job and all these micro services talk to each other depending upon the use cases ,for each and every small thing we have a different project and this is known as seperationof concerns and follows single responsiblity principle where each and every services has it's own job.

# API calls --> two ways to call

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

## EP 7 --> Finding the path.

# useEffect ,(dependency)

## 1.useEffect with no dependency --> it will be called every time when the page is rendered.

## 2.useEffect with [] dependency --> will get called only on initial render.

## 3. useEffect with [dependency] --> will get called always when the dependency changes.

## Note --> On initial render regardless of dependency useEffect gets called.

# React Router

# createBrowserRouter --> It will create a routing configuration for us.Basically it takes array of objects.[{path:'urlPath',element:'elementToRender'}]

# RouterProvider --> Basically when we render our root component to the DOM,we provider this RouterProvider component there at root.render().

# useRouteError --> useRouteError is a hook given by react router dom which give us more detail about the route.

# Outlet --> React router dom gives us a dynamic component wihich will get replaced depending upon the path.

# Navigating to some other route(Link) --> You can say it is very easy just use the anchor tag ,but when we use the anchor tag our whole page gets refreshed which we do not want ,in react we can navigate to some other routes without refreshing the page we can use Link component provided by react router dom.

# Single Page Application(SPA) --> In react we just have a single page application which means that when the routing is changed only the required component is rendered and getting interchanged,whole page is not loaded again and again.

## Two types of routing

- Client Side Routing --> Here we are using client side routing we have the component inside our UI and when we navigate without making any network call the component is loaded.
- Server Side Routing --> Here when we use to naviagate to different routes network call is being made and data is fetched from server and then data is rendered on to the UI(used in past).

# EP-8 (Lets get classy)

## Class based components --> It is basically a class which extends React.Component and has a render method inside it which returns some JSX.

## Receiving props inside class based component --> We need to use a constructor and inside the constructor need to use super keyword,then we can access the props using this keyword like this.props.name

- constructor(props){
  super(props)
  }
- Then use the props --> {this.props.name}

- For using state --> constructor(props){
  super(props)
  this.state={
  count:0,
  }
  }

## In functional component we generally use different state variable for different purpose but at the end react converts all the state variables into a single object.

## React component Lifecycle --> 1.Loading/Mounting/Render on web page are one and the same thing.

# 2. Whenever a class based componet loads or new instance of class is created/instantiated then firstly the constructor is called and then the render method is called. (Constructor called > Render method called)

# Note -> class About extends React.Component , instead of this we can write like this also class About extends Component. and use import like this import {Component} from 'react'.

# 3. ComponentDidMount() --> Class based component also has some more important methods ,lets first explore componentDidMount(). (Constructor --> render method --> componentDidMount()), firstly constructor is called then the render method is called and once this component is mount on the DOM then componentDidMount() is called.

# Note --> Parent class based component and it has a child class based component and both has componentDidMount so what will be the order of calling the method. --> (Parent constructor > Parent render > Child constructor > Child render > Child componentDidMount() > Parent componentDidMount()).

# Note --> Why API call is made in componentDidMount() ,because react wants to render the component as quickly as possible we do not want to wait for the API call to complete and then render the component ,we want the component to render quickly then make an API call fill the data of the API call,i.e.,rerender the component.

# 4. Parent with multiple child lifecycle method -->

-Parent constructor  
-Parent render

-Child 1 constructor
-Child 1 render
-Child 1 componentDidMount

-Child 2 constructor
-Child 2 render
-Child 2 componentDidMount

-Parent componentDidMount

# Above lifecycle is not correct,but why?

## React is mounted/loaded on web page in two phases

    1. Render Phase (constructor > render) --> Pure has no side effects.
    2. Commit Phase (React updates DOM and refs > componentDidMount) --> Can work with DOM,run side effects.
    So in render phase constructor and then render is called and component is loaded on to the DOM ,then in commit phase side effects/componentDidMount is called.

# Correct order

-Parent constructor  
-Parent render

-Child 1 constructor
-Child 1 render

-Child 2 constructor
-Child 2 render

-Child 1 componentDidMount
-Child 2 componentDidMount

-Parent componentDidMount

# Note --> For every parent,every child component in react goes through this lifecycle.

# So we got the answer this lifecycle order is due to react render and commit phase,but why react is doing that?

- So in commit phase the DOM manipulation takes place ,and that is an expensive process which takes time so react tries to batch all the component in commit phase to optimise the mounting/loading of component on the web page.
