import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Define button variants using class-variance-authority for web
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      intent: {
        primary: 'bg-[#802eff] text-white hover:bg-[#6a1edf]',
        secondary: 'bg-indigo-600 text-white hover:bg-indigo-700',
        outline: 'border border-[#802eff] text-[#802eff] hover:bg-[#f5f0ff]',
      },
      size: {
        small: 'h-9 px-4 py-2 text-sm',
        medium: 'h-10 px-8 py-3',
        large: 'h-12 px-12 py-4 text-lg',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

export interface WebButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  intent?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onPress?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

// Type-safe way to define the component that works with both React 18 and 19
export const WebButton = React.forwardRef<HTMLButtonElement, WebButtonProps>(({
  className,
  intent,
  size,
  href,
  children,
  onClick,
  onPress,
  ...props
}, ref) => {
  // Handle both onClick and onPress for cross-platform compatibility
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (onClick) onClick(e as React.MouseEvent<HTMLButtonElement>);
    if (onPress) onPress(e);
  };

  if (href) {
    return (
      <a
        href={href}
        className={buttonVariants({ intent, size, className })}
        onClick={handleClick}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      ref={ref}
      className={buttonVariants({ intent, size, className })}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
});

WebButton.displayName = 'WebButton';

export default WebButton; 