function populateFields(idTable, idSelect1, idSelect2) {
  // Get the table and its header cells (th elements)
  let table = document.getElementById(idTable);
  let rowTh = table.rows[0].cells;

  // Get the two select elements
  let selectField1 = document.getElementById(idSelect1);
  let selectField2 = document.getElementById(idSelect2);

  // Clear the current options in both select elements
  selectField1.innerHTML = "";
  selectField2.innerHTML = "";

  // Iterate through all header cells (except the 0th index)
  for (let i = 1; i < rowTh.length; i++) {
    // Create an option element for each select field
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");

    option1.innerHTML = rowTh[i].innerHTML;
    option1.setAttribute("value", i);

    option2.innerHTML = rowTh[i].innerHTML;
    option2.setAttribute("value", i);

    // Append options to the select elements
    selectField1.appendChild(option1);
    selectField2.appendChild(option2);
  }

  // Attach event listeners to handle disabling the selected options
  selectField1.addEventListener("change", function () {
    disableSelectedOption(idSelect1, idSelect2);
  });

  selectField2.addEventListener("change", function () {
    disableSelectedOption(idSelect2, idSelect1);
  });
}

// Function to disable the selected option in the other select field
function disableSelectedOption(selectedId, otherId) {
  let selectedField = document.getElementById(selectedId);
  let otherField = document.getElementById(otherId);

  // Get the selected value from the current select field
  let selectedValue = selectedField.value;

  // First, enable all options in the other select field
  for (let option of otherField.options) {
    option.disabled = false;
  }

  // Now, disable the option in the other select field that matches the selected value
  for (let option of otherField.options) {
    if (option.value === selectedValue) {
      option.disabled = true;
    }
  }
}

function setSortTable(idTable, idSelect) {
  // Get the desired table
  let table = document.getElementById(idTable);

  // Loop through all rows of the table
  for (let i = 0; i < table.rows.length; i++) {
    // Create a new cell for the table row
    let cell = document.createElement("td");
    cell.innerHTML = i;

    // Insert it into the table before all other cells
    table.rows[i].insertBefore(
      cell,
      table.rows[i].firstElementChild
    ).hidden = true;
  }

  // Populate the select options from the table headers
  let selectField = document.getElementById(idSelect);
  let rowTh = table.rows[0].cells;

  // Clear existing options
  selectField.innerHTML = "";

  // Add options from the header cells (except the 0th index)
  for (let i = 1; i < rowTh.length; i++) {
    // Create an option element
    let item = document.createElement("option");
    item.innerHTML = rowTh[i].innerHTML;
    item.setAttribute("value", i);

    // Add the option to the select element
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
  // Get the table and its tbody section
  let table = document.getElementById(idTable).tBodies[0];

  // Get the collection of rows
  let rowData = Array.from(table.rows); // Convert to array to work with sorting

  // Sort the rows using bubble sort or another method
  for (let i = 0; i < rowData.length - 1; i++) {
    for (let j = 0; j < rowData.length - i - 1; j++) {
      // Get the cells from the column we are sorting by
      let cellA = rowData[j].cells[sortColumn].innerHTML;
      let cellB = rowData[j + 1].cells[sortColumn].innerHTML;

      // Check if the values are numeric, if so, convert to numbers
      if (!isNaN(cellA)) {
        cellA = Number(cellA);
        cellB = Number(cellB);
      }

      // Compare and swap rows based on ascending or descending order
      if ((desc && cellA < cellB) || (!desc && cellA > cellB)) {
        table.insertBefore(rowData[j + 1], rowData[j]);
      }
    }
  }
}

// function sortTable(idTable, sortColumn, desc) {
//   //находим нужную таблицу и ее раздел tbody
//   let table = document.getElementById(idTable).tBodies[0];

//   // получаем коллекцию строк
//   let rowData = table.rows;

//   // сортируем строки таблицы без заголовков методом "пузырька"
//   for (var i = 1; i < rowData.length - 1; i++) {
//     for (let j = 1; j < rowData.length - i; j++) {
//       // выделяем ячейки из столбца, по которому сортируем
//       let cellA = rowData[j].cells[sortColumn].innerHTML;
//       let cellB = rowData[j + 1].cells[sortColumn].innerHTML;

//       if (isNaN(rowData[j].cells[sortColumn].innerHTML) == false) {
//         cellA = Number(cellA);
//         cellB = Number(cellB);
//       }
//       // сравниваем ячейки соседних строк и меняем
//       // их местами при необходимости
//       if ((desc && cellA < cellB) || (!desc && cellA > cellB)) {
//         table.insertBefore(rowData[j + 1], rowData[j]);
//       }
//     }
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  // Populate fields for both select elements using the same table
  populateFields("list", "fields", "fields2");
});
