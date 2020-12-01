import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, Speech, CommonImage } from '../../../../'

import styles from './SpecialOrder.module.css'

const SpecialOrder = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Тяжелый спецзаказ">
          <p>
            Сортопрокатному цеху после начала войны требовалось перейти с
            производства углеродистых сталей на выплавку высокопрочных, а также
            освоить изготовление балки носа для Т-34, которую КМЗ по кооперации
            должен был поставлять на «Красное Сормово».
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/ruspolimet/7/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Изготавливать балку было необходимо на прокатном стане-750
            (крупносортный стан с валками диаметром 750 мм для производства
            квадратных и круглых профилей размером 80–200 мм). Однако его
            технические характеристики не позволяли выполнить заказ. Руководству
            и сотрудникам завода пришлось разработать новый технологический
            процесс, и в день пробной прокатки в сортопрокатном цехе собрались
            все: директор завода, начальник производства, главный инженер,
            представители Наркомата танковой промышленности. Они наблюдали за
            тем, как сначала к стану подали нагретый до полубелого состояния
            слиток весом 400 кг.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/ruspolimet/7/1.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Авторы книги «Война и тыл. Кулебакский металлургический завод в годы
            войны» С.А. Воронин и С.И. Колобаев пишут: «Задали в обжим. Прошел
            хорошо. Во второй клети испытуемый образец тоже ведет себя
            относительно спокойно. Передали в чистовую клеть. Некоторая
            выдержка, скользит профиль, но не захватывается валками. Вальцовщик
            принудительно клещами подтолкнул ее, балка прошла в калибр и
            приобрела форму, какую и требовалось получить». Однако трудности с
            производством балки не закончились: оборудование не было
            приспособлено к интенсивному режиму работы и производству новых
            видов стали и часто выходило из строя, с работы кулебакские
            металлурги не выходили сутками.
          </p>

          <Speech
            title="«Спали урывками тут же»"
            author={{
              name: 'Электрик КМЗ в годы войны Н. И. Сочнев'
            }}
          >
            «Однажды вышел из строя стан-750, на котором катали балку носа для
            танков. Произошла авария, все электрооборудование сгорело.
            Ремонтировали трое суток, спали урывками тут же. Три блина на
            завтрак, три — на обед и три — на ужин. Наконец, сделали. Мастер М.
            Ф. Шаблыгин говорит нам, чтобы зашли. Заходим к нему в каморку. На
            столе стопка блинов, наливает по стаканчику спирта: „Пейте, ешьте и
            — отдыхать“».
          </Speech>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <Speech
            title="«Завод превратился в целый комбинат»"
            author={{
              name: 'Главный энергетик завода в годы войны И. С. Желтов'
            }}
          >
            «Для резкого увеличения заготовки дров были проложены дополнительные
            железнодорожные пути. Для превращения дров в щепу был сконструирован
            и сделан своими силами так называемый „чипер“. Завод превратился в
            целый комбинат со множеством цехов, участков и хозяйств:
            непосредственно сам завод; огромная территория торфоболот в районе
            Кулебак и села Софронова; доломитные и известняковые карьеры;
            дровосечные дачи для заготовки дров и угля; большое подсобное
            хозяйство с фермами, с пахотными землями. Более половины общего
            количества рабочих трудились только на подсобных хозяйствах».
          </Speech>
        </CommonText>
      </div>
    </div>
  )
}

export default SpecialOrder
