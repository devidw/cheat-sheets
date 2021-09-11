/**
 * uncheck checkbox (css menu trigger) when a link in the toc is clicked to automaticly hide the menu
 */

let tocToogle = document.querySelector('#toggle-toc')
let tocLinks = document.querySelectorAll('#TableOfContents a')

tocLinks.forEach(item => {
  item.addEventListener('click', event => {
    tocToogle.checked = false
  })
})
