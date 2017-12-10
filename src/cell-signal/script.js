const select = document.querySelector('select');
select.addEventListener('change', (e) => {
  removePrevValues();
  changeValue(e.target.value);
});

function changeValue(value) {
  const isFull = value === 'full';
  const limit = isFull ? 4 : value;
  const container = document.querySelector('.container');
  for(let i = 0; i < limit; i += 1) {
    const isLast = i === (limit - 1);
    const pathData =
      'm-582.86 3.7908 a465.71 465.71 0 1 1 -931.44 0 465.71 465.71 0 1 1 931.44 0z';

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const base = 3 - i;
    const transform = `matrix(
      ${5 - (base * 1.3785)} 0 0
      ${5 - (base * 1.3785)}
      ${5250.2 - (base * 1449.5)}
      ${180.86 + (base * 9.22)}
    )`;

    path.setAttribute('d', pathData);
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('transform', transform);
    path.setAttribute('stroke', '#000');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-width', '80');
    path.setAttribute('fill', '#fff');
    path.setAttribute('class', 'point');

    if (isLast && !isFull) {
      const animate = buildAnimation();
      path.appendChild(animate);
    }
    container.prepend(path);
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
