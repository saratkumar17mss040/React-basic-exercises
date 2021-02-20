import { useState } from 'react';

export function PCSubmit() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [value, setSubmitPassword] = useState('');
    const [isSubmitButtonDisabled, setSubmitButton] = useState(true);
    const showPassword = false;

    function onChangeSetPassword(event) {
        setPassword(event.target.value);
    }

    function onChangeSetConfirmPassword(event) {
        setConfirmPassword(event.target.value);
    }

    function checkPassword() {
        if (password !== confirmPassword) {
            setSubmitButton(true);
        } else {
            setSubmitButton(false);
        }
    }

    function submitPassword() {
        setSubmitPassword(password);
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
            <button
                id="submit"
                disabled={isSubmitButtonDisabled}
                style={{ marginLeft: '20px', marginTop: '15px' }}
                type="button"
                onClick={submitPassword}
            >
                submit
            </button>
            {/* Avoid using too much of inline jsx styling and jsx conditionals instead make it as small functions and render those results */}
            <div style={{ marginTop: '20px' }}>{displayPasswordResult}</div>
            <div style={{ marginTop: '20px' }}>
                {showPassword && <p> {password} </p>}
            </div>
            <div>{value}</div>
        </div>
    );
}
