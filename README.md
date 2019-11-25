### demo here - **https://vitaliy-petrenko.github.io/aviasales-frontend-task/#/find-tickets**

`yarn install && yarn run start`
or
`npm install && npm run start`


# Тестовое задание Aviasales ([frontend](https://aviasales.recruitee.com/o/frontend-developer-js-coffeescript-react%C2%A0redux--aviasalesru))

Основной frontend проект нашей команды — это страница выдачи билетов со множеством фильтров, настроек и, собственно, билетов.
Проект написан на React, поэтому тестовое задание приближено к ежедневным задачам.

Перед тобой упрощенный макет нашего проекта — список билетов, фильтры и сортировка. Также у нас есть небольшой сервер для тестового задания, который работает схоже с нашим основным backend движком и реализует технику long polling для передачи пачек билетов. Тебе необходимо реализовать клиент, который будет получать случайно сгенерированные билеты от сервера и отрисует интерфейс согласно макету в Figma. Достаточно будет отрендерить 5 первых билетов соотвествующих выбранным фильрам и сортировки.

## Условия

- Используй React
- Используй TS или JS
- Работоспособность в актуальной версии Google Chrome
- Остальное на твоё усмотрение

## Документация по работе с сервером: [Здесь](https://github.com/KosyanMedia/test-tasks/blob/master/aviasales_frontend/server.md)

## Макет

https://www.figma.com/file/4fQe1lEbo4DARjvNtaU0uJ/Aviasales-test-task

Залогинься, чтобы видеть CSS-свойства элементов

![](search_preview.png?raw=true)

Удачи! Если будут какие-то вопросы, пиши – добавим уточнения в репу.

P.S.: Картинки авиакомпаний можешь брать с нашего CDN: `//pics.avs.io/99/36/{IATA_CODE_HERE}.png`
