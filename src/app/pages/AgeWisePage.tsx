import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { SubscribeModal } from '../components/SubscribeModal';
import { Baby, Users, Backpack, GraduationCap, Download } from 'lucide-react';

const ageGroupData = {
  '0-2': {
    title: '0-2 Years: Baby Development',
    color: 'from-peach/20 to-mint/20',
    sections: [
      'Physical milestones and motor development',
      'Language and communication beginnings',
      'Social and emotional bonding',
      'Feeding and nutrition guidelines',
      'Sleep patterns and routines',
      'Safety and childproofing',
    ],
  },
  '3-5': {
    title: '3-5 Years: Preschool Wonder',
    color: 'from-mint/20 to-sky/20',
    sections: [
      'Preschool readiness and learning',
      'Social skills and making friends',
      'Independence and self-care',
      'Creative play and imagination',
      'Early literacy and numeracy',
      'Emotional regulation basics',
    ],
  },
  '6-10': {
    title: '6-10 Years: School Age Growth',
    color: 'from-sky/20 to-lavender/20',
    sections: [
      'Academic support and homework help',
      'Building friendships and social skills',
      'Physical activities and sports',
      'Responsibility and chores',
      'Screen time management',
      'Building self-esteem',
    ],
  },
  '11-15': {
    title: '11-15 Years: Teen Transitions',
    color: 'from-lavender/20 to-cream/20',
    sections: [
      'Puberty and physical changes',
      'Peer relationships and social dynamics',
      'Academic pressure and time management',
      'Digital citizenship and safety',
      'Independence and decision-making',
      'Mental health awareness',
    ],
  },
};

export function AgeWisePage({ ageGroup }: { ageGroup?: string }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [pendingDownload, setPendingDownload] = React.useState<{
    ageKey: string;
    title: string;
  } | null>(null);

  // Handle download button click - show modal first
  const handleDownloadClick = (e: React.MouseEvent, ageKey: string, title: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Set pending download info and open modal
    setPendingDownload({ ageKey, title });
    setIsModalOpen(true);
  };

  // Handle subscription and proceed with download
  const handleSubscribe = (email: string) => {
    // Here you would typically send the email to your backend/newsletter service
    
    // Close modal
    setIsModalOpen(false);
    
    // Proceed with download if there's a pending download
    if (pendingDownload) {
      performDownload(pendingDownload.ageKey, pendingDownload.title);
      setPendingDownload(null);
    }
  };

  // Perform the actual download
  const performDownload = (ageKey: string, title: string) => {
    const data = ageGroupData[ageKey as keyof typeof ageGroupData];
    
    // Use the actual book title for 0-2 age group
    const bookTitle = ageKey === '0-2' 
      ? 'Early Childhood Development: A Parent\'s Guide (0–2 Years)'
      : title;
    
    const content = `
${bookTitle}
${'='.repeat(bookTitle.length)}

A Comprehensive Parenting Guide

Table of Contents:
${data.sections.map((section, i) => `${i + 1}. ${section}`).join('\n')}

---

This e-book provides detailed guidance for parenting children in the ${ageKey} years age range.

${data.sections.map((section, i) => `
Chapter ${i + 1}: ${section}
${'-'.repeat(section.length + 10)}

[Detailed content for ${section.toLowerCase()} would be provided here, including:
- Key developmental milestones
- Practical tips and strategies
- Common challenges and solutions
- Expert recommendations
- Real-life examples and scenarios]

`).join('\n')}

---

© ${new Date().getFullYear()} Smart Parenting Guides - Your trusted parenting resource
    `.trim();
    
    // Create and download the file
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = ageKey === '0-2' 
      ? 'early-childhood-development-guide-0-2-years.txt'
      : `parenting-guide-${ageKey}-years.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (!ageGroup || !ageGroupData[ageGroup as keyof typeof ageGroupData]) {
    return (
      <div className="min-h-screen">
        <SEO 
          title="Age-Wise Parenting Guide - Development Tips by Age Group | Smart Parenting Guides"
          description="Comprehensive age-wise parenting guides for children 0-15 years. Get specific guidance, tips, and resources tailored to your child's developmental stage."
          keywords="age-wise parenting, child development by age, parenting guide 0-2 years, preschool parenting, school age parenting, teen parenting, developmental milestones"
          canonicalUrl="https://smartparentingguides.com/age-wise"
        />
        <section className="relative bg-gradient-to-br from-peach/20 to-lavender/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center space-y-6">
              <Badge variant="category">Age-Specific Guidance</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">
                Age-Wise Parenting Guide
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select an age group to get specific guidance tailored to your child's developmental stage
              </p>
            </div>
          </div>
        </section>
        
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(ageGroupData).map(([key, data]) => (
              <div key={key} className="relative">
                <Link to={`/age-wise/${key}`}>
                  <Card hoverable className="h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold flex-1">{data.title}</h3>
                      
                    </div>
                    <ul className="space-y-2">
                      {data.sections.map((section, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{section}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  
  const data = ageGroupData[ageGroup as keyof typeof ageGroupData];
  
  const ageGroupTitles: Record<string, string> = {
    '0-2': 'Baby Care Guide (0-2 Years)',
    '3-5': 'Preschool Parenting Guide (3-5 Years)',
    '6-10': 'School Age Parenting Guide (6-10 Years)',
    '11-15': 'Teen Parenting Guide (11-15 Years)',
  };
  
  return (
    <div className="min-h-screen">
      <SEO 
        title={`${ageGroupTitles[ageGroup]} - Smart Parenting Guides`}
        description={`Expert parenting guidance for ${ageGroup} years. Comprehensive tips, activities, and resources for ${data.title.toLowerCase()}.`}
        keywords={`parenting ${ageGroup} years, ${ageGroup} parenting guide, child development ${ageGroup}, parenting tips ${ageGroup}`}
        canonicalUrl={`https://smartparentingguides.com/age-wise/${ageGroup}`}
      />
      <section className={`relative bg-gradient-to-br ${data.color}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{data.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive guidance for this important developmental stage
          </p>
        </div>
      </section>
      
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {data.sections.map((section, index) => (
            <Card key={index}>
              <h3 className="text-xl font-bold mb-3">{section}</h3>
              <p className="text-muted-foreground leading-relaxed">
                Detailed information and practical tips for {section.toLowerCase()} will be available here, providing parents with actionable guidance.
              </p>
            </Card>
          ))}
        </div>
        
        <div className="mt-8">
          <Button
            onClick={(e) => handleDownloadClick(e, ageGroup as string, data.title)}
            className="bg-primary text-white"
          >
            <Download className="w-5 h-5 mr-2" />
            Download E-Book
          </Button>
        </div>
      </section>
      
      <SubscribeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubscribe={handleSubscribe}
        bookTitle={
          pendingDownload?.ageKey === '0-2'
            ? 'Early Childhood Development: A Parent\'s Guide (0–2 Years)'
            : pendingDownload?.title || ''
        }
      />
    </div>
  );
}