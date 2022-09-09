import React from 'react';
import ReactDOM from 'react-dom/client';
import { faker } from '@faker-js/faker';
import ApprovalCards from './components/ApprovalCard';
import CommentDetail from './components/CommentDetail';
import './style/App.css'

const App = () => {
  return (
    <div className='ui container comments'>
      <div className='ui cards'>
        <ApprovalCards>
          <CommentDetail author='Sam'
            timeAgo='Today at 4:45PM'
            avatar={faker.image.avatar()}
            content='Nice blog post!' /></ApprovalCards>
        <ApprovalCards>
          <CommentDetail
            author='Alex'
            timeAgo='Today at 2:00AM'
            avatar={faker.image.avatar()}
            content='I like the subject' /></ApprovalCards>
        <ApprovalCards>
          <CommentDetail
            author='Jane'
            timeAgo='Yesterday at 5:00PM'
            avatar={faker.image.avatar()}
            content='I like the writing' /></ApprovalCards>
      </div>

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

