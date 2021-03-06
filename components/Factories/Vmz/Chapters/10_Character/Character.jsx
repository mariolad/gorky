import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { MainText, CommonImage } from '../../../../'

import styles from './Character.module.css'

const Character = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <MainText title="Стальной характер">
          <p>
            Сталеварение не женская работа, однако женщины Выксы пришли на
            завод, чтобы заменить ушедших на фронт мужчин.
            В отдел кадров Выксунского металлургического завода с первых дней
            войны стали поступать заявления о приеме на работу выксунских
            домохозяек. С июля по сентябрь 1941 года на ВМЗ пришло 795 женщин,
            которые раньше не работали на производстве. К весне 1942 года
            женщины составляли уже 50% всех работников предприятия. Чтобы начать
            работу на заводе, они проходили краткосрочные курсы и доучивались
            непосредственно на производстве. В 1942 году 34% женщин стали
            стахановками и ударницами труда, работая мастерами, техниками,
            бригадирами, диспетчерами. При этом некоторые выксунки после работы
            учились на курсах медицинских сестер, а затем добровольно уходили на
            фронт, другие оставались работать в больницах и госпиталях. На
            территории Выксы находилось 12 эвакуированных госпиталей.
          </p>
        </MainText>

        <CommonImage content>
          <figure className={classNames(styles.img, styles.main)}>
            <Image src="/images/vmz/10/2.jpg" layout="fill" />
          </figure>
        </CommonImage>
      </div>
    </div>
  )
}

export default Character
