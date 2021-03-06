import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, CommonImages } from '../../../../'

import styles from './Part.module.css'

const Part = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Женская доля">
          <p>
            Масштабная перестройка производства велась в условиях дефицита кадров сотни квалифицированных рабочих и ИТР
            ушли на фронт. В результате в первый месяц войны на завод пришли 529 женщин, в октябре их было уже около 1,5
            тыс. (всего на заводе в 1941 году числилось 2370 человек).
            Женщины работали даже там, где прежде трудились исключительно мужчины, например в литейном цехе. В заводской
            газете «Двигатель» от 23 мая 1942 года есть заметка о фрезеровщице Евстифеевой, эвакуированной в Горький из
            Харькова «Она имеет грудного ребенка, но в такое время не желает сидеть без дела. Ее поставили работать на
            вертикальном станке, она настойчиво взялась за освоение нового станка и в короткий срок освоила его. В
            настоящее время выполняет норму на 160%, несмотря на то, что каждый день на час уходит с работы кормить
            ребенка». А в номере к 8 марта 1943 года отмечается, что стахановки цеха №13 Разуваева, Родина, Голубева
            ежедневно дают до четырех норм за смену, а стахановка 1-го механического цеха Кузьмина работает на трех
            станках и «показывает хорошие образцы труда».
          </p>
        </MainText>

        <CommonImages>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/rumo/5/3.jpg" layout="fill" />
          </figure>

          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/rumo/5/2.jpg" layout="fill" />

            <figcaption>
              К концу 1941 года больше 60% должностей на «Двигателе Революции» занимали женщины
            </figcaption>
          </figure>
        </CommonImages>

        <CommonText>
          <p>
            В заметках заводской многотиражки о стахановском движении (в 1942 году стахановцев на заводе было больше 1
            тыс.), о «двухсотниках», «трехсотниках» есть четырехзначные цифры выполнения дневной нормы рабочими. Слесарь
            инструментального цеха Сергеев, сварщик сборочного цеха Бобрихин, токарь механического цеха Королев стали
            «пятисотниками» и «тысячниками». Инициаторы этого движения на заводе — кузнецы П. П. Евсеев и И. В. Сухов в
            мае 1942 года выполнили восемь норм за смену, а в июле Евсеев, дав 1235%, перекрыл все рекорды.
          </p>
          <p>
            И. В. Сухов создал первую фронтовую бригаду «Двигателя Революции» — на участке сварки и сборки минометов. Ее
            рекорд военных лет — 1100% нормы в смену. А бригада Я.П. Каленева, работавшая на подвеске авиабомб,
            выполняла задания на 500–700%.
            В целом в годы войны в цехах завода работало 90 фронтовых бригад, а два механических цеха целиком стали
            фронтовыми.
          </p>
        </CommonText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/rumo/5/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Part
