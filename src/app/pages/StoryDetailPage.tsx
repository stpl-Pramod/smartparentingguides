import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { ArrowLeft, BookOpen, Heart, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface StoryScene {
  image: string;
  text: string;
}

interface Story {
  id: string;
  title: string;
  age: string;
  moral: string;
  excerpt: string;
  image: string;
  fullStory: string;
  scenes: StoryScene[];
  lessonLearned: string;
}

const stories: Record<string, Story> = {
  'sharing-bear': {
    id: 'sharing-bear',
    title: 'The Sharing Bear',
    age: '3-5 Years',
    moral: 'Kindness',
    excerpt: 'A heartwarming tale about a bear who learns the joy of sharing with forest friends...',
    image: '../src/assets/images/parentingTips.png',
    fullStory: 'Once upon a time, in a beautiful forest filled with tall trees and colorful flowers, there lived a big brown bear named Benny. Benny had a cozy cave full of delicious honey, fresh berries, and sweet nuts.',
    scenes: [
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Benny loved his collection of food and would spend all day counting and organizing his treasures. He never shared with anyone, even when his friends asked nicely.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'One cold winter day, the forest was covered in snow. Food became very hard to find. All the animals were hungry and cold, shivering in the freezing weather.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Little Ruby the rabbit came to Benny\'s cave with her children. "Please Mr. Bear," she said softly, "my babies are so hungry. Could you spare just a little bit of food?"',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Benny looked at Ruby\'s sad eyes and her shivering little ones. His heart felt warm and fuzzy. For the first time, he realized how good it would feel to help someone.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: '"Of course!" said Benny with a big smile. He shared his honey, berries, and nuts with Ruby and all the other forest animals. Everyone was happy and grateful.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'From that day on, Benny learned that sharing made him happier than keeping everything to himself. He had more friends than ever before, and his heart felt fuller than his cave ever did!',
      },
    ],
    lessonLearned: 'Sharing with others brings more joy than keeping everything for yourself. When we share, we make friends and feel happy inside!',
  },
  'brave-turtle': {
    id: 'brave-turtle',
    title: 'The Brave Little Turtle',
    age: '6-10 Years',
    moral: 'Courage',
    excerpt: 'An inspiring story about a turtle who overcomes fear to help her friends...',
    image: '../src/assets/images/activities.png',
    fullStory: 'In the sparkling blue ocean, there lived a small turtle named Tina. She was the smallest turtle in her family, and she was afraid of many things - dark waters, big waves, and especially sharks.',
    scenes: [
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Tina would always hide in her shell whenever something scared her. The other sea creatures would tease her, calling her "Tiny Turtle." This made Tina feel very sad and alone.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'One sunny morning, Tina heard a cry for help. A group of baby fish were trapped in a fishing net near the dangerous coral reef where big predators lived.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Tina was very scared, but she thought about how the baby fish must feel. Taking a deep breath, she decided to face her fears. "I can do this," she whispered to herself.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Despite trembling with fear, Tina swam through the dark waters toward the reef. Her heart was beating fast, but she kept going. She used her sharp beak to cut through the net.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'One by one, the baby fish swam free! They all thanked Tina and swam safely back to their families. All the sea creatures saw what Tina had done and cheered for her bravery.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'From that day forward, no one called her "Tiny Turtle" anymore. They called her "Brave Tina." She learned that being courageous doesn\'t mean you\'re not afraid - it means doing the right thing even when you are scared.',
      },
    ],
    lessonLearned: 'True courage is not the absence of fear, but taking action despite being afraid. Even the smallest among us can be the bravest when we stand up for what\'s right!',
  },
  'honest-rabbit': {
    id: 'honest-rabbit',
    title: 'The Honest Rabbit',
    age: '3-5 Years',
    moral: 'Honesty',
    excerpt: 'A touching story about the importance of telling the truth...',
    image: '../src/assets/images/familyPhoto.png',
    fullStory: 'In a peaceful meadow surrounded by wildflowers, there lived a little white rabbit named Riley. Riley loved playing with his friends and eating crunchy carrots from the garden.',
    scenes: [
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'One day, Riley was playing near Farmer Joe\'s carrot patch. The carrots looked so orange and delicious! Even though he knew he shouldn\'t, Riley couldn\'t resist and took three big carrots.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Later that day, Farmer Joe noticed his carrots were missing. He asked all the animals, "Who took my carrots?" Riley felt his tummy flip-flop with worry.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Riley wanted to say "Not me!" but he remembered what his mama always told him: "Telling the truth is always the right thing to do, even when it\'s hard."',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'With his ears drooping and his voice small, Riley hopped forward. "It was me, Farmer Joe. I took your carrots. I\'m really sorry." A tear rolled down his furry cheek.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Farmer Joe smiled kindly. "Thank you for being honest, Riley. That took real courage. I\'m not angry - I\'m proud of you for telling the truth." He patted Riley\'s head gently.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Farmer Joe gave Riley permission to take one carrot each day if he asked first. Riley learned that telling the truth, even when it\'s scary, always feels better than hiding a lie. And he never took anything without asking again!',
      },
    ],
    lessonLearned: 'Honesty is always the best choice, even when it feels scary. People respect us more when we tell the truth, and it helps us feel good about ourselves!',
  },
  'helpful-butterfly': {
    id: 'helpful-butterfly',
    title: 'The Helpful Butterfly',
    age: '6-10 Years',
    moral: 'Helping Others',
    excerpt: 'Learn about the power of helping others through this beautiful butterfly story...',
    image: '../src/assets/images/activities.png',
    fullStory: 'In a beautiful garden filled with roses, daisies, and sunflowers, there lived a butterfly named Bella. She had the most magnificent wings - bright blue with sparkles of gold that shimmered in the sunlight.',
    scenes: [
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Bella loved flying from flower to flower, helping them by spreading pollen. She would visit each flower and make sure they could grow seeds and create new flowers. It made her very happy.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'One day, Bella saw a little bird who had fallen from its nest. The baby bird was chirping sadly, unable to fly back up. Bella knew she was too small to carry the bird, but she wanted to help.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Bella flew to find help. She found Leo the Lion resting under a tree. "Please, Mr. Lion, can you help? There\'s a baby bird who needs to get back to its nest!" Leo agreed to help right away.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Together, Bella guided Leo to the baby bird. Leo carefully picked up the little bird in his mouth and gently placed it back in the nest high up in the tree. The mother bird sang with joy!',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Word spread throughout the garden about Bella\'s kindness. Soon, animals started coming to her whenever they needed help. Bella realized that even small creatures can make a big difference.',
      },
      {
        image: '../src/assets/images/parentingTips.png',
        text: 'Bella continued helping everyone in the garden. She learned that helping others not only made them happy - it filled her own heart with joy too. The garden became a place where everyone helped each other, all because one little butterfly cared.',
      },
    ],
    lessonLearned: 'No matter how small you are, you can make a big difference by helping others. When we help each other, everyone benefits and the world becomes a better place!',
  },
};

