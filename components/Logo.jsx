import React from 'react';
import logo from '../src/assets/logo.svg'; // SVG dosyas�n� d��ar�dan import ediyoruz.

function Logo({ width = 120, height = 120, alt = "Logo" }) {
    return (
        <div>
            <img
                src={logo}
                alt={alt}
                width={width}
                height={height}
                style={{ display: 'block' }} // Varsay�lan stil
            />
        </div>
    );
}

export default Logo;
