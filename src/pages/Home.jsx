import React, { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/properties")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProperties(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des propriétés :", error);
      });
  }, []);

  return (
      <div className="banner">
        <div className="banner_text">
          <h1>Immo Agency</h1>
        </div>
        <img
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          className="banner_img"
          alt="desk with a lamp and a plant"
        />
      <div className="card-container">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
