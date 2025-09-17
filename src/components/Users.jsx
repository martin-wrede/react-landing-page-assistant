import React from 'react';

const Users = ({ data }) => {
  return (
    <section className="features">
      <div className="container">
         <h2>{data.title}</h2> 
        {data.items.map((user, index) => (
          <div key={index} className="feature-item">
            <div className="feature-text">
              <h3>{user.title}</h3>
              <p>{user.description}</p>
            </div>
            <div className="feature-image-container">
              <img src={user.imageUrl} alt={user.title} className="feature-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Users;