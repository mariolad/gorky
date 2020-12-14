import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage, Columns } from '../../../../'

import styles from './Largest.module.css'

const Largest = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="В тройке крупнейших" />

        <Columns
          left={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/nmjk/4/1.jpg" layout="fill" />
              </figure>
            </div>
          }
          right={
            <div>
              <p>
                К началу войны Горьковский жиркомбинат был одним из крупнейших производителей мыловаренной продукции в
                стране. Объем его производства составлял 40 тыс. т в год в пересчете на 40-процентное мыло. Таким же был
                объем производства ленинградского завода, больше всех производил мыла комбинат в Казани — 60 тыс. т.
                Партийное собрание, посвященное началу войну и созданию народного ополчения, состоялось на комбинате 25
                июля. «Большим патриотизмом к своей Родине советский народ встретил выступление по радио т. Сталина. Для
                разгрома врага в течение трех дней в отряд народного ополчения вступили 246 лучших рабочих и служащих
                нашего комбината. Все, кто может носить оружие», — говорится в постановлении собрания жиркомбината. К
                ноябрю 1941 году из-за немецкой оккупации страна лишилась нескольких мыловаренных заводов, и
                жиркомбинату пришлось увеличить объемы отгрузки продукции. Однако производство туалетного мыла и
                стирального порошка комбинат в первые же месяцы войны свернул — рабочим пришлось переключиться на выпуск
                продукции военного назначения.
              </p>
            </div>
          }
        />

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/nmjk/4/2.jpg" layout="fill" />
            <figcaption>Группа работников Горьковского жиркомбината. 1930-е годы</figcaption>
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Largest
