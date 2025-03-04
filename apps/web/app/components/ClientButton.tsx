'use client';

import React, { forwardRef } from 'react';
import { WebButton } from 'ui';

// Interface that matches the props structure of WebButton
interface ClientButtonProps {
  children: React.ReactNode;
  className?: string;
  intent?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const ClientButton = forwardRef<HTMLButtonElement, ClientButtonProps>(
  (props, ref) => {
    // @ts-ignore - Forwarding ref to WebButton
    return <WebButton ref={ref} {...props} />;
  }
);

ClientButton.displayName = 'ClientButton';

export default ClientButton; 