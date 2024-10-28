import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Participant({ name, score, onUpdateScore }) {
  return (
    <div className="d-flex justify-content-between align-items-center border p-2 mb-2 rounded">
      <span className="font-weight-bold">{name}</span>
      <span className="text-primary">{score}</span>
      <Button variant="primary" onClick={onUpdateScore}>+1</Button>
    </div>
  );
}

export default Participant;
