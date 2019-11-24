import { ETicketsSortBy } from '../store/findTickets/types'

const findTickets = {
  tabs: {
    [ETicketsSortBy.price]: 'Самый дешевый',
    [ETicketsSortBy.duration]: 'Самый быстрый',
  },

  transfers: {
    title: 'Количество пересадок',
    all: 'Все',
    labelZero: 'Без пересадок',
    label_0: '{{count}} пересадка',
    label_1: '{{count}} пересадки',
    label_2: '{{count}} пересадок',
  },
}

const labels = {
  time: {
    daysShort: 'д',
    hoursShort: 'ч',
    minutesShort: 'м',
  },

  reload: 'перезагрузить',
}

const commonMessages = {
  error: 'Что то пошло не так',
}

const tickets = {
  duration: 'В пути',
  notFound: 'По выбранным критериям нет билетов, попробуйте изменить поиск ✈️',
}

export default {
  findTickets,
  tickets,
  labels,
  commonMessages,
}
