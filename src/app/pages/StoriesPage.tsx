import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';
import { BookOpen, ArrowRight } from 'lucide-react';
import parentingTipsImage from '../../assets/images/parentingTips.png';
import activitiesImage from '../../assets/images/activities.png';
import familyPhotoImage from '../../assets/images/familyPhoto.png';

export function StoriesPage() {
  const [selectedAge, setSelectedAge] = useState('all');
  
  const stories = [
    {
      id: 'sharing-bear',
      title: 'The Sharing Bear',
      age: '3-5 Years',
      ageValue: '3-5',
      moral: 'Kindness',
      excerpt: 'A heartwarming tale about a bear who learns the joy of sharing with forest friends...',
      image: parentingTipsImage,
    },
    {
      id: 'brave-turtle',
      title: 'The Brave Little Turtle',
      age: '6-10 Years',
      ageValue: '6-10',
      moral: 'Courage',
      excerpt: 'An inspiring story about a turtle who overcomes fear to help her friends...',
      image: activitiesImage,
    },
    {
      id: 'honest-rabbit',
      title: 'The Honest Rabbit',
      age: '3-5 Years',
      ageValue: '3-5',
      moral: 'Honesty',
      excerpt: 'A touching story about the importance of telling the truth...',
      image: familyPhotoImage,
    },
    {
      id: 'helpful-butterfly',
      title: 'The Helpful Butterfly',
      age: '6-10 Years',
      ageValue: '6-10',
      moral: 'Helping Others',
      excerpt: 'Learn about the power of helping others through this beautiful butterfly story...',
      image: activitiesImage,
    },
  ];
  
  const ageFilters = [
    { value: 'all', label: 'All Ages' },
    { value: '3-5', label: '3-5 Years' },
    { value: '6-10', label: '6-10 Years' },
  ];
  
  // Filter stories based on selected age
  const filteredStories = selectedAge === 'all' 
    ? stories 
    : stories.filter(story => story.ageValue === selectedAge);
  
  return (
    <div className="min-h-screen">
      <SEO 
        title="Moral Stories for Kids - Inspiring Tales with Life Lessons | Smart Parenting Guides"
        description="Read meaningful moral stories for children. Engaging tales with valuable life lessons about kindness, honesty, courage, and more. Age-appropriate stories for kids 3-10 years."
        keywords="moral stories for kids, children stories, bedtime stories, life lessons for kids, values for children, inspirational stories, character building stories"
        canonicalUrl="https://smartparentingguides.com/stories"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Moral Stories for Children',
          description: 'Collection of inspiring moral stories for kids with life lessons',
          url: 'https://smartparentingguides.com/stories',
          publisher: {
            '@type': 'Organization',
            name: 'Smart Parenting Guides',
          },
        }}
      />
      <section className="relative bg-gradient-to-br from-lavender/20 to-peach/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="category">Moral Stories</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Stories That Inspire
            </h1>
            <p className="text-lg text-muted-foreground">
              Meaningful stories with valuable life lessons for children of all ages
            </p>
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
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStories.map((story, index) => (
            <Card key={index} hoverable>
              <div className="h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Badge variant="age">{story.age}</Badge>
                  <Badge variant="category">{story.moral}</Badge>
                </div>
                <h3 className="text-2xl font-bold">{story.title}</h3>
                <p className="text-muted-foreground">{story.excerpt}</p>
                <Link 
                  to={`/stories/${story.id}`}
                  className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Read Story</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}