const select = document.querySelector('select');
select.addEventListener('change', (e) => {
  removePrevValues();
  changeValue(e.target.value);
});

function changeValue(value) {
  const isFull = value === 'full';
  const limit = isFull ? 5 : value;
  const container = document.querySelector('.container');
  for(let i = 0; i < limit; i += 1) {
    const isLast = i === (limit - 1);
    const pathData = [
      `M ${1330 * (i + 1)} 105.9`,
      'v-1900 h527.4 h527.4 V1900 h-1054.8',
    ].join(' ');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('class', 'point');

    if (isLast && !isFull) {
      const animate = buildAnimation();
      path.appendChild(animate);
    }
    container.appendChild(path);
  }
}

function removePrevValues() {
  const paths = document.querySelectorAll('.point');
  paths.forEach((path) => {
    path.style.opacity = 0;
  });
}

function buildAnimation() {
  const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
  animate.setAttribute('attributeType', 'XML');
  animate.setAttribute('attributeName', 'visibility');
  animate.setAttribute('values', 'hidden;visible');
  animate.setAttribute('dur', '1.2s');
  animate.setAttribute('repeatCount', 'indefinite');
  return animate;
}

changeValue(1);
