import { useState } from 'react';

export default function ToggleMode() {
    const [isDarkMode, setMode] = useState(false);

    function setTheme() {
        setMode(!isDarkMode);
    }

    /* Avoid using too much of inline jsx styling and jsx conditionals instead make it as small functions and render those results */
    return (
        <div className={isDarkMode ? 'bg-dark' : 'bg-white'}>
            <p className={isDarkMode && 'text-color-white'}>
                This is a {!isDarkMode ? 'light' : 'dark'} mode
            </p>
            <button onClick={setTheme} type="button">
                Switch to {isDarkMode ? 'light' : 'dark'} mode
            </button>
        </div>
    );
}
