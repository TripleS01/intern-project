import React from 'react';

import { Link } from 'react-router-dom';
import PathTo from '../../../utils/pathTo';

function Header() {
    return (
        <div>
            <Link to={PathTo.Dashboard}>
                <h3>Your Notes</h3>
            </Link>

            <Link to={PathTo.CreateNotePage}>
                <button>Add New Note</button>
            </Link>

        </div>
    );
}

export default Header;