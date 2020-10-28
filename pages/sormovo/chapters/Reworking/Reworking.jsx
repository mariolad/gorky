import React from "react";

import {
  MainImage,
  MainText,
  CommonText,
  Gallery,
  Speech,
} from "../../../../components";

import styles from "./Reworking.module.css";

const Reworking = () => {
  return (
    <div className={styles.root}>
      <MainText title="Легенду доработали">
        После Курской битвы в 1943 году стало ясно, что Т-34 необходимо
        доработать.
      </MainText>
      {/* <MainImage image={main}/> */}
      <div>
        <CommonText>
          Тяжелые танки «Тигр» и «Пантера», появившиеся у немцев, были мощнее, и
          оказалось, что Т-34 тяжело бороться с ними. Танку потребовалась более
          мощная пушка. Модернизацией по указу Государственного комитета обороны
          занялись конструкторы завода «Красное Сормово» совместно со
          специалистами завода № 183. <br /> Боевую машину оснастили 85-мм
          пуш­кой, новая модификация получила индекс Т-34-85. Благодаря новой
          башне увеличенного объема возросла бронезащита танка. При этом он
          почти не утратил своих преимуществ в поединках с «Тиграми и
          «Пантерами» — подвижности и маневренности. Позже Т-34-85 был при­знан
          лучшим танком того времени и стал одним из символов Второй мировой
          войны. Всего за годы войны «Красное Сормово» дало фронту более 12 тыс.
          танков. Еще около 2 тыс. боевых машин предприятие отремонтировало.
        </CommonText>
        <Speech
          title="«Образцовое выполнение задания»"
          author={{
            name:
              "Народный комиссар танковой промышленности в 1941–1942 гг. В. А. Малышев",
          }}
        >
          «Прошу передать мои горячие пожелания дальнейших успехов в работе
          группе конструкторов и другим работникам завода, награжденным
          правительством орденами и медалями за образцовое выполнение задания по
          усовершенствованию конструкции и улучшению боевых качеств танков
          Т-34».
        </Speech>
      </div>
      {/* <Gallery image={main}/> */}
    </div>
  );
};

export default Reworking;