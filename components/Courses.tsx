import React from 'react';
import { BookOpen, Atom, Trophy, ArrowRight, Target, Brain } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

export const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Academic Programs" 
          subtitle="Tailored learning paths designed to build strong foundations and achieve competitive excellence."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Column 1: Foundation */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue group-hover:w-3 transition-all"></div>
            <div className="flex items-start justify-between mb-6">
              <div className="bg-blue-100 p-4 rounded-xl text-brand-blue">
                <BookOpen size={32} />
              </div>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Foundation
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">High School Excellence</h3>
            <p className="text-gray-600 mb-6 min-h-[48px]">
              Comprehensive coaching for school exams and early foundation for competitive exams.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Target className="text-brand-red w-5 h-5" />
                <span className="font-medium text-gray-800">Class VIII</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="text-brand-red w-5 h-5" />
                <span className="font-medium text-gray-800">Class IX</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="text-brand-red w-5 h-5" />
                <span className="font-medium text-gray-800">Class X</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
               <div className="flex flex-wrap gap-2 mb-6">
                 <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600">CBSE</span>
                 <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600">ICSE</span>
                 <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600">IGCSE</span>
               </div>
               <Button variant="outline" fullWidth className="group">
                 Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </Button>
            </div>
          </div>

          {/* Column 2: Senior & Competitive */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-2 h-full bg-brand-red group-hover:w-3 transition-all"></div>
            <div className="flex items-start justify-between mb-6">
              <div className="bg-red-100 p-4 rounded-xl text-brand-red">
                <Atom size={32} />
              </div>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Advanced
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Senior Secondary & Competitive</h3>
            <p className="text-gray-600 mb-6 min-h-[48px]">
              Rigorous preparation for Board exams and National level entrance tests.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Brain className="text-brand-blue w-5 h-5" />
                <span className="font-medium text-gray-800">Class XI & XII (Science/Commerce)</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="text-brand-blue w-5 h-5" />
                <span className="font-medium text-gray-800">JEE (Mains & Advanced)</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="text-brand-blue w-5 h-5" />
                <span className="font-medium text-gray-800">NEET / CUET</span>
              </div>
            </div>

             <div className="pt-6 border-t border-gray-100">
               <div className="flex flex-wrap gap-2 mb-6">
                 <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600">Physics</span>
                 <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600">Chemistry</span>
                 <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600">Maths</span>
                 <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600">Biology</span>
               </div>
               <Button variant="outline" fullWidth className="group">
                 Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};