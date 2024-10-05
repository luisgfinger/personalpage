import React from 'react';

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: (text: string) => void;
}

const Button: React.FC<ButtonProps> = ({ text, href, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(text);  
    } else if (href) {
      window.location.href = href;  
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
