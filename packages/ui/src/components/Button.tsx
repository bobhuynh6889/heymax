import React from 'react';
import { Platform, Pressable, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { cva } from 'class-variance-authority';

// Define button variants using class-variance-authority
const buttonVariants = cva('', {
  variants: {
    intent: {
      primary: '',
      secondary: '',
      outline: '',
    },
    size: {
      small: '',
      medium: '',
      large: '',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

// Define native styles
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  primary: {
    backgroundColor: '#0066FF',
  },
  secondary: {
    backgroundColor: '#5D5FEF',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0066FF',
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 48,
  },
  text: {
    fontWeight: '600',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'white',
  },
  outlineText: {
    color: '#0066FF',
  },
});

export interface ButtonProps {
  children: React.ReactNode;
  style?: any;
  onPress?: (event: GestureResponderEvent) => void;
  intent?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  // The props below are only used on web but we declare them here for type compatibility
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = React.forwardRef<any, ButtonProps>(({
  children,
  intent = 'primary',
  size = 'medium',
  style,
  onPress,
  onClick,
  ...props
}: ButtonProps, ref) => {
  // Handle both onPress and onClick for cross-platform compatibility
  const handlePress = (e: any) => {
    if (onPress) onPress(e);
    if (onClick) onClick();
  };

  return (
    <Pressable
      ref={ref}
      onPress={handlePress}
      style={[
        styles.button,
        styles[intent as keyof typeof styles],
        styles[size as keyof typeof styles],
        style,
      ]}
      {...props}
    >
      <Text
        style={[
          styles.text,
          intent === 'primary' ? styles.primaryText : 
          intent === 'secondary' ? styles.secondaryText : 
          styles.outlineText
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
});

Button.displayName = 'Button';

export default Button; 