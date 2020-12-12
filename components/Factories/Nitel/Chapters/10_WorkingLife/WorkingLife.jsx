import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonText,
  Columns,
  Speech
} from '../../../../'

import styles from './WorkingLife.module.css'

const WorkingLife = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Трудовой быт">
          <p>
            Военное время требовало от людей громадного напряжения сил и воли.
            Труд без отдыха по 12–16 часов ежедневно усугублялся перебоями с
            продовольствием. Согласно документу парторга ЦК ВКП (б), в феврале
            1942 года на заводе больше недели не выдавали рабочим продуктовые
            карточки. В материалах заводской газеты «Ленинец» от 17 марта 1942
            года заводской комитет призывал сотрудников записываться на
            получение участка для личных огородов.
          </p>
        </MainText>

        <Columns
          left={
            <div>
              <p>
                По воспоминаниям тружеников тыла, на территории современного
                парка «Швейцария» были выделены участки под посадку овощей.
                Сотрудники горьковских предприятий в тяжелые годы войны
                приходили друг другу на помощь. Специалист завода им. В. И.
                Ленина Л. Куранов вспоминал случаи, когда работники завода жили
                в радиобудках на территории соседнего завода им. Фрунзе.
              </p>

              <figure className={classNames(styles.img, styles._1)}>
                <Image src="/images/nitel/11/2.jpg" layout="fill" />
              </figure>
            </div>
          }
          right={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/nitel/11/1.jpg" layout="fill" />
              </figure>
            </div>
          }
        />

        <CommonText>
          <p className={styles.vrezka}>
            На территории современного парка «Швейцария» были выделены участки
            под посадку овощей
          </p>
        </CommonText>

        <Speech
          title="«Нам приходилось сутками не выходить из радиомастерских»"
          author={{
            name: 'Ветеран завода им. В. И. Ленина Л. Куранов:'
          }}
        >
          «Нам приходилось сутками не выходить из радиомастерских. Руководство
          завода имени В. И. Ленина срочно собрало специалистов по сборке и
          регулировке радиостанций и поставило задачу — ускорить процесс
          подготовки этой необходимой для фронта аппаратуры. Сокращались сроки
          ее производства. Если раньше этот процесс занимал месяц, то теперь в
          течение одних суток мы должны были собрать и отрегулировать
          четыре-шесть радиостанций. Жили и работали на казарменном положении».
        </Speech>
      </div>
    </div>
  )
}

export default WorkingLife