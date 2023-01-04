import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './styles.css';


/* Destructuring components below */
import {
  NavBar,
  Posts,
  User,
  Home,
  Register
} from './Components';

import {
  getPosts
} from './api';



const App = () => {
  const [Posts, setPosts] = useState([]);

async function fetchPosts() {
  const results= await getPosts()
  setPosts(results.data.post);
} 

useEffect(() => {
  fetchPosts()
}, [])
  

  return (
    <div>
      <NavBar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/Posts' element={<Posts posts={Posts} />} />
        <Route path='/User' element={<User />} />
        <Route path ='/Register' element={<Register />} />
      </Routes>
    </div>
  );
}

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);
root.render(
 <BrowserRouter>
   <App />
 </BrowserRouter>
);
/* Make BrowserRouter the highest level by wrapping App with BrowserRouter*/
/*
COMPONENTS
- NavBar
- Posts
- User
- Add Post
- Login
- User Registration
*/
