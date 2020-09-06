import React  from 'react';
import './App.css'
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import PostDetails from './Component/PostDetails/PostDetails';



function App() {
  
 return (
    <Router>
    
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
         <Route exact path='/'>
            <Home></Home>
         </Route>
         <Route path='/post/:postId'>
             <PostDetails></PostDetails>
         </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
       
      

  );
}

export default App;
