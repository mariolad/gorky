import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, GunsOfWar, Columns } from '../../../../'

import styles from './Production.module.css'

const Production = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Производство «продукта»" />

        <Columns
          left={
            <div>
              <p>
                В отчете Горьковского комитета обороны о работе химических предприятий региона в 1941–1943 гг.
                говорится, что во второй половине 1941 года на заводе № 96 был закончен монтаж и начаты освоение и
                производство боевых отравляющих веществ — тролита, как называли иприт, и персила, то есть люизита.
                Однако, по воспоминаниям сотрудников, отравляющие вещества производились на предприятии и до войны, но в
                меньших объемах. Авторы корпоративного издания «История глазами современников. К 60-летию ОАО
                „Капролактам“» пишут: «С начала Великой Отечественной войны коллектив завода, как и весь советский
                народ, переключился на выполнение оборонных заданий. Цех № 3 (иприт) и цех № 14 (люизит) производили
                химические отравляющие вещества еще до войны, но работали не на полную мощность.
              </p>
            </div>
          }
          right={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/kaprolaktam/4/3.jpg" layout="fill" />
                <figcaption>Главный корпус цеха № 3 по производству иприта. 1940-е годы</figcaption>
              </figure>
            </div>
          }
        />

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/kaprolaktam/4/2.jpg" layout="fill" />
            <figcaption>Вид на постройки завода № 96</figcaption>
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            С начала войны эти цехи становятся не только самыми важными среди цехов, дающих военную продукцию, но и
            самыми опасными. Часть продукции цеха иприта заливалась в железнодорожные цистерны и отправлялась
            заказчикам, а другая часть по трубопроводу передавалась в цехи № 16 и № 19, где в смеси с люизитом им
            заполняли химические артиллерийские снаряды и авиационные бомбы».
          </p>
          <p className={styles.vrezka}>
            С начала Великой Отечественной войны коллектив завода переключился на выполнение оборонных заданий
          </p>
        </CommonText>

        <Columns
          left={
            <div>
              <figure className={classNames(styles.img, styles._2)}>
                <Image src="/images/kaprolaktam/4/1.jpg" layout="fill" />
              </figure>
            </div>
          }
          right={
            <div>
              <p>
                По данным Горьковского комитета обороны, в 1942 году мощности цехов отравляющих веществ увеличились до
                2800 т в месяц. Государственный комитет обороны СССР 1 марта 1942 года в постановлении «О производстве и
                поставке средств химического нападения и защиты» задал объемы производства отравляющих веществ на март.
                Завод № 91 в Сталинграде (современный Волгоград) должен был произвести 750 т иприта, завод № 102 в
                Чапаевске (Самарская область) — 950 т иприта и 330 т люизита, а завод № 96 в Дзержинске — 2000 т иприта
                и 670 т люизита. К началу 1943 года завод произвел 42 тыс. т отравляющих веществ. На предприятии было
                организовано снаряжение всех видов химических боеприпасов: авиабомб (ХАБ — 100, 200, 500 кг), 132-мм
                реактивных снарядов и 82-мм мин, артснарядов (АХС — 76 мм). Для этого были организованы четыре
                снаряжательных цеха, которые с 1942 года регулярно перевыполняли план производства. В 1943 году завод №
                96 отгружал армии 150 тыс. выстрелов (боеприпасов) в месяц. За весь год предприятие выпустило 130 тыс.
                авиабомб и 860 тыс. снарядов. За годы войны завод № 96 стал крупнейшим в СССР предприятием по выпуску
                отравляющих веществ.
              </p>
            </div>
          }
        />

        <GunsOfWar title="Иприт">
          <p>
            Отравляющее вещество. Поражает организм при любом способе проникновения. При контакте с кожей образуются
            язвы, при вдыхании вызывает отек и воспаление легких, смерть от удушья может наступить на третьи сутки,
            попадание в глаза может привести к слепоте. Накапливается в организме, что приводит к общему отравлению.
          </p>
          <p>
            В промышленных масштабах начал производиться во время Первой мировой войны для германской армии. Название
            получил после применения в 1915 году германскими войсками против англичан под бельгийским городом Ипр.
          </p>
        </GunsOfWar>

        <GunsOfWar title="Люизит">
          <p>
            Отравляющее вещество общеядовитого и кожно-нарывного действия. Токсичен в любых формах, проникает через
            защитные костюмы и противогазы. Поражает сердечно-сосудистую, периферическую и центральную нервную систему,
            органы дыхания, желудочно-кишечный тракт. При попадании на кожу начинает действовать сразу и в зависимости
            от степени поражения может привести к образованию глубоких язв (в 2,5 раза токсичнее иприта).
          </p>
        </GunsOfWar>
      </div>
    </div>
  )
}

export default Production