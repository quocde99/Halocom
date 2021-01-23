import React, { useEffect,useState,useRef } from 'react'
import "./detail.css"
import Axios from 'axios'
import "../News/new.css"

export default function Details(props) {
    const [khoaHoc, setKhoaHoc] = useState(null);
    useEffect( async() => {
        let newinfo = await Axios({
            method:'Get',
            url:`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${props.match.params.newId}`
            })
            .then((res)=>{
                setKhoaHoc(res.data)
            }).catch((err)=>{
                console.log(err);
            })
    }, [])
    if(khoaHoc===null){
      return <div class="loader"></div>
    }
    return (
        <div id="container">	
  <div className="product-details">
    <h1>{khoaHoc.tenKhoaHoc}</h1>
    <span className="hint-star star">
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star-o" aria-hidden="true" />
    </span>
    <p className="information">" {khoaHoc.moTa}."</p>
  </div>
  <div className="product-image">
    <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt />
    <div className="info">
      <h2> Mô tả</h2>
      <ul>
        <li><strong>Tác giả : </strong>{khoaHoc.nguoiTao.hoTen} </li>
        <li><strong>Ngày tạo : </strong>{khoaHoc.ngayTao}</li>
      </ul>
    </div>
  </div>
</div>

    
    )
}
