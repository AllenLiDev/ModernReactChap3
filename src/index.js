//import
import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';

//setup component
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 5:45PM" avatar={Faker.image.avatar()} comment="Wow Nice Post!"/>
            <CommentDetail author="Dave" timeAgo="Today at 3:45PM" avatar={Faker.image.avatar()} comment="Very Interesting!" />
            <CommentDetail author="Jason" timeAgo="Yesterday at 11:49PM" avatar={Faker.image.avatar()} comment="Boring AF" />
        </div>
    );
};

//expose component
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);