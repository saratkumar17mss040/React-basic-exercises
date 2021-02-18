import { useState } from 'react';
import { Home } from './Home';
import { About } from './About';
import { Profile } from './Profile';

export function SwitchTabs() {
    const [currentRoute, setCurrentRoute] = useState('');

    function onRouteChange(event) {
        setCurrentRoute(event.target.value);
    }
    return (
        <div style={{ margin: '30px' }}>
            <button
                style={{ marginRight: '15px' }}
                value="home"
                onClick={onRouteChange}
                type="button"
            >
                Home
            </button>
            <button
                style={{ marginRight: '15px' }}
                value="about"
                onClick={onRouteChange}
                type="button"
            >
                About
            </button>
            <button
                style={{ marginRight: '15px' }}
                value="profile"
                onClick={onRouteChange}
                type="button"
            >
                Profile
            </button>
            <div>
                {currentRoute === 'home' ? (
                    <Home />
                ) : currentRoute === 'about' ? (
                    <About />
                ) : currentRoute === 'profile' ? (
                    <Profile />
                ) : (
                    <p>No page</p>
                )}
            </div>
        </div>
    );
}
