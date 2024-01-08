/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 * </div>
 *
 *  Siblings
 *
 *
 *  <div id="parent">
 *      <div id="child">
 *          <h1>I am a h1 tag.</h1>
 *          <h2>I am a h2 tag.</h2>
 *      </div>
 * </div>
 *
 */

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

const divHeading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "header" }, "Hi nested h1 tag inside react")
  )
);

//Siblings

const siblings = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi I am a h1 tag"),
    React.createElement("h2", {}, "Hi I am a h2 tag"),
  ])
);

const siblingsTwo = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi I am a h1 tag"),
    React.createElement("h2", {}, "Hi I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi I am a h1 tag"),
    React.createElement("h2", {}, "Hi I am a h2 tag"),
  ]),
]);

root.render(siblingsTwo);
