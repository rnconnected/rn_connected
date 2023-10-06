import React, { useState } from 'react';
import './top_nav.css';
import UserInviteContainer from '../new_invite/newInvite';
import ConnectionContainer from '../viewConnections/viewConnect';

function MainComponent() {
  const [activeTab, setActiveTab] = useState('newInvite');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="navbar">
        <div
          className={`nav-item ${activeTab === 'newInvite' ? 'active' : ''}`}
          onClick={() => handleTabClick('newInvite')}
        >
          New Invite
        </div>
        <div
          className={`nav-item ${activeTab === 'connection' ? 'active' : ''}`}
          onClick={() => handleTabClick('connection')}
        >
          Connection
        </div>
      </div>

      {activeTab === 'newInvite' ? <UserInviteContainer /> : null}
      {activeTab === 'connection' ? <ConnectionContainer /> : null}
    </div>
  );
}

export default MainComponent;
