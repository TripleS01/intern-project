import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import PathTo from '../../utils/pathTo';

function CreateNotePage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false);

    const onCreateNote = async (event) => {
        event.preventDefault();

        if (!title) {
            setError('Title is required');
            return
        }

        if (!description) {
            setError('Title is required');
            return
        }

        setError('');

        const response = await fetch('http://localhost:31111/server/notes/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        });

        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={PathTo.Dashboard} />
    }

    return (
        <div>
            <form onSubmit={onCreateNote}>

                <input
                    type="text"
                    placeholder='Title'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <input
                    type="text"
                    placeholder='Description'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                {error && <p>{error}</p>}

                <button type='submit'>Create Note</button>
                <Link to={PathTo.Dashboard}>
                    <button>Cancel</button>
                </Link>

            </form>

        </div>
    );
}

export default CreateNotePage;