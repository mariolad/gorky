import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../components'

import styles from './SteelMining.module.css'

const SteelMining = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Как добывалась сталь">
          <p>
            Выксунский металлургический завод, как и многие другие предприятия в
            военные годы, испытывал дефицит сырья — не хватало чугуна, руды,
            ферросплавов, огнеупоров.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/vmz/8/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Как говорится в отчете Горьковского комитета обороны, завод освоил
            выплавку кипящих сталей на марганцевосстановительном процессе за
            счет применения марганцевой руды. Кроме того, из-за отсутствия
            чугуна мартеновцы плавили сталь карбюраторным способом: необходимый
            для плавки углерод вводили коксом и даже каменным углем, который
            содержит вредные для металла соединения серы. Горьковский комитет
            обороны сообщал, что использование древесного угля при карбюраторном
            процессе увеличивало массу закладки на 4–5%, что привело к удлинению
            периода закладки: «Так как уголь не полностью усваивается металлом,
            значительная часть его всплывает, создавая на поверхности металла
            слой изоляции, период плавления также значительно увеличивается. В
            результате этого длительность плавок на Выксунском заводе на рядовых
            марках увеличилась с 8 часов до 10–12 часов, на легированных марках
            с 12 часов до 15–16 часов. Только от удлинения по времени плавок
            завод в среднем недодавал в месяц до 2 тыс. т стали». Чтобы
            обеспечить предприятие металлом, дирекция завода вынуждена была
            отправить техника завода С.Е. Куделькина лично к народному комиссару
            металлургической промышленности Ивану Тевосяну, который в 1942 году
            часто жил на Урале, контролируя работу заводов.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/vmz/8/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Автор книги «25 рассказов из истории ОАО ВМЗ» пишут: «Посланец Выксы
            С. Е. Куделькин застал наркома озабоченным и усталым в
            Магнитогорске, в железнодорожном вагончике, который служил ему и
            квартирой. На просьбу выксунцев нарком ответил оперативно: „Срочно
            отгрузить полторы тысячи тонн чугуна и триста тонн ферромарганца для
            Выксы“. Оборонное задание завод выполнил в срок, но наладить
            регулярное снабжение предприятия сырьем долго не удавалось, от этого
            лихорадило работу многих цехов». Чтобы восполнить нехватку металлов,
            рабочие сначала использовали окалину и сварочный шлак прокатных
            цехов, а затем организовали небольшой рудник и вели добычу.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._2)}>
              <Image src="/images/vmz/8/3.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Случались перебои в электроэнергии, поставках мазута. По данным
            Горьковского комитета обороны, в январе 1943 года печи
            новомартеновского цеха из-за отсутствия мазута простояли 20 дней и
            дали всего лишь 750т стали, или 6,2% своей мощности, то есть
            недостача стали ВМЗ только за один месяц превысила 11 тыс. т. Торф
            как топливо использовали все чаще, для выработки электроэнергии
            установили энергопоезда.
          </p>

          <p>
            В дефиците был и огнеупорный кирпич, поэтому для облицовки торцовых
            стенок и головок печей использовали железные трубки, предварительно
            набив их огнеупорной смесью. В 1943 году мартеновский цех №1 ВМЗ
            из-за отсутствия огнеупоров простаивал 31,3% времени.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._3)}>
              <Image src="/images/vmz/8/4.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>
    </div>
  )
}

export default SteelMining
