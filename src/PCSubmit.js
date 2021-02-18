import { useState } from 'react';

export function PCSubmit() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [value, setSubmitPassword] = useState('');
    const showPassword = false;

    function onChangeSetPassword(event) {
        setPassword(event.target.value);
    }

    function onChangeSetConfirmPassword(event) {
        setConfirmPassword(event.target.value);
    }

    function checkPassword() {
        const submitBtn = document.getElementById('submit');
        if (password !== confirmPassword) {
            submitBtn.disabled = true;
        } else {
            submitBtn.disabled = false;
        }
        return password === confirmPassword;
    }

    function submitPassword() {
        setSubmitPassword(password);
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
                style={{ marginLeft: '20px', marginTop: '15px' }}
                type="button"
                onClick={submitPassword}
            >
                submit
            </button>
            {/* Avoid using too much of inline jsx styling and jsx conditionals instead make it as small functions and render those results */}
            <div style={{ marginTop: '20px' }}>
                {password === '' && confirmPassword === '' ? (
                    <div> </div>
                ) : password === '' && confirmPassword !== '' ? (
                    <div>Please enter password </div>
                ) : password !== '' && confirmPassword === '' ? (
                    <div>Please enter confirm password </div>
                ) : password === confirmPassword ? (
                    <p>Correct password</p>
                ) : (
                    <p>Not correct password</p>
                )}
            </div>
            <div style={{ marginTop: '20px' }}>
                {showPassword && <p> {password} </p>}
            </div>
            <div>{value}</div>
        </div>
    );
}
