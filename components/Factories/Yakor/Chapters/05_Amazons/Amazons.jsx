import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, Columns } from '../../../../'

import styles from './Amazons.module.css'

const Amazons = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Амазонки станков" />

        <Columns
          left={
            <div>
              <p>
                Уход первоклассных специалистов завода на фронт накладывался на резкое увеличение производственной
                программы. «Красный якорь» нуждался в инженерах и мастерах как никогда. В 1941 году на работу было
                принято 590 человек, а уволено в связи с уходом в Красную Армию 687. Среди руководящих работников высшее
                и среднее техническое образование было лишь у 23%, остальные были «практиками». При этом большинство
                рабочих профессий приходилось на женщин, которые заменили своих отцов, мужей и сыновей, уходивших на
                фронт. В прессовом цехе 70% работников приходилось на представительниц прекрасного пола, среди
                электросварщиков было почти 90% женщин, среди слесарей — 40%, среди специалистов механической обработки
                на производстве боеприпасов — 45%. Более 70% женщин работали на сверхважных заказах по спеццепям для
                автобронетанковых частей Красной Армии.
              </p>
            </div>
          }
          right={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/yakor/6/1.jpg" layout="fill" />
                <figcaption>
                  Сборщица-стахановка завода «Красный якорь» У. А. Мартынова, выполняющая нормы на 230%. 1943 год
                </figcaption>
              </figure>
            </div>
          }
        />

        <CommonText>
          <p>
            В книге «Завод Красный Якорь: 120 лет истории» А. А. Гордин, И. Л. Дорожнова, Ю. В. Сухонина пишут, что
            «выпускницы ремесленных училищ выполняли нормы более чем на 200%»: «16-летняя девушка по фамилии Лекторович
            пришла на „Красный якорь“ в 1941 году. Она быстро изучила ремесло заготовщицы на сложном автоматическом
            станке и обязалась обслуживать сразу две машины. Лекторович выполнила свое обязательство — средние нормы ее
            выработки составляли 130%. Одними из самых производительных работников завода были молодые выпускницы
            ремесленных училищ — электросварщицы Коряковцева, Максимова, Крошкина, Савина. Они выполняли нормы более чем
            на 200%! Токарь Юрлова, работавшая на предприятии с 1939 года, изучила работу на большом револьверном
            станке, выполняла нормы на 200% и была бригадиром фронтовой бригады. Войнова, освоившая профессию токаря в
            годы войны, выполняла нормы на 160–200%. Работа шла везде, не только у станков. Начальник цеха № 9 А. С.
            Цубревич сутками не выходила с завода, чтобы цех бесперебойно снабжал производственные участки „Красного
            якоря“ заготовками. Техник Якишина во время отгрузки продукции для фронта работала по полторы-две смены и
            круглые сутки обеспечивала доставку грузов».
          </p>
          <p>
            В течение войны молодые выпускники школ фабрично-заводского обучения (ФЗО) и ремесленных училищ пополняли
            ряды промышленных кадров завода: они составляли 50% работающих. В школе ФЗО при «Красном якоре» обучение
            проходило прямо в цехах.
          </p>
          <p className={styles.vrezka}>
            Более 70% женщин завода «Красный якорь» работали на сверхважных заказах по спеццепям для автобронетанковых
            частей Красной Армии
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default Amazons
