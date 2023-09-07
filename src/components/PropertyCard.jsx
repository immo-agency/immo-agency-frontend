import React from 'react';

const PropertyCard = ({ property }) => {

  return (
    <div className="card">
      <img src= "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" className="card_img" alt="property image" />
      <div className="card_body">
        <h5 className="card_body_title">{property.titre}</h5>
        <p className="card_body_text">{property.description}</p>
      
      <ul className="list">

        <li className="list_item">Price: {property.prix} €</li>
        <li className="list_item">Location: {property.city_name}</li>
      </ul>
        <a href={`/properties/${property.id}`} className="card_link">See More</a>
      </div>
    </div>
  );
};

export default PropertyCard;
