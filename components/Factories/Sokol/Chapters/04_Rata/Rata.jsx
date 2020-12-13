import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Legend, CommonImages } from '../../../../'

import styles from './Rata.module.css'

const Rata = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Грозная «Rata»">
          <p>
            Первые боевые вылеты И-16 во время гражданской войны в Испании
            (1936–1939 гг.) произвели фурор: на тот момент это был один из
            немногих в мире истребителей, способный вести бои на вертикалях.
            В мировой прессе неизвестные новые самолеты, без потерь выходившие
            из воздушных схваток, поначалу считали разработкой Boeing. Испанские
            республиканцы называли своего прыткого маленького защитника «Mosca»
            (муха), а их противники — немецкие и итальянские летчики — «Rata» (крыса).
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/sokol/4/1.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p>
            За несколько лет И-16 пережил множество модификаций, но уже к 1939
            году стало понятно, что дальнейшее совершенствование истребителя
            нецелесообразно. «Завершающие бои в Испании проходили при
            значительном преимуществе немецких Bf-109E. Нашей авиации надо было
            догонять вероятного противника по скорости, вооружению, дальности
            стрельбы», — отмечают в книге «Нижегородский арсенал Великой Победы»
            Е.И. Подрепный, Е. П. Титков.
          </p>
        </CommonText>

        <CommonImages middle>
          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/sokol/4/2.jpg" layout="fill" />
          </figure>

          <figure className={classNames(styles.img, styles._2)}>
            <Image src="/images/sokol/4/3.jpg" layout="fill" />
          </figure>
        </CommonImages>

        <Legend title="Король маневренности">
          <p>
            Несмотря на то, что новый истребитель летал и набирал высоту
            значительно быстрее предшественников, у летчиков строевых частей
            И-16 особого восторга не вызвал. Именно благодаря высокой скорости
            новым истребителем было намного труднее управлять, он не прощал
            летчикам даже малейших ошибок, на которые тихоходные бипланы
            просто «не обращали внимания». В результате случилось несколько
            серьезных аварий, что еще сильнее подорвало доверие к скоростному
            моноплану. Но настоящие асы сразу разглядели в новой боевой машине
            новую веху в развитии самолета-истребителя. Летчики-испытатели
            Петр Стефановский и Степан Супрун решили доказать, что И-16 не
            имеет себе равных по боевым качествам: скорости, маневренности,
            скороподъемности...
          </p>
          <p>
            По описанию историков, это показательное выступление было похоже
            на цирковой трюк. Сотни летчиков, съехавшихся на испытательный
            аэродром, с удивлением смотрели, как пилоты зачем-то связывают
            ярко-красными лентами крылья пяти истребителей И-16. Короткий
            разбег — и пятерка взмывает в воздух. Головокружительный каскад
            пилотажных фигур был проделан настолько слитно и чисто, что ни
            одна из четырех лент не оказалась разорванной! Это сенсационное
            выступление «красной пятерки» и последующие демонстрационные
            полеты в частях ВВС изменили отношение летчиков к новому самолету.
            Пилоты поняли, что новый самолет требует качественно иного
            подхода.
          </p>
        </Legend>
      </div>
    </div>
  )
}

export default Rata
