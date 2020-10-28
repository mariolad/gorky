import React from "react";

import {
  MainImage,
  MainText,
  CommonText,
  Gallery,
  Speech,
} from "../../../../components";

import styles from "./ForYourself.module.css";

const ForYourself = () => {
  return (
    <div className={styles.root}>
      <MainText title="«За себя и за того парня»">
        Постановлением СНК СССР от 11 сентября 1941 года Кулебакский
        металлургический завод им. Кирова, до этого времени относившийся к
        Наркомату судостроения и изготавливавший сталь для судов, был передан в
        Народный комиссариат танковой промышленности и получил № 178.
      </MainText>
      {/* <MainImage image={main}/> */}
      <div>
        <CommonText>
          Пока в первые месяцы войны эвакуировались заводы из западных регионов
          СССР, Кулебакскому металлургическому пришлось в рекордные сроки
          осваивать производство новых видов продукции, необходимых для обороны
          страны. КМЗ стал выпускать быстрорежущую и инструментальную сталь,
          легированную сталь, прокатывал броневой лист, в том числе для
          выксунского завода дробильно-размольного оборудования на самолеты
          Ил-2, освоил прокат легированного профиля балки носа для Т-34 (носовая
          часть корпуса, состоящая из передней балки, трех броневых листов,
          крышки люка водителя и броневого колпака пулемета), изготавливал
          погоны под танковые башни (место крепления башни к корпусу) и защитные
          спинки сидений для летчиков. Конструкцию балки Т-34, повысившую
          прочность лобовой части корпуса, предложили усовершенствовать именно
          конструкторы КМЗ.
        </CommonText>
        <CommonText>
          По данным Горьковского комитета обороны, трудоемкость производственных
          процессов на КМЗ по сравнению с 1940 годом выросла на 68,5%.
          Предприятию было необходимо модернизировать оборудование и менять
          технологию производства. Директор завода Иван Федорович Скиба ввел
          особый режим работы и организовал специальный технический отдел — СТО.
          Этот отдел проработал всего шесть месяцев — за короткий срок его
          сотрудники разработали новые технологические процессы производства,
          определились с их технической оснасткой и организовали выпуск новой
          продукции для фронта. После того, как все разработки были внедрены в
          производство, сотрудники вернулись к исполнению своих обязанностей в
          цехах.
        </CommonText>
      </div>
      {/* <Gallery image={main}/> */}
    </div>
  );
};

export default ForYourself;
