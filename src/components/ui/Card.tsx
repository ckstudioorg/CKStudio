/**
 * Card Component
 * Premium glassmorphism card with hover effects and accessibility
 */

import React, { forwardRef, useRef } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { easings } from '../../motion/primitives';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  variant?: 'default' | 'hover' | 'strong' | 'interactive' | 'glass' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hoverable?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

const variantClasses = {
  default: 'bg-surface-glass backdrop-blur-xl border border-surface-glass-border rounded-2xl',
  hover: 'bg-surface-glass backdrop-blur-xl border border-surface-glass-border rounded-2xl transition-all duration-300 hover:bg-surface-glass-hover hover:border-surface-glass-border-hover',
  strong: 'bg-surface-glass-strong backdrop-blur-2xl border border-surface-glass-border rounded-2xl',
  interactive: 'bg-surface-glass backdrop-blur-xl border border-surface-glass-border rounded-2xl transition-all duration-300 hover:bg-surface-glass-hover hover:border-surface-glass-border-hover cursor-pointer group',
  glass: 'bg-surface-glass backdrop-blur-xl border border-surface-glass-border rounded-2xl',
  elevated: 'bg-surface-glass-strong backdrop-blur-2xl border border-surface-glass-border rounded-2xl shadow-glass-lg',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      hoverable = false,
      children,
      className = '',
      style,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const reducedMotion = useReducedMotion();
    const cardRef = useRef<HTMLDivElement>(null);

    const cardClasses = `${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;

    if (hoverable && !reducedMotion && (variant === 'hover' || variant === 'interactive')) {
      return (
        <motion.div
          ref={ref}
          className={cardClasses}
          style={style}
          whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 30px rgba(220, 38, 38, 0.2)', transition: { duration: 0.3, ease: easings.easeOut } }}
          whileTap={{ scale: 0.98, transition: { duration: 0.05, ease: easings.easeOut } }}
          {...props}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <motion.div ref={ref} className={cardClasses} style={style} {...props}>
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

// Card sub-components
export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div ref={ref} className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement> & { as?: "h2" | "h3" | "h4" | "h5" | "h6" }>(
  ({ className = '', as: Component = 'h3', ...props }, ref) => (
    <Component ref={ref} className={`font-display font-bold text-text-primary ${className}`} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className = '', ...props }, ref) => (
    <p ref={ref} className={`text-text-tertiary mt-1 ${className}`} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div ref={ref} className={`mt-6 pt-4 border-t border-surface-glass-border flex items-center gap-3 ${className}`} {...props}>
      {children}
    </div>
  )
);
CardFooter.displayName = 'CardFooter';

export const CardMedia = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { aspectRatio?: 'cinematic' | 'video' | 'photo' | 'portrait' | 'square' }>(
  ({ className = '', aspectRatio = 'video', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-xl mb-4 ${className} aspect-${aspectRatio}`}
      {...props}
    >
      {children}
    </div>
  )
);
CardMedia.displayName = 'CardMedia';

export default Card;