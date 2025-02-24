import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PathTo from '../../utils/pathTo';

function NotePage() {
    const { id } = useParams();
    const [note, setNote] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:31111/server/notes/${id}`)
            .then(response => response.json())
            .then(dataNote => setNote(dataNote));

    }, [id])


    const onDeleteNote = async (event) => {
        event.preventDefault();

        const response = await fetch(`http://localhost:31111/server/notes/delete/${id}`, {
            method: 'DELETE'
        })


        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={PathTo.Dashboard} />
    }

    if (!note) {
        return <h1>Note do not exist</h1>
    }


    return (
        <div>

            <h2>{note.title}</h2>

            <p>{note.description}</p>

            <Link to={PathTo.EditNotePage + `/${note._id}`}>
                <button>Edit</button>
            </Link>

            <button onClick={onDeleteNote}>Delete</button>

            <Link to={PathTo.Dashboard}>
                <button>Go Back</button>
            </Link>


        </div>
    );
}

export default NotePage;