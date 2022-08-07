// Տնային 2․1
// Ստեղծել html document և ավելացնել 6 հատ հղում a tag-ի միջոցով։
// js-ում ստանալ հղումները և ամեն երկրորդի գույնը դարձել կարմիր։
// հղումներից ստանալ href-ները և լցնել մասիվի մեջ։  (մասիվը տպել):
// հղումներին ավելացնել ոչ ստանդարտ attribute։ Օրինակ test attribute, ինչ-որ value-ով։
// հղումներին ավելացնել ստանդարտ target attribute _blank value-ով։
// ջնջել href attribute-ը ամեն երկրորդ հղումից։


let colors = document.getElementsByClassName("blok");
console.log(colors);
let changeColor1 = (c) => {
  for (let i = 0; i < c.length; i++) {
    if (i % 2) {
      c[i].style.color = "red";
    }
    console.log(c[i].getAttribute("href"));
  }
};
changeColor1(colors);
