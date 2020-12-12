import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'

import useStore from '../../stores/useStore'

import s from './Nav.module.css'

const Nav = observer(() => {
  const appStore = useStore()

  return (
    <nav className={classNames(s.root, { [s.active]: appStore.nav })}>
      <div>
        <div className={s.section}>
          Боевые машины
        </div>

        <ul className={s.factories}>
          <li>
            <Link href="/gaz">
              <a>Горьковский автомобильный завод</a>
            </Link>
          </li>

          <li>
            <Link href="/sormovo">
              <a>Завод «Красное Сормово»</a>
            </Link>
          </li>

          <li>
            <Link href="/etna">
              <a>Завод «Красная Этна»</a>
            </Link>
          </li>

          <li>
            <Link href="/drobmash">
              <a>«Дробмаш», Завод корпусов</a>
            </Link>
          </li>

          <li>
            <Link href="/ruspolimet">
              <a>«Русполимет»</a>
            </Link>
          </li>

          <li>
            <Link href="/vmz">
              <a>Выксунский металлургический завод</a>
            </Link>
          </li>

          <li>
            <Link href="/gzhd">
              <a>Горьковская железная дорога</a>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div className={s.section}>
          Авиастроение
        </div>

        <ul className={s.factories}>
          <li>
            <Link href="/sokol">
              <a>
                Нижегородский авиастроительный завод «Сокол»
              </a>
            </Link>
          </li>

          <li>
            <Link href="/gidromash">
              <a>
              «Гидромаш»
              </a>
            </Link>
          </li>

          <li>
            <Link href="/teploobmennik">
              <a>
              «Теплообменник»
              </a>
            </Link>
          </li>

          <li>
            <Link href="/gidroagregat">
              <a>
              «Гидроагрегат»
              </a>
            </Link>
          </li>

          <li>
            <Link href="/adcbsz">
              <a>
              Борский стекольный завод
              </a>
            </Link>
          </li>

          <li>
            <Link href="/dzorg">
              <a>
              Дзержинское оргстекло
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div className={s.section}>
          Артиллерия
        </div>

        <ul className={s.factories}>
          <li>
            <Link href="#">
              <a>
              Нижегородский машиностроительный завод
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              РУМО
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              Павловский автобусный завод
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              Завод фрезерных станков
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div className={s.section}>
        Боеприпасы
        </div>

        <ul className={s.factories}>
          <li>
            <Link href="#">
              <a>
              Завод имени Я. М. Свердлова
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              «Корунд»
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              Завод «Красный якорь»
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              НМЖК
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              «Капролактам»
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div className={s.section}>
        Судостроение
        </div>

        <ul className={s.factories}>
          <li>
            <Link href="#">
              <a>
              Завод «Красное Сормово»
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              Городецкий судоремонтный завод
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              Судоремонтно-судостроительная корпорация
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              Завод «Память Парижской Коммуны»
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              Концерн «Термаль»
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              Окская судоверфь
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div className={s.section}>
        Приборостроение
        </div>

        <ul className={s.factories}>
          <li>
            <Link href="#">
              <a>
              Нижегородский телевизионный завод имени В. И. Ленина
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              Нижегородское научно-производственное объединение имени М. В. Фрунзе
              </a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a>
              Завод имени Г. И. Петровского
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
})

export default Nav