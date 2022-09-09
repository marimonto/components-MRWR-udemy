import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './components/CommentDetail';
import { faker } from '@faker-js/faker';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Sam'
        timeAgo='Today at 4:45PM'
        avatar={faker.image.avatar()}
        content='Nice blog post!' />
      <CommentDetail
        author='Alex'
        timeAgo='Today at 2:00AM'
        avatar={faker.image.avatar()}
        content='I like this subject' />
      <CommentDetail
        author='Jane'
        timeAgo='Yesterday at 5:00PM'
        avatar={faker.image.avatar()}
        content='I like the writing' />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

