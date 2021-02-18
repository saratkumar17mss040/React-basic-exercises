import { useState } from 'react';

export function AgeChecker() {
    let [age, checkEligibility] = useState('');

    function checkEligibilityForVoting() {
        checkEligibility(age);
    }

    function changeAge(event) {
        age = event.target.value;
        checkEligibilityForVoting(age);
    }
    return (
        <div>
            <p>Check if your are eligible to vote or not</p>
            <input type="number" onChange={changeAge} placeholder="enter your age" />
            <div>
                {age !== '' ? (
                    <p style={age < 18 ? { color: 'red' } : {}}>
                        {' '}
						You are {age < 18 ? 'not' : ''} eligible to vote as your age is{' '}
                        {age}
                    </p>
                ) : (
                    <p> </p>
                )}
            </div>
        </div>
    );
}
