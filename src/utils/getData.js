const API = "https://rickandmortyapi.com/api/character/?page=1&name=&status=&gender=&species="

export function getData(url){
    return(
        fetch(url)
        .then(res => res.ok ? res.json() : Promise.reject({status: res.status, statusText: res.statusText}))
        .catch(err => err)
    )
}