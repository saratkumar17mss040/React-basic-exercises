import { useState } from 'react';

export function SHPassword() {
    const [showPassword, toggleHideShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    function togglePassword() {
        if (password !== '' || password !== null) {
            toggleHideShowPassword(showPassword ? false : true);
        }
    }

    function updatePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div>
            <input
                onChange={updatePassword}
                id="password"
                placeholder="enter password"
                type={showPassword ? 'text' : 'password'}
            />
            <button type="button" onClick={togglePassword}>
                {showPassword === false && password !== ''
                    ? 'show password'
                    : 'hide password'}
            </button>
        </div>
    );
}
