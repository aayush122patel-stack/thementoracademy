import React from 'react';
import { SectionHeading } from './SectionHeading';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side - aesthetically cropped and styled */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-brand-blue/10 transform translate-x-4 translate-y-4 rounded-2xl -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-xl h-[400px]">
               <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwermnNdzdzDjo0nvz71uCn6q2RXMXO9Do3jKcpw8zqvG9F0uNsxovZlS3G_elVfHLfW76IHiZLfPVL_NB7w7owZylZHQFMGPN8h5QOCkXdj5gw60ca5yEouUKtOtKu8Tw1_zG6c=s1360-w1360-h1020-rw" 
                alt="Classroom at The Mentor Academy" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <SectionHeading 
              title="Experience Learning Like Never Before" 
              subtitle="At The Mentor Academy, we provide an environment that fosters growth, curiosity, and excellence."
              centered={false}
            />
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our modern classrooms and student-centric approach ensure that every learner gets the best possible environment to thrive. We believe in interactive learning where questions are encouraged, and concepts are mastered.
            </p>

            <div className="space-y-4">
              {[
                "Modern Infrastructure & Comfortable Classrooms",
                "Dedicated Doubt Solving Sessions",
                "Small Batch Sizes for Personal Attention",
                "Regular Assessment & Performance Tracking"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-brand-blue/10 p-1.5 rounded-full text-brand-blue shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};