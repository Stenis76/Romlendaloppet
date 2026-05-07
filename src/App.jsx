import { useEffect, useState } from 'react';
import './App.css';
import { CONFIG } from './data/config.jsx';
import { CookieConsent } from './components/CookieConsent.jsx';
import { CtaBanner } from './components/CtaBanner.jsx';
import { Footer } from './components/Footer.jsx';
import { Hero } from './components/Hero.jsx';
import { HistorySection } from './components/HistorySection.jsx';
import { InfoBar } from './components/InfoBar.jsx';
import { Navbar } from './components/Navbar.jsx';
import { PracticalInfo } from './components/PracticalInfo.jsx';
import { RaceCategories } from './components/RaceCategories.jsx';
import { ScheduleSection } from './components/ScheduleSection.jsx';
import { Sponsors } from './components/Sponsors.jsx';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CONFIG.slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar registrationUrl={CONFIG.registrationUrl} />
      <Hero
        slides={CONFIG.slides}
        registrationUrl={CONFIG.registrationUrl}
        currentSlide={currentSlide}
        onSlideSelect={setCurrentSlide}
      />
      <InfoBar stats={CONFIG.infoStats} />
      <HistorySection history={CONFIG.history} />
      <RaceCategories races={CONFIG.races} />
      <CtaBanner
        registrationDeadline={CONFIG.registrationDeadline}
        registrationUrl={CONFIG.registrationUrl}
      />
      <ScheduleSection schedule={CONFIG.schedule} />
      <PracticalInfo items={CONFIG.practicalInfo} />
      <Sponsors sponsors={CONFIG.sponsors} />
      <Footer
        contactEmail={CONFIG.contactEmail}
        socials={CONFIG.socials}
        organizer={CONFIG.organizer}
      />
      <CookieConsent />
    </div>
  );
}
