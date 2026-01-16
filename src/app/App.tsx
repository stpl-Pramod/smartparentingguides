import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { BabyCarePage } from './pages/BabyCarePage';
import { ParentingTipsPage } from './pages/ParentingTipsPage';
import { AgeWisePage } from './pages/AgeWisePage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { StoriesPage } from './pages/StoriesPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage, ContactPage } from './pages/AboutContactPages';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

function AgeWiseRoute() {
  const { ageGroup } = useParams<{ ageGroup: string }>();
  return <AgeWisePage ageGroup={ageGroup} />;
}

function StoryRoute() {
  const { storyId } = useParams<{ storyId: string }>();
  return <StoryDetailPage />;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/baby-care" element={<BabyCarePage />} />
              <Route path="/parenting-tips" element={<ParentingTipsPage />} />
              <Route path="/age-wise" element={<AgeWisePage />} />
              <Route path="/age-wise/:ageGroup" element={<AgeWiseRoute />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/stories/:storyId" element={<StoryRoute />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;