import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Enroll = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [courseTitle, setCourseTitle] = useState('');

  // Mock course data - in a real app, fetch this from an API or context
  const courses = [
    { id: 1, title: 'Full Stack Web Dev', price: '$100' },
    { id: 2, title: 'DevOps Bootcamp', price: '$120' },
    { id: 3, title: 'System Design', price: '$150' },
  ];

  useEffect(() => {
    const course = courses.find(c => c.id === parseInt(courseId));
    if (course) {
      setCourseTitle(course.title);
    } else {
      setCourseTitle('Unknown Course');
    }
  }, [courseId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Successfully enrolled in ${courseTitle}!`);
    navigate('/courses');
  };

  return (
    <div className="enroll-page">
      <h2>Enroll in {courseTitle}</h2>
      <form onSubmit={handleSubmit} className="enroll-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" required placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" required placeholder="john@example.com" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="+1 234 567 8900" />
        </div>
        <div className="payment-info">
          <h3>Payment Details</h3>
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="0000 0000 0000 0000" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Expiry</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className="form-group">
              <label>CVC</label>
              <input type="text" placeholder="123" />
            </div>
          </div>
        </div>
        <button type="submit" className="submit-btn">Complete Enrollment</button>
      </form>
    </div>
  );
};

export default Enroll;
