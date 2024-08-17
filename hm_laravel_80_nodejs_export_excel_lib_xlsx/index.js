const XLSX = require('xlsx');

// Tạo workbook mới
const workbook = XLSX.utils.book_new();

// Tạo dữ liệu cho các sheet
const sheet1Data = [
    ["Tên", "Chức Vụ", "Lương Cơ Bản", "Thưởng", "Tổng Lương"],
    ["Nguyễn Văn A", "Nhân viên", 5000000, 2000000, 7000000],
    ["Trần Thị B", "Quản lý", 10000000, 3000000, 13000000],
    ["Lê Văn C", "Giám đốc", 20000000, 5000000, 25000000],
];

const sheet2Data = [
    ["Tháng", "Tổng Lương"],
    ["1", 30000000],
    ["2", 31000000],
    ["3", 32000000],
    ["4", 33000000],
];

// Tạo các worksheet
const sheet1 = XLSX.utils.aoa_to_sheet(sheet1Data);
const sheet2 = XLSX.utils.aoa_to_sheet(sheet2Data);

// Thêm các worksheet vào workbook
XLSX.utils.book_append_sheet(workbook, sheet1, 'Lương Nhân Viên');
XLSX.utils.book_append_sheet(workbook, sheet2, 'Tổng Quan');

// Định dạng màu sắc và cố định cột cho sheet 1
sheet1['A1'].s = { fill: { fgColor: { rgb: "FFFF00" } }, font: { bold: true } };
sheet1['B1'].s = { fill: { fgColor: { rgb: "FFFF00" } }, font: { bold: true } };
sheet1['C1'].s = { fill: { fgColor: { rgb: "FFFF00" } }, font: { bold: true } };
sheet1['D1'].s = { fill: { fgColor: { rgb: "FFFF00" } }, font: { bold: true } };
sheet1['E1'].s = { fill: { fgColor: { rgb: "FFFF00" } }, font: { bold: true } };

// Merge các ô để tạo tiêu đề lớn
sheet1['!merges'] = [{ s: { c: 0, r: 0 }, e: { c: 4, r: 0 } }];

// Cố định cột A và hàng đầu tiên
sheet1['!freeze'] = { xSplit: 1, ySplit: 1 };

// Tạo biểu đồ (sử dụng sheet 2)
const sheet2Ref = 'A1:B5';  // Vùng dữ liệu của biểu đồ
sheet2['!ref'] = sheet2Ref;

// Tạo một biểu đồ cột (ở mức cơ bản vì xlsx không hỗ trợ biểu đồ trực tiếp)
const chartData = [
    ['Tháng', 'Tổng Lương'],
    [1, 30000000],
    [2, 31000000],
    [3, 32000000],
    [4, 33000000],
];

// Thêm biểu đồ vào workbook
const chartSheet = XLSX.utils.aoa_to_sheet(chartData);
XLSX.utils.book_append_sheet(workbook, chartSheet, 'Biểu đồ');

// Xuất file Excel
XLSX.writeFile(workbook, 'Salary_Report.xlsx');
