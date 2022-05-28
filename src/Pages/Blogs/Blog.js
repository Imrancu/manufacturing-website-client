import React from 'react';

const Blog = ({blog}) => {
    const {question, answer} = blog;
    return (
        <div className="shadow-xl border p-6 rounded-xl my-5">
            <h2 className="card-title">{question}</h2>
            <p>{answer}</p>
        </div>
    );
};

export default Blog;