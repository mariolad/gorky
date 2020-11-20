import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import {
  MainText,
  CommonText,
  CommonImage,
  Speech
} from '../../../../components'

import styles from './Locust.module.css'

const Locust = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Неистребимая саранча">
          <p>
            Легкий танк Т-60 был разработан конструкторским бюро московского
            завода № 37. Выксунский завод должен был производить для танков
            корпуса и отправлять на Горьковский автозавод для сборки.
          </p>
        </MainText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/drobmash/5/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            К середине августа Выксунский завод дробильно-размольного
            оборудования собрал первый опытный корпус, чтобы отработать процесс
            производства, но о начале серийного выпуска речи быть не могло.
            Из-за задержки отправки документации и доработок, по оценке Главного
            автобронетанкового управления (ГАБТУ), поставку корпусов от
            выксунского смежника Горьковскому автозаводу стоило ожидать не ранее
            1 сентября.
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/drobmash/5/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p className={styles.vrezka}>
            В 1942 году выксунское предприятие стало участником производства
            нового танка Т-70
          </p>

          <Speech
            title="«Вернулся в Выксу инвалидом без ноги» "
            author={{
              name:
                'Бригадир слесарей на сборке корпусов танков Т-70 на заводе № 177 в годы войны В. П. Жданов'
            }}
          >
            «В бригаде слесарей, которой руководил т. Дрыго, кто-то из слесарей
            подбил головку одного из 24 болтов, крепивших башню к корпусу. По
            требованию представителя военной приемки в течение двух часов
            бригадир должен был выявить виновного. Дрыго скрыл виновного. Здесь
            же он был отстранен от работы. С него сняли бронь, а на следующий
            день через военкомат он был отправлен в армию. Через год он вернулся
            в Выксу инвалидом без ноги».
          </Speech>
        </CommonText>
      </div>

      <div className={classNames(styles.page, styles.fpi)}>
        <CommonImage>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/drobmash/5/3.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Поступать в войска собранные на Горьковском автозаводе танки стали с
            ноября 1941 года. К концу 1941 года на площадке завода ДРО было
            установлено эвакуированное оборудование. Сборкой корпусов для Т-60,
            от сварки и до сдачи его работникам ОТК и военной приемки,
            занимались слесари-сборщики, работавшие на заводе ДРО и до войны. За
            два года выксунский завод собрал 1102 бронекорпуса для Т-60 — то
            есть для трети всех легких танков этого типа, произведенных в
            1941–1943 годах. Немецкие солдаты называли эти танки «неистребимой
            саранчой» за небольшие размеры и «живучесть»
          </p>
          <p>
            В 1942 году выксунское предприятие стало участником производства
            нового танка Т-70. Проектирование Т-70 ГАЗ вел весь январь и
            завершил в феврале 1942-го. Танк был длиннее предшественника на 20
            см, выше на 25 см, масса увеличилась почти вдвое, до 9 т, а толщина
            брони центрального лобового листа — до 45 мм (у Т-60 — 35 мм),
            верхнего лобового листа до 35 мм (у Т-60 — 15 мм). Постановление ГКО
            «Об организации производства танков Т-70 на Горьковском автозаводе
            имени Молотова Hаркомсредмаша» вышло 6 марта 1942 года, с мая
            прекращался выпуск Т-60. Предполагалось, что Выксунский завод ДРО
            выпустит в марте 10 корпусов Т-70, в апреле — 40, в мае — 90 и в
            июне — 150, однако эти планы не были реализованы в срок. За простои
            в производстве военной техники, брак или срыв оборонного заказа
            личную ответственность нес каждый сотрудник завода. За два года
            завод № 177 произвел бронекорпуса для четверти легких танков,
            произведенных всеми предприятиями-изготовителями Т-70.
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <Speech
            title="«Через 24 часа завод должен организовать производство Т-60»"
            author={{
              name:
                'Начальник механосборочного цеха № 1 завода № 177 в годы войны С. В. Гиляровский'
            }}
          >
            «После короткой информации директор завода Н.Е. Волков отпустил
            руководителей домой и всем приказал через час снова собраться у
            него. Через час начальник секретного отдела завода принес
            мобилизационный пакет достаточно внушительных размеров, на котором
            было написано: „Вскрыть после начала или объявления войны“. Николай
            Волков вскрыл пакет и прочитал: через 24 часа завод должен
            организовать производство Т-60 согласно прилагаемой технической
            документации. По предложению главного инженера завода И.М. Горячева
            первый экземпляр Т-60 решили делать из фанеры, чтобы не загонять в
            брак дефицитный бронелист, ибо все равно потребуются корректировки
            размеров. Всю гражданскую продукцию из цехов вывезли»
          </Speech>
        </CommonText>
      </div>
    </div>
  )
}

export default Locust