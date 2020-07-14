import request from '../utils/http'

export function getpic(number) {
    const url=`/weChat/applet/course/banner/list?number=${number}`;
    return request.get(url).then(res=>{
        return{
            ...res,
            list:res
        }
    })
}

//课程
export function getcourse(type,pageNume,pageSize) {
    const url=`/weChat/applet/course/list/type?type=${type}&pageNum=${pageNume}&pageSize=${pageSize}`;
    return request.post(url).then(res=>{
        return{
            ...res,
            list:res
        }
    })
}

//底部
export function getfooter(dictType,pageNum,pageSize,orderByColumn,isAsc) {
    const url=`/system/dict/data/list/open?dictType=${dictType}&pageNum=${pageNum}&pageSize=${pageSize}&orderByColumn=${orderByColumn}&isAsc=${isAsc}`;
    return request.post(url).then(res=>{
        return{
            ...res,
            list:res
        }
    })
}

//直播
export function streaming() {
    const url=`/pc/liveCourseInfo/list`;
    return request.post(url).then(res=>{
        return{
            ...res,
            list:res
        }
    })
}



//今日头条
    export function headline(pageNum,pageSize) {
        return request.post(`weChat/applet/article/list?pageNum=${pageNum}&pageSize=${pageSize}`,{})
    }



    //详情页
    export function details(courseId) {
        return request.get(`/pc/course/detail/${courseId}`)
    }


//评论
export function comment(courseId) {
    return request.get(`/pc/comment/commentList/course/${courseId}`)
}

//账号密码登录
export function isLogin(userName,Password) {

    const formData=new FormData();
    formData.append('username',userName);
    formData.append('password',Password);
    formData.append('rememberMe',true)
    return request.post('/pcUser/login',formData)
}
// 退出登录
export function getuserInfor() {
return request.get('/pcUser/logout')
}

// 购物车
export function shopCar(courseId) {
return request.get(`/weChat/applet/shoppingCart/join/shoppingCart/${courseId}`)
}

//查看购物车
export function watchshopcar(courseId) {
    return request.get(`/weChat/applet/shoppingCart/my/list`)
}