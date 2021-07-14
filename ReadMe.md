<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/legioner9/GenerativusFucus/blob/master/LICENSE)
</div>

# GenerativusFucus по мотивам [Wrapper](https://github.com/HowProgrammingWorks/Wrapper)
Задача - создать максимально обобщенный врапер.Разобраться как работает замыкание и объектный контекст.
## [v.1](node_modules/v.1/index.js) и варианты использования в директории [test](node_modules/v.1/test)

- generativusFucus обертка
- fucus возвращаемый функциональный объект
- propObj опции обертки
  - closureForFn замыкание для fn
  - thisForFn объектный контекст для fn
  - preComutClosure и ... функции внутри обертки создающие архитектуру функции
### Особенности:
после вызова обернутая функция как функциональный объект имеет дополнительные методы (printFn()) и поля (args, closureForFn и ...) - ссылки на текущее состояние замыкания и контекста.
