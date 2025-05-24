window.addEventListener('load', function() {
  const instagram = document.getElementById('instagram');
  const tiktok = document.getElementById('tiktok');

  instagram.addEventListener('click', function() {
    window.open('https://www.instagram.com/inkedbynubia', '_blank');
  });

  tiktok.addEventListener('click', function() {
    window.open('https://www.tiktok.com/@inkedbynubia', '_blank');
  });
})