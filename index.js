
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
    if (current.innerHTML){
      return current
    }

    else {
      next = current
      current = next.querySelector('div')
    }
  }
}


Define a function deepestChild() that pulls out the most deeply nested child element from div#grand-node.
(Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging
to implement correctly, but not beyond your ability!)
