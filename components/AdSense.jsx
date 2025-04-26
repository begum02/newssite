import React, { useEffect, useRef } from 'react';

const AdSense = ({ adClient = "ca-pub-9070289581248556", adSlot = "2530617928", className = '', style = {} }) => {
    const adRef = useRef(null);

    useEffect(() => {
        try {
            if (window.adsbygoogle && adRef.current) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error("Adsense error:", e);
        }
    }, []);

    return (
        <ins
            ref={adRef}
            className={`adsbygoogle ${className}`}
            style={{ display: 'block', ...style }}
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-adtest="on"   
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    );
};

export default AdSense;
