import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

export default function FormProperty() {

    const [titre, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [city_name, setLocation] = useState('');
    const [prix, setPrice] = useState('');
    const [error, setError] = useState(null);


    const navigate = useNavigate();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const FormData = { property: { titre, description, city_name, prix} };   

        try {

            const token = Cookies.get('token');
        
          const response = await fetch('http://127.0.0.1:3000/properties', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(FormData),
          });
      
          if (response.ok) {
            const userDataResponse = await response.json();
            console.log(userDataResponse)
            setTitle('');
            setDescription('');
            setLocation('');
            setPrice('');
            navigate('/')
            console.log('Creation reussie')
          } else {
            console.error('Échec de la creation de location');
            setError('Échec de la creation de location');
            setTitle('');
            setDescription('');
            setLocation('');
            setPrice('');
          }
        } catch (error) {
          console.error('Erreur lors de la requête:', error);
          setError('Erreur de connexion au serveur. Veuillez vérifier votre connexion Internet.');
        }
      };

  return (
    <section>
      <div className='box'>
        <h2>Ajouter votre Location</h2>
        <form className='box_form' onSubmit={handleSubmit}>
        {error && (
            <div className="alert" role="alert">
              {error}
            </div>
          )}
          <label htmlFor="title">Titre :</label>
            <div className='inputBox'>
                <input
                    className='inputBox_input'
                    type="title"
                    id="title"
                    placeholder='Titre'
                    value={titre}
                    onChange={handleTitleChange}
                    required
                />
            </div>
            <label htmlFor="description">Description :</label>
            <div className='inputBox'>
                <input
                    className='inputBox_input'
                    type="description"
                    id="description"
                    placeholder='Description'
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                />
            </div>
            <label htmlFor="location">Location :</label>
            <div className='inputBox'>
                <input
                    className='inputBox_input'
                    type="location"
                    id="location"
                    placeholder='Location'
                    value={city_name}
                    onChange={handleLocationChange}
                    required
                />
            </div>
            <label htmlFor="price">Prix :</label>
            <div className='inputBox'>
                <input
                    className='inputBox_input'
                    type="price"
                    id="price"
                    placeholder='Prix'
                    value={prix}
                    onChange={handlePriceChange}
                    required
                />
            </div>
            <button type="submit" aria-label="Ajouter une Location" className='form-btn'>Ajouter</button>
        </form>
    </div>
  </section>
  )
}
