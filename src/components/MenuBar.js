import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuBar(props) {
    return (
        <div>
            <Link to='/'>
                | Home |
            </Link>
            <Link to='/page1'>
                | Page 1 |
            </Link>
            <hr />
        </div>
    );
}