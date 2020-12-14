import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage, CommonImages, CommonText, Columns } from '../../../../'

import styles from './Products.module.css'

const Products = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Мирная продукция в военных целях">
          <p>
            В первые же месяцы войны Горьковский жиркомбинат освоил производство порошка НА — нафтената алюминия — и
            сухого спирта. Первый служил сырьем для производства противотанковой самовоспламеняющейся смеси КС на
            химических заводах Дзержинска. На время запуска нового производства руководство комбината перешло на
            казарменное положение, бывало, что несколько дней администрация не уходила с завода. Также комбинат
            производил специальный состав для пропитки ткани противоипритных костюмов и пищевой саломас (то же, что и
            салолин), который отправлял в осажденный Ленинград.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/nmjk/5/1.jpg" layout="fill" />
            <figcaption>Установка «Раймбек» для дистилляции технического глицерина. 1941 год</figcaption>
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            В 1941 году в Горький с Харьковского глицеринового завода эвакуировали дистилляционную установку «Раймбек».
            По воспоминаниям будущего директора глицеринового цеха М. А. Череповой, монтировали установку круглосуточно,
            новый цех запустили в рекордно короткие сроки — за 41 день. Благодаря этой установке технический глицерин,
            который производил комбинат, дистиллировали, и новый продукт, динамитный глицерин, поставляли на пороховые
            заводы. Поскольку в это время в стране было всего две дистиллировочные установки, в Горьком и в Казани,
            предприятие принимало на переработку глицерин от других заводов.
          </p>
        </CommonText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._5)}>
            <Image src="/images/nmjk/5/6.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <Columns
          left={
            <div>
              <figure className={classNames(styles.img, styles._4)}>
                <Image src="/images/nmjk/5/5.jpg" layout="fill" />
              </figure>
            </div>
          }
          right={
            <div>
              <p>
                Новая установка также позволила жиркомбинату освоить выпуск жидкости «Стеол-М», которая производится, в
                частности, из глицерина, воды и этилового спирта и применяется для заполнения противооткатных устройств
                в артиллерии и авиации.
              </p>
              <p>
                Принимал участие жиркомбинат и в противовоздушной обороне Горького от налетов Люфтваффе. По распоряжению
                командования Горьковской противовоздушной обороны начальник водородного цеха П. И. Поляков организовал
                монтаж новой водородной печи, и комбинат стал наполнять водородом аэростаты.
              </p>
              <p>
                В 1943 году директор Горьковского жиркомбината А. М. Андриянов предложил председателю комитета
                Горобороны М. Родионову организовать производство огнетушителей нового типа: «Последние налеты вражеской
                авиации показали, что производственные цехи больше пострадали от зажигательных бомб новой конструкции.
                Тушение этих зажигательных авиабомб существующими огнетушителями несколько затруднено. Предлагаю
                организовать производство пеногонов емкостью 15–20 литров со шлангом и распылителем».
              </p>
            </div>
          }
        />

        <CommonImages>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/nmjk/5/2.jpg" layout="fill" />
            <figcaption>Фильтрация саломаса на фильтрпрессе</figcaption>
          </figure>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/nmjk/5/3.jpg" layout="fill" />
            <figcaption>Фильтрпрессы для фильтрации саломаса установлены. 1919 год</figcaption>
          </figure>
        </CommonImages>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._3)}>
            <Image src="/images/nmjk/5/4.jpg" layout="fill" />
            <figcaption>Цех безреактивного расщепления жиров глицеринового завода</figcaption>
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Products
