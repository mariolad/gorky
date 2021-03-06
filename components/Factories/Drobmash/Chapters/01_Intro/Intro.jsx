import React from 'react'
import cn from 'classnames'

import styles from '../../../../Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Выксунский завод дробильно-размольного оборудования
          </h1>

          <p className={styles.desc}>ЗАО «Дробмаш», АО «Завод корпусов»</p>
        </div>

        <div className={styles.items}>
          <div className={cn(styles.item)}>
            <div className={styles.digit}>1/3</div>

            <div className={styles.rd}>всех бронекорпусов для для Т-60</div>

            <div className={styles.what}>
              произведена на заводе в годы войны
            </div>
          </div>

          <div className={cn(styles.item)}>
            <div className={styles.digit}>1/4</div>

            <div className={styles.rd}>всех бронекорпусов для Т-70</div>

            <div className={styles.what}>выпущена на заводе в годы войны</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
