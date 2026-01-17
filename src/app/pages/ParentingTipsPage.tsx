import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';
import { ChevronDown, Users, Heart, Brain, Target, Smile, BookOpen, Coins, Sparkles, HandHeart } from 'lucide-react';
import { cn } from '../utils/cn';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import parentingTips from '../../assets/images/parentingTips.png';

export function ParentingTipsPage() {
  const topics = [
    {
      title: 'Coordination & Social Skills',
      icon: Users,
      image: parentingTips,
      gradient: 'from-sky/20 to-blue/10',
      tips: [
        {
          age: '0-2 Years',
          content: 'Encourage tummy time and reaching for toys to develop motor coordination. Engage in face-to-face interactions to build early social awareness.',
        },
        {
          age: '3-5 Years',
          content: 'Organize playdates to develop sharing and turn-taking skills. Teach simple cooperative games and group activities.',
        },
        {
          age: '6-10 Years',
          content: 'Encourage team sports and group projects. Practice active listening and respectful communication with peers.',
        },
      ],
    },
    {
      title: 'Friendship & Social Bonding',
      icon: Heart,
      image: parentingTips,
      gradient: 'from-rose/20 to-pink/10',
      tips: [
        {
          age: '3-5 Years',
          content: 'Model healthy friendships in your own life. Help children navigate conflicts and teach problem-solving skills.',
        },
        {
          age: '6-10 Years',
          content: 'Encourage diverse friendships and teach inclusivity. Discuss the qualities of good friends and how to be one.',
        },
        {
          age: '11-15 Years',
          content: 'Respect their friendship choices while being available for guidance. Discuss peer pressure and staying true to values.',
        },
      ],
    },
    {
      title: 'Parents as Best Teacher',
      icon: BookOpen,
      image: parentingTips,
      gradient: 'from-amber/20 to-orange/10',
      tips: [
        {
          age: 'All Ages',
          content: 'Lead by example in all situations. Children learn more from what you do than what you say.',
        },
        {
          age: 'All Ages',
          content: 'Create teachable moments in everyday activities. Turn grocery shopping into math lessons or cooking into science experiments.',
        },
        {
          age: 'All Ages',
          content: 'Maintain open communication and be approachable. Let children know they can always come to you with questions.',
        },
      ],
    },
    {
      title: 'Caring & Empathy',
      icon: HandHeart,
      image: parentingTips,
      gradient: 'from-peach/20 to-coral/10',
      tips: [
        {
          age: '0-2 Years',
          content: 'Respond consistently to baby\'s needs to build trust and security. Show gentleness with pets and toys.',
        },
        {
          age: '3-5 Years',
          content: 'Read books about feelings and emotions. Practice naming emotions and validating their feelings.',
        },
        {
          age: '6-10 Years',
          content: 'Involve children in community service. Discuss global issues age-appropriately and encourage helping others.',
        },
      ],
    },
    {
      title: 'Emotional Strength',
      icon: Brain,
      image: parentingTips,
      gradient: 'from-purple/20 to-violet/10',
      tips: [
        {
          age: 'All Ages',
          content: 'Teach that all emotions are valid. Help them identify and express feelings in healthy ways.',
        },
        {
          age: '6-10 Years',
          content: 'Build resilience by allowing age-appropriate challenges. Celebrate effort, not just outcomes.',
        },
        {
          age: '11-15 Years',
          content: 'Maintain emotional availability during mood swings. Teach stress management techniques like deep breathing.',
        },
      ],
    },
    {
      title: 'Kindness & Compassion',
      icon: Smile,
      image: parentingTips,
      gradient: 'from-mint/20 to-emerald/10',
      tips: [
        {
          age: 'All Ages',
          content: 'Practice random acts of kindness as a family. Acknowledge and praise kind behavior when you see it.',
        },
        {
          age: '3-5 Years',
          content: 'Teach the golden rule: treat others as you want to be treated. Role-play different scenarios.',
        },
        {
          age: '6-10 Years',
          content: 'Encourage standing up for others who are being treated unfairly. Discuss the impact of words and actions.',
        },
      ],
    },
    {
      title: 'Saving Habits',
      icon: Coins,
      image: parentingTips,
      gradient: 'from-teal/20 to-cyan/10',
      tips: [
        {
          age: '3-5 Years',
          content: 'Introduce a piggy bank and the concept of saving. Count coins together and make it fun.',
        },
        {
          age: '6-10 Years',
          content: 'Start a small allowance system. Teach budgeting with three jars: save, spend, and share.',
        },
        {
          age: '11-15 Years',
          content: 'Open a savings account together. Discuss financial goals and the importance of delayed gratification.',
        },
      ],
    },
    {
      title: 'Respect for Elders',
      icon: Sparkles,
      image: parentingTips,
      gradient: 'from-indigo/20 to-blue/10',
      tips: [
        {
          age: 'All Ages',
          content: 'Model respectful behavior towards your own parents and elderly people. Use polite language consistently.',
        },
        {
          age: '3-5 Years',
          content: 'Teach basic manners like saying "please" and "thank you". Practice greeting elders respectfully.',
        },
        {
          age: '6-10 Years',
          content: 'Involve grandparents in regular activities. Share stories about family history and traditions.',
        },
      ],
    },
    {
      title: 'Self-Help & Independence',
      icon: Target,
      image: parentingTips,
      gradient: 'from-lavender/20 to-purple/10',
      tips: [
        {
          age: '3-5 Years',
          content: 'Encourage dressing themselves and simple chores. Provide step stools for sink and light switches.',
        },
        {
          age: '6-10 Years',
          content: 'Teach basic life skills like making simple meals. Gradually increase responsibilities around the house.',
        },
        {
          age: '11-15 Years',
          content: 'Support decision-making with guidance, not control. Allow natural consequences for age-appropriate choices.',
        },
      ],
    },
  ];
  
  return (
    <div className="min-h-screen">
      <SEO 
        title="Parenting Tips & Expert Advice - Age-Wise Guidance | Smart Parenting Guides"
        description="Expert parenting tips and advice for all ages. Learn about coordination, social skills, friendship, kindness, independence, respect, and creative expression. Age-specific guidance from 0-15 years."
        keywords="parenting tips, expert parenting advice, child development tips, social skills for kids, friendship building, kindness teaching, independence in children, parenting guidance"
        canonicalUrl="https://smartparentingguides.com/parenting-tips"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky/20 via-peach/10 to-lavender/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-mint/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="category" className="mb-6 shadow-lg">Expert Guidance</Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Parenting Tips for Every Stage
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive guidance on essential parenting topics, with age-specific tips to help your child grow into a well-rounded individual.
            </p>
          </div>
        </div>
      </section>
      
      {/* Topics Accordion */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Accordion.Root type="single" collapsible className="space-y-6">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Accordion.Item key={index} value={`item-${index}`}>
                <Card className="overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-2xl group">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full">
                      <div className="flex items-center justify-between w-full gap-6 transition-all duration-300">
                        {/* Image Section */}
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 overflow-hidden rounded-3xl">
                          <div className={cn("absolute inset-0 bg-gradient-to-br", topic.gradient, "opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-10")}></div>
                          <ImageWithFallback 
                            src={topic.image} 
                            alt={topic.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 z-20 flex items-center justify-center">
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 flex items-center justify-between gap-4 py-8 pr-8">
                          <h3 className="text-2xl sm:text-3xl font-bold text-left group-hover:text-primary transition-colors duration-300">
                            {topic.title}
                          </h3>
                          <div className="flex-shrink-0 bg-primary/10 rounded-full p-3 group-hover:bg-primary group-hover:rotate-180 transition-all duration-300">
                            <ChevronDown className="w-6 h-6 text-primary group-hover:text-white [[data-state=open]>&]:rotate-180 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  
                  <Accordion.Content className="overflow-hidden [[data-state=open]>&]:animate-slideDown [[data-state=closed]>&]:animate-slideUp">
                    <div className="px-8 pb-8 pt-4">
                      <div className="grid gap-5">
                        {topic.tips.map((tip, tipIndex) => (
                          <div 
                            key={tipIndex} 
                            className="relative bg-gradient-to-br from-secondary/40 to-secondary/20 rounded-3xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group/tip"
                          >
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[3rem] rounded-tr-3xl opacity-50"></div>
                            
                            <div className="relative z-10">
                              <Badge 
                                variant="age" 
                                className="mb-4 shadow-sm group-hover/tip:shadow-md transition-shadow duration-300"
                              >
                                {tip.age}
                              </Badge>
                              <p className="text-muted-foreground leading-relaxed text-lg">
                                {tip.content}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Accordion.Content>
                </Card>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </section>
      
      {/* Pro Tip Section */}
      <section className="relative bg-gradient-to-br from-peach/20 via-mint/10 to-sky/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-lavender/20 via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <Card className="bg-white/80 backdrop-blur-xl border-2 border-primary/20 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[8rem] opacity-50"></div>
            <div className="p-10 sm:p-12 space-y-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-4 shadow-lg">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Pro Parenting Tips
                </h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-gradient-to-br from-primary to-primary/70 rounded-full mt-2.5 flex-shrink-0 shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-muted-foreground leading-relaxed text-lg">
                    Consistency is key - maintain routines and rules across different situations and caregivers.
                  </span>
                </li>
                <li className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-gradient-to-br from-primary to-primary/70 rounded-full mt-2.5 flex-shrink-0 shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-muted-foreground leading-relaxed text-lg">
                    Quality time matters more than quantity - be fully present during interactions with your child.
                  </span>
                </li>
                <li className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-gradient-to-br from-primary to-primary/70 rounded-full mt-2.5 flex-shrink-0 shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-muted-foreground leading-relaxed text-lg">
                    Take care of yourself too - you can't pour from an empty cup. Self-care isn't selfish.
                  </span>
                </li>
                <li className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-gradient-to-br from-primary to-primary/70 rounded-full mt-2.5 flex-shrink-0 shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-muted-foreground leading-relaxed text-lg">
                    Every child is unique - compare your child only to their own previous progress, not to others.
                  </span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}