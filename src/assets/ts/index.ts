import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

/**
 * シンタックスハイライト
 */
Prism.highlightAll()

/**
 * Indexの自動生成
 */
const navList = document.querySelector('.l-nav__list')
const contents = document.querySelectorAll('.p-contents')

contents.forEach((content) => {
  const contentId = content.getAttribute('id')
  const contentTitle = content.querySelector('.p-contents__head').textContent
  navList.insertAdjacentHTML(
    'beforeend',
    `
      <li class="l-nav__item">
        <a href="#${contentId}" class="l-nav__item-link">${contentTitle}</a>
      </li>
    `
  )
})
