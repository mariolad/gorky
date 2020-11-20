import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonText,
  Speech,
  CommonImage
} from '../../../../components'

import styles from './Сooperation.module.css'

const Сooperation = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Кооперация под дулом">
          <p>
            Постановлением областного ГКО № 1 от 1 июля 1941 года об организации
            производства Т-34 на заводе «Красное Сормово» Выксунский завод ДРО
            вместе с другими заводами Горьковской области был включен в
            программу немедленного освоения и производства новых средних танков,
            начав изготовление погонов для башни (место крепления башни танка к
            корпусу).
          </p>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/drobmash/7/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В этом производстве были задействованы лучшие станочники, слесари,
            сборщики, инженерно-технические работники предприятия. Всего за
            время войны было выпущено 4863 комплекта погонов. Каждый четвертый
            танк Т-34, выпущенный на заводе «Красное Сормово», укомплектован
            погонами завода ДРО. Параллельно на заводе выпускались комплектующие
            к моторам М-17.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/drobmash/7/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <Speech
            title="«Вынул пистолет, положил его на стол, прикрыл листом бумаги»"
            author={{
              name: 'Начальник ПДО завода № 177 в годы войны А. С. Чаулин'
            }}
          >
            «Заместитель наркома танковой промышленности собрал всех
            руководителей завода в кабинете директора. Сел за директорский стол.
            Из кармана брюк вынул пистолет, положил его на стол, прикрыл листом
            бумаги. Зачитал постановление ГКО от 1 июля 1941 года об организации
            производства танков Т-34 на заводе „Красное Сормово“ и дал задание:
            завод должен организовать серийное производство погонов к танку Т-34
            и срок — месяц на освоение. Предупредил, что если за это время
            задание не будет выполнено, то руководители, виновные в этом, будут
            привлечены к ответственности как за саботаж по законам военного
            времени. Директор завода Н. Е. Волков здесь же приказал всем
            руководителям поставить в кабинетах раскладушки, и ни один не имел
            права выйти за территорию завода без личного разрешения директора».
          </Speech>
        </CommonText>
      </div>
    </div>
  )
}

export default Сooperation
