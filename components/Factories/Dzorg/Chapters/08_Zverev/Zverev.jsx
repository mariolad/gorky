import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonText, CommonImage, Legend } from '../../../../'

import styles from './Zverev.module.css'

const Zverev = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Зверев">
          <p>
            Разработка технологии получения оргстекла стала одной из основных
            задач Б. П. Зверева в ГОСНИИ-42. Прозрачный пластик стал известен в
            1928 году под маркой Plexiglas в Германии. Уже в начале 1930-х годов
            его стали использовать для создания остекления фонаря кабины пилота:
            он был прозрачным, не разбивался на осколки, был устойчив к
            атмосферным явлениям и нечувствителен к воздействию авиационного
            топлива, спиртов и минеральных масел. На опытном производстве Б.П.
            Зверева были впервые отработаны процессы синтеза синильной кислоты и
            циангидринов. На завод № 148 молодого инженера как раз отправили,
            чтобы наладить производство оргстекла на основе циангидринов.
          </p>
        </MainText>
      </div>

      <div className={styles.page}>
        <CommonImage>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/dzorg/8/2.jpg" layout="fill" />
          </figure>
        </CommonImage>

        <CommonText>
          <p className={styles.vrezka}>
            Зверев Борис Петрович (1915–1966) Иженер-химик, организатор
            советского химического производства, главный инженер завода «Рулон»
            и Кирово-Чепецкого химического завода. Лауреат трех Сталинских и
            Ленинской премий
          </p>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            Б. П. Звереву попутно с развертыванием мощностей нового завода
            приходилось решать и другие задачи, например разрабатывать ту самую
            технологию производства ацетона из изопропилового спирта, которая
            позволила отказаться от использования в промышленности 2 млн т
            пшеницы в год, что в военные голодные годы было особенно ценно. На
            «Рулоне» впервые в мире начали производить синильную кислоту в
            промышленных масштабах, впервые в стране — фтористый водород,
            фторорганические продукты. В 1943 году Б. П. Зверев стал главным
            инженером «Рулона».
          </p>

          <CommonImage>
            <figure className={classNames(styles.img, styles._1)}>
              <Image src="/images/dzorg/8/1.jpg" layout="fill" />
            </figure>
          </CommonImage>
        </CommonText>
      </div>

      <div className={styles.page}>
        <CommonText>
          <p>
            В 1949 году Б. П. Зверева командировали на Кирово-Чепецкий
            химкомбинат (КЧХ). Под его руководством завод освоил выпуск хлора,
            каустической соды, хлороформа, хлористого кальция, гербицидов,
            фреона, мономеров и фторполимеров, фторкаучуков, медицинского фетра
            и искусственных сердечных клапанов. После землетрясения в Ташкенте в
            1966 году КЧХ под руководством Б. П. Зверева запустил производство
            принципиально новых психотропных препаратов для снятия стрессов и
            депрессий. Б. П. Зверев был лауреатом трех Сталинских премий
            (1946-го, 1951-го, 1953 годов), лауреатом Ленинской премии,
            кавалером трех орденов Трудового Красного Знамени, двух орденов
            «Знак Почета» и Золотой медали ВДНХ.
          </p>
          <Legend title="Дело о вредительстве">
            В 1941 году, подступая к Москве, немцы разбомбили завод,
            поставлявший на «Рулон» пластификатор для производства оргстекла.
            Дзержинские химики нашли ему замену, но через несколько месяцев
            стекло, произведенное по новой технологии, начало зеленеть. Было
            возбуждено дело о вредительстве. Б. П. Зверева и его коллег
            отправили в Москву для рассмотрения дела на госкомиссии во главе с
            Г.М. Маленковым. В работе этой комиссии участвовал сын верховного
            главнокомандующего В.И. Сталин. Он был сотрудником летной инспекции
            Военно-воздушных сил при Главном штабе ВВС РККА. Он рассказал
            комиссии, что советские самолеты выходят из строя за две недели — их
            сбивают или они уходят на ремонт, и за это время бронестекло не
            успевает позеленеть. Дело прекратили.
          </Legend>
        </CommonText>
      </div>
    </div>
  )
}

export default Zverev