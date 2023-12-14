import react from "react"

const Pagination=({postperpage,totalposts,paginate})=>{
 let pageNumbers=[];
    for(let i=1; i< Math.ceil(totalposts/postperpage);i++){
        pageNumbers.push(i)
    }
    return(
        <>
        <ul className="pagination">
            {pageNumbers.map(number=>(
                <li key={number} className="page-item">
                    <a onClick={()=>paginate(number)} className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
        </>
        )
}
export default Pagination;