import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import Rozarpay from '../components/Rozarpay';
import { SEO } from '../components/SEO';
import familyPhoto from '../../assets/images/familyPhoto.png';
import {
  Baby,
  Heart,
  Users,
  Sparkles,
  Target,
  Smile,
  BookOpen,
  Palette,
  Mail
} from 'lucide-react';

export function HomePage() {
  const ageGroups = [
    {
      range: '0-2 Years',
      title: 'Baby Care',
      description: 'Essential guidance for your little one\'s first years',
      color: 'bg-peach',
      link: '/age-wise/0-2',
      icon: Baby,
    },
    {
      range: '3-5 Years',
      title: 'Preschool',
      description: 'Building foundation through play and learning',
      color: 'bg-mint',
      link: '/age-wise/3-5',
      icon: Sparkles,
    },
    {
      range: '6-10 Years',
      title: 'School Age',
      description: 'Supporting growth and independence',
      color: 'bg-sky',
      link: '/age-wise/6-10',
      icon: BookOpen,
    },
    {
      range: '11-15 Years',
      title: 'Teens',
      description: 'Navigating adolescence together',
      color: 'bg-lavender',
      link: '/age-wise/11-15',
      icon: Users,
    },
  ];

  const coreValues = [
    {
      title: 'Coordination & Social Skills',
      description: 'Help your child develop essential motor and social abilities',
      icon: Users,
    },
    {
      title: 'Friendship & Bonding',
      description: 'Foster meaningful relationships and emotional connections',
      icon: Heart,
    },
    {
      title: 'Kindness & Caring',
      description: 'Nurture empathy and compassion in daily life',
      icon: Smile,
    },
    {
      title: 'Independence & Self-Help',
      description: 'Encourage confidence and self-reliance',
      icon: Target,
    },
    {
      title: 'Respect & Values',
      description: 'Build a foundation of respect and strong values',
      icon: Sparkles,
    },
    {
      title: 'Creative Expression',
      description: 'Support imagination and artistic development',
      icon: Palette,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Parenting Tips & Baby Care Guide - Expert Advice for Parents | Smart Parenting Guides"
        description="Comprehensive parenting tips, baby care guides, and kids activities. Expert advice for parents of babies, toddlers, and children. Age-wise guidance from 0-15 years."
        keywords="parenting tips, baby care, kids activities, child development, parenting advice, baby feeding, toddler care, preschool tips, teen parenting, age-wise parenting guide"
        canonicalUrl="https://smartparentingguides.com"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Smart Parenting Guides',
          description: 'Complete parenting guide with age-wise tips, activities, and expert advice',
          url: 'https://smartparentingguides.com',
          publisher: {
            '@type': 'Organization',
            name: 'Smart Parenting Guides',
          },
        }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-peach/20 via-background to-mint/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="category">For Modern Parents</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Parenting Made Simple
                <span className="block text-primary mt-2">Age-Wise Guidance</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From newborn care to teenage years - expert tips, activities, and stories tailored for every stage of your child's development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/parenting-tips">Explore Parenting Tips</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/age-wise">Age-Wise Guidance</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={familyPhoto}
                alt="Happy family"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Age-Wise Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Choose Your Child's Age Group
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized guidance, tips, and activities designed specifically for your child's developmental stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Link key={index} to={group.link}>
                <Card hoverable className="h-full">
                  <div className={`${group.color} rounded-2xl p-6 mb-4 flex items-center justify-center`}>
                    <Icon className="w-12 h-12 text-foreground" />
                  </div>
                  <CardHeader>
                    <Badge variant="age" className="mb-2 w-fit">{group.range}</Badge>
                    <CardTitle>{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{group.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Core Parenting Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential skills and values to nurture in your child's journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} hoverable>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="../src/assets/images/activities.png"
                alt="Kids activities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <Badge variant="category">Fun & Learning</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Endless Activities for Every Age
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover age-appropriate activities that combine fun with learning. From indoor crafts to outdoor adventures, we've got you covered.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Indoor & Outdoor Activities</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Learning & Educational Games</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Creative Arts & Crafts</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Physical & Sports Activities</span>
              </li>
            </ul>
            <Button asChild>
              <Link to="/activities">Explore Activities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stories Preview */}
      <section className="bg-gradient-to-br from-lavender/20 to-sky/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stories That Inspire
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meaningful stories with valuable lessons for children of all ages
            </p>
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/stories">Read Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* donation */}
        
   
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
             
          <div className="text-center">
            <h2 className="text-base font-semibold text-gray-600 tracking-wide uppercase">Support Our Mission</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Help us keep parenting resources free.</p>
            <p className="my-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Your contributions help us hire child development experts and keep our guides accessible to every family, regardless of income.
            </p>
             <Rozarpay />
          </div>

    


      </section>
    </div>
  );
}