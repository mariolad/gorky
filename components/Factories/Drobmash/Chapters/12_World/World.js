import React from 'react'

import { MainText } from '../../../../'

import styles from './World.module.css'

const Change = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Строительство мира">
          <p>
            После победы Выксунский завод ДРО на несколько лет прекратил выпуск военной техники. Задачи перед государством стояли другие: восстановить разрушенные войной города. Вновь требовалось большое количество строительной техники и машин для производства стройматериалов. В 1945 году на строительные площадки были отправлены 21 щековая дробилка, восемь молотковых дробилок, 36 стружкодробилок, 105 пневматических подъемников. В том же году предприятие освоило производство шаровых мельниц, бегунов для изготовления бетона из шлаков, молотковых дробилок для размола зерна и соломы.
          </p>

          <p>
            С 1946 года на заводе растет количество модификаций и объем выпускаемых машин. В 1947-м создана передвижная камнедробильная установка производительностью 30 т.
          </p>

          <p>
            В 1949 году вышло постановление Совета Министров СССР о начале производства бронекорпусов для БТР-152 и АСУ-57. В 1950 году был издан специальный приказ построить для производства бронекорпусов спеццех. В декабре 1992 года от завода дробильно-размольного оборудования (ныне ООО «Дробмаш») отделили производство военной техники в ОАО «Завод корпусов» (входит в ООО «Военно-промышленная компания»).
          </p>
        </MainText>
      </div>
    </div>
  )
}

export default Change