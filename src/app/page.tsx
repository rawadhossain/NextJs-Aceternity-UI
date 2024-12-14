import Image from 'next/image';
import Navbar from './components/Navbar';
import { div, main } from 'framer-motion/client';
import HeroSection from './components/HeroSection';
import { FeaturedCourses } from './components/FeaturedCourses';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <FeaturedCourses />
        </div>
    );
}
