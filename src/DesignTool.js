import { useState } from 'react';
import React from 'react';

export function DesignTool() {
    const [fontSize, setFontSize] = useState(16);

    function increaseFontSize() {
        setFontSize(fontSize + 8);
    }

    function decreaseFontSize() {
        setFontSize(fontSize - 8);
    }

    return (
        <div>
            <p>Change font properties</p>
            <p style={{ fontSize: fontSize + 'px' }}>preview !</p>
            {/* Simple fontSize functions can be made inline */}
            <button onClick={increaseFontSize}>+</button> &nbsp;
            <button onClick={decreaseFontSize}>-</button>
        </div>
    );
}
