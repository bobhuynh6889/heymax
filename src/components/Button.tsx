import React from 'react';
import { Pressable, Text, StyleSheet, GestureResponderEvent } from 'react-native';

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
}

export const Button = ({
  children,
  intent = 'primary',
  size = 'medium',
  style,
  onPress,
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
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
};

export default Button; 