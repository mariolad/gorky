import React, { useEffect } from 'react'

import useStore from '../../stores/useStore'
import { Factory } from '../../components'
import {
  Intro,
  Img,
  Reliable,
  Rata,
  JuneHeroes,
  FightForSeries,
  Lavochkin,
  Lagg3,
  Powerful,
  Front,
  La5,
  RecordFlow,
  Agadzhanov,
  FriendlyGuys,
  La7,
  AfterWar
} from '../../components/Factories/Sokol/Chapters'

import styles from './index.module.css'

const Sokol = () => {
  const appStore = useStore()

  useEffect(() => {
    appStore.setDark(false)
  }, [appStore])

  return (
    <Factory>
      <div className={styles.root}>
          <Intro />

          <Img />

          <Reliable />

          <Rata />

          <JuneHeroes />

          <FightForSeries />

          <Lavochkin />

          <Lagg3 />

          <Powerful />

          <Front />

          <La5 />

          <RecordFlow />

          <Agadzhanov />

          <FriendlyGuys />

          <La7 />

          <AfterWar />
      </div>
    </Factory>
  )
}

export default Sokol