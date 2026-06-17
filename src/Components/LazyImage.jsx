import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, className, style, width, height, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`lazy-image-wrapper ${isLoaded ? 'loaded' : ''} ${className || ''}`}
      style={{
        width: width || '100%',
        height: height || 'auto',
        overflow: 'hidden',
        background: 'rgba(26, 129, 135, 0.05)',
        ...style,
      }}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
