import '../styles/Card.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: Props) => {
  const classes = ['card', 'dark', className].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
};
