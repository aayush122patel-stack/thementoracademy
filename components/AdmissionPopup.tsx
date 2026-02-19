import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface AdmissionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionPopup: React.FC<AdmissionPopupProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false); // Reset for next time if needed
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      {/* Increased max-width from max-w-md to max-w-xl and added more padding/shadow */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl relative overflow-hidden animate-fade-in-up scale-100 transform transition-transform">
        {/* Header */}
        <div className="bg-brand-blue p-8 text-white text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X size={28} />
          </button>
          <h3 className="text-3xl font-extrabold mb-2">Admissions Open</h3>
          {/* Updated attractive line for students */}
          <p className="text-yellow-300 text-lg font-bold tracking-wide">
            Limited Seats! Secure Your Spot in the Toppers' Batch.
          </p>
        </div>

        {/* Body */}
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Thank You!</h4>
              <p className="text-gray-600 text-lg">We have received your details. Our academic counselor will call you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Student Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="Enter full name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Class / Course</label>
                    <select className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white">
                    <option>Class VIII</option>
                    <option>Class IX</option>
                    <option>Class X</option>
                    <option>Class XI</option>
                    <option>Class XII</option>
                    <option>Competitive Exams</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Board</label>
                    <select className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white">
                    <option>CBSE</option>
                    <option>ICSE</option>
                    <option>IGCSE</option>
                    <option>State Board</option>
                    </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                <input 
                  type="tel" 
                  required
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={10}
                  inputMode="numeric"
                  title="Please enter a valid 10-digit mobile number"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="Enter 10-digit number"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                  }}
                />
              </div>
              <Button type="submit" variant="accent" fullWidth className="mt-4 text-lg py-4">
                Enquire Now
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};