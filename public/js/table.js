function setSortTable(idTable, idSelect) {
  // находим нужную таблицу
  let table = document.getElementById(idTable);

  //перебираем все строки таблицы
  for (let i = 0; i < table.rows.length; i++) {
    // создаем новую ячейку таблицы
    let cell = document.createElement("td");
    cell.innerHTML = i;

    // вставляем ее в таблицу перед всеми остальными ячейками
    table.rows[i].insertBefore(
      cell,
      table.rows[i].firstElementChild
    ).hidden = true;
  }
  // находим поле со списком
  let selectField = document.getElementById(idSelect);

  // выделяем заголовочные ячейки таблицы
  let rowTh = table.rows[0].cells;

  // перебираем все ячейки таблицы, кроме 0
  for (let i = 1; i < rowTh.length; i++) {
    // создаем элемент списка
    let item = document.createElement("option");
    item.innerHTML = rowTh[i].innerHTML;
    item.setAttribute("value", i);
    // добавляем очередной элемент к списку
    selectField.appendChild(item);
  }
}

function filterTable(idTable, data) {
  // находим нужную таблицу
  let table = document.getElementById(idTable);

  // текст фильтра из поля Название
  let name = data.name.value.toLowerCase();

  let drivetrain = data.drivetrain.value.toLowerCase();

  let avgPaid = data.avgPaid.value.toLowerCase();

  let transmission = data.transmission.value.toLowerCase();

  let msrpFrom = data.msrpFrom.value;

  let ratingFrom = data.ratingFrom.value;

  if (ratingFrom === "") {
    ratingFrom = -Infinity;
  }

  let ratingTo = data.ratingTo.value;

  if (ratingTo === "") {
    ratingTo = Infinity;
  }

  if (msrpFrom === "") {
    msrpFrom = -Infinity;
  }

  let msrpTo = data.msrpTo.value;

  if (msrpTo === "") {
    msrpTo = Infinity;
  }

  //перебираем все строки таблицы без заголовка
  for (let i = 1; i < table.rows.length; i++) {
    // скрываем все строки таблицы
    table.rows[i].hidden = true;
    // выбираем значение из очередной строки столбца Название
    let cellName = table.rows[i].cells[1].innerHTML.toLowerCase();

    let cellDrivetrain = table.rows[i].cells[5].innerHTML.toLowerCase();

    let cellAvgPaid = table.rows[i].cells[3].innerHTML.toLowerCase();

    let cellTransmission = table.rows[i].cells[4].innerHTML.toLowerCase();

    let cellMsrp = Number(table.rows[i].cells[2].innerHTML);

    let cellRating = Number(table.rows[i].cells[6].innerHTML);

    // если значение из поля встречается в ячейке -
    // делаем строку видимой
    if (
      cellName.indexOf(name) !== -1 &&
      cellDrivetrain.indexOf(drivetrain) !== -1 &&
      cellAvgPaid.indexOf(avgPaid) !== -1 &&
      cellTransmission.indexOf(transmission) !== -1 &&
      cellMsrp >= msrpFrom &&
      cellMsrp <= msrpTo &&
      cellRating >= ratingFrom &&
      cellRating <= ratingTo
    ) {
      table.rows[i].hidden = false;
    }
  }
}

function clearFilter() {
  // document.querySelector("form").reset();
  var inputs = document.querySelectorAll("input[type='text']");
  var numbers = document.querySelectorAll("input[type='numbers']");
  var rows = document.querySelectorAll("tr");
  inputs.forEach((input) => {
    input.value = "";
  });
  numbers.forEach((input) => {
    input.value = "";
  });
  rows.forEach((tr) => {
    tr.hidden = false;
  });
}

function sortTable(idTable, sortColumn, desc) {
  //находим нужную таблицу и ее раздел tbody
  let table = document.getElementById(idTable).tBodies[0];

  // получаем коллекцию строк
  let rowData = table.rows;

  // сортируем строки таблицы без заголовков методом "пузырька"
  for (var i = 1; i < rowData.length - 1; i++) {
    for (let j = 1; j < rowData.length - i; j++) {
      // выделяем ячейки из столбца, по которому сортируем
      let cellA = rowData[j].cells[sortColumn].innerHTML;
      let cellB = rowData[j + 1].cells[sortColumn].innerHTML;

      if (isNaN(rowData[j].cells[sortColumn].innerHTML) == false) {
        cellA = Number(cellA);
        cellB = Number(cellB);
      }
      // сравниваем ячейки соседних строк и меняем
      // их местами при необходимости
      if ((desc && cellA < cellB) || (!desc && cellA > cellB)) {
        table.insertBefore(rowData[j + 1], rowData[j]);
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setSortTable("list", "fields");
});
