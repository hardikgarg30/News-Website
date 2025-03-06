let breakingImg=document.querySelector("#breakingImg");
let breakingNews=document.querySelector("#breakingNews .title a h3");
let breakingDescription=document.querySelector("#breakingNews .description");
let topNews=document.querySelector(".topNews");
let sportsNews=document.querySelector("#sportsNews .newsBox");
let businessNews=document.querySelector("#businessNews .newsBox");
let technologyNews=document.querySelector("#techNews .newsBox");

const apiKey="7a7a89227fec44b6a3177484b70a7658";
const fetchData=async(country,category,pageSize)=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
    const data=await fetch(url);
    const res=await data.json();
    console.log(res);
    return res.articles;
}

const add_breakingImg=(data)=>{
    breakingImg.innerHTML=`<img src=${data[0].urlToImage} alt="image">`;
    breakingNews.innerHTML=`<a href="${data[0].url}" target="_blank">${data[0].title}</a>`;
    breakingDescription.innerHTML=data[0].description;
}


fetchData("us","general",1).then(add_breakingImg);

const add_topNews=(data)=>{
    let html="";
    let title="";
    data.forEach((el) => {
        if(el.title.length<100){
            title=el.title;
        }
        else{
            title=el.title.slice(0,100)+"...";
        }

        html+= `<div class="news">
                    <div class="img">
                        <img src=${el.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${el.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    });
    topNews.innerHTML=html;
}

fetchData("us","general",20).then(add_topNews);

const add_sportsNews=(data)=>{
    let html="";
    let title="";
    data.forEach((el)=>{
        if(el.title.length<100){
            title=el.title;
        }
        else{
            title=el.title.slice(0,100)+"...";
        }

        html+=`<div class="newcards">
                    <div class="img">
                        <img src=${el.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${el.url}><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    })
    sportsNews.innerHTML=html;
}

fetchData("us","sports",5).then(add_sportsNews);

const add_businessNews=(data)=>{
    let html="";
    let title="";
    data.forEach((el)=>{
        if(el.title.length<100){
            title=el.title;
        }
        else{
            title=el.title.slice(0,100)+"...";
        }

        html+=`<div class="newcards">
                    <div class="img">
                        <img src=${el.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${el.url}><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    })
    businessNews.innerHTML=html;
}

fetchData("us","business",5).then(add_businessNews);

const add_technologyNews=(data)=>{
    let html="";
    let title="";
    data.forEach((el)=>{
        if(el.title.length<100){
            title=el.title;
        }
        else{
            title=el.title.slice(0,100)+"...";
        }

        html+=`<div class="newcards">
                    <div class="img">
                        <img src=${el.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${el.url}><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    })
    technologyNews.innerHTML=html;
}

fetchData("us","technology",5).then(add_technologyNews);