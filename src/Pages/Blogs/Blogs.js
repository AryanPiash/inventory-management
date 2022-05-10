import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className="ques my-4 border rounded">
                <h3 className='p-4'>1. Difference between javascript and node js ?</h3>
                
                <div className="ans p-4">
                    <p>Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.It is basically used on the client-side.Javascript is used in frontend development.</p>
                    <p>NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs is used in server-side development.</p>
                </div>
            </div>
            <div className="ques my-4 border rounded">
                <h3 className='p-4'>2. When should you use node js and when should you use mongodb ?</h3>
                <div className="ans p-4">
                    <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>
                    <p>NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>
                </div>
            </div>
            <div className="ques my-4 border rounded">
                <h3 className='p-4'>3. Differences between sql and nosql databases ?</h3>
                <div className="ans p-4">
                    <p>SQL is relational database management system (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries</p>
                    <p>Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries</p>
                </div>
            </div>
            <div className="ques my-4 border rounded">
                <h3 className='p-4'>4. What is the purpose of jwt and how does it work ?</h3>
                <div className="ans p-4">
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;