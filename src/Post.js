import React, { useState } from 'react';
import './styles.css';

export function Post() {
    const [char, setChar] = useState(0);

    function numberOfCharacters(event) {
        const tweet = event.target.value;
        setChar(tweet);
    }

    return (
        <div>
            {/* Don't do inline styling  - go with classname */}
            <textarea
                style={{
                    position: 'relative',
                    width: '250px',
                    height: '150px',
                    border: '2px solid black',
                    padding: '7px',
                    textAlign: 'left',
                }}
                onChange={numberOfCharacters}
            ></textarea>
            <div
                style={{
                    position: 'relative',
                    left: '115px',
                    bottom: '25px',
                    color: 'red',
                }}
            >
                <span
                    style={
                        char.length > 10 ? { color: 'red' } : { color: 'green' }
                    }
                    id="character"
                >
                    {char.length}
                </span>
            </div>
        </div>
    );
}
