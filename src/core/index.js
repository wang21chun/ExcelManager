var XLSX = require('xlsx');
var workbook = XLSX.readFile('test.xlsx');
to_json(workbook);
function to_json(workbook) {
  var result = {};

  // 获取 Excel 中所有表名
  var sheetNames = workbook.SheetNames; // 返回 ['sheet1', 'sheet2']

  workbook.SheetNames.forEach(function(sheetName) {
    var worksheet = workbook.Sheets[sheetName];
    result[sheetName] = XLSX.utils.sheet_to_json(worksheet);
  }); 

  console.log("打印表信息",JSON.stringify(result, 0, 2));  //显示格式{"表1":[],"表2":[]}
  return result;
}