import React from 'react';
import { Link } from 'react-router-dom';

import PathTo from '../../utils/pathTo';

function NoteCard({ _id, title, description }) {
    return (
        <div>
            <Link to={PathTo.Notes + `/${_id}`}>
                <h2>{title}</h2>
            </Link>

            <p>{description}</p>

        </div>
    );
}

export default NoteCard;