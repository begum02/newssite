import React, { useEffect } from 'react';

const AdSense = ({ adClient = "ca-pub-9070289581248556", adSlot = "2656700889", className = '', style = {} }) => {
    useEffect(() => {
        // Google Ads script yüklenmemişse ekle
        const scriptExists = document.querySelector(`script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}"]`);
        if (!scriptExists) {
            const script = document.createElement('script');
            script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
            script.async = true;
            script.crossOrigin = "anonymous";
            document.body.appendChild(script);
        }

        // Reklamı başlat
        if (typeof window !== 'undefined') {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error('AdsbyGoogle error:', e);
            }
        }
    }, [adClient]);

    return (
        <ins
            className={`adsbygoogle ${className}`}
            style={{ display: 'block', ...style }}
            data-ad-client={adClient}
            data-ad-slot={adSlot}
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
};

export default AdSense;
