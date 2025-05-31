import styles from './Home.module.css'
import banner from '/slide1pata.png' // ajuste o nome conforme salvou

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={banner} alt="Banner Patamatch" className={styles.bannerImg} />
      </div>

      <div className={styles.filtros}>
        <select>
          <option>Tipo do animal</option>
        </select>
        <select>
          <option>Porte</option>
        </select>
        <select>
          <option>Idade</option>
        </select>
        <button className={styles.botaoMatch}>De um match</button>
      </div>
    </div>
  )
}

export default Home
