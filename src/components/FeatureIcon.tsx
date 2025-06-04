import React from 'react';

type IconType = React.ComponentType<{
  className?: string;
  size?: string | number;
  color?: string;
}>;

interface FeatureIconProps {
  icon: IconType;
  title: string;
  description: string;
  className?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({
  icon: Icon,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="feature-icon">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureIcon; 