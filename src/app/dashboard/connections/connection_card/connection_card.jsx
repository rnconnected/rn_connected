import React, { useState } from 'react';
import './connection_card.css'; // Import your CSS file for styling

const UserInviteContainer = () => {
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
        {
            id: 3,
            name: 'Oluwaseyi Adebayo',
            profilePicture: 'jane-smith.jpg',
            status: 'Pending',
        },
        {
            id: 4,
            name: 'Oluwasorefunmi Adebayo',
            profilePicture: 'jane-smith.jpg',
            status: 'Pending',
        },
        {
            id: 5,
            name: 'Chimaobim Gbadamosi',
            profilePicture: 'jane-smith.jpg',
            status: 'Pending',
        },
        {
            id: 6,
            name: 'Jane Smith',
            profilePicture: 'jane-smith.jpg',
            status: 'Pending',
        },
        // Add more user objects as needed
    ];

    const handleAccept = (userId) => {
        // Implement the logic to accept the user invitation here
        console.log(`Accepted invitation for user with ID ${userId}`);
    };

    const handleReject = (userId) => {
        // Implement the logic to reject the user invitation here
        console.log(`Rejected invitation for user with ID ${userId}`);
    };

    return (
        <div className="user-invite-container">
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
        </div>
    );
};

export default UserInviteContainer;
