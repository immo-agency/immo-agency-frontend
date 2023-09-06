import React from 'react';

const PropertyCard = ({ property }) => {

  return (
    <div className="card">
      {/* <img src={property.image_url} className="card-img-top" alt="property image" /> */}
      <div className="card-body">
        <h5 className="card-title">{property.name}</h5>
        <p className="card-text">{property.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price: {property.price} €</li>
        <li className="list-group-item">Location: {property.city_id}</li>
      </ul>
      <div className="card-body">
        <a href={`/properties/${property.id}`} className="card-link">See More</a>
      </div>
    </div>
  );
};

export default PropertyCard;
