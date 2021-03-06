import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage, Columns } from '../../../../'

import styles from './Chain.module.css'

const Chain = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="На цепях к победе">
          <p>
            Осенью 1941 года шла битва за Москву. Находясь в кооперации с заводом № 92 (Машиностроительный завод) и
            заводом № 112 («Красное Сормово»), «Красный якорь» поставлял им детали для противотанковых пушек ЗИС-2 и
            танков Т-34. Красной Армии нужно было перебрасывать к фронту множество грузов. В условиях полного бездорожья
            цепи противоскольжения значительно повышали проходимость техники.
          </p>
        </MainText>

        <Columns
          left={
            <div>
              <figure className={classNames(styles.img, styles._1)}>
                <Image src="/images/yakor/4/2.jpg" layout="fill" />
              </figure>
            </div>
          }
          right={
            <div>
              <p>
                В первые годы войны «Красный якорь» был единственным заводом в СССР, изготавливающим такие цепи для
                автомобилей ГАЗ и грузовиков ЗИС-5, поэтому оперативное освоение этой продукции было вопросом жизни и
                смерти. Для выполнения заказа нужно было поставлять 1200 т цепей в месяц, в то время как мощность
                оборудования для варки цепей была рассчитана до 500 т. В первое время руководству завода для расширения
                производственной площади пришлось расставлять сборочные верстаки под открытым небом. Цепи собирались
                вручную: люди работали и в дождь, и в холод.
              </p>
              <p>
                В 1942 году специалисты завода сконструировали станок с механическим приводом и особыми
                приспособлениями. Это позволило освободить 35 рабочих, 200 кв. м площадей, увеличить выпуск цепей в пять
                раз, а себестоимость снизить на 35%. Цепи стали регулярно поступать на фронт.
              </p>
            </div>
          }
        />

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/yakor/4/1.jpg" layout="fill" />
            <figcaption>
              Испытание на полигоне автомобиля с цепями противоскольжения, которые производились на заводе «Красный
              якорь»
            </figcaption>
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Chain
