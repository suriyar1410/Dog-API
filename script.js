let searchBtn = document.getElementById("searchBtn");
let dog = async ()=>{
   
    try {
        let dogdata = await fetch("https://dogapi.dog/api/v2/facts").then((res)=>res.json());
        ans.innerHTML=`DOG FACTS : ${dogdata.data[0].attributes.body}`
    MessageEvent(p.innerHTML="click me more");
    } catch (error) {
        p.innerHTML="click more for many Facts";
    }
}
searchBtn.addEventListener("click",dog);
