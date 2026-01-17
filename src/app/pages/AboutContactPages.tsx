import React from 'react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { Mail, Send } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us - Empowering Parents Everywhere | Smart Parenting Guides"
        description="Learn about Smart Parenting Guides - your trusted partner in the beautiful journey of parenting. We provide comprehensive resources, practical tips, and supportive community for modern parents."
        keywords="about smart parenting guides, parenting website, parenting resources, parenting community, parenting support"
        canonicalUrl="https://smartparentingguides.com/about"
      />
      <section className="relative bg-gradient-to-br from-peach/20 to-sky/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="category">About Us</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Empowering Parents Everywhere
            </h1>
            <p className="text-lg text-muted-foreground">
              Your trusted partner in the beautiful journey of parenting
            </p>
          </div>
        </div>
      </section>
      
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="mb-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Smart Parenting Guides, we believe that every parent deserves access to reliable, age-appropriate guidance for raising happy, healthy children. Our mission is to provide comprehensive resources, practical tips, and supportive community for modern parents navigating the joys and challenges of parenthood.
            </p>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { number: '10K+', label: 'Active Parents' },
            { number: '500+', label: 'Articles & Tips' },
            { number: '1000+', label: 'Activities' },
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
        
        <Card>
          <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
          <ul className="space-y-4">
            {[
              'Age-specific parenting guidance from experts',
              'Practical activities for every developmental stage',
              'Educational stories with valuable life lessons',
              'Downloadable resources and checklists',
              'Evidence-based tips and advice',
              'Supportive community of parents',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us - Get In Touch | Smart Parenting Guides"
        description="Have questions or suggestions? Reach out to Smart Parenting Guides. We'd love to hear from you and help with your parenting journey."
        keywords="contact smart parenting guides, parenting help, parenting questions, parenting support contact"
        canonicalUrl="https://smartparentingguides.com/contact"
      />
      <section className="relative bg-gradient-to-br from-mint/20 to-lavender/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="category">Get In Touch</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">
              We'd Love to Hear From You
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions or suggestions? Reach out to our team
            </p>
          </div>
        </div>
      </section>
      
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-[1.25rem] bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-[1.25rem] bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-[1.25rem] bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>
            <Button className="w-full" size="lg">
              <Send className="w-5 h-5" />
              Send Message
            </Button>
          </form>
        </Card>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Mail className="w-5 h-5" />
            <span>Or email us at: sevabhav.india@gmail.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}
