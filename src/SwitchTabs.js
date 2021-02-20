import { useState } from 'react';
import { Home } from './Home';
import { About } from './About';
import { Profile } from './Profile';
import { RouteButtons } from './RouteButtons';

export function SwitchTabs() {
    const [currentRoute, setCurrentRoute] = useState('');

    function onRouteChange(event) {
        setCurrentRoute(event.target.value);
    }

    function displayCurrentRoute(currentRoute) {
        return currentRoute === 'home' ? (
            <Home />
        ) : currentRoute === 'about' ? (
            <About />
        ) : currentRoute === 'profile' ? (
            <Profile />
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
