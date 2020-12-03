import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Speech } from '../../../../'

import styles from './Lavochkin.module.css'

const Lavochkin = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Лавочкин">
          <p>
            Приказом Наркомата авиапрома № 657 от 23 ноября 1940 года на завод №
            21 из Подмосковья перевели конструкторское бюро С. А. Лавочкина. Так
            началась новая эпоха истории Горьковского авиазавода.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sokol/7/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p className={styles.vrezka}>
            Лавочкин Семен Алексеевич (1900–1960) Советский авиаконструктор,
            членкорреспондент Академии наук СССР (1958), дважды Герой Соцтруда
            (1943, 1956).
          </p>

          <p>
            Вместе с Лавочкиным из его бюро в Горький согласились переехать
            около 30 человек из 100, то есть свой коллектив новому главному
            конструктору авиазавода пришлось формировать на месте. Это было
            непросто: на предприятии до последнего надеялись, что начнут
            выпускать самолет собственной разработки — И-21, и были не рады
            новой машине — истребителю ЛаГГ-3 конструкции С. А. Лавочкина, В. П.
            Горбунова и М. И. Гудкова. Кроме того, техническая база предприятия
            не соответствовала новым задачам.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/sokol/7/2.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <Speech
            title="«Он такого был характера — не задиристого, мягкого»"
            author={{
              name:
                'Ветеран авиазавода № 21, конструктор ОКБ в годы войны А. Я. Мариненко:'
            }}
          >
            «...Вместе с самолетом появился Лавочкин: в таком потертом кожаном
            реглане. Ходил, смотрел. У него интересный характер…. преподавателя.
            Сколько я ни работал, не помню, чтобы кто-то из главных
            конструкторов ходил по щиткам. {'<...>'} Лавочкин не гнушался, ходил по
            щиткам. Сядет около конструктора, вдвоем смотрят, обмениваются
            мыслями. Он такого был характера — не задиристого, мягкого, одним
            словом — учитель».
          </Speech>

          <p className={styles.vrezka}>
            Под руководством С. А. Лавочкина были созданы истребители ЛаГГ-3,
            Ла-5, Ла-7, Ла-9, Ла-11, реактивные истребители (Ла-150, Ла-15,
            Ла-176, Ла-250 и др.), ракетные системы С-25, „Буря“ и др. Лауреат
            Сталинской премии (1941, 1943, 1946, 1948).
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default Lavochkin
