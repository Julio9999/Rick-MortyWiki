export function getData(url){
    return(
        fetch(url)
        .then(res => res.ok ? {res:res.json(), status:res.status} : Promise.reject({status: res.status, statusText: res.statusText}))
        .catch(err => err)
    )
}