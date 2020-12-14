import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage, CommonText, Speech } from '../../../../'

import styles from './Temperature.module.css'

const Temperature = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="КС повышают температуру">
          <p>
            В конце сентября 1941 года военпред лейтенант Ульянов перед отправкой очередной партии жидкости решил
            проверить действие состава. Как обычно, все отправились к канализационной речке «синявке» и стали бросать
            бутылки в железный щит — КС не загоралась. «Когда пригрело солнце, продукт, отобранный с забракованных
            бочек, опять стал воспламеняться, и военные машины ушли гружеными. На следующее утро опять повторилась та же
            история. КС становился годным только к полудню. Тогда стало ясно, что виноваты небольшие утренние
            заморозки», — пишет Г. А. Замышляева. Начальник центральной заводской лаборатории Григорий Михайлович
            Стронгин указывал, что заводчане знали, что при минусовых температурах КС не будет возгораться, поэтому еще
            в июле искали способ создать незамерзающую жидкость.
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/korund/7/2.jpg" layout="fill" />
            <figcaption>Красноармеец бросает бутылку с зажигательной смесью во время боев под Сталинградом.</figcaption>
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Однако и запуск производства КСТ (термическая) не обошелся без взрывов. При пробном пуске пострадал от
            выброса жидкости начальник установки К. Е. Писарев. Он бросился в ванну, потушил одежду и продолжил работу в
            одиночестве, отстранив всех монтажников. 30 августа из-за взрыва на установке обрушилось здание цеха,
            погибли начальник смены Михаил Хватков и лаборантка Мария Баскова, несколько рабочих получили сильные ожоги.
            Восстанавливали цех круглосуточно, и через несколько дней установка снова заработала.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/korund/7/1.jpg" layout="fill" />
            <figcaption>
              Советские бронебойщики с противотанковым однозарядным ружьем системы Дегтярева образца 1941 года и
              бутылками с зажигательной смесью ведут огонь под Сталинградом.
            </figcaption>
          </figure>
        </CommonImage>

        <Speech
          title="«Известное не годится»"
          author={{ name: 'Начальник центральной заводской лаборатории в годы войны Г. М. Стронгин' }}
        >
          «Собрал я сотрудников лаборатории, рассказал о задании. Ни у кого не было ни малейшего представления, как
          подступиться к делу. Разделились на две смены, каждая работала по 12 часов. Они опробовали все мало-мальски
          подходящие варианты и убедились: известное не годится. Военные наведывались каждый день. Не торопили — видели,
          что подталкивать никого не надо. Совершенно случайно в голову пришла мысль, что жидкость не будет замерзать,
          если она станет полимером. Климахин дал задание прямо под открытым небом построить установку с маленьким
          реактором. Технология отрабатывалась крайне трудно. Не могу передать, какое огромное чувство радости мы
          испытали, когда поняли, что получилось жидкое незамерзающее и самовоспламеняющееся при низких температурах
          вещество».
        </Speech>
      </div>
    </div>
  )
}

export default Temperature
