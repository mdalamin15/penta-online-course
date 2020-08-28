import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './Data/Data.json';
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';
import Cart from './Components/Cart/Cart';

function App() {

  console.log(data);
  const[course,setCourse] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(() => {
    setCourse(data);

  },[])

  const handleAddCourse = (course) => {
   const newCart = [...cart, course];
   setCart(newCart);  
  }

  return (
    <div >
       
       <Header></Header>
       <h2>Total courses:{course.length}</h2>
       <h4>Enrolled Courses:{cart.length}</h4>
       
       <Cart cart={cart}></Cart>
       <button className="pay-now">
         Pay Now
       </button>
       {
         course.map(course=> <Course course={course} handleAddCourse={handleAddCourse}></Course>)
       }
       
      
    </div>
  );
}

export default App;
