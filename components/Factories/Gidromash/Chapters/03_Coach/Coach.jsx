import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './Coach.module.css'

const Coach = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="«Дружные ребята»">
          <p>
            Завод № 119 им. Г. М. Маленкова, ведущий свою историю с 1805 года,
            размещался в центре Москвы Известная в столице каретная мастерская,
            а в начале XX века — одна из первых в стране автомобильных фабрик —
            стала частью авиапрома в Первую мировую войну: предприятию доверили
            сборку авиадвигателей «автомобильного типа» для бомбардировщика
            «Илья Муромец».
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/gidromash/3/2.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В конце 1935 года, с решением руководства страны о мощном развитии
            авиации, завод был перепрофилирован на производство шасси.
          </p>

          <p>
            За неполных шесть лет предприятие наладило первое в стране
            крупносерийное производство убирающихся шасси для истребителей И-16,
            дальних бомбардировщиков ДБ-3, учебно-боевых самолетов. Осваивали
            новые разработки для фронтового пикирующего бомбардировщика Пе-2,
            скоростного истребителя И-180.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/gidromash/3/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В последний мирный год на заводе началась подготовка производства
            комплектов шасси еще для двух новейших военных машин: истребителя
            ЛаГГ-3 и штурмовика Ил-2. Воздушные сражения Первой мировой
            показали, что повреждения шасси приводят к заметным потерям при
            посадках. Перед конструкторами и инженерами предприятия была
            поставлена задача совместить устойчивость шасси с осколочными
            поражениями и при этом сохранить минимально возможный вес и
            достаточную грузоподъемность. Для этого на предприятии был
            существенно усилен конструкторский отдел, расширялась территория,
            рос станочный парк. За достижения в создании и освоении новых
            агрегатов в 1940 году сотрудники завода № 119 получили первые
            трудовые госнаграды.
          </p>

          <p className={styles.vrezka}>
            Накануне войны конструкторы работали над повышением устойчивости
            шасси к осколочным поражениям
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gidromash/3/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Coach