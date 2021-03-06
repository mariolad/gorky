import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImages, Speech } from '../../../../'

import styles from './Personnel.module.css'

const Personnel = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Кадры решали все">
          <p>
            Проблема кадрового дефицита решалась постепенно: если в 1941 году
            промышленно-производственный персонал завода № 469 насчитывал 1790
            человек, то в 1942 году — уже 2470. Почти половину работающих
            (45,7%) составляли женщины.
            За 1942 год на завод было принято 13% специалистов, переведенных с
            других заводов, 20% работников, подобранных в соответствии с их
            квалификацией, и 67% мобилизованных домохозяек. В связи со
            спецификой производства при заводе были организованы школа
            стахановцев, технический минимум, специальная школа, в которых за
            год прошли обучение 2174 человека. Благодаря этой работе с января по
            декабрь 1942 года рост ударников производства составил 60%,
            стахановцев — 80%.
          </p>
        </MainText>

        <CommonImages>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/teploobmennik/6/1.jpg" layout="fill" />
          </figure>

          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/teploobmennik/6/2.jpg" layout="fill" />

            <figcaption>
              Завотделом снабжения заводского УКСа попросил разрешить ему ежедневно после основной нагрузки работать еще и у станка
            </figcaption>
          </figure>
        </CommonImages>

        <CommonText>
          <p>
            С начала 1942 года на предприятии создаются ударные фронтовые и
            комсомольско-молодежные бригады, перевыполняющие нормы на 200–300% и
            более. Итоги работы таких бригад подводились ежеквартально.
            Результаты вывешивали на заводской доске показателей.
            К началу ноября 1942 года на заводе только девять рабочих не
            справлялись с нормой ежедневной выработки, но все они пришли на
            производство меньше двух недель назад и еще не успели в совершенстве
            освоить профессию. А с тех, кто работал на заводе более
            продолжительное время, спрос был двойной: одной из традиций
            предприятия стало не допускать того, чтобы опытные сотрудники не
            выполняли производственную норму.
          </p>

          <p className={styles.vrezka}>
            В 1941 году на заводе работали 1790 человек, в 1942 году — уже 2470.
            Почти половину из них составляли женщины
          </p>
        </CommonText>

        <Speech
          title="«Опоздал на 21 минуту — под суд»"
          author={{
            name: 'Ветеран завода № 469 Е. В. Успенский'
          }}
        >
          «Работать плохо тогда было нельзя. Особенно трудно было в середине и
          во второй половине 1942 года. И хотя я был еще подростком, мне даже
          подставку к станку установили, чтобы можно было на нем работать, но
          хорошо запомнил строгость администрации: опоздал на работу на 21
          минуту — под суд „тройки“. Таков был закон военного времени».
        </Speech>
      </div>
    </div>
  )
}

export default Personnel
