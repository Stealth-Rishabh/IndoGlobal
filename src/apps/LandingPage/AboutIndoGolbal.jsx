import img from '../../assets/about-collage.png';
import Container from '../../components/wrappers/Container';

export default function AboutIndoGlobal() {
    return (
      <Container className="container mx-auto lg:pt-60 pt-10 ">
        <div className="flex sm:flex-col flex-col-reverse md:flex-row gap-14 md:gap-28">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img 
              src={img}
              alt="Indo Global Campus" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl space-y-6 relative">
            <div className="w-fit top-0 left-0 bg-red-600 text-white text-2xl px-4 py-1 ">
              About
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold sm:font-bold text-blue-800 mt-8 mb-4">Indo Global</h2>
            <p className="text-gray-600 font-semibold md:leading-loose tracking-wide text-lg sm:text-xl">
              Indo Global Colleges is Punjab&apos;s leading Education Group, located in a lush green, 30+ acre Campus in the foothills of Shivalik Ranges hardly 12 KMs from Chandigarh, with 4 Institutions, 4000 + Alumni, 3000+ Students and 250+ Faculty drawn from distinguished and highly accomplished backgrounds. It is a self-financed, unaided institute set up in 2003 by the INDO GLOBAL EDUCATION FOUNDATION with a vision to provide world-class quality education to its students.
            </p>
          </div>
        </div>
      </Container>
    )
  }