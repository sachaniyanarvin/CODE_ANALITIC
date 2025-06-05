import React from 'react';

type IconType = React.ComponentType<{
  className?: string;
  size?: string | number;
  color?: string;
}>;

interface FloatingActionButtonProps {
  icon: IconType;
  onClick: () => void;
  className?: string;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon: Icon,
  onClick,
  className = '',
}) => {
  return (
    <button className={`fab ${className}`} onClick={onClick}>
      <Icon className="icon-lg" />
    </button>
  );
};

export default FloatingActionButton; 