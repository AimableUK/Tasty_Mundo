import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    let title = 'MalosFlix';

    if (location.pathname === '/') {
      title = 'Home - TastyMundo';
    } else if (location.pathname === '/aboutus') {
      title = 'About Us - TastyMundo';
    } else if (location.pathname === '/services') {
      title = 'Our Services - TastyMundo';
    }  else if (location.pathname === '/aichat') {
      title = 'Chatting - TastyMundo';
    } else {
        title = '404 Page Not Found'
    }


    document.title = title;
  }, [location]);

  return null;
};

export default PageTitleUpdater;
