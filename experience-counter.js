(function () {
  var el = document.getElementById('experience-duration');
  if (!el) return;
  var start = new Date(2020, 11, 1); // Dec 2020 (0-indexed month)
  var now = new Date();
  var months = (now.getFullYear() - start.getFullYear()) * 12
             + (now.getMonth() - start.getMonth());
  if (months < 0) months = 0;
  var years = Math.floor(months / 12);
  var rem   = months % 12;
  var parts = [years + ' year' + (years === 1 ? '' : 's')];
  if (rem > 0) parts.push(rem + ' month' + (rem === 1 ? '' : 's'));
  el.textContent = parts.join(' and ');
})();
