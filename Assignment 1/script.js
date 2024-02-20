function highlightNext(listId) {
  const wordList = document.getElementById(listId);
  const listItems = wordList.getElementsByTagName('li');
  const highlightedItem = wordList.querySelector('.highlighted');

  if (highlightedItem) {
    highlightedItem.classList.remove('highlighted');
    const nextIndex = (parseInt(highlightedItem.dataset.index) + 1) % listItems.length;
    listItems[nextIndex].classList.add('highlighted');
    updateOutput(listItems[nextIndex].textContent);
  } else {
    listItems[0].classList.add('highlighted');
    updateOutput(listItems[0].textContent);
  }
}

function showSentence() {
  const highlightedWords = document.querySelectorAll('.highlighted');
  const sentence = Array.from(highlightedWords).map(word => word.textContent).join(' ');
  updateOutput(`Formed Sentence: ${sentence}`);
}

function resetChoices() {
  const highlightedWords = document.querySelectorAll('.highlighted');
  highlightedWords.forEach(word => word.classList.remove('highlighted'));
  updateOutput('');
}

function surprise() {
  // Clear existing highlighted items
  resetChoices();

  const lists = ['nounList', 'verbList', 'adjList', 'thingList', 'placeList'];
  lists.forEach(listId => {
    const listItems = document.getElementById(listId).getElementsByTagName('li');
    const randomIndex = Math.floor(Math.random() * listItems.length);
    listItems[randomIndex].classList.add('highlighted');
  });

  showSentence();
}


function updateOutput(text) {
  document.getElementById('output').textContent = text;
}

// Initial highlight
highlightNext('nounList');
