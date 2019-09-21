import * as React from 'react';

import ReactImageMagnify from 'react-image-magnify';

class TestImageMagnify extends React.Component {
  render() {
    return (
      <ReactImageMagnify
        smallImage={{
          alt: 'Wristwatch by Ted Baker London',
          isFluidWidth: true,
          src:
            'https://ethanselzer.github.io/react-image-magnify/static/media/wristwatch_687.8ea75ffc.jpg',
        }}
        largeImage={{
          src:
            'https://ethanselzer.github.io/react-image-magnify/static/media/wristwatch_687.8ea75ffc.jpg',
          width: 1200,
          height: 1800,
        }}
      ></ReactImageMagnify>
    );
  }
}
