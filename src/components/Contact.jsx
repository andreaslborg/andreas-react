import React from 'react'
import styles from '../style'

const Contact = () => {
  return (
    <section id="#contact" className='bg-gradient mb-[100px]'>
      <div>
      <h2 className={styles.heading2}>Get in contact with me!</h2>
      </div>
      <div className=''>
        <div className='mb-[50px]'>
          <p className='font-poppins text-dimWhite'>
            I&apos;m always open for a cup of coffee! <br />
            Phone: +45 61 78 67 76 <br />
            Email: andreaslborg@gmail.com
          </p>
        </div>
        <div className='mt-0'>
          <button
            type="button"
            className={`py-4 px-6 rounded bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-2`}
            onClick={() => {
              const recipient = "andreaslborg@gmail.com";
              const subject = "";
              const body = "";

              const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`;

              window.open(mailtoLink);
            }}
          >
            Send Email
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact