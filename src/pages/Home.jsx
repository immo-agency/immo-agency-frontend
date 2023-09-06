import React, { useEffect, useState } from 'react';
import PropertyCard from "../components/PropertyCard";

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {

    fetch('http://127.0.0.1:3000/properties')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProperties(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des propriétés :', error);
      });
  }, []);

  return (
    <div className='card-container'>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
