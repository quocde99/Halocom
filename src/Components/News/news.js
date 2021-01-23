import React, { useEffect,useState,useRef } from 'react'
import NewItems from './newItems'
import './new.css'
import Axios from 'axios'
import ReactPaginate from 'react-paginate';

export default function News() {
    const [newSpaper, setNewSpaper] = useState(null);
    const ref = useRef(newSpaper);
    //pagination
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0)
    const renderItems = ()=>{
        let newTemp = newSpaper.slice(offset, offset + perPage)
        return newTemp.map((item,key)=>{
           return <NewItems item={item} key={key} />
        })
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };
    useEffect(() => {
        if(newSpaper!==null){
            setPageCount(Math.ceil(newSpaper.length / perPage))
        }
      }, [offset])
    useEffect( async() => {
        let newinfo = await Axios({
            method:'Get',
            // url:'http://newsapi.org/v2/everything?q=apple&from=2021-01-20&to=2021-01-20&sortBy=popularity&apiKey=c9c69968793542589a8b5e240f96e449'  
            url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01'  
            })
            .then((res)=>{
                setNewSpaper(res.data)
                setPageCount(Math.ceil(res.data.length / perPage))
                console.log();
            }).catch((err)=>{
                console.log(err);
            })
    }, [])
    useEffect(() => {
        if(!ref.current){
            return true;
        }
    }, [newSpaper])
    if(newSpaper!==null){
        return (
            <div className='news'>
               {renderItems()}
               <ReactPaginate
                    previousLabel={"Lùi lại"}
                    nextLabel={"Tiếp theo"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        )
    }
    return <div class="loader"></div>
}
