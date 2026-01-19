import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';
import babycareImage from '../../assets/images/babycare.png';
import { 
  Milk, 
  Moon, 
  Droplets, 
  Shield, 
  TrendingUp, 
  Heart,
  Baby,
  AlertTriangle
} from 'lucide-react';
import AffiliateProducts from './affiliateProducts';

export function BabyCarePage() {
  const [selectedAge, setSelectedAge] = useState('all');
  
  const categories = [
    {
      title: 'Feeding & Nutrition',
      description: 'Breastfeeding, formula feeding, and introducing solids',
      icon: Milk,
      color: 'bg-peach',
      ages: ['all', '0-6', '6-12', '12-24'],
    },
    {
      title: 'Sleep & Routine',
      description: 'Establishing healthy sleep patterns and routines',
      icon: Moon,
      color: 'bg-sky',
      ages: ['all', '0-6', '6-12', '12-24'],
    },
    {
      title: 'Hygiene & Bath Care',
      description: 'Daily care, bathing, and grooming essentials',
      icon: Droplets,
      color: 'bg-mint',
      ages: ['all', '0-6', '6-12', '12-24'],
    },
    {
      title: 'Health & Safety',
      description: 'Vaccinations, health checks, and safety measures',
      icon: Shield,
      color: 'bg-lavender',
      ages: ['all', '0-6', '6-12', '12-24'],
    },
    {
      title: 'Growth & Development',
      description: 'Milestones and developmental stages',
      icon: TrendingUp,
      color: 'bg-cream',
      ages: ['all', '0-6', '6-12', '12-24'],
    },
    {
      title: 'Emotional Bonding',
      description: 'Building strong parent-child connections',
      icon: Heart,
      color: 'bg-peach',
      ages: ['all', '0-6', '6-12', '12-24'],
    },
    {
      title: 'Baby Activities',
      description: 'Age-appropriate play and stimulation',
      icon: Baby,
      color: 'bg-mint',
      ages: ['all', '0-6', '6-12', '12-24'],
    },
    {
      title: 'Common Mistakes',
      description: 'What to avoid in early parenting',
      icon: AlertTriangle,
      color: 'bg-sky',
      ages: ['all', '0-6', '6-12', '12-24'],
    },
  ];
  
  const ageFilters = [
    { value: 'all', label: 'All Ages' },
    { value: '0-6', label: '0-6 Months' },
    { value: '6-12', label: '6-12 Months' },
    { value: '12-24', label: '12-24 Months' },
  ];
  
  // Filter categories based on selected age
  const filteredCategories = categories.filter(category => 
    category.ages.includes(selectedAge)
  );
  
  return (
    <div className="min-h-screen">
      <SEO 
        title="Baby Care Essentials (0-2 Years) - Feeding, Sleep, Safety Guide | Smart Parenting Guides"
        description="Complete baby care guide for 0-2 years. Expert tips on feeding, sleep routines, hygiene, safety, and developmental milestones for your little one."
        keywords="baby care, newborn care, infant feeding, baby sleep routine, baby safety, baby milestones, 0-6 months, 6-12 months, toddler care"
        canonicalUrl="https://smartparentingguides.com/baby-care"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Baby Care Essentials Guide',
          description: 'Comprehensive guide for baby care from 0-2 years',
          url: 'https://smartparentingguides.com/baby-care',
          author: {
            '@type': 'Organization',
            name: 'Smart Parenting Guides',
          },
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-peach/20 to-mint/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="age">0-2 Years</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">
                Baby Care Essentials
              </h1>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about caring for your little one during their first two years. From feeding to sleep, we've got you covered with expert guidance.
              </p>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={babycareImage}
                alt="Baby care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Age Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {ageFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedAge(filter.value)}
              className={`px-6 py-3 rounded-[1.25rem] font-medium transition-all ${
                selectedAge === filter.value
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} hoverable className="h-full">
                <div className={`${category.color} rounded-2xl p-6 mb-4 flex items-center justify-center`}>
                  <Icon className="w-10 h-10 text-foreground" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      
      {/* Safety Tips */}
      <section className="bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="bg-peach/20 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-xl p-3 flex-shrink-0">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Safety First</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Always place baby on their back to sleep</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Keep small objects away from baby's reach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Never leave baby unattended on changing table or high surface</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Test bath water temperature before bathing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Follow recommended vaccination schedule</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <AffiliateProducts />
    </div>
  );
}