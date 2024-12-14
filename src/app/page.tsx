import Image from 'next/image';
import Navbar from './components/Navbar';
import { div, main } from 'framer-motion/client';
import HeroSection from './components/HeroSection';
import { FeaturedCourses } from './components/FeaturedCourses';
import { WhyChoseUs } from './components/WhyChoseUs';
import MusicSchoolTestimonials from './components/TestimonialCards';
import UpcomingWebinars from './components/UpcomingWebinars';
import Instructors from './components/Instructors';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <HeroSection />
            <FeaturedCourses />
            <WhyChoseUs />
            <MusicSchoolTestimonials />
            <UpcomingWebinars />
            <Instructors />
            <Footer />
        </div>
    );
}
