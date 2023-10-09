import React from 'react';
import './suggestedEdu.css'; // Import your CSS file

const SuggestedEdu = ({ imageUrl, title, publishedDate, runtime }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="course-details">
        <h2 className="course-title">{title}</h2>
        <p className="published-date">Published: {publishedDate}</p>
        <p className="runtime">Runtime: {runtime}</p>
      </div>
      <div className="divider"></div>
      <button className="process-button">Process</button>
    </div>
  );
};

function SuggestedCourses() {
  const courses = [
    {
      title: 'Course 1',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      publishedDate: '2023-10-06',
      runtime: '3 hours',
    },
    {
      title: 'Course 2',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      publishedDate: '2023-10-07',
      runtime: '2.5 hours',
    },
    {
      title: 'Course 3',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      publishedDate: '2023-10-08',
      runtime: '4 hours',
    },
  ];

  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <SuggestedEdu
          key={index}
          title={course.title}
          imageUrl={course.imageUrl}
          publishedDate={course.publishedDate}
          runtime={course.runtime}
        />
      ))}
    </div>
  );
}

export default SuggestedCourses;
