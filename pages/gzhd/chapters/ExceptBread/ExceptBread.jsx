import React from "react";

import {
  MainImage,
  MainText,
  CommonText,
  Gallery,
  Speech,
} from "../../../../components";

import styles from "./ExceptBread.module.css";

const ExceptBread = () => {
  return (
    <div className={styles.root}>
      <MainText title="Кроме хлеба">
        Железнодорожники в тылу трудились и день, и ночь — без выходных, как и
        вся страна. Рабочий день длился в среднем 12 часов, но нередко
        приходилось трудиться и сутки напролет.
      </MainText>
      {/* <MainImage image={main}/> */}
      <div>
        <CommonText>
          Многим зарплаты хватало лишь на одну дефицитную буханку хлеба. В июне
          1943 года участились налеты немецких самолетов на управление
          Горьковской железной дороги. Во время бомбардировок железнодорожники
          проявляли небывалую стойкость: оставались до последнего на местах,
          делая свою работу.
        </CommonText>
        <Speech
          title="«Стоял запах крови и дыма»"
          author={{
            name:
              "Телеграфистка-бодистка 1-го разряда в годы войны Т. Канагина",
          }}
        >
          «Зарплата моя была 500 рублей: ее хватало на одну буханку хлеба на
          рынке из-под полы. Кроме хлеба почти ничего и не было. То, что
          получали по карточке из-за вредности работы на месяц, съедали за
          неделю. Как по расписанию в 23:00 появлялись осветительные ракеты и
          зловещий звук летящих бомбардировщиков. Кругом горели дома, стоял
          запах гари, крови и дыма. Мы не должны были ни при каких
          обстоятельствах покидать свои рабочие места. После смены получали
          приказ петь в госпитале, что расположился в здании Дворца культуры им.
          Ленина, для раненых. Мы и пели…».
        </Speech>
      </div>
      {/* <Gallery image={main}/> */}
    </div>
  );
};

export default ExceptBread;
