const tab = [
    {
        imgSrc: "img/dorsz.jpg",
        linkHref: "fishes/dorsz.html",
        description: "Poznaj: dorsza"
    },
    {
        imgSrc: "img/karas-main.jpg",
        linkHref: "fishes/karas.html",
        description: "Poznaj: karasia"
    },
    {
        imgSrc: "img/karp-main.jpg",
        linkHref: "fishes/karp.html",
        description: "Poznaj: karpia"
    },
    {
        imgSrc: "img/leszcz-main.jpg",
        linkHref: "fishes/leszcz.html",
        description: "Poznaj: leszcza"
    },
    {
        imgSrc: "img/łosoś.jpg",
        linkHref: "fishes/łosoś.html",
        description: "Poznaj: łososia"
    },
    {
        imgSrc: "img/makrela-main.jpg",
        linkHref: "fishes/makrela.html",
        description: "Poznaj: makrelę"
    },
    {
        imgSrc: "img/okon-main.jpg",
        linkHref: "fishes/okon.html",
        description: "Poznaj: okonia"
    },
    {
        imgSrc: "img/płoć-main.jpg",
        linkHref: "fishes/ploc.html",
        description: "Poznaj: płoć"
    },
    {
        imgSrc: "img/pstrag-main.jpeg",
        linkHref: "fishes/pstrag.html",
        description: "Poznaj: pstrąga"
    },
    {
        imgSrc: "img/sum-main.jpg",
        linkHref: "fishes/sum.html",
        description: "Poznaj: suma"
    },
    {
        imgSrc: "img/szczupak-main.jpg",
        linkHref: "fishes/szczupak.html",
        description: "Poznaj: szczupaka"
    },
    {
        imgSrc: "img/wegorz-main.jpg",
        linkHref: "fishes/wegorz.html",
        description: "Poznaj: węgorza"
    }
];

const randomIndex = Math.floor(Math.random() * tab.length);
const selectedArticle = tab[randomIndex];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dynamic-img").src = selectedArticle.imgSrc;
    document.getElementById("dynamic-link").href = selectedArticle.linkHref;
    document.getElementById("dynamic-description").innerText = selectedArticle.description;
});
