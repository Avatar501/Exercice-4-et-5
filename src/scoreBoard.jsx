import React, { useState } from 'react';
import Participant from './Participant';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ScoreBoard() {
    const [participants, setParticipants] = useState([
        { id: 1, name: 'Alice', score: 0 },
        { id: 2, name: 'Bob', score: 0 },
        { id: 3, name: 'Charlie', score: 0 },
    ]);

    const [sortOrder, setSortOrder] = useState('asc');

    // Function to increase the score
    const updateScore = (id) => {
        setParticipants((prevParticipants) =>
            prevParticipants.map((participant) =>
                participant.id === id
                    ? { ...participant, score: participant.score + 1 }
                    : participant
            )
        );
    };

    // Function to sort participants
    const sortParticipants = () => {
        const sortedParticipants = [...participants].sort((a, b) => {
            return sortOrder === 'asc' ? a.score - b.score : b.score - a.score;
        });
        setParticipants(sortedParticipants);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <Container className="mt-5 p-3 border rounded shadow-lg">
            <h2 className="text-center mb-4">Tableau des Scores</h2>
            <Button variant="info" className="mb-3" onClick={sortParticipants}>
                Trier par score ({sortOrder === 'asc' ? 'Croissant' : 'Décroissant'})
            </Button>
            <div className="list-group">
                {participants.map((participant) => (
                    <Participant
                        key={participant.id}
                        name={participant.name}
                        score={participant.score}
                        onUpdateScore={() => updateScore(participant.id)}
                    />
                ))}
            </div>
        </Container>
    );
}

export default ScoreBoard;
