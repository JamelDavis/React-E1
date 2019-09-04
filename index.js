import React from 'react'
import ReactDom from 'react-dom'
import './index.css';

//stateless functional component
//always return JSX

function Books() {
return (
<section className="books">
<p>my content is going to be here</p>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    </section>
    );
}
const Book = () => {
    return (
    <article className="book">
        <CoverImage />
        <Title />
        <Author />
    </article>
    );
};
const CoverImage = () => (
<img
Width="200"
src="https://images-na.ssl-images-amazon.com/images/I/81TGQ1cTcrL._AC_SR201,266_.jpg" alt="The Very Hungry Caterpillar"></img>
);
const Title = () => (
<h1 style={{fontSize:'2rem', color: "red" }}>The Wonkey Donkey</h1>
);
const authorStyle = {
    letterSpacing:"10px", 
    color: "green"
};

const Author = () => <p style={authorStyle}>by Eric Carle</p>;

ReactDom.render(<Books />, document.getElementById("root"));