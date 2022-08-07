import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={StreamList}></Route>
          <Route path='/streams/new' exect component={StreamCreate}></Route>
          <Route path='/streams/edit' exect component={StreamEdit}></Route>
          <Route path='/streams/delete' exect component={StreamDelete}></Route>
          <Route path='/streams/show' exect component={StreamShow}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
