import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImages, CommonImage } from '../../../../'

import styles from './Birth.module.css'

const Birth = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Второе рождение">
          <p>
            После войны руководство ЗАТИ инициировало его перепрофилирование на
            выпуск автобусов — ведь успешная попытка изготовить автобус на базе
            шасси грузовика предпринималась заводчанами еще в 1935 году.
            Производство автотракторного инструмента постепенно передали на
            Павловский завод слесарно-монтажного инструмента, а производство
            кузовной арматуры на ЗАТИ сохранилось — ею по-прежнему оснащаются
            КрАЗы, БелАЗы, МАЗы, «Кировцы» и другие автомобили и тракторы.
          </p>
        </MainText>

        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/paz/6/1.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            В апреле 1952 года Совет министров СССР утвердил план реконструкции
            ЗАТИ и программу выпуска 10 тыс. автобусов в год. Большая группа
            павловчан отправилась на стажировку на ГАЗ, на заводе строился
            кузовной сборочный цех. Конструкторско-экспериментальный отдел
            завода возглавил один из опытных конструкторов ГАЗа, участник
            создания автомобиля М-20 «Победа» Ю. Н. Сорочкин. Первые автобусы
            под маркой павловского завода — ПАЗ-651 — были собраны на базе
            автомобиля ГАЗ-51 в августе 1952 года.
          </p>

          <p>
            С тех пор предприятие не меняло своего профиля. Сегодня Павловский
            автобусный завод входит в машиностроительный холдинг «Группа ГАЗ» и
            специализируется на выпуске автобусов малого и среднего классов для
            городских и пригородных перевозок.
          </p>
        </CommonText>

        <CommonImages>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/paz/6/2.jpg" layout="fill" />
          </figure>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/paz/6/3.jpg" layout="fill" />
          </figure>
        </CommonImages>
      </div>
    </div>
  )
}

export default Birth
