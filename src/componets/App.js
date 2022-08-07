import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => {
  const pageOne = () => {
    return (
      <div>
        <h1>PAGEONE</h1>
        <Link to='/page'>Go to the SECOND page</Link>
      </div>
    );
  };
  const pageTwo = () => {
    return (
      <div>
        <h1>PAGE TWO</h1>
        <button>CLIKC ME</button>
        <Link to='/'>HOME PAGE</Link>
      </div>
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact component={pageOne} />
        <Route path='/page' component={pageTwo} />
      </BrowserRouter>
    </div>
  );
};
export default App;
