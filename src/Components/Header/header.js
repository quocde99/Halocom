import React,{useState} from 'react'
import '../Header/style.css'
import {Link} from "react-router-dom"
export default function Header() {
  const [search, setSearch] = useState(' ')
  const handleChange = (event)=>{
    setSearch(event.target.value)
  }
  const mySubmitHandler = (event)=>{
    event.preventDefault();
    alert("You are submitting " + search);
  }
  console.log(search);
    return (
     <div>
  <header className='header'   id="header">
    <div className="header__logo">
      <Link to="/">
        <h4>News</h4>
      </Link>
    </div>
      
  <div className="wrap header__menu">
    <form className='search' onSubmit={mySubmitHandler}>
      <input type="text"  onChange={handleChange} className="searchTerm" placeholder="Bạn đang tìm kiếm điều gì ?" />
      <button type="submit" className="searchButton">
      <i className="fa fa-search" /></button>
    </form>

</div>



    <div className="header__dangky">
      <ul>
        <li><a href>Đăng nhập</a>
        </li>
        <span>|</span>
        <li>
          <a href>Đăng ký</a>
        </li>
      </ul>
    </div>
    <div className="burge" id="burge">
      <div className="line1" />
      <div className="line2" />
      <div className="line3" />
    </div>
  </header>
  <section className="header__responvie" id="responsive">
    <div className="logo">
      <a href>
        <h4 className="resposive__title">QuDezMovie</h4>
      </a>
      <a href className="back">
        <i className="fa fa-times" />
      </a>
    </div>
    <ul>
      <li><a href>
          <i className="fa fa-home" aria-hidden="true" /> 
          Trang chủ</a></li>
      <li><a href>
          <i className="fa fa-newspaper-o" aria-hidden="true" /> 
          Tin tức</a></li>
      <li><a href>
          <i className="fa fa-calendar-check-o" aria-hidden="true" /> 
          Lịch chiếu</a></li>
      <li><a href>
          <i className="fa fa-search" aria-hidden="true" /> 
          Tìm kiếm phim</a></li>
      <li><a href>
          <i className="fa fa-sign-in" aria-hidden="true" />
          Đăng ký</a></li>
      <li><a href>
          <i className="fa fa-user-plus" aria-hidden="true" />
          Đăng nhập</a></li>
    </ul>
  </section>
</div>


    )
}
