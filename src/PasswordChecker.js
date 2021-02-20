import { useState } from 'react';

export function PasswordChecker() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function onChangeSetPassword(event) {
        setPassword(event.target.value);
    }

    function onChangeSetConfirmPassword(event) {
        setConfirmPassword(event.target.value);
    }

    function checkPassword() {
        return password === confirmPassword;
    }

    function displayPasswordResult(password) {
        return password === '' && confirmPassword === '' ? (
            <div> </div>
        ) : password === '' && confirmPassword !== '' ? (
            <div>Please enter password </div>
        ) : password !== '' && confirmPassword === '' ? (
            <div>Please enter confirm password </div>
        ) : password === confirmPassword ? (
            <p>Correct password</p>
        ) : (
            <p>Not correct password</p>
        );
    }

    return (
        <div>
            {/* Simple password functions can be made inline if wanted*/}
            <input
                onChange={onChangeSetPassword}
                style={{ marginBottom: '25px' }}
                type="text"
                placeholder="enter password"
            />{' '}
            <br />
            <input
                onChange={onChangeSetConfirmPassword}
                type="text"
                placeholder="confirm password"
            />{' '}
            <br />
            <button
                type="button"
                style={{ marginTop: '15px' }}
                onClick={checkPassword}
            >
                check
            </button>
            {/* Avoid using too much of inline jsx styling and jsx conditionals instead make it as small functions and render those results */}
            <div style={{ marginTop: '20px' }}>
                {displayPasswordResult(password)}
            </div>
        </div>
    );
}
