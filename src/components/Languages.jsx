import styles from '../style'
import { clients } from '../constants'

const Languages = () => {
  return (
    <div className={`${styles.flexCenter} my-[80px]`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[50px]`}>
            <img src={client.logo} alt="language" className='grayscale sm:w-[192px] w-[70px] h-[70px] object-contain' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Languages