import React from "react";

import {
  MainImage,
  MainText,
  CommonText,
  Gallery,
  Speech,
} from "../../../../components";

import styles from "./WithoutThought.module.css";

const WithoutThought = () => {
  return (
    <div className={styles.root}>
      <MainText title="Сутки без раздумий">
        С началом войны выпуск гражданской продукции на заводе ДРО остановился.
      </MainText>
      {/* <MainImage image={main}/> */}
      <CommonText>
        Завод перешел в ведение Наркомата танковой промышленности, и предприятие
        получило адрес «Почтовый ящик № 177». В связи с полным переходом завода
        на работу для нужд оборонной промышленности был введен непрерывный
        сменный график по 12 часов с перерывом на час, выходные отменили. Две
        смены менялись раз в месяц по приказу директора. Цехи перепланировали,
        чтобы наладить поточный выпуск военной техники. В механосборочном цехе
        № 1 установили 25 новых металлорежущих станков, из термического участка
        создали новый цех, площадь огнерезного участка увеличилась вдвое,
        выросли мощности кузнечно­прессового цеха.
      </CommonText>
      {/* <Gallery image={main}/> */}
    </div>
  );
};

export default WithoutThought;
