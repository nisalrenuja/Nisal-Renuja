import { FC } from 'react';

const Footer: FC = () => {
  return (
    <p className="py-10 text-center">
      || Design && coded by{' '}
      <a href="https://github.com/nisalrenuja" target="_blank" rel="noreferrer">
        {' '}
        <span className="text-primary hover:underline">
          Nisal Renuja Palliyaguru
        </span>
      </a>{' '}
      ||
    </p>
  );
};

export default Footer;
