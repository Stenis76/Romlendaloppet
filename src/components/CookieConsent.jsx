import { useEffect, useState } from 'react';

function loadGA() {
  if (window.gtag) return;

  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-5JF6012MZ2';
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied'
    });

    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    });

    gtag('config', 'G-5JF6012MZ2');
  `;
  document.head.appendChild(script2);
}

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      loadGA();
    } else if (consent === null) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    loadGA();
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="cookie-consent">
      <div className="container cookie-inner">
        <div className="cookie-text">
          <p>Vi använder cookies för att analysera trafik via Google Analytics. Genom att klicka på &quot;Acceptera alla&quot; samtycker du till vår användning av cookies.</p>
        </div>
        <div className="cookie-actions">
          <button className="btn btn-outline btn-sm" onClick={declineCookies}>Neka</button>
          <button className="btn btn-gold btn-sm" onClick={acceptCookies}>Acceptera alla</button>
        </div>
      </div>
    </div>
  );
}
