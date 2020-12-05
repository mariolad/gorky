import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage } from '../../../../'

import styles from './Achievements.module.css'

const Achievements = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Победные достижения">
          <p>
            Все первое полугодие победного 1945-го завод работал во фронтовом
            режиме, выпустив несколько тысяч шасси для истребителей Ла-7 и
            несколько сотен комплектов агрегатов для Ла-5 и Як-9. Среди новых
            разработок были первые серийные образцы шасси для Як-8, усиленные
            стойки костыля для учебно-тренировочного варианта Ла-7. Но оборонный
            заказ на 1945 год составлял уже не больше двух третей от
            производства такой продукции в 1944 году.
          </p>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/gidromash/10/1.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            Постепенно в номенклатуре предприятия появлялись «мирные» изделия.
            Так, в КБ завода разработали и выпустили 10 предсерийных комплектов
            шасси для первого послевоенного вертолета «Омега». Начали выпускать
            цилиндровые втулки грязевого насоса для нефтепрома, передние вилки
            мотоцикла М-72, гидравлические домкраты для автомашин ГАЗ-51 и
            агрегаты для автобуса «Люкс», в числе которых были задний мост,
            амортизатор передней балки и цилиндры управления дверями.
          </p>

          <p className={styles.vrezka}>
            В послевоенные годы резко сократился оборонзаказ, но заводу удалось
            сохранить специализацию
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Заметное сокращение оборонного производства сказалось на экономике
            предприятия, и в целом 1945 год стал в его истории одним из самых
            тяжелых. Станки простаивали, возвращались к учебе студенты и
            подростки, начали уезжать москвичи...
          </p>
          <p>
            В 1947 году завод начал работу на новом месте — были достроены
            корпуса на Ворошиловском шоссе. Здесь предприятие вошло в новую
            эпоху советского авиастроения. Этапным и во многом спасительным для
            специализации завода стал заказ на производство шасси для первого в
            СССР реактивного самолета разработки С. А. Лавочкина: вместо двух
            длинных передних стоек и костыля были необходимы носовая управляемая
            стойка и две короткие основные опоры, которые теперь убирались не в
            крылья, а в корпус.
          </p>

          <p>
            Кооперация с крупнейшими авиастроителями страны продолжается и
            сегодня: несмотря на кризисные времена, заводу удалось сохранить
            конструкторскую базу и производственные возможности и остаться
            ведущим отечественным производителем шасси для всех типов
            летательных средств.
          </p>
        </CommonText>

        <CommonImage>
          <figure className={classNames(styles.img, styles._1)}>
            <Image src="/images/gidromash/10/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Achievements