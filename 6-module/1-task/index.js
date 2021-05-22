/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
 export default class UserTable {

  constructor (rows) {
    this._rows = rows.slice();
    this._Headers = {
      name: 'Имя',
      age: 'Возраст',
      salary: 'Зарплата',
      city: 'Город',
    };
  }

  _createRow (cells, tag) {
    let markup = ``;
    let deleteButtonTemplate = (tag === 'th') ? '' : `<button>X</button>`;

    for (let value in cells) {
      markup += `<${tag}>${cells[value]}</${tag}>`;
    }

    markup += `<${tag}>${deleteButtonTemplate}</${tag}>`;

    return `<tr>${markup}</tr>`;
  }

  get elem () {
    let table = document.createElement('table');
    const theadMarkup = this._createRow(this._Headers, 'th');
    const tbodyMarkup = this._rows.map((row) => this._createRow(row, 'td')).join('');

    table.insertAdjacentHTML('afterbegin',
                             `<thead>${theadMarkup}</thead><tbody>${tbodyMarkup}</tbody`);

    const removeRow = (evt) => {
      if (!evt.target.closest('button')) return;

      let tr = evt.target.closest('tr');
      this._rows.splice([tr.sectionRowIndex], 1);
      tr.remove();

      if (!this._rows.length) table.removeEventListener('click', removeRow);

      return this._rows;
    };

    table.addEventListener('click', removeRow);

    return table;
  } 
}
