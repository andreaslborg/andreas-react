
import { quotes } from '../assets'
import styles from "../style"; // Importing 

const Testimonials = () => {
  return (
    <section className='flex-col my-[80px]'>
<     div>
          <h2 className={styles.heading2}>What people have <br className="sm:block hidden" />said about me.</h2>
        </div>
      <div className="mx-auto flex sm:flex-row flex-col text-center">
        <div className="sm:basis-1/3 basis-full sm:mr-[100px] mb-[30px]">
          <img src={quotes} className='my-5' />
          <p className='font-poppins text-dimWhite text-left'>
            I experienced Andreas as a solid developer, delivering professional guidance throughout the whole development process. From outlining customer needs in a professional manner to testing the software among potential users.
          </p>
          <p className='font-poppins text-white text-bold text-xl text-left mt-3 uppercase'>
            Mikkel Petersen
          </p>
          <p className='font-poppins text-dimWhite text-left mt-1 text-sm'>
            Entrepreneur & Leader
          </p>
        </div>
        <div className="sm:basis-1/3 basis-full">
          <img src={quotes} className='my-5' />
          <p className='font-poppins text-dimWhite text-left'>
          I have now collaborated with Andreas Løvig Borg on multiple software projects, and I can attest that he is a skilled developer who gives his 100% and has a keen eye for the technical aspects and getting a grip on the details.
          </p>
          <p className='font-poppins text-white text-bold text-xl text-left mt-3 uppercase'>
            Anton Egholm
          </p>
          <p className='font-poppins text-dimWhite text-left mt-1 text-sm'>
            Software Engineer
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials