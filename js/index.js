const topTextInput = document.getElementById('top-text');
const bottomTextInput = document.getElementById('bottom-text');
const topTextDiv = document.getElementById('top-text-div');
const bottomTextDiv = document.getElementById('bottom-text-div');
const video = document.getElementById('video');
const getEle = document.getElementById('rigth');
const storeContainer = document.getElementById('store-meme');

// const urls = [
//   'https://www.memegenerator.top/memes/Ancient-Aliens-Meme.jpg',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWY-KS-bhcoNA_4CwCOkI1rT6l29sg2t1VA&s',
//   'https://media.licdn.com/dms/image/C4E12AQHhH9lATsrxqQ/article-cover_image-shrink_600_2000/0/1520208276499?e=2147483647&v=beta&t=qeCU66ShF4XPjBP-VG4cZyrkpGac7h4rjhxwxO4AaSI',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUc2wurMdhxCCMhl9JepPy1f1BqG-tmIWI3w&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDhtEnnon1b_LMU-v2FhMyipTcWJ6_ttZMg&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWarwtAI8ZbzDp9_x7gWdLakd-b0DnzP9g4Q&s',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-VJ1o9CAzz9AHvnJ55zBtCpkQX0tK1x9rQ&s',
//   'https://i.vimeocdn.com/video/1298761285-cc8835ed8f3a5f5b8586611671cd54d7e84b49b92aadd2acb_750x421.875?q=60',
//   'https://lagcceng10120.commons.gc.cuny.edu/wp-content/blogs.dir/12979/files/2020/06/girl-mons-300x225.jpg',
//   'https://i.redd.it/hilarious-meme-pictures-without-words-or-minimal-words-for-v0-lk54hjciqtx91.jpg?width=245&format=pjpg&auto=webp&s=556783063090094c9f63777a6c418a3fef61799c',
//   'https://static1.s123-cdn-static-a.com/uploads/1918596/2000_5c67731f790e2.jpg',
//   'https://content.imageresizer.com/images/memes/no-anime-meme-1.jpg',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWo5jWa7qRDIdcd2jV5W27bCSij31_W1-IWg&s',
//   'https://i.pinimg.com/236x/94/f6/48/94f64803d4efd2ade1b4a689c79084b4.jpg',
//   'https://blog.media.io/images/images2022/funny-text-memes-9.jpg',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXdUCKRM9ePsnNGrM10RJ7S8MtnvUi9Hh7A&s',
//   'https://www.memegenerator.top/memes/But-Thats-None-Of-My-Business.jpg',
//   'https://media.licdn.com/dms/image/D4D22AQEeTXvBhCg7CQ/feedshare-shrink_800/0/1689834219792?e=2147483647&v=beta&t=y7llrK3eKjifAOvNz0rBv0njqRz24cYID5t_oJbCVFI',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthqiSSTyYjqPdeNsMzegfNmHprgBS8EPN-g&s',
//   'https://tiermaker.com/images/chart/chart/memes-without-text-238516/c5571393fda6067b912476bbfd3a7a43jpg.png',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTezXe7wlJUgigoWFqQ7pnGjqA1n5c9ir8w&s',
// ];

const setTextOnMeme = (event) => {
  if (
    topTextInput.value.trim().length === 0 ||
    bottomTextInput.value.trim().length === 0
  ) {
    alert('inputs must not empty');
    topTextInput.value = '';
    bottomTextInput.value = '';
  }

  const tagName =
    event.target.parentElement.parentElement.nextElementSibling
      .firstElementChild.tagName;

  if (tagName === 'VIDEO') {
    alert('first you take picture and then set text on picutre');
  } else {
    topTextDiv.textContent = topTextInput.value;
    bottomTextDiv.textContent = bottomTextInput.value;
  }

  getEle.insertAdjacentElement('afterbegin', topTextDiv);
  getEle.insertAdjacentElement('beforeend', bottomTextDiv);

  topTextInput.value = '';
  bottomTextInput.value = '';
};

const createMoreImages = (urls) => {
  urls.forEach((element) => {
    const img = document.createElement('img');
    img.src = element;
    img.id = 'img';
    img.classList.add('w-80', 'h-60', 'object-cover', 'object-center');
    imageContainer.lastElementChild.append(img);
  });
};

const openCamera = () => {
  video.id = 'video';
  video.controls = true;
  video.autoplay = true;
  video.classList.add('w-full', 'h-full');
  getEle.firstElementChild.replaceWith(video);

  if ('mediaDevices' in navigator) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("for some region it don't appear");
  }
};

openCamera();

const takePicture = (event) => {
  const video = document.getElementById('video');
  const canvas = document.createElement('canvas');
  const createImg = document.createElement('img');

  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  createImg.src = canvas.toDataURL('image/png');
  createImg.classList.add('w-full', 'h-full');

  return video.replaceWith(createImg);
};

const storeMemeInStoreContainer = () => {};

document.body.addEventListener('click', (event) => {
  event.preventDefault();
  const ids = event.target.id;

  switch (ids) {
    case 'create-meme':
      setTextOnMeme(event);
      break;
    case 'store-img':
      storeMemeInStoreContainer();
      break;
    case 'take-pic':
      takePicture(event);
      break;
  }
});
