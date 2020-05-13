import React from 'react';
require('assets/fonts/stylesheet.css');

export default function OpeningGraphic() {
  const [scrollY, setY] = React.useState(0);

  const SCENE1 = 400;
  React.useEffect(() => {
    // window.addEventListener('scroll', () => setY(window.pageYOffset));
    // return () => {
    //   window.removeEventListener('scroll', () => setY());
    // };
  }, []);

  return (
    <div
      style={{
        minHeight: 4600,
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: '35%',
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
            Paradoxical synthesis of the material and natural world, challenging
            the perception of the spectator (as a critic), while denying not
            only a fixed interpretation, but the very possibilty of
            interpretation itself.
          </p>
        </div>
      </div>
    </div>
  );
}
