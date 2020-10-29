import React from "react";

import {
  MainImage,
  MainText,
  CommonText,
  Gallery,
  Speech,
  Legend,
} from "../../../../components";

import styles from "./Faster.module.css";

const Faster = () => {
  return (
    <div className={styles.root}>
      <MainText title="Еще быстрее">
        В начале войны появилась острая необходимость в сокращении длительности
        прохождения грузов в восточные и южные районы страны, переброске
        товарных составов с Горьковской железной дороги на Казанскую.
      </MainText>
      {/* <MainImage image={main}/> */}
      <div>
        <CommonText>
          В начале войны появилась острая необходимость в сокращении
          длительности прохождения грузов в восточные и южные районы страны,
          переброске товарных составов с Горьковской железной дороги на
          Казанскую. Железнодорожного моста через Оку тогда еще не было —
          Московский и Казанский вокзалы не были связаны между собой. Маршрут
          вагонов с боевой техникой надо было прокладывать либо через Ковров и
          Муром, и это требовало сложных маневров, либо через Москву, а толичный
          узел был перегружен.
        </CommonText>
        <CommonText>
          Инженер-путеец Н. В. Адрианов предложил смелое решение этой проблемы:
          в короткий срок подвести железнодорожные линии с двух сторон к
          обычному, тогда единственному, городскому мосту — Окскому (ныне
          Канавинский) и пустить поезда по трамвайным путям.
        </CommonText>
        <CommonText>
          В постановлении Горьковского комитета обороны от 28 октября 1941 года
          говорится, что проложить железнодорожные пути к мосту необходимо за
          десять дней: начать работы 29 октября и закончить к 7 ноября. Для
          этого, в частности, комитет предлагал привлечь к работам 400 учеников
          школ фабрично-заводского обучения. Линия сократила дальность пробега
          грузов на 300 км.
        </CommonText>
      </div>
      <Legend title="«Другим путем»">
        Инженер Николай Адрианов в считанные дни провел расчеты, подготовил
        проект подходов. Договорились с трамвайщиками — и все сделали. Работу
        государственного значения приехал принимать сам Ворошилов. Когда первый
        поезд из четырех вагонов двигался по пути, Николай Васильевич стоял под
        мостом. Он говорил потом: случись что — лучше уж было погибнуть под его
        конструкциями, чем оказаться в числе «врагов народа». Но расчет был
        точным. Маршал Ворошилов пожал ему руку и предложил «обращаться, если
        что». Через несколько месяцев Адрианов сумел найти Ворошилова во время
        приезда в Горький и напомнил эти слова. Просьба была простой: путейцу не
        позволяли уйти добровольцем на фронт, говорили, что люди его профессии
        нужны в тылу. «Ну, что ж, в порядке исключения за твои заслуги…» —
        сказал Ворошилов и подмахнул заявление.
      </Legend>
      {/* <Gallery image={main}/> */}
      <div>
        <CommonText>
          Для быстрейшего продвижения железнодорожники использовали
          разнообразные технические новшества и применяли передовые методы
          труда: скоростное формирование поездов, безотцепочный ремонт вагонов,
          отправление сдвоенных поездов. Чтобы повысить пропускную способность
          некоторых участков железных дорог, осенью 1941 года была введена
          «живая блокировка». Через каждые 800–900 м на перегонах стояли
          сигналисты, по сигналам которых шли поезда.
        </CommonText>
        <CommonText>
          Согласно постановлению ГКО от 3 января 1942 года, создавались
          специальные подразделения, которые обеспечивали маневренность
          локомотивного парка. Всего было организовано 106 колонн паровозов
          особого резерва Народного комиссариата путей сообщения, в том числе
          колонна № 62 на Горьковской железной дороге. Колонны, состоящие из
          15–20 паровозов, отправляли на участки, где скапливались
          неотправленные эшелоны с войсками, и в срочном порядке расшивали
          движение, сортировали и отправляли поезда. Разгрузив одно направление,
          они перебрасывались на новый участок.
        </CommonText>
        <CommonText>
          В 1943 году на Горьковской и Казанской железных дорогах были
          сформированы военно-эксплуатационные отделения № 39 и № 47. Они
          восстанавливали пострадавшую в результате военных действий
          инфраструктуру. Мобильные составы, несущие в себе мастерские,
          оборудование, ремонтные подразделения, были способны в кратчайший срок
          восстановить разрушенное полотно, провести минимально необходимую
          связь, наладить движение и управление им на занятых нашими войсками
          железнодорожных станциях.
        </CommonText>
      </div>
    </div>
  );
};

export default Faster;
