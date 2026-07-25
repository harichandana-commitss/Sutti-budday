const button = document.querySelector('#wishButton');
const flame = document.querySelector('#flame');
const message = document.querySelector('#wishMessage');
const yearButtons = document.querySelectorAll('.year-button');
const yearPanels = document.querySelectorAll('.year-panel');

const yearTwoGallery = document.querySelector('#year-2 .year-two-photos');
yearTwoGallery.insertAdjacentHTML(
  'beforeend',
  '<figure><div class="gallery-photo photo-filled"><img src="assets/photos/year-02-photo-16.jpeg" alt="Feet picture together" /></div><figcaption>FEET PICSS</figcaption></figure>'
);

const yearThreeCaptions = [
  'terrace dance 2.0',
  'skincareeeee',
  'anni in bggg',
  'rakshabandhan alasataa',
  'honorary maddirala',
  'obv had to take a lockscreen pic',
  'sistiesss 2.0',
  'first meetup after manipal separated us',
  'caption akkharleee',
  'holiii readyyy 2.0',
  'Naanna shirt dongaaa',
  'I love youu&lt;3',
  'pls what was this',
];
const yearThreePhotos = yearThreeCaptions.map((caption, index) => {
  const number = String(index + 1).padStart(2, '0');
  return `<figure><div class="gallery-photo photo-filled"><img src="assets/photos/year-03-photo-${number}.jpeg" alt="Year three memory ${number}" /></div><figcaption>${caption}</figcaption></figure>`;
});
document.querySelector('#year-3 .year-photos').innerHTML = yearThreePhotos.join('');

const yearFourCaptions = [
  'forever dance partner',
  'pls what is this',
  'us only',
  'our fav hobby will always remain trying chapri glasses',
  'odiyamma only',
];
const yearFourPhotos = yearFourCaptions.slice(0, 4).map((caption, index) => {
  const number = String(index + 1).padStart(2, '0');
  return `<figure><div class="gallery-photo photo-filled"><img src="assets/photos/year-04-photo-${number}.jpeg" alt="Year four memory ${number}" /></div><figcaption>${caption}</figcaption></figure>`;
});
yearFourPhotos.push(`<figure><video class="gallery-video" controls preload="metadata"><source src="assets/photos/year-04-video-01.mp4" type="video/mp4" />Your browser does not support this video.</video><figcaption>${yearFourCaptions[4]}</figcaption></figure>`);
document.querySelector('#year-4 .year-photos').innerHTML = yearFourPhotos.join('');

const yearFiveCaptions = [
  'pooja fit readyy untaam',
  'reunionnnn',
  'bye bye day to manipall',
  'kaavalane lohith boy ni teesesa',
  'can stare at you anydayy',
  'lohith friend kukka elsaa and youuu',
  'Abhi budday blue and whitess',
  'cupcake paglus',
  'burger king paglus',
  'Goated nighty aunty group',
  'aa roju ninnu scooty ninchi padeyle',
  'last option nuvve ika',
  'last day bglr:(',
  'bangalore dayss',
  'tindi ante maaku praanam',
];
const yearFiveMedia = yearFiveCaptions.map((caption, index) => {
  const number = String(index + 1).padStart(2, '0');
  return `<figure><div class="gallery-photo photo-filled"><img src="assets/photos/year-05-photo-${number}.jpeg" alt="Year five memory ${number}" /></div><figcaption>${caption}</figcaption></figure>`;
});
const yearFiveVideos = {
  '01': 'Kalyani vacchaaa',
  '03': 'phool wali ladkiii',
  '04': 'varshammmm',
  '05': 'nighty auntiessss',
};
yearFiveMedia.push(...Object.entries(yearFiveVideos).map(([number, caption]) =>
  `<figure><video class="gallery-video" controls preload="metadata"><source src="assets/photos/year-05-video-${number}.mp4" type="video/mp4" />Your browser does not support this video.</video><figcaption>${caption}</figcaption></figure>`
));
document.querySelector('#year-5 .year-photos').innerHTML = yearFiveMedia.join('');

