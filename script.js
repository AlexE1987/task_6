// 1st case
button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 1'));
  console.log('Listener 1');
});

button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 2'));
  console.log('Listener 2');
});

// Вывод:
// Listener 1
// Microtask 1
// Listener 2
// Microtask 2

// addEventListener можно установить сколько угодно раз на один элемент, вызываться будут обработчики по порядку сверху вниз.

// Event loop:

//  Promise -> micro task queue (then(() => console.log('Microtask 1')) ожидает перехода в call stack и выполнения);
//  console.log('Listener 1') -> call stack -> выполняется и покидает call stack;
//  Promise ->  (then(() => console.log('Microtask 1')) переходит в call stack -> выполняется и покидает call stack;

// Далее вызывается второй обработчик. Цикл повторяется для Listener 2, Microtask 2.

// 2nd case
button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 1'));
  console.log('Listener 1');
});

button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 2'));
  console.log('Listener 2');
});
button.click();

// Вывод:
// Listener 1
// Listener 2
// Microtask 1
// Microtask 2

// Метод click() имитирует работу клика мыши на заданном элементе выполняя все задачи, как буд-то вызвали один обработчик событий.

// Event loop:

//  Promise -> micro task queue (then(() => console.log('Microtask 1')) ожидает перехода в call stack и выполнения);
//  console.log('Listener 1') -> call stack -> выполняется и покидает call stack;

//  Promise -> micro task queue (then(() => console.log('Microtask 2')) ожидает перехода в call stack и выполнения);
//  console.log('Listener 2') -> call stack -> выполняется и покидает call stack;

//  Promise ->  (then(() => console.log('Microtask 1')) переходит в call stack -> выполняется и покидает call stack;
//  Promise ->  (then(() => console.log('Microtask 2')) переходит в call stack -> выполняется и покидает call stack;

// Далее вызывается второй обработчик. Цикл повторяется для Listener 2, Microtask 2.
