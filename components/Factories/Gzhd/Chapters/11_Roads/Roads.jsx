import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './Roads.module.css'

const Roads = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Дороги победы">
          <p>
            В годы войны из Горьковской области на фронт было доставлено
            железной дорогой около 885 тыс. мобилизованных и добровольцев.
            Горьковские железнодорожники перевезли 505 тыс. раненых солдат и
            офицеров Красной Армии.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles.main)}>
              <Image src="/images/gzhd/11/2.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В целом 80% объема грузовой работы железных дорог области
            производилось на подъездных путях промышленных предприятий. Только
            для дзержинского завода им. Свердлова (№ 80) требовалось 400–500
            вагонов в сутки для транспортировки снаряженных им мин, авиабомб и
            других боеприпасов. С 1941-го по 1945 год по ГЖД было перевезено
            около 110 тыс. автомашин всех типов, свыше 100 тыс. пушек и другого
            артиллерийского вооружения, более 38 тыс. танков, самоходных
            установок и бронемашин.
          </p>
          <p>
            В конце войны более 86% личного состава 31-го особого дивизиона было
            награждено орденами и медалями за мужество и отвагу, проявленные в
            боях с немецко­фашистскими захватчиками. Многие бывшие
            бронепоездники в послевоенное время остались верными своей
            профессии. Сейчас Горьковская железная дорога является одной из
            самых высокотехнологичных железных дорог в стране. Ежегодно по ней
            перевозят более 90 млн пассажиров и 44 млрд т грузов.
          </p>

          <p className={styles.vrezka}>
            В 1941–1945 гг. ГЖД перевезла 110 тыс. автомашин, 100 тыс.
            артустановок, более 38 тыс. боевых машин
          </p>
        </CommonText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/gzhd/11/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Roads