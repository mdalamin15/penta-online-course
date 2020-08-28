import React from 'react';
import './Course.css'

const Course = (props) => {
    console.log(props);
    const {Name,price,Duration} = props.course;
    const handleAddCourse = props.handleAddCourse;
    
    return (
        <div className="course-part">
        
            <h2>{Name}</h2>
            <p>price:${price}</p>
            <p>Course Time:{Duration}</p>
            <button className="enroll-now" onClick={() => handleAddCourse(props.course)}>Enroll Now</button>
             
        </div>
       
        
        
    );
};

export default Course;