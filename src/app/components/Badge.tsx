import React from 'react';
import { cn } from '../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'age' | 'category';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-secondary text-secondary-foreground',
    age: 'bg-peach text-foreground',
    category: 'bg-mint text-foreground',
  };
  
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
