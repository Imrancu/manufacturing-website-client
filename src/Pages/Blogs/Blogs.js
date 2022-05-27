import React, { useEffect, useState } from 'react';
import Blog from './Blog';


const blogs = [
    {
        question: 'How will you improve the performance of a React Application?',
        answer: 'If we follow some steps then we can optimize performance of react application. Most useful steps I showed here. If we can use custom hooks for not repeating codes. Make the application into small pieces fo component and try to stop repeating code. We can use some npm packages like react hooks form, react query to use the power of those packages so that we can minimize writing more code.'
    },
    {
        question: 'What are the different ways to manage a state in a React application?',
        answer: 'Managing state in React apps isn\'t as simple as using useState. There are four main types of state ywe need to properly manage in our React apps. 1. Local state is most often managed in React using the useState hook. 2.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. 3.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. 4. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state.'
    },
    {
        question: 'How does prototypical inheritance work?',
        answer: 'JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied. Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values). JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.'
    },
    {
        question: 'Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?',
        answer: 'It is all about Updating phase. when we update the state of a component all it\'s children are going to be rendered as well. or our entire component tree rendered. but when i say our entire component tree is rendered that doesn\’t mean that the entire DOM is updated. when a component is rendered we basically get a react element, so that is updating our virtual dom. product = [...] means spread operator, it just copy any part of an array but setState is used to render full array.'
    },
    {
        question: 'How does prototypical inheritance work?',
        answer: 'A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs. Testing a code early on can help to define what that piece of code is really responsible for.'
    },
]

const Blogs = () => {
    const [myBlogs, setMyBlogs] = useState([]);
    useEffect(()=>{
        fetch(blogs)
        .then(res => res.json())
        .then(data => setMyBlogs(data))
    },[])
    return (
        <div className='px-20'>
            <h1 className='text-3xl text-center font-semibold my-7'>My Blogs Here</h1>
            <div class="gap-6 bg-base-100 shadow-xl grid lg:grid-cols-2">
                {
                    blogs.map((blog, index) => <Blog
                    key={index}
                    blog={blog}
                    />)
                }
            </div>
        </div>
    );
};

export default Blogs;