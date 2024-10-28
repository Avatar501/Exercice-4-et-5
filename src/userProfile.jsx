import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function UserProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [themeColor, setThemeColor] = useState('#ffffff');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleColorChange = (e) => setThemeColor(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Informations mises à jour !");
  };

  return (
    <Container 
      className="p-5 mt-3" 
      style={{ backgroundColor: themeColor, borderRadius: '10px' }}
    >
      <h2>Profil Utilisateur</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control 
            type="text" 
            value={name} 
            onChange={handleNameChange} 
            placeholder="Entrez votre nom"
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
            placeholder="Entrez votre email"
          />
        </Form.Group>

        <Form.Group controlId="formThemeColor" className="mb-3">
          <Form.Label>Couleur de thème</Form.Label>
          <Form.Control 
            type="color" 
            value={themeColor} 
            onChange={handleColorChange} 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Mettre à jour
        </Button>
      </Form>

      <div className="mt-4">
        <h4>Aperçu du Profil</h4>
        <p><strong>Nom :</strong> {name || "Non renseigné"}</p>
        <p><strong>Email :</strong> {email || "Non renseigné"}</p>
      </div>
    </Container>
  );
}

export default UserProfile;
