import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

interface SocialIconsProps {
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className = '' }) => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com' },
    { icon: FaTwitter, href: 'https://twitter.com' },
    { icon: FaLinkedin, href: 'https://linkedin.com' },
    { icon: FaFacebook, href: 'https://facebook.com' },
  ];

  return (
    <div className={`social-icons ${className}`}>
      {socialLinks.map(({ icon: Icon, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons; 