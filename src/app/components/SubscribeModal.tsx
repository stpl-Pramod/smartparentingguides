import React, { useState } from 'react';
import { X, Mail, Download } from 'lucide-react';
import { Button } from './Button';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (email: string) => void;
  bookTitle: string;
}

export function SubscribeModal({ isOpen, onClose, onSubscribe, bookTitle }: SubscribeModalProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate a brief loading state
    setTimeout(() => {
      onSubscribe(email);
      
      // Trigger PDF download
      const link = document.createElement('a');
      link.href = '/src/assets/Early-Childhood-Development-Guide.pdf';
      link.download = 'Early-Childhood-Development-Guide.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsSubmitting(false);
      setEmail('');
    }, 500);
  };

  const handleClose = () => {
    setEmail('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        

        {/* Content */}
        <h2 className="text-2xl font-bold mb-3">Download Your Free E-Book</h2>
        <p className="text-muted-foreground mb-2">
          <strong>{bookTitle}</strong>
        </p>
        <p className="text-muted-foreground mb-6">
          Subscribe to our newsletter to get this comprehensive guide and stay updated with parenting tips!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                disabled={isSubmitting}
              />
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-500">{error}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-3.5 rounded-2xl hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Subscribing...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Subscribe & Download
              </span>
            )}
          </Button>
        </form>

        {/* Privacy note */}
        <p className="mt-4 text-xs text-center text-muted-foreground">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
