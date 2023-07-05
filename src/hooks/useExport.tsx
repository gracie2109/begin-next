import {useRef, useState} from "react"

const useExport = (dataSource: any, exportFileName: string) => {
    const [columns, setColumns] = useState([]);

    function getDiscountDescription(discount:any) {
        if (discount.type === 0) {
            return `Giảm trực tiếp ${discount.value} đơn vị`;
        } else if (discount.type === 1) {
            return `Giảm gián tiếp ${discount.value} đơn vị`;
        } else {
            return 'Không có giảm giá';
        }
    }

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(dataSource);
            const workbook = {Sheets: {data: worksheet}, SheetNames: ['data']};
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, exportFileName);
        });
    };


    const saveAsExcelFile = (buffer: any, fileName: any) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });
                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(async () => {

                //@ts-ignore
                const doc = new jsPDF.default('l', 'mm') as any;

                // Đặt font chữ mới
                doc.setFont('Arial');

                // Tạo rows cho bảng
                const rows = dataSource.map((item:any) => {
                    const discountDescription = getDiscountDescription(item.discount);
                    const { images, ...rowData } = item;
                    return Object.values({
                        ...rowData,
                        discount: discountDescription,
                    });
                });
                const headers = Object.keys(dataSource[0]);

                const pageWidth = doc.internal.pageSize.getWidth();
                const pageHeight = doc.internal.pageSize.getHeight();

                let startY = 10;
                let tableHeight = doc.autoTable.previous.finalY + 10;
                let currentY = startY + tableHeight;

                // Kiểm tra nếu nội dung vượt quá kích thước trang
                if (currentY > pageHeight) {
                    doc.addPage();
                    currentY = startY;
                }

                // Xuất bảng sử dụng jsPDF-AutoTable
                doc.autoTable(headers, rows);

                doc.save(`${exportFileName}.pdf`);
            });
        });
    };
    return {
        exportPdf,
        exportExcel
    }
}

export {useExport}