const yearSixCaptions = [
  'aira paapa cutiee',
  'bglr fit checkk',
  'you can see our state',
  'fit checkkk',
  'og Anil mama car',
  'kalyanamm',
  'Dr Jeevana',
  'mem iskcon bhaktulam',
  'molestationnn',
  'Vaniii',
  'second piercing dayy',
  'Karunyaa timeee',
  'uk our fav hobby',
  'Anni budday treatt',
  'Zudio dayy',
  'honorary Maddirala pt 2',
  'a day after a very beautiful dayyy',
  'I wanna pet you',
  'loyal to our bk',
  'Siri budday',
  'pillalu oddu anta akkaki',
  'sisties pt 3',
];
const yearSixMedia = Array.from({ length: 22 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  const caption = yearSixCaptions[index] || `year six memory ${number}`;
  return `<figure><div class="gallery-photo photo-filled"><img src="assets/photos/year-06-photo-${number}.jpeg" alt="Year six memory ${number}" /></div><figcaption>${caption}</figcaption></figure>`;
});
const yearSixVideoCaptions = [
  'second piercings againn',
  'badal barsaaa',
  'huggie teesss',
  'flop vidd',
];
yearSixMedia.push(...yearSixVideoCaptions.map((caption, index) => {
  const number = String(index + 1).padStart(2, '0');
  return `<figure><video class="gallery-video" controls preload="metadata"><source src="assets/photos/year-06-video-${number}.mp4" type="video/mp4" />Your browser does not support this video.</video><figcaption>${caption}</figcaption></figure>`;
}));
document.querySelector('#year-6 .year-photos').innerHTML = yearSixMedia.join('');

const chatArchive = document.createElement('section');
chatArchive.className = 'chat-archive section';
chatArchive.setAttribute('aria-labelledby', 'chat-archive-title');
chatArchive.innerHTML = `
  <div class="chat-archive-intro">
    <div class="section-number">04 / little things I saved</div>
    <h2 id="chat-archive-title">The chats I collected<br /><em>long agoo.</em></h2>
    <p>The kind of messages that were too good to leave buried in the scroll.</p>
  </div>
  <div class="chat-grid">
    ${Array.from({ length: 6 }, (_, index) => `<article class="chat-card"><span>chat ${String(index + 1).padStart(2, '0')}</span><p>add a chat screenshot</p></article>`).join('')}
  </div>
`;
document.querySelector('.wish').before(chatArchive);

const chatGrid = chatArchive.querySelector('.chat-grid');
chatGrid.classList.add('has-screenshots');
chatGrid.innerHTML = Array.from({ length: 27 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return `<figure class="chat-screenshot"><img src="assets/photos/chat-${number}.jpeg" alt="Saved chat screenshot ${number}" /></figure>`;
}).join('');

const chatLightbox = document.createElement('dialog');
chatLightbox.className = 'chat-lightbox';
chatLightbox.innerHTML = '<button class="chat-lightbox-close" type="button" aria-label="Close enlarged chat">×</button><img alt="" />';
document.body.append(chatLightbox);
const chatLightboxImage = chatLightbox.querySelector('img');
chatGrid.addEventListener('click', (event) => {
  const image = event.target.closest('.chat-screenshot img');
  if (!image) return;
  chatLightboxImage.src = image.src;
  chatLightboxImage.alt = image.alt;
  chatLightbox.showModal();
});
chatLightbox.querySelector('.chat-lightbox-close').addEventListener('click', () => chatLightbox.close());
chatLightbox.addEventListener('click', (event) => {
  if (event.target === chatLightbox) chatLightbox.close();
});

button.addEventListener('click', () => {
  flame.classList.add('out');
  button.textContent = 'wish officially sent ✦';
  button.disabled = true;
  message.textContent = 'May this year be one of the bestest where you get all you want (including your boots) and all opportunities on earth so that you earn well and provide me with money. Since now you have set your teeth SMILE MORE bitch. Will see you super soon. Love ya<3';
});

yearButtons.forEach((button) => {
  button.addEventListener('click', () => {
    yearButtons.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    yearPanels.forEach((panel) => panel.classList.remove('active'));
    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');
    document.querySelector(`#${button.dataset.year}`).classList.add('active');
  });
});
