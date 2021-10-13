let articlesHeight = [];
let article0 = articlesHeight.push(document.querySelectorAll(".tour-schedule__dates-for-month__available-dates__item")[0].clientHeight);
let article1 = articlesHeight.push(document.querySelectorAll(".tour-schedule__dates-for-month__available-dates__item")[1].clientHeight);
let article2 = articlesHeight.push(document.querySelectorAll(".tour-schedule__dates-for-month__available-dates__item")[2].clientHeight);
let article3 = articlesHeight.push(document.querySelectorAll(".tour-schedule__dates-for-month__available-dates__item")[3].clientHeight);
let article4 = articlesHeight.push(document.querySelectorAll(".tour-schedule__dates-for-month__available-dates__item")[4].clientHeight);
console.log(articlesHeight)



let line0 = document.querySelector(".tour-schedule__dates-for-month__progress-bar-container__progress-bar__line");
let line1 = document.querySelectorAll(".tour-schedule__dates-for-month__progress-bar-container__progress-bar__line")[1];
let line2 = document.querySelectorAll(".tour-schedule__dates-for-month__progress-bar-container__progress-bar__line")[2];
let line3 = document.querySelectorAll(".tour-schedule__dates-for-month__progress-bar-container__progress-bar__line")[3];

let tourScheduleArticleWithMargin = document.querySelector(".tour-schedule__dates-for-month__available-dates__item + .tour-schedule__dates-for-month__available-dates__item");
let compStyles = window.getComputedStyle(tourScheduleArticleWithMargin);
let mgtop = parseInt(compStyles.getPropertyValue('margin-top'))
let date = document.querySelector(".tour-schedule__dates-for-month__available-dates__item__date");
let compStyles2 = window.getComputedStyle(date);
let dateHeight = parseInt(compStyles2.getPropertyValue('height'))
let marginHeading = document.querySelector(".tour-schedule__dates-for-month__available-dates__item__heading");
let compStyles3 = window.getComputedStyle(marginHeading);
let marginBottomHeading = parseInt(compStyles2.getPropertyValue('margin-bottom'))
let heading = document.querySelectorAll(".tour-schedule__dates-for-month__available-dates__item__heading")[0];
let compStyles4 = window.getComputedStyle(heading);
let headingFontSize = parseInt(compStyles4.getPropertyValue('font-size'))



//reset
// line0.style.height = "10px"
// line1.style.height = "20px"
// line2.style.height = "30px"
// line3.style.height = "10px"
// line3.style.height = `${mgtop}`
//////////////////
// console.log(fontSize)
console.log(marginBottomHeading)

console.log(articlesHeight[0])
line0.style.height = articlesHeight[0] + mgtop  - dateHeight - marginBottomHeading - (0.75 * headingFontSize) + "px"
line1.style.height = articlesHeight[1] + mgtop - dateHeight - marginBottomHeading - (0.75 * headingFontSize) + "px" //`redefine heading height`
line2.style.height = articlesHeight[2] + mgtop - marginBottomHeading - (0.75 * headingFontSize) + "px"
line3.style.height = articlesHeight[3] + mgtop - dateHeight - marginBottomHeading - (0.75 * headingFontSize) + "px"
// let linesHeight = [line0.clientHeight, line1.clientHeight, line2.clientHeight, line3.clientHeight]
console.log(line0.clientHeight)
// console.log(articlesHeight[0] + mgtop - fontSize)
console.log(typeof fontSize)
console.log(typeof marginBottomHeading)
console.log(typeof mgtop)
console.log(typeof articlesHeight)
console.log(typeof heading1)




























// console.log(document.querySelectorAll("article"))
// for(element of document.querySelectorAll("article")){
//   if (element.classList.contains("tour-schedule__dates-for-month__available-dates__item")){
//     L.style.height = `${article0}px`;



    // element.style.width = "200px";
    // element.style.height = "200px";
    // element.style.backgroundColor = "red";
//   }
// }




//articles;
// let firstArticle = element.classList.contains(".tour-schedule__dates-for-month__available-dates__item")[0].clientHeight;
// let firstArticle = document.classList.contains(".tour-schedule__dates-for-month__available-dates__item")[0].clientHeight;
// for(element of document.querySelector(".tour-schedule__dates-for-month__available-dates__container")){
//   element.classList.contains(".tour-schedule__dates-for-month__available-dates__item")[0].clientHeight;
// }

//
