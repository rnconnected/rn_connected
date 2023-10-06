import React, { useState, useEffect } from 'react';
import './viewConnect.css'; // Import your CSS file for styling

const ConnectionContainer = () => {
  // Sample user data for demonstration
  const inviteUsers = [
    {
      id: 1,
      name: 'John Doe',
      profilePicture: 'john-doe.jpg',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Samson Obadare',
      profilePicture: 'jane-smith.jpg',
      status: 'Pending',
    },
    // Add more user objects as needed
  ];

  const [isLoading, setIsLoading] = useState(true); // State for the loading indicator

  const handleAccept = (userId) => {
    // Implement the logic to accept the user invitation here
    console.log(`Accepted invitation for user with ID ${userId}`);
  };

  const handleReject = (userId) => {
    // Implement the logic to reject the user invitation here
    console.log(`Rejected invitation for user with ID ${userId}`);
  };

  useEffect(() => {
    // Simulate a 5-second delay before hiding the loading indicator
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="user-invite-container">
      {isLoading ? (
        <div className="loading-skeleton">
          <div className="loading-skeleton-card"></div>
          <div className="loading-skeleton-card"></div>
          <div className="loading-skeleton-card"></div>
          <div className="loading-skeleton-card"></div>
          <div className="loading-skeleton-card"></div>
        </div>
      ) : (
        <>
          <h2>New Invitation</h2>
          <div className="user-list">
            {inviteUsers.map((user) => (
              <div className="user-card" key={user.id}>
                <div className="user-card-info">
                  <img src={user.profilePicture} alt={user.name} className="user-avatar" />
                  <div className="user-info">
                    <h3>{user.name}</h3>
                    <p>Status: {user.status}</p>
                  </div>
                </div>
                <div className="user-actions">
                  <button className="accept-btn" onClick={() => handleAccept(user.id)}>Accept</button>
                  <button className="reject-btn" onClick={() => handleReject(user.id)}>Reject</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ConnectionContainer;
