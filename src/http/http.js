import aboutData from "../components/about/data";
import bookData from "../components/book/data";
import axios from 'axios';
const useAboutData = ()=>{
    return new Promise((resolve)=>{    // about的数据没有接口，模拟请求
        setTimeout(() => {
            resolve(aboutData)
        }, 1000);
    })
}
const useBookData = ()=>{
    return new Promise((resolve)=>{    // book的数据没有接口，模拟请求
        setTimeout(() => {
            resolve(bookData)
        }, 1000);
    })
}

const useIndexData = (options)=>{   //  `/topics?limit=20&page=1&tab=${tab}`
    return axios.get("https://cnodejs.org/api/v1/topics", {
              params: { 
              limit: options.limit,
              page:options.page,
              tab:options.tab
           }
      })
}
const useDetailData =(id)=>{  // detail接口
    return axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
}
export { useAboutData, useBookData ,useIndexData, useDetailData}