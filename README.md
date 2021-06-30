# Pod Meetings


Intro to React
1. What is JSX? What is the benefit of JSX?
    Syntax extension of javascript, to write html  like code in our javascript.
2. What is the virtual DOM? How does React use it?
    blueprint of webpage that allows us to use the developer tools.
    React render that content
3. What is props?
    You can pass values using props into components.
4. What is state? How can we change state?
    It is the current state of the component.
    we change by giving a set state {this.setState= {}}
5. How does a parent component communicate with a child component? What about a child to the parent?
    Passes a function through props
6. What triggers a re-render in a React component?
    Whenever there is a change of state and props
7. What is the difference between controlled and uncontrolled components?
    controlled- form data is handled by react component
    uncontrolled- form data is handled by DOM
8. What is the constructor function? What is super?
    To run super() which tells its going to change, and then to set state.
9. What function is mandatory in a class component?
    render()
10. What do class components return?
    It returns a react element
Async React and Lifecycle Methods
1. What are some lifecycle methods and when do they occur?
    constructor, render, componentDidMount
2. Which lifecycle method is mandatory? What does it do?
    render
3. When does the mounting phase occur? Which methods are fired off at this time?
    it is run first. it fires off constructor, super, render, componentDidMount
4. What about the updating phase?
    runs after mounting, and fires off setState, render, componentDidUpdate.
5. Why must we call super inside of the constructor? How many times does the constructor method get fired?
    to invoke constructor that is inherited from the component. fires only one time.
6. What can we return from the render method?
    react elements, DOM Updates, jsx, arrays, objects.
7. What is the difference between optimistic and pessimistic rendering?
    optimistic- assumes promise will be succesful and renders content
    pessimistic- do not update DOM untill succesful promise
8. What’s the difference between class and functional components?
    no render in a functional component
9. What is a presentational component? When would we use it?
    does not handle a change, display only
10. What is a container component? When do we use container components?
    handles changes(i.e forms)