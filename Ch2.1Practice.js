// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const blogChange = document.querySelector(".article_header")
blogChange.textContent = `Welcome to the Ben Parker Blog`

// Use JavaScript to obtain a reference to all article__header elements 
// and change their classList property value to article__header important.
const elChange = document.querySelectorAll(".article_header")
elChange[0].classList.add("Important")
elChange[1].classList.add("Important")

// Obtain a reference the element with a class of dashed and remove it.
const dashedChange = document.querySelector(".dashed")
dashedChange.classList.remove("Dashed")
// Obtain a reference the element with a class of article_footer 
// and add the class of goldenrod it.
const footerChange = document.querySelector(".article_footer")
footerChange.classList.add("goldenrod")