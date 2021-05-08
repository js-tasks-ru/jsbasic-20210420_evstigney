function highlight(table) {
  const AGE_COLUMN = 1;
  const GENDER_COLUMN = 2;
  const STATUS_COLUMN = 3;

  const getRowStyles = (elem, index) => {
    const tr = elem.closest('tr');

    const rowStyles = {
      [AGE_COLUMN]: function() {
        if (elem.textContent < 18) {
          tr.style.textDecoration = 'line-through';
        }
      },
      [GENDER_COLUMN]: function() {
        tr.classList
          .add((elem.textContent === 'm') ? 'male' : 'female');
      },
      [STATUS_COLUMN]: function() {
        let isAvailable = elem.dataset.available;
  
        if (isAvailable) {
          tr.classList
            .add((isAvailable === 'true') ? 'available' : 'unavailable');
          return;
        }
  
        tr.hidden = true;
      },
    };

    return rowStyles[index]();
  };
    
  [...table.tBodies[0].rows].map((row) => {

    for (let columnIndex = 1; columnIndex < row.cells.length; columnIndex++) {
      let cell = [...row.cells][columnIndex];
      getRowStyles(cell, columnIndex);
    }

  });
}