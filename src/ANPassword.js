import { useState } from 'react';

export function ANPassword() {
    const [password, setPassword] = useState('');

    function onChangeSetPassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div>
            <input
                onChange={onChangeSetPassword}
                style={{ marginBottom: '25px' }}
                type="text"
                placeholder="enter password"
            />{' '}
            <br />
            {password === '' ? (
                <div></div>
            ) : (
                <div>
                    {!/\d/g.test(password) && (
                        <p style={{ color: 'red' }}> password missing numbers </p>
                    )}
                </div>
            )}
        </div>
    );
}
