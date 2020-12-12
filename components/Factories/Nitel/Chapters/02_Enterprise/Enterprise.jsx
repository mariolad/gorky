import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainImage,
  MainText,
  CommonImage,
  CommonText,
  Columns
} from '../../../../'

import styles from './Enterprise.module.css'

const Enterprise = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainImage>
          <figure className={classNames(styles.img, styles.intro)}>
            <Image src="/images/nitel/img.jpg" layout="fill" />
          </figure>
        </MainImage>
      </div>

      <div className={styles.page}>
        <MainText title="Предприятие с немецкими корнями">
          <p>
            Государственный союзный завод № 197 имени В. И. Ленина — одно из
            старейших радиотехнических предприятий страны.Его строительство
            началось в Нижнем Новгороде в 1915 году, во время Первой мировой
            войны: из Риги в город эвакуировалось представительство компании
            Siemens & Halske.
          </p>
        </MainText>

        <CommonText>
          <p>
            Нижегородское отделение компании было призвано стать третьим в
            стране центром производства средств связи после Санкт-Петербурга и
            Москвы. Однако компания Siemens & Halske, которая с 1852 года
            являлась «радиотелеграфным монополистом» для российской армии,
            прекратила свое существование за год до Октябрьской революции.
            Комитет по борьбе с «немецким засильем» по решению совета министров
            признал фирму «вредной и опасной для государственных и экономических
            интересов России». В 1917 году было зарегистрировано новое
            акционерное общество «Сименс»
          </p>
        </CommonText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/nitel/3/3.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <Columns
          left={
            <div>
              <p>
                Эта компания в большей степени оказалось под контролем русского
                правительства. В том же году ее завод в Нижнем Новгороде,
                который, несмотря ни на что, сохранил первоначальное название
                «Сименс и Гальске», начал работу.
              </p>
              <p>
                За год до официального открытия предприятие получило контракт от
                Главного военно-технического управления на поставку форпостных
                телефонных аппаратов для фронта. Тем не менее первые
                послереволюционные годы были тяжелыми: не получая заказов, завод
                выпускал сельхозинвентарь, пуговицы для молитовской мануфактуры,
                столы и стулья для Нижегородской ярмарки, компостеры для
                железной дороги.
              </p>
            </div>
          }
          right={
            <div>
              <figure className={classNames(styles.img, styles._1)}>
                <Image src="/images/nitel/3/1.jpg" layout="fill" />
              </figure>
            </div>
          }
        />

        <CommonText>
          <p>
            Заказы от правительства на детекторные приемники (ЛДВ-7-1; П-5;
            П-8), настольные и стенные индуктивные телефонные аппараты,
            репродукторы, динамики и громкоговорители стали поступать во второй
            половине 1920-х годов. Одновременно завод занимался разработкой и
            производством связных радиостанций.
          </p>
          <p>
            С 1924 до 1929 года нижегородское предприятие выпускало радиодетали,
            головные телефоны, репродукторы. С начала 1930-х годов стартовал
            выпуск связных радиостанций, которые позднее состояли на вооружении
            почти у всех войск.
          </p>
        </CommonText>

        <Columns
          left={
            <div>
              <figure className={classNames(styles.img, styles._2)}>
                <Image src="/images/nitel/3/2.jpg" layout="fill" />
              </figure>
            </div>
          }
          right={
            <div>
              <p>
                В 1936 году предприятие получило правительственный заказ — на
                базе уже имеющихся самолетных радиостанций разработать и
                изготовить новые, предельно надежные модели для первой советской
                экспедиции на Северный полюс под руководством И. Д. Папанина.
                Итогом этой работы стало создание радиостанции для
                самолетов-бомбардировщиков — РСБ-М.
              </p>
              <p>
                К 1937 году радиопроизводство на заводе обеспечивало 82% общего
                объема выпускаемых изделий. В том же году завод перешел в
                систему оборонной промышленности и получил № 197. За 12
                довоенных лет было выпущено 28 тыс. радиостанций.
              </p>
            </div>
          }
        />

        <CommonText>
          <p className={styles.vrezka}>
            Одним из первых правительственных заказов завода еще в 1917 году
            стал заказ на поставку форпостных телефонных аппаратов для фронта
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default Enterprise