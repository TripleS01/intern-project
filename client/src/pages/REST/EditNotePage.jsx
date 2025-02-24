import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PathTo from '../../utils/pathTo';

function EditNotePage() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:31111/server/notes/${id}`)
            .then(response => response.json())
            .then(dataNote => {
                setTitle(dataNote.title);
                setDescription(dataNote.description);
            });
    }, [id])

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

        const response = await fetch(`http://localhost:31111/server/notes/edit/${id}`, {
            method: 'PUT',
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

                <button type='submit'>Save Note</button>
                <Link to={PathTo.Notes + `/${id}`}>
                    <button>Cancel</button>
                </Link>

            </form>

        </div>
    );
}

export default EditNotePage;