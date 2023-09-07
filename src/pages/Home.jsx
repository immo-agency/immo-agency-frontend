import React, { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import imgBanniere from "../assets/house.png"

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
    <>
      <div className="banner">
          <img
            src={imgBanniere}
            className="banner_img"
            alt="Maison en location"
          />
          <div className="banner_text">
            <h1 className="banner_text_title">IMMO AGENCY,</h1>
            <p className="banner_text_description">L'agence idéale pour trouver le bien immobilier de vos rêves</p>  
          </div>
      </div>
      <div className="card-container">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </>
  );
}
