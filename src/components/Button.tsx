import React from 'react';

type Props = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ text, onClick, className }: Props): React.JSX.Element {
  return <button onClick={onClick} className={className}>{text}</button>;
}
