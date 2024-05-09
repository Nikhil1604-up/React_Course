# React Course

   # Props --> Props stands for properties basically just like in function we pass arguments similarly props are arguments which we pass into the component.

   # Config Driven UI --> Lets suppose the case of swiggy website they show offers and coupons based on your locations and every locations will have some differenet offers so the developer will not make different set of offers for each location ,they will be controlling the UI using data or using configs which will be different for different locations as provided by backend API's.

   # Why we need to use the key in map function --> Supoose we have not given unique id to the div which we are rendering on the DOM inside map function and we want to add a new div at end to the map so react will not know where to add it it will re render all the existing div and then this new added div is also rendered,but when you give the key it will treat every div as a unique element and will only rendered the div which is updating.