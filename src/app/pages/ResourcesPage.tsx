import React from 'react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Download, FileText, Calendar, Monitor, CheckSquare } from 'lucide-react';

export function ResourcesPage() {
  const resources = [
    {
      title: 'Baby Care Checklist',
      description: 'Complete checklist for newborn essentials and daily care',
      icon: CheckSquare,
      color: 'bg-peach',
      downloadable: true,
    },
    {
      title: 'Developmental Milestones Chart',
      description: 'Track your child\'s growth and development milestones',
      icon: Calendar,
      color: 'bg-mint',
      downloadable: true,
    },
    {
      title: 'Weekly Activity Planner',
      description: 'Plan engaging activities for the entire week',
      icon: FileText,
      color: 'bg-sky',
      downloadable: true,
    },
    {
      title: 'Screen Time Guidelines',
      description: 'Age-appropriate recommendations for digital device usage',
      icon: Monitor,
      color: 'bg-lavender',
      downloadable: true,
    },
  ];
  
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-cream/30 to-mint/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="category">Helpful Resources</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Downloadable Resources
            </h1>
            <p className="text-lg text-muted-foreground">
              Practical tools and guides to support your parenting journey
            </p>
          </div>
        </div>
      </section>
      
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card key={index} hoverable>
                <div className={`${resource.color} rounded-2xl p-6 mb-4 flex items-center justify-center`}>
                  <Icon className="w-12 h-12 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
