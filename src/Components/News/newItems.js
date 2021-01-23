import React from 'react'
import {Link} from "react-router-dom"


export default function NewItems(props) {
    const {item} = props;
    return (
        <div className="newitems">
            <div className='newitems__title'> 
                {/* <img src={item.hinhAnh} alt="Lỗi !"></img> */}
                {/* <h4>{item.tenKhoaHoc}</h4> */}
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