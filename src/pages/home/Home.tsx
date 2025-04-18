import SEO from '@/components/custom/utils/SEO'
import React from 'react'
import HeroSlider from './component/HeroSlide'
import About from './component/About'
import WhyChoose from './Wychoose'
import Facilities from './Facilitie'
import AcademicStages from './academicStage'
import Testimonials from './Testimonial'
import News from './New'
import Facts from './Fact'
import CTA from '@/components/custom/utils/CTA'

const Home: React.FC = () => {
    return (
        <>
            {/* Seo compoments */}
            <SEO
                title='Welcome to Future Academic - Your Trusted Apple Partner'
                description='Explore the latest iPhones and accessories at unbeatable prices. Enjoy a seamless shopping experience on our modern e-commerce platform.'
            />

            {/* App Comoments */}
            <>
                <HeroSlider />
                <About />
                <Facts />
                <WhyChoose />
                <AcademicStages />
                <Facilities />
                <News />
                <Testimonials />
                <CTA/>
            </>
        </>
    )
}

export default Home
