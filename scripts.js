function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  const letter = document.getElementById('letter');
  const text = document.querySelector('.envelope-text');

  envelope.classList.add('open');

  setTimeout(() => {
    envelope.style.opacity = 0;
    text.style.opacity = 0;
  }, 50);

  setTimeout(() => {
    letter.style.opacity = 1;
    letter.style.pointerEvents = 'auto';
  }, 400);
}

document.body.addEventListener('click', (event) => {
  const envelope = document.querySelector('.envelope');
  const letter = document.getElementById('letter');
  const letterBack = document.getElementById('letter-back');
  const text = document.querySelector('.envelope-text');

  if (!envelope.classList.contains('open')) {
    envelope.classList.add('open');
    setTimeout(() => {
      envelope.style.opacity = 0;
      text.style.opacity = 0;
    }, 50);
    setTimeout(() => {
      letter.style.opacity = 1;
      letter.style.pointerEvents = 'auto';
    }, 400);
  } else if (letter.style.opacity == 1) {
    letter.style.opacity = 0;
    letter.style.pointerEvents = 'none';
    letterBack.style.opacity = 1;
    letterBack.style.pointerEvents = 'auto';
  }
});
