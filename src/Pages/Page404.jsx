import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from './PageTemplate';

export default function Page404() {
    return (
        <PageTemplate>
            <div className='containier center-full'>
                <div>
                    <h1>404!</h1>
                    <br />
                    <p>The page you requested doesn't exist.</p>
                    <Link to='/'>Return to homepage.</Link>
                </div >
            </div>
        </PageTemplate>
    );
}
