import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each card
    gsap.utils.toArray(".about-card").forEach((card, index) => {
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

  const certifications = [
    {
      title: "AWS AI Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "August 2025 - August 2028"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "July 2025 - July 2028"
    },
    {
      title: "Post Graduate in AI and ML",
      issuer: "University of Texas at Austin, McCombs",
      date: "May 2025"
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "JavaScript", "C++", "SQL", "HTML/CSS", "PHP"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Flask", "Scikit-learn", "PyTorch", "TensorFlow", "ASP.Net Core"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "AWS", "Pinecone", "Langchain", "Swagger", "Linux", "Docker", "VS Code", "Jupyter Notebooks"]
    },
    {
      category: "Cloud & APIs",
      items: ["REST APIs", "AWS Lambda", "AWS SageMaker", "AWS Bedrock", "AWS Cognito", "OpenAI GPT", "AWS S3"]
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="About Me"
          sub="👨‍💻 Data Scientist & AI/ML Engineer"
        />
        
        <div className="mt-16 space-y-12">
          {/* Introduction */}
          <div className="about-card card-border rounded-xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Professional Summary</h3>
            <p className="text-white-50 text-lg leading-relaxed max-w-4xl mx-auto">
              I am a passionate Data Scientist and AI/ML Engineer with expertise in developing intelligent solutions 
              that transform raw data into actionable insights. With experience in both industry and academia, I specialize 
              in machine learning, cloud computing, and full-stack development. My work spans from building predictive 
              models with 88% accuracy to mentoring 30+ students in AI/ML fundamentals.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full">Celina, Texas</span>
              <span className="px-4 py-2 bg-green-600 text-white rounded-full">Green Card Status</span>
              <span className="px-4 py-2 bg-purple-600 text-white rounded-full">Available for Opportunities</span>
            </div>
          </div>

          {/* Skills */}
          <div className="about-card">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="card-border rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="about-card">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="card-border rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                  <p className="text-blue-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-white-50 text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="about-card card-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Leadership & Involvement</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Treasurer - Data Science Organization</h4>
                    <p className="text-white-50">August 2024 - Present</p>
                    <p className="text-white-50 text-sm">Managed budgeting and allocation of $5,000 in annual funds, ensuring financial transparency and responsible resource usage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Amazon University Event - ReachBack</h4>
                    <p className="text-white-50">Selected Participant</p>
                    <p className="text-white-50 text-sm">Selected to join the AWS Cloud Cohort kickoff event, building connections with AWS professionals and peers.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Undergraduate Research Assistant</h4>
                    <p className="text-white-50">I.D.E.A Lab - August 2024 - Present</p>
                    <p className="text-white-50 text-sm">Designing and evaluating taxonomy construction algorithms using embedding quantization and LLMs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">AI/ML Club Member</h4>
                    <p className="text-white-50">University of North Texas</p>
                    <p className="text-white-50 text-sm">Active member contributing to AI/ML community and knowledge sharing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
