import React from 'react';
import classNames from 'classnames';

function Home() {
    return (
        <div className={classNames('Home', 'foo', 'bar')}>
            <h1>Welcome to Pony Konfigurator!</h1>

            <p>
                A paragraph
            </p>

            <h4>H4</h4>

            <ul>
                <li>list element</li>
                <li>list element</li>
            </ul>
        </div>
    );
}

export default Home;
