function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function saveData(name, email) {
  var sheetId = '1eXuMYYe6kpUESHzsSZKyJqvsTAEXwqgpksL7v1iAsK4'; // Thay thế YOUR_SHEET_ID bằng ID của Google Sheet
  var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  var timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
  sheet.appendRow([name, email, timestamp]);
}

function getData() {
  var sheetId = '1eXuMYYe6kpUESHzsSZKyJqvsTAEXwqgpksL7v1iAsK4'; // Thay thế YOUR_SHEET_ID bằng ID của Google Sheet
  var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  var data = sheet.getDataRange().getValues();
  return data;
}

function updateData(row, name, email) {
  var sheetId = '1eXuMYYe6kpUESHzsSZKyJqvsTAEXwqgpksL7v1iAsK4'; // Thay thế YOUR_SHEET_ID bằng ID của Google Sheet
  var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  var timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
  sheet.getRange(row + 1, 1, 1, 3).setValues([[name, email, timestamp]]);
}

function deleteData(row) {
  var sheetId = '1eXuMYYe6kpUESHzsSZKyJqvsTAEXwqgpksL7v1iAsK4'; // Thay thế YOUR_SHEET_ID bằng ID của Google Sheet
  var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  sheet.deleteRow(row + 1);
}



// https://docs.google.com/spreadsheets/d/1eXuMYYe6kpUESHzsSZKyJqvsTAEXwqgpksL7v1iAsK4/edit?gid=0#gid=0
// Lưu ở gmail nguyenminhhieuk3@gmail.com