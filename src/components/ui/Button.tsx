/**
 * Button Component
 * Premium button with multiple variants, magnetic effect, and accessibility
 */

import React, { forwardRef, useRef, useEffect } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import Magnetic from '../Magnetic';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { easings } from '../../motion/primitives';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'glass' | 'gold' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  magnetic?: boolean;
  magneticStrength?: number;
  children: React.ReactNode;
  asChild?: boolean;
}

const sizeClasses = {
  sm: 'px-5 py-2.5 text-sm gap-1.5',
  md: 'px-7 py-3 text-base gap-2',
  lg: 'px-8 py-3.5 text-base gap-2',
  xl: 'px-10 py-4 text-lg gap-2.5',
};

const variantClasses = {
  primary: 'bg-gradient-brand text-white shadow-brand-sm hover:shadow-brand-md hover:-translate-y-0.5 active:translate-y-0',
  secondary: 'bg-transparent text-text-primary border border-interactive-secondary-border hover:border-interactive-secondary-border-hover hover:text-text-brand hover:bg-surface-glass-hover backdrop-blur-sm',
  glass: 'bg-surface-glass text-text-primary border border-surface-glass-border hover:bg-surface-glass-hover hover:border-surface-glass-border-hover backdrop-blur-xl',
  gold: 'bg-gradient-gold text-bg-primary font-bold shadow-glow-gold hover:shadow-glow-gold hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'bg-transparent text-text-tertiary hover:text-text-primary hover:bg-surface-glass',
  icon: 'p-3 rounded-xl bg-surface-glass border border-surface-glass-border text-text-secondary hover:text-text-primary hover:bg-surface-glass-hover hover:border-surface-glass-border-hover backdrop-blur-xl',
};

const baseClasses = 'inline-flex items-center justify-center font-semibold tracking-wider transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      magnetic = false,
      magneticStrength = 0.1,
      children,
      className = '',
      disabled,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const reducedMotion = useReducedMotion();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const mergedRef = (node: HTMLButtonElement | null) => {
      buttonRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    };

    // Loading spinner
    const spinner = (
      <motion.svg
        className="w-5 h-5 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
      >
        <motion.circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: easings.easeInOut }}
        />
        <motion.circle
          className="opacity-75"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 0.7 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: easings.easeInOut }}
        />
      </motion.svg>
    );

    const buttonContent = (
      <>
        {loading && leftIcon ? null : leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        {loading ? spinner : <span>{children}</span>}
        {loading && rightIcon ? null : rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </>
    );

    const buttonStyles = {
      className: `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`,
      disabled: disabled || loading,
      ref: mergedRef,
      ...props,
    };

    // Magnetic wrapper
    if (magnetic && !reducedMotion && (variant === 'primary' || variant === 'gold' || variant === 'glass')) {
      return (
        <Magnetic strength={magneticStrength}>
          <motion.button
            {...buttonStyles}
            whileHover={{ scale: 1.02, transition: { duration: 0.15, ease: easings.easeOut } }}
            whileTap={{ scale: 0.98, transition: { duration: 0.05, ease: easings.easeOut } }}
            aria-busy={loading}
          >
            {buttonContent}
          </motion.button>
        </Magnetic>
      );
    }

    return (
      <motion.button
        {...buttonStyles}
        whileHover={loading ? undefined : { scale: 1.02, transition: { duration: 0.15, ease: easings.easeOut } }}
        whileTap={loading ? undefined : { scale: 0.98, transition: { duration: 0.05, ease: easings.easeOut } }}
        aria-busy={loading}
      >
        {buttonContent}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;