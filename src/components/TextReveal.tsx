import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'span';
  italicSubtitle?: string;
  italicClassName?: string;
  subtitleClassName?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.03,
  as = 'h2',
  italicSubtitle,
  italicClassName,
  subtitleClassName,
}) => {
  const finalItalicClass = subtitleClassName || italicClassName || 'font-serif italic font-normal normal-case text-slate-800';
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // Dynamically select the motion tag
  const MotionTag = as === 'h1' ? motion.h1 : as === 'h3' ? motion.h3 : as === 'p' ? motion.p : motion.h2;

  return (
    <MotionTag
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some' }}
      className={className}
    >
      <span className="inline-block">
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden mr-[0.22em] align-bottom pb-0.5">
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </span>

      {italicSubtitle && (
        <span className="block overflow-hidden pt-0.5">
          <motion.span
            variants={subtitleVariants}
            className={`inline-block ${finalItalicClass}`}
          >
            {italicSubtitle}
          </motion.span>
        </span>
      )}
    </MotionTag>
  );
};

