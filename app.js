console.log("Let's get this party started!");
// http://api.giphy.com/v1/gifs/search

const gifList = $('.gif-list')

function newGif(res) {
  let dataLength = res.length;
  if(dataLength) {
    let randomGif = Math.floor(Math.random() * dataLength);
    let newImage = $('<img>', {src: res[randomGif].images.original.url});
    gifList.append(newImage)
    console.log(newImage)
  }
}

$('form').on('submit', async function(event) {
  event.preventDefault();
  let giphyInputValue = $('.giphy-input').val();
  const giphyInput = $('.giphy-input')
  giphyInput.val('');
  const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: 'vKUM5tu5u4djqgAIhX0I1AHhi3B2mPlA',
      q: giphyInputValue
    }
  });
  newGif(response.data.data)
});

$('.remove-btn').on('click', function() {
  gifList.empty();
})

// const searchBtn = document.querySelector('.search-btn');
// searchBtn.addEventListener('submit', async function gif() {
//   let giphyInput = 'eating';$('.giphy-input').val()
//   const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
//     params: {
//       api_key: 'vKUM5tu5u4djqgAIhX0I1AHhi3B2mPlA',
//       q: giphyInput
//     }
//   });
//   newGif(response.data.data)
// })