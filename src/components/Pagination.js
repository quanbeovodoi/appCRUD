const filterData = (data,quantityPerPage,currentPage)=>{
    const pageCount = quantityPerPage
    const prdPageStart = currentPage * pageCount;
    const prdPageEnd = prdPageStart + pageCount;
    const newData = [];
    
    for(let i = prdPageStart ;i < prdPageEnd;i++){
        if(data[i])
        newData.push(data[i]);
    }
    return newData;
};
let currPage = 0;
let pageFil = 0;
let n = 4;
let firstRun = true;
const Pagination = {
    render: async (Data) => {
        const renderPageNumber = ()=>{
            let limited= Data.content.length;
            if(Data.content.length > 10)
            limited = 10
            let renderArr = [];
            for(let i = 0; i< limited;i++){
                renderArr.push(`<option value="${i+1}">${i+1}</option>`);
            }
            // console.log(currPage + n,currPage,n);
            return `<select name="" id="pagination_filter">${renderArr.join('')}</select>`;
        }
        return `
            <div class="pagination">
                <div class="pagination_wrapper">
                    <p>Số bản ghi</p>
                    <div class="filter">
                        ${renderPageNumber()}
                    </div>
                    <p class="infoPageCurrent">
                        ${(currPage*n +1)<=Data.content.length?(currPage*n+1):Data.content.length}-${(currPage*n + n)<=Data.content.length?(currPage*n + n):Data.content.length} of ${Data.content.length}
                    </p>
                    <div class="nav_page">
                        <button class="prev" id="prevPage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
                        </button>
                        <button class="next" id="nextPage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        `
    },after_render: (Data,reRenderData)=>{
        const DataOrigin = Data.content;
        document.getElementById('pagination_filter').value = n;
        Data.content = filterData(DataOrigin,n,0)
        if(firstRun === true){
            if(reRenderData)reRenderData();
            firstRun = false
        }
        document.getElementById('prevPage').addEventListener('click',()=>{
            if(currPage*n>0){
                currPage = currPage - 1
                Data.content = filterData(DataOrigin,n,currPage);
                if(reRenderData)reRenderData();
            }
        })
        document.getElementById('nextPage').addEventListener('click',()=>{
            if(currPage*n<DataOrigin.length - n){
                currPage = currPage + 1
                Data.content = filterData(DataOrigin,n,currPage);
                if(reRenderData)reRenderData();
            }
        })
        const onClickChangeData = (value) => {
            n = Number(value);
            currPage = 0;
            // console.log(Data)
            // console.log(filterData(Data,2,Number(value)))
            Data.content = filterData(DataOrigin,Number(value),currPage);
            if(reRenderData)reRenderData();
        };
        const pageFilter = document.getElementById('pagination_filter');
        pageFilter.onchange = (event)=>onClickChangeData(event.target.value);
    },reset:()=>{
        currPage = 0;
        n = 4;
        firstRun = true;
    }
}
export default Pagination;