import React, { useEffect, useState } from 'react';
import NoteCard from '../../../componets/Note/Note-card';

function Dashboard() {
    const [notes, setNotes] = useState('');

    useEffect(() => {
        fetch('http://localhost:31111/server/notes')
            .then(response => response.json())
            .then(dataNotes => setNotes(dataNotes));

    }, [])

    if (!notes) {
        return <h1>No existing notes</h1>
    }

    return (
        <div>

            {notes.map((note, index) => (
                <NoteCard
                    key={note._id || index}
                    _id={note._id}
                    title={note.title}
                    description={note.description}
                />
            ))}

        </div>
    );
}

export default Dashboard;