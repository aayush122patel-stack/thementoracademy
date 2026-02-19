import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Aditya Kumar",
      role: "JEE Aspirant",
      image: "https://picsum.photos/100/100?random=1",
      quote: "The personalized attention at The Mentor Academy helped me clear my concepts in Physics and Math. The faculty is incredibly supportive."
    },
    {
      name: "Sneha Gupta",
      role: "Class X Topper",
      image: "https://picsum.photos/100/100?random=2",
      quote: "I scored 98% in my boards thanks to the rigorous testing and feedback system here. Best institute for foundation!"
    },
    {
      name: "Rohan Mehta",
      role: "NEET Qualified",
      image: "https://picsum.photos/100/100?random=3",
      quote: "The biology faculty made complex topics so easy to understand. Their study material is top-notch and exam-oriented."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Student Success Stories" 
          subtitle="Hear from our students who achieved their dreams with us."
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-6 right-6 text-blue-100 w-12 h-12 fill-current" />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-blue"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <span className="text-sm text-brand-red font-medium">{t.role}</span>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed relative z-10">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};