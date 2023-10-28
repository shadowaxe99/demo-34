```javascript
import React from 'react';

const Slide10 = () => {
  const teamMembers = [
    { role: 'CEO', experience: '20 years in AI' },
    { role: 'CTO', experience: '15 patents' },
  ];

  const renderTeamMembers = () => {
    return teamMembers.map((member, index) => (
      <div key={index}>
        <h3>{member.role}</h3>
        <p>{member.experience}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Meet the Innovators</h2>
      {renderTeamMembers()}
    </div>
  );
};

export default Slide10;
```
