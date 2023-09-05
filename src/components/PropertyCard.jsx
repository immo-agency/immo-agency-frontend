import React from 'react';
// import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {

  return (
    <div className="card" style={{ width: '18rem' }}>
      {/* <img src={property.image_url} className="card-img-top" alt="property image" /> */}
      <div className="card-body">
        <h5 className="card-title">{property.name}</h5>
        <p className="card-text">{property.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price: {property.price} €</li>
        <li className="list-group-item">Location: {property.city_id}</li>
        <li className="list-group-item">Available: {property.is_purchased}</li>
      </ul>
      <div className="card-body">
        <a href={`/properties/${property.id}`} className="card-link">See More</a>
        <a href={`/properties/${owner_id.id}`} className="card-link">See Owner</a>
      </div>
    </div>
  );
};

export default PropertyCard;

