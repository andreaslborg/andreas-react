import React from 'react'
import styles from '../style'
import { clients } from '../constants'

const Degree = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[50px]`}>
            <img src={client.logo} alt="language" className='grayscale sm:w-[192px] w-[70px] h-[70px] object-contain' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Degree