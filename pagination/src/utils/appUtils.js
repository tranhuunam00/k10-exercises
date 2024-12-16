
import _ from 'lodash';
export const returnPaginationRange = (totalPage, page, limit, siblings) => {
    let totalPageNoInArray = 7 + siblings; 
    //để lưu tổng số trang hiển thị trên thanh điều hướng. 
    if (totalPage <= totalPageNoInArray) { 
        //Nếu tổng số trang nhỏ hơn hoặc bằng tổng số trang hiển thị trên thanh điều hướng, thì trả về một mảng chứa các số từ 1 đến tổng số trang.
        return _.range(1, totalPage + 1)
    }
    let leftSiblingsIndex = Math.max(page - siblings, 1);
     //Tính chỉ số của trang đầu tiên trong số trang lân cận bên trái của trang hiện tại.
    let showLeftDots = leftSiblingsIndex > 2;
    //Kiểm tra xem có cần hiển thị dấu ba chấm (...) bên trái hay không. Nếu chỉ số trang đầu tiên lớn hơn 2, tức là có ít nhất 2 trang lân cận bên trái, thì cần hiển thị dấu ba chấm.

    let rightSiblingsIndex = Math.min(page + siblings, totalPage);
    //Tính chỉ số của trang cuối cùng trong số trang lân cận bên phải của trang hiện tại. 
    let showRightDots = rightSiblingsIndex < (totalPage - 2);
    //Kiểm tra xem có cần hiển thị dấu ba chấm (...) bên phải hay không. Nếu chỉ số trang cuối cùng nhỏ hơn tổng số trang trừ 2, tức là có ít nhất 2 trang lân cận bên phải, thì cần hiển thị dấu ba chấm.

    if (!showLeftDots && showRightDots) {
        // Nếu không cần hiển thị dấu ba chấm bên trái và cần hiển thị dấu ba chấm bên phải.
        let leftItemsCount = 3 + 2 * siblings;
        //Tính số lượng mục cần hiển thị bên trái của dấu ba chấm bên phải. Số lượng này bằng 3 (1, 2, 3) cộng với 2 lần số lượng trang lân cận.
        let leftRange = _.range(1, leftItemsCount + 1);
        //Tạo một mảng chứa các số từ 1 đến số lượng mục bên trái.
        return [...leftRange, '...', totalPage];
        //Trả về một mảng gồm các số từ mảng leftRange, dấu ba chấm và số trang cuối cùng.
    }else if( showLeftDots && !showRightDots)
    //Nếu cần hiển thị dấu ba chấm bên trái và không cần hiển thị dấu ba chấm bên phải.
    {
        let rightItemsCount = 3 + 2 * siblings;
        //Tính số lượng mục cần hiển thị bên phải của dấu ba chấm bên trái. Số lượng này bằng 3 (3, 2, 1) cộng với 2 lần số lượng trang lân cận.
        let rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
        //Tạo một mảng chứa các số từ số trang trừ số lượng mục bên phải plus 1 đến số trang cuối cùng
        return [1, ...rightRange];
        //Trả về một mảng gồm số trang đầu tiên và các số từ mảng rightRange.
    }else {
        let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);//Tạo một mảng chứa các số từ chỉ số trang đầu tiên trong số trang lân cận bên trái đến chỉ số trang cuối cùng trong số trang lân cận bên phải.
        return [1, "...", ...middleRange, "...", totalPage];
        //Trả về một mảng gồm số trang đầu tiên, dấu ba chấm, các số từ mảng middleRange, dấu ba chấm và số trang cuối cùng.
    }
    
}