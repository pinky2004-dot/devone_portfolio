import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { researchAreas } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Research = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each research card
    gsap.utils.toArray(".research-card").forEach((card, index) => {
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
          delay: 0.3 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="research" ref={sectionRef} className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Research & Academic Work"
          sub="🔬 Advancing AI/ML Knowledge"
        />
        
        <div className="mt-16 space-y-8">
          {researchAreas.map((research, index) => (
            <div key={index} className="research-card card-border rounded-xl p-8 group hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {research.title}
                    </h3>
                  </div>
                  
                  <p className="text-white-50 text-lg leading-relaxed mb-4">
                    {research.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-semibold">Lab:</span>
                      <span className="text-white-50">{research.lab}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-semibold">Duration:</span>
                      <span className="text-white-50">{research.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-80">
                  <h4 className="font-semibold text-white mb-3">Technologies & Methods:</h4>
                  <div className="flex flex-wrap gap-2">
                    {research.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="card-border rounded-xl p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <h3 className="text-2xl font-bold text-white mb-4">Academic Background</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-2">Master of Science in Data Science</h4>
                <p className="text-white-50">University of North Texas - Denton, TX</p>
                <p className="text-white-50">Expected: May 2027</p>
                <p className="text-white-50">Status: Application in Progress</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-2">Bachelor of Science</h4>
                <p className="text-white-50">Computer Science & Data Science</p>
                <p className="text-white-50">University of North Texas - Denton, TX</p>
                <p className="text-white-50">GPA: 3.6 | May 2026</p>
                <p className="text-white-50">Dean's List Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
