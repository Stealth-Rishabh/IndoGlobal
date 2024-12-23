import img from '../../assets/AboutUs.webp';
import WordPullUp from '../../components/ui/word-pull-up';
import Container from '../../components/wrappers/Container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutIndoGlobal() {
  // Image animation trigger
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.1, 
    triggerOnce: true,
  });

  // Paragraph animation trigger
  const { ref: pRef, inView: pInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Container className="container mx-auto lg:pt-60 pt-10">
      <div className="flex flex-col-reverse lg:flex-row gap-10 md:gap-28">

        {/* Image Animation Wrapper */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, x: -100 }}  // Animation starts with the image offscreen to the left
          animate={imgInView ? { opacity: 1, x: 0 } : {}}  // Animate only when in view
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="w-full lg:w-1/2 mb-6 md:mb-0"
          style={{ minHeight: '300px' }}  // Minimum height for better small-screen display
        >
          <img
            src={img}
            alt="Indo Global Campus"
            className="w-full h-auto object-cover rounded-lg md:p-28 lg:p-0"
            style={{ display: 'block' }}  // Ensure the image fills the container properly
          />
        </motion.div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 md:pl space-y-6 relative">

          {/* Title Animations */}
          <WordPullUp
            className="w-fit top-0 sm:mx-0 bg-red-600 text-white font-semibold text-sm sm:text-2xl px-4 py-1"
            words="About"
          />
          <WordPullUp
            className="text-left sm:text-left text-4xl md:text-6xl font-bold sm:font-bold md:font-extrabold text-secondary-color mt-8 mb-4"
            words="Indo Global"
          />

          {/* Paragraph Animation Wrapper */}
          <motion.p
            ref={pRef}
            initial={{ opacity: 0, x: 100 }}  // Start with the paragraph offscreen to the right
            animate={pInView ? { opacity: 1, x: 0 } : {}}  // Animate only when in view
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
            className="text-gray-600 sm:font-semibold md:leading-loose tracking-wide text-base text-justify sm:text-left sm:text-xl"
          >
            Indo Global Colleges is Punjab&apos;s leading Education Group, located in a lush green, 30+ acre Campus in the foothills of Shivalik Ranges hardly 5 KMs from Chandigarh, with 4 Institutions, 4000 + Alumni, 3000+ Students and 250+ Faculty drawn from distinguished and highly accomplished backgrounds. It is a self-financed, unaided institute set up in 2003 by the INDO GLOBAL EDUCATION FOUNDATION with a vision to provide world-class quality education to its students.
          </motion.p>
        </div>
      </div>
    </Container>
  );
}
