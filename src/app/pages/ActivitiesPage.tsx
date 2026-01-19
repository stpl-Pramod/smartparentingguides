import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { 
  Home, 
  Sun, 
  BookOpen, 
  Palette,
  Dumbbell,
  Users,
  HeartHandshake,
  Monitor
} from 'lucide-react';

export function ActivitiesPage() {
  const [selectedAge, setSelectedAge] = useState('all');
  
  const categories = [
    {
      title: 'Indoor Activities',
      description: 'Fun activities for staying engaged indoors',
      icon: Home,
      color: 'bg-peach',
      activities: ['Building blocks', 'Puzzle time', 'Indoor treasure hunt', 'Pillow fort building'],
      ages: ['all', '0-2', '3-5', '6-10'],
    },
    {
      title: 'Outdoor Activities',
      description: 'Embrace nature and fresh air',
      icon: Sun,
      color: 'bg-mint',
      activities: ['Nature walks', 'Park playtime', 'Bike riding', 'Garden exploration'],
      ages: ['all', '3-5', '6-10', '11-15'],
    },
    {
      title: 'Learning Activities',
      description: 'Educational fun for curious minds',
      icon: BookOpen,
      color: 'bg-sky',
      activities: ['Science experiments', 'Math games', 'Reading time', 'Educational apps'],
      ages: ['all', '3-5', '6-10', '11-15'],
    },
    {
      title: 'Creative & Art',
      description: 'Express creativity through art',
      icon: Palette,
      color: 'bg-lavender',
      activities: ['Drawing and coloring', 'Craft projects', 'Music and dance', 'Story creation'],
      ages: ['all', '0-2', '3-5', '6-10', '11-15'],
    },
    {
      title: 'Physical & Sports',
      description: 'Active play for healthy bodies',
      icon: Dumbbell,
      color: 'bg-cream',
      activities: ['Swimming', 'Ball games', 'Yoga for kids', 'Obstacle courses'],
      ages: ['all', '3-5', '6-10', '11-15'],
    },
    {
      title: 'Emotional & Social',
      description: 'Building emotional intelligence',
      icon: Users,
      color: 'bg-peach',
      activities: ['Role-playing games', 'Feelings charades', 'Puppet shows', 'Group storytelling'],
      ages: ['all', '0-2', '3-5', '6-10', '11-15'],
    },
    {
      title: 'Family Bonding',
      description: 'Quality time together',
      icon: HeartHandshake,
      color: 'bg-mint',
      activities: ['Board games', 'Cooking together', 'Movie nights', 'Family projects'],
      ages: ['all', '0-2', '3-5', '6-10', '11-15'],
    },
    {
      title: 'Screen-Free Activities',
      description: 'Engaging without technology',
      icon: Monitor,
      color: 'bg-sky',
      activities: ['Card games', 'Origami', 'Baking', 'Camping at home'],
      ages: ['all', '3-5', '6-10', '11-15'],
    },
  ];
  
  const ageGroups = [
    { value: 'all', label: 'All Ages' },
    { value: '0-2', label: '0-2 Years' },
    { value: '3-5', label: '3-5 Years' },
    { value: '6-10', label: '6-10 Years' },
    { value: '11-15', label: '11-15 Years' },
  ];
  
  // Filter categories based on selected age
  const filteredCategories = categories.filter(category => 
    category.ages.includes(selectedAge)
  );
  
  return (
    <div className="min-h-screen">
      <SEO 
        title="Kids Activities & Educational Games - Indoor & Outdoor Fun | Smart Parenting Guides"
        description="Discover engaging activities for kids of all ages. Indoor crafts, outdoor adventures, learning games, creative arts, and more. Age-appropriate activities from 0-15 years."
        keywords="kids activities, children games, indoor activities, outdoor activities, educational games, creative activities, physical activities, family bonding activities"
        canonicalUrl="https://smartparentingguides.com/activities"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Kids Activities and Educational Games',
          description: 'Comprehensive collection of age-appropriate activities for children',
          url: 'https://smartparentingguides.com/activities',
          author: {
            '@type': 'Organization',
            name: 'Smart Parenting Guides',
          },
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mint/20 to-sky/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="category">Activities & Games</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">
                Endless Fun & Learning Activities
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover engaging activities for every age, from indoor crafts to outdoor adventures. Keep your kids entertained while promoting their development.
              </p>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="../src/assets/images/activities.png"
                alt="Children activities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Age Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {ageGroups.map((group) => (
            <button
              key={group.value}
              onClick={() => setSelectedAge(group.value)}
              className={`px-6 py-3 rounded-[1.25rem] font-medium transition-all ${
                selectedAge === group.value
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>
      </section>
      
      {/* Activities Grid */}
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
                  <CardTitle className="text-lg mb-2">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      
      {/* Activity Benefits */}
      <section className="bg-gradient-to-br from-lavender/10 to-peach/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Regular Activities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Engaging in diverse activities promotes holistic child development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Physical Development',
                items: ['Improved motor skills', 'Better coordination', 'Healthy habits', 'Increased strength'],
              },
              {
                title: 'Cognitive Growth',
                items: ['Problem-solving skills', 'Enhanced creativity', 'Better focus', 'Academic improvement'],
              },
              {
                title: 'Social-Emotional',
                items: ['Confidence building', 'Teamwork skills', 'Emotional regulation', 'Communication skills'],
              },
            ].map((benefit, index) => (
              <Card key={index} className="bg-card/80">
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}