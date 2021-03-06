import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage, CommonText } from '../../../../'

import styles from './Farewell.module.css'

const Farewell = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Прощай, химоружие">
          <p>
            После войны выпуск иприта на заводе продолжался, но в меньших объемах. К частичной консервации производства
            в 1944 году привлекали сотрудников цехов, производящих отравляющие вещества. В 1944-м на заводе № 96
            заработало первое в Советском Союзе производство поливинилхлоридной смолы суспензионным методом, и до 1965
            года завод был единственным в СССР производителем ПВХ. В сентябре 1945-го на заводе № 96 пустили в
            эксплуатацию цех окиси этилена. К концу года предприятие производило 34 наименования продукции. В 1949-м на
            заводе запустили первый в Советском Союзе цех по производству капролактама — сырья для искусственных
            волокон.
          </p>
        </MainText>

        <CommonText>
          <p>
            Склад со стойкими отравляющими веществами, где они хранились в боеприпасах и бочках, уничтожили в 1960 году.
            В 1994-м полностью ликвидировали цехи, производящие отравляющие вещества. В 1997 году после присоединения
            России к Конвенции о запрещении химического оружия на ОАО «Капролактам» начались работы по ликвидации бывших
            производств боевых отравляющих веществ: было утилизировано и дезактивировано химическое оборудование,
            снесены и уничтожены производственные корпуса. Эти работы проводились по заказу Минпромторга РФ в рамках
            федеральной целевой программы «Уничтожение запасов химического оружия в РФ».
          </p>
        </CommonText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/kaprolaktam/7/1.jpg" layout="fill" />
            <figcaption>Аэрофотосъемка Люфтваффе поселка Игумново, где располагался завод № 96</figcaption>
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Farewell
