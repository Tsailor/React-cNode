import data from "../components/about/data";
const useAboutData = ()=>{
    return new Promise((resolve)=>{    // about的数据没有接口，模拟请求
        setTimeout(() => {
            resolve(data)
        }, 1000);
    })
}
export { useAboutData }