import { FC } from 'react';
import Heading3 from '../../../../widget/Headings/Heading3';

const InfoSection: FC = () => {
  return (
    <div className=" fony-bold flex flex-1 flex-col gap-6 p-3 pb-10 pl-10 text-lg md:text-xl">
      <Heading3 extra="-left-8">
        {' '}
        Hii
        <span className="not-italic"> 👋 </span>
        I'm <span className="text-primary"> Nisal</span>,{' '}
      </Heading3>
      <p className="relative before:absolute before:-left-8 before:font-sans before:text-lg before:font-normal before:not-italic before:text-base-200 before:content-['<p>']">
        <br /> I'm a software engineering undergraduate at Curtin University.
        I've always been passionate about using technology to come up with
        innovative solutions for everyday problems. Therefore my dream is to
        peruse a career in software engineering and give back to the community
        however possible.
        <span className="text-primary"> Web Technologies</span>, which was one
        of the most interesting subject for me.
      </p>
      {/* <p>I'm currently working as a </p> */}
      <p>
        I'm currently working as a{' '}
        <span className="text-primary">Software Engineer </span> at{' '}
        <a
          href="https://www.linkedin.com/company/derana-macroentertainment-pvt-ltd/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-primary">Derana Macroentertainment</span>
        </a>
      </p>
    </div>
  );
};
export default InfoSection;
