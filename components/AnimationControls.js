import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const AnimationControls = () => {
  // Animation하나를 사용할때 useAnimationControls사용이좋음.
  const flipControls = useAnimationControls();
  const handleClick = () => {
    // Do some thing...
    flipControls.start('flip');
  };
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8rem',
      }}
    >
      <button onClick={handleClick} className='example-button'>
        Flip it
      </button>
      <motion.div
        style={{ width: 150, height: 150, backgroundColor: 'black' }}
        variants={{
          initial: {
            rotate: '0deg',
          },
          // 이름은 상관 없음
          flip: {
            rotate: '360deg',
          },
          banana: {
            rotate: '360deg',
          },
        }}
        initial='initial'
        animate={flipControls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
