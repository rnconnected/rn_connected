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
      title: 'Benefits Of Breastfeeding',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      publishedDate: 'Feb 13 2023 (Nursing CE)',
      runtime: '3 hours',
    },
    {
      title: 'The Nutrition-Focused Physical Exam',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      publishedDate: 'Jul 25 2022 (Nursing world)',
      runtime: '2.5 hours',
    },
    {
      title: '(CME) Diabetes and Nutrition',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      publishedDate: 'Jul 25 2023 (Nursingtimesjob)',
      runtime: '4 hours',
    },
    {
      title: 'The Nutrition-Focused Physical Exam',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      publishedDate: '2 weeks workshop by Nursing world',
      runtime: '4 hours',
    },
  ];

  return (
    <div className="course-list">
      <div className='suggested_course'>
        <p>Suggested Courses</p>
      </div>
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
