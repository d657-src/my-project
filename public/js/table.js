function setSortTable(idTable, idSelect) {
  let table = document.getElementById(idTable);

  for (let i = 0; i < table.rows.length; i++) {
    let cell = document.createElement("td");
    cell.innerHTML = i;

    table.rows[i].insertBefore(
      cell,
      table.rows[i].firstElementChild
    ).hidden = true;
  }
  let selectField = document.getElementById(idSelect);

  let rowTh = table.rows[0].cells;

  for (let i = 1; i < rowTh.length; i++) {
    let item = document.createElement("option");
    item.innerHTML = rowTh[i].innerHTML;
    item.setAttribute("value", i);
    selectField.appendChild(item);
  }
}

function filterTable(idTable, data) {
  let table = document.getElementById(idTable);

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

  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].hidden = true;
    let cellName = table.rows[i].cells[1].innerHTML.toLowerCase();

    let cellDrivetrain = table.rows[i].cells[5].innerHTML.toLowerCase();

    let cellAvgPaid = table.rows[i].cells[3].innerHTML.toLowerCase();

    let cellTransmission = table.rows[i].cells[4].innerHTML.toLowerCase();

    let cellMsrp = Number(table.rows[i].cells[2].innerHTML);

    let cellRating = Number(table.rows[i].cells[6].innerHTML);

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
  var inputs = document.querySelectorAll("input[type='text']");
  var numbers = document.querySelectorAll("input[type='number']");
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
  let table = document.getElementById(idTable).tBodies[0];

  let rowData = table.rows;

  for (var i = 1; i < rowData.length - 1; i++) {
    for (let j = 1; j < rowData.length - i; j++) {
      let cellA = rowData[j].cells[sortColumn].innerHTML;
      let cellB = rowData[j + 1].cells[sortColumn].innerHTML;

      if (isNaN(rowData[j].cells[sortColumn].innerHTML) == false) {
        cellA = Number(cellA);
        cellB = Number(cellB);
      }
      if ((desc && cellA < cellB) || (!desc && cellA > cellB)) {
        table.insertBefore(rowData[j + 1], rowData[j]);
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setSortTable("list", "fields");
});
