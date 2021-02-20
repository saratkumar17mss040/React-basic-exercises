import { useState } from 'react';

export default function ANPassword() {
    const [password, setPassword] = useState('');

    function onChangeSetPassword(event) {
        setPassword(event.target.value);
    }

    function showPasswordInfo(password) {
        if (password === '') {
            return <p></p>;
        } else if (!/\d/gi.test(password) || !/[a-z]/gi.test(password)) {
            return (
                <p style={{ color: 'red' }}>
                    Password missing numbers or alphabets
                </p>
            );
        } else {
            return <p>Valid password </p>;
        }
    }

    return (
        <div>
            <input
                value={password}
                onChange={onChangeSetPassword}
                style={{ marginBottom: '25px' }}
                type="text"
                placeholder="enter password"
            />{' '}
            <br />
            {showPasswordInfo(password)}
        </div>
    );
}
