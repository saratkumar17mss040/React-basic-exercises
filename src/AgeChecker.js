import { useState } from 'react';
import './disableArrow.css';

export default function AgeChecker() {
    let [age, checkEligibility] = useState('');

    function checkEligibilityForVoting() {
        checkEligibility(age);
    }

    function changeAge(event) {
        age = event.target.value;
        checkEligibilityForVoting(age);
    }

    function displayAgeResult() {
        if (age !== '') {
            return (
                <p style={age < 18 ? { color: 'red' } : {}}>
                    {' '}
                    You are {age < 18 ? 'not' : ''} eligible to vote as your age
                    is {age}
                </p>
            );
        } else {
            return <p> </p>;
        }
    }

    return (
        <div>
            <p>Check if your are eligible to vote or not</p>
            <input
                value={age}
                type="number"
                onChange={changeAge}
                placeholder="enter your age"
            />
            <div>{displayAgeResult(age)}</div>
        </div>
    );
}
