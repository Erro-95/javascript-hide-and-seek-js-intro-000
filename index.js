
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
    listItems[i].innerHTML = `${parseString + n}`
  }
}

function deepestChild(){
  let current = document.querySelector('div#grand-node')
  let next;

  while (current){

    if (current.querySelector('div') != undefined){
      next = current
      current = next.querySelector('div')
    }
    else {
      return current
    }
  }
}
