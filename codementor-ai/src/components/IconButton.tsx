import React from 'react';
import type { IconType as ReactIconType } from 'react-icons';

interface IconButtonProps {
  icon: ReactIconType;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  badge?: string | number;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  badge,
  disabled = false,
}) => {
  const sizeClass = {
    sm: 'icon-sm',
    md: 'icon',
    lg: 'icon-lg',
    xl: 'icon-xl',
  }[size];

  const variantClass = {
    primary: 'icon-btn-primary',
    secondary: 'icon-btn-secondary',
    danger: 'icon-btn-danger',
  }[variant];

  return (
    <button
      className={`icon-btn ${sizeClass} ${variantClass} ${className} ${badge ? 'icon-badge' : ''}`}
      onClick={onClick}
      disabled={disabled}
      data-badge={badge}
    >
      <Icon />
    </button>
  );
};

export default IconButton; 