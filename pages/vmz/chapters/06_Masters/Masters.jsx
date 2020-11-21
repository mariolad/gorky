import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonText,
  Speech,
  CommonImage
} from '../../../../components'

import styles from './Masters.module.css'

const Masters = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Мастера огневых дел">
          <p>
            Выпуском спецсталей до войны занимался старый мартеновский цех № 1
            на печах массой обрабатываемого материала (садкой) 30–40 т. Даже при
            полной загрузке печей мощности цеха не хватало, чтобы выполнить
            военный заказ.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/vmz/6/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Выксунцы решили, что единственным выходом будет начать плавку брони
            в новомартеновском цехе в печах садкой 90 т. По технологии броневые
            стали плавили в электропечах, а не в большегрузных мартеновских, но
            условия военного времени не оставляли вариантов. Институт
            металлургии разработал секретную технологию, по которой спецстали
            начали изготавливать в мартенах. Ведущие инженеры завода обучали
            сталеваров варить броню по-новому.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/vmz/6/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p className={styles.vrezka}>
            В результате напряженной работы план выпуска спецсталей за второе
            полугодие 1941 года завод выполнил на 418,4%, труб — на 623,3%.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._2)}>
              <Image src="/images/vmz/6/3.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <Speech
            title="«Надо враз ломать годами складывавшуюся технологию»"
            author={{
              name: 'Сталевар ВМЗ в годы войны В. А. Веретенов'
            }}
          >
            «Уже первая плавка броневой стали, которую провела бригада С. И.
            Соколова, была скоростной, сварили ее за 7 часов 45 минут при
            плановом времени 12 часов 27 минут. …Помню, подходят как-то ко мне
            секретарь партбюро Павел Дмитриевич Жулида с начальником смены
            Андреем Ивановичем Соколовым: „Решили мы, Василий Андреевич,
            испытать печь на хромомагнезитовом своде. Возьмешься ты со своей
            бригадой“. Это было для меня неожиданным и показалось очень смелым.
            Шутка ли, надо враз ломать годами складывавшуюся технологию. Взялись
            мы за новое дело. Далось оно нелегко, много отняло сил, но новинка в
            конце концов удалась. Был удлинен срок службы печи, вдвое увеличен
            межремонтный период, а, следовательно, на каждой печи стали давать
            значительное количество металла дополнительно к плану».
          </Speech>
        </CommonText>
      </div>
      {/* <Gallery image={main}/> */}
    </div>
  )
}

export default Masters