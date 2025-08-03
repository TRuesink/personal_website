import Image from 'next/image';
import { GithubLogoIcon } from '@phosphor-icons/react/dist/ssr/GithubLogo';
import { LinkedinLogoIcon } from '@phosphor-icons/react/dist/ssr/LinkedinLogo';
import { CheckCircleIcon } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const rootPage = () => {
  return (
    <div className="flex flex-col">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-full h-full py-0 pt-10 lg:pt-0">
          <div className="w-full h-full lg:w-1/2 relative">
            <Image
              src="/tim15.png"
              alt="Tim Ruesink"
              fill={true}
              objectFit="contain"
              className="mask mask-circle bg-base-300 lg:mask-none lg:bg-transparent"
            />
          </div>
          <div className="w-full h-full lg:w-1/2 flex items-start justify-center flex-col ">
            <div className="flex items center gap-2 pb-4">
              <Link
                href="https://github.com/Truesink"
                className="btn btn-sm btn-ghost btn-circle"
              >
                <GithubLogoIcon size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tim-ruesink/"
                className="btn btn-sm btn-ghost btn-circle"
              >
                <LinkedinLogoIcon size={20} />
              </Link>
            </div>
            <h1 className="text-5xl font-bold">Tim Ruesink</h1>
            <div className="flex flex-col gap-2 py-6">
              <span>
                I am a <strong>software engineer</strong> who loves working with
                people.
              </span>
              <span>
                I thrive in <strong>complexity</strong>, but understand how to{' '}
                <strong>simplify</strong> it for others.
              </span>
              <span>
                I prioritize <strong>high ROI</strong> activities in life and
                work.
              </span>
            </div>
            <button className="btn btn-primary">Learn more</button>
          </div>
        </div>
      </div>

      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse w-full">
          <ul className="timeline timeline-vertical md:w-1/2 w-full">
            <li>
              <div className="timeline-start">2012 - 2016</div>
              <div className="timeline-middle">
                <CheckCircleIcon
                  size={20}
                  weight="fill"
                  className="text-primary"
                />
              </div>
              <div className="timeline-end timeline-box">
                Bachelors in Mechanical Engineering
              </div>
              <hr className="bg-primary" />
            </li>
            <li>
              <hr className="bg-primary" />
              <div className="timeline-start">2017 - 2019</div>
              <div className="timeline-middle">
                <CheckCircleIcon
                  size={20}
                  weight="fill"
                  className="text-primary"
                />
              </div>
              <div className="timeline-end timeline-box">
                Masters in Mechanical Engineering
              </div>
              <hr className="bg-primary" />
            </li>
            <li>
              <hr className="bg-primary" />
              <div className="timeline-start">2019</div>
              <div className="timeline-middle">
                <CheckCircleIcon
                  size={20}
                  className="text-primary"
                  weight="fill"
                />
              </div>
              <div className="timeline-end timeline-box">
                Technical Sales at a Plastic Ingenuity
              </div>
              <hr className="bg-primary" />
            </li>
            <li>
              <hr className="bg-primary" />
              <div className="timeline-start">2021 - 2022</div>
              <div className="timeline-middle">
                <CheckCircleIcon
                  size={20}
                  className="text-primary"
                  weight="fill"
                />
              </div>
              <div className="timeline-end timeline-box">
                Product Engineer at Calimetrix
              </div>
              <hr className="bg-primary" />
            </li>
            <li>
              <hr className="bg-primary" />
              <div className="timeline-start">2022 - 2024</div>
              <div className="timeline-middle">
                <CheckCircleIcon
                  size={20}
                  weight="fill"
                  className="text-primary"
                />
              </div>
              <div className="timeline-end timeline-box">
                Senior Software Engineer at DataChat
              </div>
              <hr className="bg-primary" />
            </li>
            <li>
              <hr className="bg-primary" />
              <div className="timeline-start">2024 - Present</div>
              <div className="timeline-middle">
                <CheckCircleIcon size={20} className="text-primary" />
              </div>
              <div className="timeline-end timeline-box">
                Founding Software Engineer at Offstream
              </div>
            </li>
          </ul>
          <div className="md:w-1/2 w-full">
            <h1 className="text-5xl font-bold">The Journey</h1>
            <p className="py-6">
              Its been a circuitous path to software. I was formally trained in
              mechanical engineering, but kicked off my career in technical
              sales. I loved working with people and the rush of closing deals,
              but sales activity went to ~0 during the pandemic. Still, I was
              able to add value by owning our Salesforce instance - my first
              taste of software engineering. I&apos;ve been hooked ever since.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rootPage;
