//import
import React from 'react';
import ReactDOM from 'react-dom';

//setup component
const App = () => {
    return (
        <div>Welcome!</div>
    );
};

//expose component
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);