import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'Full Stack Web Dev', description: 'MERN Stack mastery.', price: '$100' },
  { id: 2, title: 'DevOps Bootcamp', description: 'Learn Docker, Kubernetes, CI/CD.', price: '$120' },
  { id: 3, title: 'System Design', description: 'Scale applications to millions of users.', price: '$150' },
];

const Courses = () => {
  return (
    <div className="courses-page">
      <h2>Our Courses</h2>
      <div className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <span className="price">{course.price}</span>
            <Link to={`/enroll/${course.id}`}>
              <button>Enroll Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
