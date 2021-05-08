function makeDiagonalRed(table) {
  [...table.rows].forEach(({cells}, index) => {
    cells[index].style.backgroundColor = 'red';
  });
}
