import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Legend } from '../../../../'

import styles from './FightForSeries.module.css'

const FightForSeries = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Борьба за серию">
          <p>
            Новый флагманский самолет авиазавода №21, который должен был сменить
            И-16, был утвержден перед самой войной. В 1939–1940 годах за право
            производства в Горьком боролись два проекта истребителей: И-180 Н.
            Н. Поликарпова и И-21 главного конструктора серийного КБ завода № 21
            М.М. Пашинина. Последний смог убедить руководство завода, что его
            истребитель с мотором жидкостного охлаждения более перспективен, чем
            машина Поликарпова с воздушным охлаждением двигателя.
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sokol/6/2.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p className={styles.vrezka}>
            Истребители И-180 Н. Поликарпова и И-21 М. Пашинина не пошли в
            серийное производство из-за неудач на разных этапах испытаний
          </p>

          <p>
            В результате завод все силы бросил на создание И-21, а работы по
            И-180 отодвинули на второй план, игнорируя приказы руководства
            отрасли под предлогом проблем с кадрами. «Получив задание внедрить в
            производство новую машину И-180, на освоение которой были утверждены
            дополнительные штаты, завод не мог выделить для этого специальных
            работников нужной квалификации и не мог набрать их вновь», —
            формально объясняло руководство трудности с запуском, добавляя, что
            всю работу «делали постоянные сотрудники за счет перегрузки, работая
            с большим напряжением во внеурочное время».
          </p>

          <p>
            Судьба обоих проектов оборвалась на разных этапах испытаний (в ходе
            одного из таких испытаний И-180 в декабре 1938 года погиб В.П.
            Чкалов). Ни один из истребителей не был запущен в серийное
            производство.
          </p>
        </CommonText>

        <Legend title="«Ну не нужен больше И-16!»">
          <p>
            Чтобы прекратить выпуск устаревшего истребителя, потребовались
            весьма крутые меры. Их пришлось применить заместителю наркома
            авиационной промышленности П. А. Воронину. «Как-то утром пришли мы
            в цех, — вспоминал Л.А. Закс, заместитель С.А. Лавочкина, — а из
            ворот показался очередной И-16. Воронин подбежал к пожарному
            стенду, схватил висевший там топор и стал наносить удары по
            самолету. Изуродовал его совершенно. Зрелище было страшное —
            заместитель наркома своими руками рубит новую боевую машину. Павел
            Андреевич со слезами на глазах повернулся к рабочим „Ну не нужен
            больше И-16!“». Л. А. Закс также отмечает, что П.А. Воронин
            «помогал рабочим, создавая всякого рода премиальные положения,
            старался обеспечить рабочим заработок во время переходного
            периода».
          </p>
        </Legend>
      </div>
    </div>
  )
}

export default FightForSeries
