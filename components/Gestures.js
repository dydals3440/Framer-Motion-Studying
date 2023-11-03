import React from 'react';
import { motion, MotionConfig } from 'framer-motion';

const Gestures = () => {
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8rem',
      }}
    >
      {/* 겹치는 속성은 MotionConfig에 정의가능 */}
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: 'easeInOut',
        }}
      >
        <motion.button
          // Hover시
          whileHover={{ scale: 1.05 }}
          // 클릭시
          whileTap={{ scale: 0.95, rotate: '2.5deg' }}
          className='example-button'
        >
          Click me!
        </motion.button>

        <motion.button
          // Hover시
          whileHover={{ scale: 1.05 }}
          // 클릭시
          whileTap={{ scale: 0.95, rotate: '-2.5deg' }}
          style={{ backgroundColor: 'red' }}
          className='example-button'
        >
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
