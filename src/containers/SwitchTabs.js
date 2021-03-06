import { useState } from 'react';
import { RouteButtons } from '../assets';
import { Routes } from '../components';

export function SwitchTabs() {
    const [currentRoute, setCurrentRoute] = useState('');

    function onRouteChange(event) {
        setCurrentRoute(event.target.value);
    }

    function displayCurrentRoute(currentRoute) {
        return currentRoute === 'home' ? (
            <Routes.Home />
        ) : currentRoute === 'about' ? (
            <Routes.About />
        ) : currentRoute === 'profile' ? (
            <Routes.Profile />
        ) : (
            <p>No page</p>
        );
    }
    return (
        <div style={{ margin: '30px' }}>
            {RouteButtons.map((button) => {
                return (
                    <button
                        type="button"
                        style={{ marginRight: '15px' }}
                        value={button}
                        onClick={onRouteChange}
                    >
                        {button}
                    </button>
                );
            })}
            <div>{displayCurrentRoute(currentRoute)}</div>
        </div>
    );
}
