import { useEffect } from 'react';

const LiveChat = ({ tawkId = 'PLACEHOLDER' }) => {
  useEffect(() => {
    const loadTawk = () => {
      try {
        if (!tawkId || tawkId === 'PLACEHOLDER') return;

        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_API.visitor = { name: 'Guest' };

        const script = document.createElement('script');
        script.async = true;
        script.src = `https://embed.tawk.to/${tawkId}/default`;
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.head.appendChild(script);
      } catch {
        // Silently fail
      }
    };

    const timer = setTimeout(loadTawk, 3000);

    const handleInteraction = () => {
      clearTimeout(timer);
      loadTawk();
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [tawkId]);

  return null;
};

export default LiveChat;
