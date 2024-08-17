const ExcelJS = require('exceljs');

// Tạo workbook và các sheet
const workbook = new ExcelJS.Workbook();
const sheet1 = workbook.addWorksheet('Lương Nhân Viên');
const sheet2 = workbook.addWorksheet('Tổng Quan');

// Định dạng tiêu đề
sheet1.columns = [
    {
        header: 'Tên',
        key: 'name',
        width: 30,
        style: {
            font: {bold: true, color: {argb: 'FFFFFFFF'}},
            fill: {type: 'pattern', pattern: 'solid', fgColor: {argb: 'FF4CAF50'}}
        }
    },
    {
        header: 'Chức Vụ',
        key: 'position',
        width: 20,
        style: {
            font: {bold: true, color: {argb: 'FFFFFFFF'}},
            fill: {type: 'pattern', pattern: 'solid', fgColor: {argb: 'FF4CAF50'}}
        }
    },
    {
        header: 'Lương Cơ Bản',
        key: 'basic_salary',
        width: 15,
        style: {
            font: {bold: true, color: {argb: 'FFFFFFFF'}},
            fill: {type: 'pattern', pattern: 'solid', fgColor: {argb: 'FF4CAF50'}}
        }
    },
    {
        header: 'Thưởng',
        key: 'bonus',
        width: 15,
        style: {
            font: {bold: true, color: {argb: 'FFFFFFFF'}},
            fill: {type: 'pattern', pattern: 'solid', fgColor: {argb: 'FF4CAF50'}}
        }
    },
    {
        header: 'Tổng Lương',
        key: 'total_salary',
        width: 15,
        style: {
            font: {bold: true, color: {argb: 'FFFFFFFF'}},
            fill: {type: 'pattern', pattern: 'solid', fgColor: {argb: 'FF4CAF50'}}
        }
    }
];

// Dữ liệu mẫu
const data = [
    {name: 'Nguyễn Văn A', position: 'Nhân viên', basic_salary: 5000000, bonus: 2000000, total_salary: 7000000},
    {name: 'Trần Thị B', position: 'Quản lý', basic_salary: 10000000, bonus: 3000000, total_salary: 13000000},
    {name: 'Lê Văn C', position: 'Giám đốc', basic_salary: 20000000, bonus: 5000000, total_salary: 25000000}
];

// Thêm dữ liệu vào sheet
data.forEach((row, index) => {
    sheet1.addRow(row);

    // Định dạng cho từng dòng dữ liệu
    const rowData = sheet1.getRow(index + 2);
    rowData.eachCell((cell) => {
        cell.border = {
            top: {style: 'thin'},
            left: {style: 'thin'},
            bottom: {style: 'thin'},
            right: {style: 'thin'}
        };
    });
});

// Merge ô để tạo tiêu đề lớn
sheet1.mergeCells('A1:E1');
sheet1.getCell('A1').value = 'Báo Cáo Lương Nhân Viên';
sheet1.getCell('A1').font = {size: 16, bold: true};
sheet1.getCell('A1').alignment = {vertical: 'middle', horizontal: 'center'};

// Cố định hàng đầu tiên
sheet1.views = [
    {state: 'frozen', ySplit: 1}
];

// Thêm dữ liệu và định dạng cho sheet Tổng Quan
sheet2.columns = [
    {
        header: 'Tháng',
        key: 'month',
        width: 10,
        style: {
            font: {bold: true, color: {argb: 'FFFFFFFF'}},
            fill: {type: 'pattern', pattern: 'solid', fgColor: {argb: 'FF1976D2'}}
        }
    },
    {
        header: 'Tổng Lương',
        key: 'total_salary',
        width: 20,
        style: {
            font: {bold: true, color: {argb: 'FFFFFFFF'}},
            fill: {type: 'pattern', pattern: 'solid', fgColor: {argb: 'FF1976D2'}}
        }
    }
];

const summaryData = [
    {month: 1, total_salary: 30000000},
    {month: 2, total_salary: 31000000},
    {month: 3, total_salary: 32000000},
    {month: 4, total_salary: 33000000}
];

summaryData.forEach((row) => {
    sheet2.addRow(row);
});

// Tạo biểu đồ
const chartData = [
    ['Tháng', 'Tổng Lương'],
    [1, 30000000],
    [2, 31000000],
    [3, 32000000],
    [4, 33000000],
];

// Thêm biểu đồ (dùng các công cụ khác hoặc tích hợp với Excel để xử lý biểu đồ phức tạp)
// Hiện tại ExcelJS chưa hỗ trợ biểu đồ trực tiếp, nhưng bạn có thể xuất biểu đồ từ dữ liệu

// Xuất file Excel
workbook.xlsx.writeFile('Salary_Report_Advanced.xlsx')
    .then(() => {
        console.log('Báo cáo lương đã được tạo thành công!');
    });
