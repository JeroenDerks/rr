import React from 'react';
import { RellaxWrapper } from 'react-rellax-wrapper';
require('assets/fonts/stylesheet.css');

export default function OpeningGraphic() {
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
        minHeight: 5000,
      }}
    >
      {scrollY >= 0 && scrollY < SCENE1 && (
        <div
          style={{
            position: 'sticky',
            top: '40%',
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

      {scrollY >= 0 && scrollY > SCENE1 && (
        <div
          style={{
            position: 'sticky',
            top: '40%',
            textAlign: 'center',
            opacity: 1,
          }}
        >
          <div
            style={{
              width: 360,
              margin: 'auto',
              overflow: 'hidden',
              textIndent: 400 + SCENE1 * 0.75 - scrollY * 0.75 + 'px',
            }}
          >
            <p
              style={{
                width: 'auto',
                display: 'inline',
                whiteSpace: 'nowrap',
                fontFamily: 'd-dinregular, Ariel, Helvetica, sans-serif',
                letterSpacing: 2,
                fontSize: 16,
              }}
            >
              Paradoxical synthesis of the material and natural world,
              challenging the perception of the spectator (as a critic), while
              denying not only a fixed interpretation, but the very possibilty
              of interpretation itself.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
