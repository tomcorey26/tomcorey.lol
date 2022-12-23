import '../styles/card.css';

type Props = {
  children: React.ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
};

export const Card = ({ children, className, tag = 'div' }: Props) => {
  const classes = ['card', 'dark', className].filter(Boolean).join(' ');

  const Tag = tag;

  return <Tag className={classes}>{children}</Tag>;
};
