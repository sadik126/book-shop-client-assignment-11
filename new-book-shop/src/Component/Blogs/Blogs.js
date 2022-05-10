import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>here is my blog</h1>
            <h1>Difference between javascript and nodejs</h1>
            <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>

            <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>

            <h1> What is the purpose of jwt and how does it work</h1>
            <p>JSON Web Token (JWT) is a JSON encoded representation of a claim(s) that can be transferred between two parties. The claim is digitally signed by the issuer of the token, and the party receiving this token can later use this digital signature to prove the ownership on the claim.

                JWTs can be broken down into three parts: header, payload, and signature. Each part is separated from the other by dot (.), and will follow the below structure:

                Header.Payload.Signature</p>

            <h1>Differences between sql and nosql databases.</h1>
            <p>Structured Query language (SQL) pronounced as “S-Q-L” or sometimes as “See-Quel” is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables.

                SQL programming can be effectively used to insert, search, update, delete database records.

                That doesn’t mean SQL cannot do things beyond that. It can do a lot of things including, but not limited to, optimizing and maintenance of databases.

                Relational databases like MySQL Database, Oracle, Ms SQL Server, Sybase, etc. use SQL.</p>

            <p>NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day.

                NoSQL database stands for “Not Only SQL” or “Not SQL.” Though a better term would NoREL NoSQL caught on. Carl Strozz introduced the NoSQL concept in 1998.

                Traditional RDBMS uses SQL syntax to store and retrieve data for further insights. Instead, a NoSQL database system encompasses a wide range of database technologies that can store structured, semi-structured, unstructured and polymorphic data.</p>
        </div>
    );
};

export default Blogs;