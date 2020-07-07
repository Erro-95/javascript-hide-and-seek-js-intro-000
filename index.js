
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const listItems = document.querySelectorAll('.ranked-list li')

  for (let i in listItems){
    const parseString = parseInt(listItems[i].innerHTML)
    return listItems[i].innerHTML = `${parseString + n}`
  }
}
