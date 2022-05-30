# Руководство Google по стилю написания кода на языке TypeScript (перевод руководства "Google TypeScript Style Guide")

С переводом руководства вы можете ознакомиться в нескольких вариантах:
1. Markdown: [google-typescript-style-guide-ru.md](https://github.com/olegbarabanov/google-typescript-style-guide-ru/blob/main/src/google-typescript-style-guide-ru.md)
2. Веб-версия: [https://olegbarabanov.github.io/google-typescript-style-guide-ru/](https://olegbarabanov.github.io/google-typescript-style-guide-ru/)
   - Зеркало: [https://ts-guide.olegbarabanov.ru/google/](https://ts-guide.olegbarabanov.ru/google/)

С оригинальным руководством по стилю вы можете ознакомиться по ссылке: [https://google.github.io/styleguide/tsguide.html](https://google.github.io/styleguide/tsguide.html).

Если Вы нашли несоответствие, ошибку или неточность в переводе, вы можете оформить это в виде *[issue](https://github.com/olegbarabanov/google-typescript-style-guide-ru/issues)* или предложить собственное исправление в виде *[pull request](https://github.com/olegbarabanov/google-typescript-style-guide-ru/pulls)*, либо написать переводчику по адресу [mail@olegbarabanov.ru](mailto:mail@olegbarabanov.ru).

## Оформление перевода в формате Markdown

В исходном варианте перевод представлен в файле [google-typescript-style-guide-ru.md](/src/google-typescript-style-guide-ru.md) в формате Markdown и соответственно все изменения, касающиеся непосредственно перевода, а также различные примечания и дополнительные комментарии вносятся только в этот файл.

Оформление Markdown следует спецификации [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/) но при этом в оформлении документа для сохранения единообразия не допускается использовать HTML разметку.

## Конвертирование и сборка в адаптированную к просмотру в браузере веб-страницу (HTML/JS/CSS)

Веб-версия основана на фреймворке [Primer.css](https://primer.style/css/) и обладает следующими возможностями:
  - Адаптивность под различные устройства;
  - Поддержка темной темы при включенном "ночном режиме" в браузере;
  - Привычный многим стиль оформления (т.к. Primer.css был изначально разработан для нужд GitHub).

Для сборки веб-страницы, вам необходимо выполнить следующие команды:
1. Установить все зависимости командой `npm ci`;
2. Запустить сборку командой `npm run build`;

По завершению сборки, в директории `/dist` будут лежать готовые файлы веб-страницы документации.

## Лицензия

Текст текущего перевода использует лицензию **Creative Commons CC-By 3.0 License**, как и оригинальные материалы от Google. См. https://creativecommons.org/licenses/by/3.0/ для подробностей.

[![Creative Commons License](https://i.creativecommons.org/l/by/3.0/88x31.png)](https://creativecommons.org/licenses/by/3.0/)
