import { FaGraduationCap } from "react-icons/fa"; 
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import FlickeringGrid from '@/components/ui/flickering-grid';
import { TextAnimate } from '@/components/ui/text-animate';
import Newsletter from './NewsLetter';
import ContactInfos from "./Contact";
// import { FootersLinks, SocialLink } from '@/core/mocks/footer.mock'

/**
 * Functional component for rendering a footer
 * @parmams
 * @returns JSX element representing the footer
 * */

const Footer: React.FC = () => {
  const quickLinks = [
    { text: 'About Us', link: '#' },
    { text: 'Admissions', link: '#' },
    { text: 'Academics', link: '#' },
    { text: 'Student Life', link: '#' },
    { text: 'News & Events', link: '#' },
    { text: 'Contact Us', link: '#' },
  ];

  const socialLinks = [
    { icon: 'fa-facebook-f', link: '#' },
    { icon: 'fa-twitter', link: '#' },
    { icon: 'fa-instagram', link: '#' },
    { icon: 'fa-linkedin-in', link: '#' },
    { icon: 'fa-youtube', link: '#' },
  ];
  return (
    <footer className="bg-gray-100 text-gray-600 dark:bg-dark-900 dark:text-gray-400">
      <div className="container mx-auto px-6 py-12 ">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Column */}
          <div>
            <div className="mb-4 flex items-center">
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <i className="text-xl text-white"> <FaGraduationCap /></i>
              </div>
              <span className="font-heading text-xl font-bold dark:text-white">
                Future<span className="text-primary">Academy</span>
              </span>
            </div>
            <p className="mb-4">
              Innovative education for tomorrow's leaders, thinkers, and
              creators since 2010.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-gray-500 transition-colors hover:text-primary dark:text-gray-400"
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="transition-colors hover:text-primary"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
              <div>
                <ContactInfos/>
              </div>
          {/* Newsletter Column */}
          <div>
            <Newsletter />
          </div>
        </div>

        {/* Copyright */}
        <div className="dark:border-dark-700 mt-12 border-t border-gray-200 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Future Academy. All rights
            reserved. Designed with{' '}
            <i className="fas fa-heart text-red-500"></i> for education.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center space-x-1 border-t border-t-foreground/40 bg-foreground/50 px-1 py-[3px] text-sm font-light">
        <span>Designed and developped by</span>

        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                to={'https://www.linkedin.com/in/hermanmoukam/'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nowrap font-normal text-primary/70 duration-200 hover:text-primary/70 hover:underline"
              >
                Herman Moukam
              </Link>
            </TooltipTrigger>

            <TooltipContent className="relative border border-footer-foreground bg-footer px-6 py-2 text-xs text-footer-foreground">
              <p className="relative z-30 space-y-3 leading-4">
                <p className="flex flex-col gap-2">
                  <span className="w-fit bg-footer">
                    <TextAnimate animation="slideLeft" by="character">
                      Hello, I am Herman Moukam,
                    </TextAnimate>
                  </span>
                  <p className="">
                    <span className="bg-footer">
                      I am a passionate <b>full-stack web</b> developer,
                    </span>
                    <br />
                    <span className="bg-footer">
                      specializing in crafting efficient and tailored digital
                      solutions.
                    </span>
                    <br />
                    <span className="bg-footer">
                      An expert in transforming ideas into modern applications,
                    </span>
                    <br />
                    <span className="bg-footer">
                      I combine creativity with technical precision.
                    </span>
                    <br />
                    <span className="bg-footer">
                      Always seeking innovation, I am committed to tackling
                    </span>
                    <br />
                    <span className="bg-footer">
                      digital challenges with professionalism and efficiency.
                    </span>
                  </p>
                </p>

                <p className="flex items-center gap-10">
                  <p className="flex w-fit flex-col bg-footer leading-3">
                    <span>Do you want to</span>
                    <span>contact me ?</span>
                  </p>

                  {/* Contact Informations */}
                  <div className="leading-4">
                    <p className="w-fit bg-footer">
                      Linkedin:
                      <Link
                        to={'https://www.linkedin.com/in/hermanmoukam/'}
                        target="_blank"
                        className="text-nowrap font-medium text-primary/85 duration-200 hover:text-primary"
                      >
                        <TextAnimate animation="blurIn" className="ml-2 inline">
                          My LinkedIn profile
                        </TextAnimate>
                      </Link>
                    </p>

                    <p className="w-fit bg-footer">
                      Whatsapp:
                      <Link
                        to={
                          'https://wa.me/237658852731?text=bonjour%20Herman%20Moukam'
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-nowrap font-medium text-primary/85 duration-200 hover:text-primary"
                      >
                        <TextAnimate
                          animation="blurIn"
                          by="character"
                          className="ml-2 inline"
                        >
                          +237 658 852 731
                        </TextAnimate>
                      </Link>
                    </p>
                  </div>
                </p>
              </p>

              <FlickeringGrid
                className="absolute inset-0 z-0 size-full"
                squareSize={4}
                gridGap={6}
                color="#2f22f2"
                maxOpacity={0.3}
                flickerChance={0.8}
                height={800}
                width={800}
              />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </footer>
  );
};

export default Footer;
