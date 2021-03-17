function onEdit(e) {
  
  var range = e.range;
  var column = range.getColumn();
  var row = range.getRow();
  var inputValue = e.value;
  

  if (inputValue.match(/Video/) || inputValue.match(/video/)) {
    if (column === 1 && !SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ONEDIT').getRange(row, column+5).getValue()) {  //вместо 'ONEDIT' написать в  кавычках название листа
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ONEDIT').getRange(row, column+5).setValue('Yana Rashchynskaya');   // здесь тоже
    }
  }
}