export function StoryDetailPage() {
  const { storyId } = useParams<{ storyId: string }>();
  const story = storyId ? stories[storyId] : null;

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SEO 
          title="Story Not Found - Smart Parenting Guides"
          description="The story you're looking for could not be found. Browse our collection of moral stories for children."
          canonicalUrl="https://smartparentingguides.com/stories"
        />
        <Card className="max-w-md text-center">
          <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Story Not Found</h2>
          <p className="text-muted-foreground mb-6">
            We couldn't find the story you're looking for.
          </p>
          <Link to="/stories">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-white">
      <SEO 
        title={`${story.title} - ${story.moral} Story for Kids | Smart Parenting Guides`}
        description={story.excerpt}
        keywords={`${story.title}, ${story.moral} story, moral stories for kids, children stories, ${story.age} stories, bedtime stories`}
        canonicalUrl={`https://smartparentingguides.com/stories/${story.id}`}
      />
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-lavender/30 via-peach/20 to-mint/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky/10 via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <Link to="/stories">
            <Button variant="secondary" className="mb-6 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Stories
            </Button>
          </Link>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="age">{story.age}</Badge>
                <Badge variant="category">{story.moral}</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {story.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {story.fullStory}
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-[2rem] transform rotate-3"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={story.image}
                  alt={story.title}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Scenes */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-4">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="font-semibold text-primary">Story Scenes</span>
          </div>
          <h2 className="text-3xl font-bold">Follow Along the Adventure</h2>
        </div>

        <div className="space-y-12">
          {story.scenes.map((scene, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden ${
                index % 2 === 0 ? 'md:ml-0' : 'md:mr-0'
              }`}
            >
              <div className={`grid md:grid-cols-2 gap-6 items-center ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}>
                <div className={`${index % 2 === 0 ? '' : 'md:order-2'}`}>
                  <div className="relative rounded-3xl overflow-hidden h-64 md:h-80">
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                        <span className="font-bold text-primary text-lg">Scene {index + 1}</span>
                      </div>
                    </div>
                    <ImageWithFallback
                      src={scene.image}
                      alt={`Scene ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className={`space-y-4 p-6 ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                  <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-3xl p-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {scene.text}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Lesson Learned Section */}
      <section className="relative bg-gradient-to-br from-peach/20 via-mint/10 to-lavender/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-sky/20 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <Card className="bg-white/90 backdrop-blur-xl border-2 border-primary/20 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[6rem] opacity-50"></div>
            <div className="p-8 sm:p-12 space-y-6 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-4 shadow-lg">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Lesson Learned
                </h3>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/40 to-secondary/20 rounded-3xl p-8 border border-primary/10">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {story.lessonLearned}
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 pt-6">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
                <p className="text-muted-foreground text-center">
                  Share this story with your little ones to help them learn and grow!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Navigation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Link to="/stories">
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="w-5 h-5 mr-2" />
              Read More Stories
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
