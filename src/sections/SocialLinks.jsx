import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const SocialLinks = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each social link card
    gsap.utils.toArray(".social-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      description: "Connect with me professionally and view my career updates",
      url: "https://www.linkedin.com/in/sai-d-23157a1bb/",
      icon: "💼",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800"
    },
    {
      name: "GitHub",
      description: "Explore my code repositories and open-source contributions",
      url: "https://github.com/pinky2004-dot",
      icon: "💻",
      color: "from-gray-700 to-gray-800",
      hoverColor: "hover:from-gray-600 hover:to-gray-700"
    },
    {
      name: "Substack",
      description: "Exploring AI, data science, cloud certifications, and reflections on technology and beyond",
      url: "https://substack.com/@cheekygreatness",
      icon: "📝",
      color: "from-orange-600 to-orange-700",
      hoverColor: "hover:from-orange-700 hover:to-orange-800"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Let's Connect & Stay Updated"
          sub="🔗 Follow my journey and connect with me"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-card group block`}
            >
              <div className={`card-border rounded-xl p-8 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl bg-gradient-to-br ${social.color} ${social.hoverColor}`}>
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                    {social.name}
                  </h3>
                  
                  <p className="text-white-50 text-lg leading-relaxed mb-6">
                    {social.description}
                  </p>
                  
                  <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-all duration-300">
                    <span className="text-white font-medium mr-2">Visit Profile</span>
                    <svg 
                      className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional contact info */}
        <div className="mt-16 text-center">
          <div className="card-border rounded-xl p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-white-50 text-lg mb-6">
              I'm always interested in discussing new opportunities, collaborations, or just having a chat about data science and AI!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:saidonepudi2004@gmail.com"
                className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                saidonepudi2004@gmail.com
              </a>
              <a 
                href="tel:+19454009919"
                className="flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (945) 400-9919
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
