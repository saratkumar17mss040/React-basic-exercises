import { useState } from 'react';
import { ToastMessage } from './ToastMessage';

export default function ToastButton() {
    const [isButtonClicked, setButtonClicked] = useState(false);
    const [toastTypeMessage, setToastType] = useState('error');

    function setToastTypes(event) {
        setToastType(event.target.value);
    }

    return (
        <div>
            <p>Select the type of toast</p>
            <select onChange={setToastTypes}>
                <option value="error">Error</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
            </select>
            <br />
            <button
                style={{ marginTop: '20px' }}
                onClick={() => setButtonClicked(!isButtonClicked)}
                type="button"
            >
                {isButtonClicked ? 'Hide toast' : 'Show toast'}
            </button>
            <ToastMessage
                buttonClickedOrNot={isButtonClicked}
                toastType={toastTypeMessage}
            />
        </div>
    );
}
