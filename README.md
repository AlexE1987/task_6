# task_6

1st case<br>

Вывод:<br>
Listener 1 <br>
Microtask 1 <br>
Listener 2 <br>
Microtask 2 <br>

addEventListener можно установить сколько угодно раз на один элемент, вызываться будут обработчики по порядку сверху вниз. <br>

Event loop:<br>

Promise -> micro task queue (then(() => console.log('Microtask 1')) ожидает перехода в call stack и выполнения);<br>
console.log('Listener 1') -> call stack -> выполняется и покидает call stack;<br>
Promise ->  (then(() => console.log('Microtask 1')) переходит в call stack -> выполняется и покидает call stack;<br>

Далее вызывается второй обработчик. Цикл повторяется для Listener 2, Microtask 2<br>

2nd case<br>

Вывод:<br>
Listener 1<br>
Listener 2<br>
Microtask 1<br>
Microtask 2<br>

Метод click() имитирует работу клика мыши на заданном элементе выполняя все задачи, как буд-то вызвали один обработчик событий.<br>

Event loop:<br>

Promise -> micro task queue (then(() => console.log('Microtask 1')) ожидает перехода в call stack и выполнения);<br>
console.log('Listener 1') -> call stack -> выполняется и покидает call stack;<br>

Promise -> micro task queue (then(() => console.log('Microtask 2')) ожидает перехода в call stack и выполнения);<br>
console.log('Listener 2') -> call stack -> выполняется и покидает call stack;<br>

Promise ->  (then(() => console.log('Microtask 1')) переходит в call stack -> выполняется и покидает call stack;<br>
Promise ->  (then(() => console.log('Microtask 2')) переходит в call stack -> выполняется и покидает call stack;<br>

Далее вызывается второй обработчик. Цикл повторяется для Listener 2, Microtask 2.<br>
