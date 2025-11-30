import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { 
    id: 1, 
    title: 'Full Stack Web Dev', 
    description: 'MERN Stack mastery.', 
    price: '$100',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop'
  },
  { 
    id: 2, 
    title: 'DevOps Bootcamp', 
    description: 'Learn Docker, Kubernetes, CI/CD.', 
    price: '$120',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop'
  },
  { 
    id: 3, 
    title: 'System Design', 
    description: 'Scale applications to millions of users.', 
    price: '$150',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
  },
];

const Courses = () => {
  return (
    <div className="courses-page">
      <h2>Our Courses</h2>
      <div className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <span className="price">{course.price}</span>
              <Link to={`/enroll/${course.id}`}>
                <button>Enroll Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
