import React from 'react'
import './new.css'
export default function Search() {
    return (
        <div className="newitems">
        <div className='newitems__title'> 
            <Link to={`detail/${item.maKhoaHoc}`}>{item.tenKhoaHoc}</Link>
        </div>
       <div className="newitems__info">
         <p>Tác giả : {item.nguoiTao.hoTen}</p>
        <span>|</span>
        <p>Ngày tạo : {item.ngayTao}</p>
       </div>
    </div>
    )
}
