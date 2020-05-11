import React from 'react';
import { RellaxWrapper } from 'react-rellax-wrapper';
require('assets/fonts/stylesheet.css');

export default function OpeningTitle() {
  const [scrollY, setY] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('scroll', () => setY(window.pageYOffset));

    return () => {
      window.removeEventListener('scroll', () => setY());
    };
  }, []);

  const SCENE1 = 400;

  return (
    <div
      style={{
        minHeight: 600,
        border: '!px solid grey',
      }}
    >
      {scrollY >= 0 && scrollY < SCENE1 && (
        <div
          style={{
            position: 'sticky',
            top: '35%',
            textAlign: 'center',
            opacity: (SCENE1 - scrollY) / SCENE1,
          }}
        >
          <RellaxWrapper speed={-0.2} center={true}>
            <p
              style={{
                fontFamily: 'd-dinregular , Ariel, Helvetica, sans-serif',
                fontSize: 16,
                letterSpacing: 4,
              }}
            >
              Allegorical minimalism
            </p>
          </RellaxWrapper>
        </div>
      )}
    </div>
  );
}
