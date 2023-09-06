import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="card">
      <img src= "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" className="card-img-top" alt="property image" />
      <div className="card-body">
        <h5 className="card-title">{property.titre}</h5>
        <p className="card-text">{property.description}</p>
      </div>
      <ul className="list-group">
        <li className="list-group-item">Price: {property.prix} €</li>
        <li className="list-group-item">Location: {property.city_name}</li>
      </ul>
      <div className="card-body">
        <a href={`/properties/${property.id}`} className="card-link">See More</a>
      </div>
    </div>
  );
};

export default PropertyCard;
