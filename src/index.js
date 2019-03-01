//import
import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//setup component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 5:45PM" avatar={Faker.image.avatar()} comment="Wow Nice Post!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Dave" timeAgo="Today at 3:45PM" avatar={Faker.image.avatar()} comment="Very Interesting!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jason" timeAgo="Yesterday at 11:49PM" avatar={Faker.image.avatar()} comment="Boring AF" />
            </ApprovalCard>
        </div>
    );
};

//expose component
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);