import React from 'react'
import { Link } from 'react-router-dom'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import FlickeringGrid from "@/components/ui/flickering-grid";
import { TextAnimate } from "@/components/ui/text-animate";
import Newsletter from './NewsLetter';
// import { FootersLinks, SocialLink } from '@/core/mocks/footer.mock'

/**
 * Functional component for rendering a footer
 * @parmams
 * @returns JSX element representing the footer
 * */

const Footer: React.FC = () => {
  const quickLinks = [
    { text: "About Us", link: "#" },
    { text: "Admissions", link: "#" },
    { text: "Academics", link: "#" },
    { text: "Student Life", link: "#" },
    { text: "News & Events", link: "#" },
    { text: "Contact Us", link: "#" }
  ];

  const socialLinks = [
    { icon: "fa-facebook-f", link: "#" },
    { icon: "fa-twitter", link: "#" },
    { icon: "fa-instagram", link: "#" },
    { icon: "fa-linkedin-in", link: "#" },
    { icon: "fa-youtube", link: "#" }
  ];
  return (
    <footer className="bg-gray-100 dark:bg-dark-900 text-gray-600 dark:text-gray-400">
            <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
              <span className="text-xl font-heading font-bold dark:text-white">
                Future<span className="text-primary">Academy</span>
              </span>
            </div>
            <p className="mb-4">Innovative education for tomorrow's leaders, thinkers, and creators since 2010.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:text-primary transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <Newsletter />
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-dark-700 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Future Academy. All rights reserved. Designed with <i className="fas fa-heart text-red-500"></i> for education.</p>
        </div>
      </div>
      <div className="border-t border-t-foreground/40 w-full px-1 py-[3px] space-x-1 font-light text-sm flex justify-center bg-foreground/50">
        <span>Designed and developped by</span>

        <TooltipProvider
          delayDuration={100}
        >
          <Tooltip>
            <TooltipTrigger>
              <Link
                to={'https://www.linkedin.com/in/hermanmoukam/'}
                target='_blank'
                rel="noopener noreferrer"
                className='font-normal text-primary/70 hover:text-primary/70 hover:underline duration-200 text-nowrap'
              >
                Herman Moukam
              </Link>
            </TooltipTrigger>

            <TooltipContent className='px-6 py-2 relative bg-footer border border-footer-foreground text-footer-foreground text-xs'>
              <p className='relative z-30 space-y-3 leading-4'>
                <p className="flex flex-col gap-2">
                  <span className="bg-footer w-fit">
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
                      specializing in crafting efficient and tailored digital solutions.
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
                  <p className="bg-footer flex flex-col leading-3 w-fit">
                    <span>Do you want to</span>
                    <span>contact me ?</span>
                  </p>

                  {/* Contact Informations */}
                  <div className="leading-4">
                    <p className="bg-footer w-fit">
                      Linkedin:
                      <Link
                        to={'https://www.linkedin.com/in/hermanmoukam/'}
                        target='_blank'
                        className='font-medium text-primary/85 hover:text-primary duration-200 text-nowrap'
                      >
                        <TextAnimate animation="blurIn" className='inline ml-2'>
                          My LinkedIn profile
                        </TextAnimate>
                      </Link>
                    </p>

                    <p className="bg-footer w-fit">
                      Whatsapp:
                      <Link
                        to={'https://wa.me/237658852731?text=bonjour%20Herman%20Moukam'}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='font-medium text-primary/85 hover:text-primary duration-200 text-nowrap'
                      >
                        <TextAnimate animation="blurIn" by="character" className='inline ml-2'>
                          +237 658 852 731
                        </TextAnimate>
                      </Link>
                    </p>
                  </div>
                </p>
              </p>

              <FlickeringGrid
                className="z-0 absolute inset-0 size-full"
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
  )
}

export default Footer
