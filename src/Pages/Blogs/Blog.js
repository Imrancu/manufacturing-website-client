import React from 'react';

const Blog = ({blog}) => {
    const {question, answer} = blog;
    return (
        <div class="shadow-xl border p-6 rounded-xl my-5">
            <h2 class="card-title">{question}</h2>
            <p>{answer}</p>
        </div>
    );
};

export default Blog;