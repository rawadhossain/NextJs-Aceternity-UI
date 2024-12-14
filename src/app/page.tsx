import Image from 'next/image';
import Navbar from './components/Navbar';
import { div, main } from 'framer-motion/client';
import HeroSection from './components/HeroSection';
import { FeaturedCourses } from './components/FeaturedCourses';
import { WhyChoseUs } from './components/WhyChoseUs';
import MusicSchoolTestimonials from './components/TestimonialCards';
import UpcomingWebinars from './components/UpcomingWebinars';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <FeaturedCourses />
            <WhyChoseUs />
            <MusicSchoolTestimonials />
            <UpcomingWebinars />
        </div>
    );
}
