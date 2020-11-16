import React from 'react'

import { Factory } from '../../components'
import {
  Intro,
  Img1,
  USSRAuto,
  FirstYears,
  Conveyor,
  Passability,
  Loskutov,
  Lipgart,
  FirstBombing,
  OneAndHalf,
  Defense,
  CityUnderAttack
} from './chapters'

import styles from './index.module.css'

const Gaz = () => {
  return (
    <Factory>
      <div className={styles.root}>
        <div className={styles.intro}>
          <Intro />
        </div>

        <div className={styles.img}>
          <Img1 />
        </div>

        <div className={styles.ussrauto}>
          <USSRAuto />
        </div>

        <div className={styles.firstYears}>
          <FirstYears />
        </div>

        <div className={styles.conveyor}>
          <Conveyor />
        </div>

        <div className={styles.passability}>
          <Passability />
        </div>

        <div className={styles.loskutov}>
          <Loskutov />
        </div>

        <div className={styles.lipgart}>
          <Lipgart />
        </div>

        <div className={styles.firstBombing}>
          <FirstBombing />
        </div>

        <div className={styles.oneAndHalf}>
          <OneAndHalf />
        </div>

        <div className={styles.defense}>
          <Defense />
        </div>

        <div className={styles.cityUnderAttack}>
          <CityUnderAttack />
        </div>
      </div>
    </Factory>
  )
}

export default Gaz
