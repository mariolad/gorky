import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './Growth.module.css'

const Growth = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Рост на пределе">
          <p>
            Объемы производства росли, хотя количество сотрудников и
            оборудования почти не менялось. Так, за год (при сравнении сентября
            1941 года и сентября 1942-го) объем выпускаемой продукции вырос в
            четыре раза, хотя количество рабочих увеличилось всего на 9%. В 1942
            году завод вышел в число передовых в своей отрасли и на два месяца
            раньше выполнил годовую производственную программу.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/teploobmennik/7/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            29 октября 1942 года газета «Горьковская коммуна» посвятила материал
            успехам громовцев: «Работая по суточному графику, завод имени
            Громова 27 октября выполнил увеличенную против сентября октябрьскую
            производственную программу. В тот же день коллектив завода досрочно
            выполнил возросшую по сравнению с прошлым годом годовую
            производственную программу. При одинаковом количестве оборудования
            производительность труда в 1942 году против прошлого года возросла
            на 228%. Инженеры, мастера и рабочие завода провели большую работу
            по рационализации производства и совершенствованию технологии».
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/teploobmennik/7/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В этих условиях на заводе продолжалось капитальное строительство: за
            1942 год было построено 14619 кв. м общей площади, из них почти 6
            тыс. производственных корпусов и шесть жилых домов для рабочих.
            Начали работать котельная, компрессорная, столовая, амбулатория,
            душевая.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/teploobmennik/7/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Growth