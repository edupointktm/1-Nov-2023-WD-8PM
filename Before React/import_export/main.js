import names from './data.js'
import Header from './Header.js'

document.querySelector('#root').innerHTML = `<h1>${Header()}</h1>  <p> ${names}</p>`