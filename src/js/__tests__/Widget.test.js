import Widget from '../Widget.js';

/* const widgetAll = new Widget(); */

test('Валидно с пробелом', () => {
  const received = widget.checkValidity('51.50851, -0.1257');
  expect(received).toEqual('51.50851, -0.1257');
});

test('Валидно без пробела', () => {
  const received = widget.checkValidity('51.50851,-0.1257');
  expect(received).toEqual('51.50851,0.1257');
});

test('Неправильный формат', () => {
  const received = widget.checkValidity('51.50851, -0.1257');
  expect(received).toEqual(['51.50851, 0.1257']);
});