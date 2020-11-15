import React from 'react'

import styles from './Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.title}>ГОРЬКОВСКИЙ ЗАВОД «КРАСНАЯ ЭТНА»</h1>

        <p className={styles.desc}>АО «Завод „Красная Этна“»</p>
      </div>

      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.digit}>ЧЕТЫРЕ ЗАВОДА</div>

          <div className={styles.what}>
            эвакуированных из других городов принял завод «Красная Этна» в
            первые месяцы войны
          </div>
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.digit}>ЕДИНСТВЕННЫЙ ПРОИЗВОДИТЕЛЬ</div>

          <div className={styles.what}>
            армейских мотоциклов с коляской в СССР в годы войны
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro