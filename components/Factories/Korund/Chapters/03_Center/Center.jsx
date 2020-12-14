import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, Columns, Speech } from '../../../../'

import styles from './Center.module.css'

const Center = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="В центре России">
          <p>
            По воспоминаниям замдиректора ЧХЗ по спецпродукции в 1941–1945 годах Кузьмы Александровича Меркина, в начале
            войны вся химия западных и юго-восточных регионов СССР была потеряна. В центральной полосе России остался
            один химический завод — ЧХЗ, остальные были за Уралом. Нагрузка на ЧХЗ заметно увеличилась, фронт требовал
            запуска новых производств. В сентябре 1941 года на заводе был запущен первый в СССР цех по производству
            цианистых солей, используемых для закалки стали. На базе этого цеха также организовали снаряжение химических
            и дымовых боеприпасов: 100-кг химавиабомб, 120-мм мин, 76-мм снарядов. Предприятие освоило выпуск калиевой
            селитры, из которой производился черный порох, а также нескольких химических продуктов для стабилизации
            азотных порохов (бездымный порох для огнестрельного оружия и артиллерии). Механический цех ЧХЗ взялся за
            производство деталей снарядов для «Катюши». На заводе снаряжались фосгеном и синильной кислотой химические
            авиабомбы и снаряды реактивной артиллерии.
          </p>
        </MainText>

        <Columns
          left={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/korund/4/1.jpg" layout="fill" />
              </figure>
            </div>
          }
          right={
            <div>
              <p>
                Для производства новой и восстановления подбитой на фронтах военной техники требовалось больше карбида
                кальция, и завод увеличил мощности по его производству. Кроме того, предприятие освоило производство
                осушителей мин, жидких дегазаторов иприта, обезвреживающих это отравляющее вещество.
              </p>
              <p>
                Новые производства осваивались в условиях нехватки кадров. На фронт отправилась треть квалифицированных
                сотрудников завода, добровольно отказавшихся от «брони». Оставшимся приходилось перевыполнять
                производственную норму: в 1941 году 70% сотрудников предприятия выдавали по 200% дневной нормы.
                Предприятие испытывало острый дефицит сырья и топлива. Бывало, что это грозило полной остановкой
                производства.
              </p>
            </div>
          }
        />

        <Speech
          title="«Остановим завод — расстреляют обязательно»"
          author={{ name: 'Замдиректора ЧХЗ по спецпродукции в 1941–1945 гг. К. А. Меркин' }}
        >
          «Я тогда ведал запасом топлива. Климахин (директор завода — ред.) вызвал меня к себе.
          <br />
          — Кузьма Александрович! Вагоны с углем на подходе. За сутки наверняка подойдут. Но у нас нет этих суток. Через
          пару часов встанем. Если прикоснемся к резервному запасу, и об этом узнают, нас расстреляют. Не узнают —
          останемся живы. А вот остановим завод — расстреляют обязательно. И правильно сделают! Какие же мы большевики,
          если допустим такое! Вариантов, как видишь, мало. Надо, Кузьма, брать из резерва. В ближайшие сутки должок
          возместим.
          <br />
          — Страшно, — говорю я. <br />
          — И мне страшно. Но самое страшное — остановить завод. <br />
          Мы дотронулись до резервного запаса. Через 53 часа все 1500 тонн вернули на место. Завод не остановился ни на
          секунду».
        </Speech>
      </div>
    </div>
  )
}

export default Center