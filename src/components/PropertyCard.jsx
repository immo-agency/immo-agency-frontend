import React from 'react';

const PropertyCard = ({ property }) => {

  return (
    <div className="card">
      <img src= "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" className="card_img" alt="property image" />
      <div className="card_body">
        <h6 className="card_body_title">{property.titre}</h6>
        <p className="card_body_text">{property.description}</p>
      
      <ul className="list">

        <li className="list_item">Prix: {property.prix} €</li>
        <li className="list_item">Lieu: {property.city_name}</li>
      </ul>
      </div>
      <a href={`/properties/${property.id}`} className="card_link">Voir plus</a>
    </div>
  );
};

export default PropertyCard;
