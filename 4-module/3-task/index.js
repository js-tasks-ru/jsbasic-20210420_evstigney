function highlight(table) {
  const columnValues = {
    1: function age(elem) {

        if (elem.textContent < 18) {
          elem.closest('tr')
              .style.textDecoration = 'line-through';
        }
        
      },
    2: function sex(elem) {
        elem.closest('tr')
            .classList
            .add((elem.textContent === 'm') ? 'male' : 'female');
      },
    3: function status(elem) {
        let isAvailable = elem.dataset.available;

        if (isAvailable) {
          elem.closest('tr')
              .classList
              .add((isAvailable === 'true') ? 'available' : 'unavailable');
          return;
        }

        elem.closest('tr').hidden = true;
      },
  };

  [...table.tBodies[0].rows].map((row) => {

    for (let i = 1; i < row.cells.length; i++) {
      let cell = [...row.cells][i];
      columnValues[i](cell);
    }

  });

}
