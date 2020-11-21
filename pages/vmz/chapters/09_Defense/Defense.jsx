import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonText,
  Speech,
  CommonImage
} from '../../../../components'

import styles from './Defense.module.css'

const Defense = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Фонд обороны">
          <p>В победу выксунцы вкладывались не только трудом, но и деньгами.</p>

          <CommonImage>
            <figure className={classNames(styles.img, styles.main)}>
              <Image src="/images/vmz/9/2.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            К сентябрю 1942 года они внесли во Всесоюзный фонд обороны 2,89 млн
            рублей. Деньги сдавали на строительство эскадрильи самолетов
            «Валерий Чкалов», «Зоя Космодемьянская», «Горьковский комсомолец».
            На деньги работников завода была построена танковая колонна из
            десяти танков «Выксунский металлург». Коллектив ВМЗ также внес
            средства для строительства бронепоездов «Козьма Минин» и «Илья
            Муромец», которые были задействованы в боях от окраин Тулы до Одера.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/vmz/9/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p className={styles.vrezka}>
            Работники ВМЗ собрали деньги и построили колонну из десяти танков
            «Выксунский металлург», которая участвовала в битве под Курском
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._2)}>
              <Image src="/images/vmz/9/3.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <Speech
            title="«Особой гордостью выксунцев была танковая колонна„Выксунский металлург“»"
            author={{
              name: 'Сталевар ВМЗ в годы войны В. А. Веретенов'
            }}
          >
            «Тысячи рублей были собраны в помощь освобожденным от гитлеровцев
            западным районам страны, для восстановления Сталинграда. Собирали и
            отправляли на фронт теплые вещи. Особой гордостью выксунцев была
            танковая колонна из десяти машин „Выксунский металлург“. Для нее мы
            сварили сталь, собрали средства на строительство. Представитель
            завода кадровый рабочий Федор Федорович Лобанов, участвовавший в
            передаче боевых машин заводом-изготовителем танковому подразделению
            действующей армии, пожелал бойцам-танкистам по-гвардейски бить
            врага. „Лейте крепче броню“, — просили нас воины. Наказ этот мы
            свято выполняли до конца войны».
          </Speech>
        </CommonText>
      </div>

      {/* <Gallery image={main}/> */}
    </div>
  )
}

export default Defense