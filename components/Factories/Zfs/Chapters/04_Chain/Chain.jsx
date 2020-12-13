import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, Columns, CommonText } from '../../../../'

import styles from './Chain.module.css'

const Chain = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Скованные одной цепью">
          <p>
            Почти все предприятия города Горького и области работали в единой
            цепочке. В 1941 году между заводом «Двигатель Революции» и ГЗФС, а
            также заводами им. Ленина, им. Петровского, им. Фрунзе, «Красный
            якорь», артиллерийским заводом № 92, «Красное Сормово» и другими
            горьковскими предприятиями были заключены договоры о поставке
            различных видов изделий. На заводах было организовано производство
            коробки скоростей к танку Т-34, бортовой передачи к танку Т-60 и
            деталей к реактивным установкам М-13 и М-8.
          </p>
        </MainText>

        <Columns
          left={
            <div>
              <figure className={classNames(styles.img, styles.main)}>
                <Image src="/images/zfs/5/1.jpg" layout="fill" />
              </figure>
            </div>
          }
          right={
            <div>
              <p>
                Согласно распоряжению Совнаркома СССР от 3 июля 1941 года, завод
                фрезерных станков должен был изготовливать шлицевые валики и
                осуществлять шлицевку шестерен для коробки передач к танку Т-34,
                производство которой первоначально было поручено заводу
                «Двигатель Революции». В ноябре того же года Горьковский
                городской комитет обороты передал ГЗФС для производства всю
                коробку передач к танку Т-34, оставив за «Двигателем Революции»
                лишь отливку алюминиевого картера. С получением этого заказа
                Горьковский завод фрезерных станков стал одним из ведущих
                заводов-смежников по производству узлов для танка Т-34.
                Первоначально трудоемкость изготовления коробки передач к танку
                Т-34 оценивалась в 604 нормочаса, к 1943 году — в 344 нормочаса.
                Для сравнения: вся грузовая машина на ГАЗе в 1943 году
                изготавливалась за 137 человекочасов.
              </p>
            </div>
          }
        />

        <CommonText>
          <p>
            С завода «Двигатель Революции» был передан не только заказ на
            производство коробки передач танка Т-34, но и 52 станка, которые
            использовались при изготовлении деталей к этому узлу. Но станков
            все-таки не хватало. Производство требовало специальных
            зубодолбежных станков большого габарита для нарезки шестерен с
            зубьями крупного модуля. Такие станки можно было получить только
            из-за границы, но не в условиях войны. Конструкторы нашли решение
            этой проблемы: советские зубодолбежные станки типа «Комсомолец» были
            переконструированы. Это позволило в ноябре изготовить для «Красного
            Сормова» 43, а в декабре — 136 коробок передач.
          </p>
          <p className={styles.vrezka}>
            В 1941 году между ГЗФС и заводом «Двигатель Революции», а также
            другими горьковскими предприятиями были заключены договоры о
            поставке различных видов изделий
          </p>
        </CommonText>
      </div>
    </div>
  )
}

export default Chain