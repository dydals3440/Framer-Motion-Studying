import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  // once설정하면, 한번만 애니메이션 실행됨!
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // isInView의 결과값은 bool
    console.log('Is in view ->', isInView);
  }, [isInView]);
  return (
    <>
      {/* 1. 사이즈를 조금 더 크게함 스크롤링 위해 */}
      <div style={{ height: '150vh' }} />
      <motion.div
        style={{ height: '100vh', background: 'black' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        style={{
          height: '100vh',
          background: isInView ? 'red' : 'blue',
          transition: '1s background',
        }}
      />
    </>
  );
};

export default ViewBasedAnimations;
