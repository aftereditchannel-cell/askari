<script>
  // اگر صفحه Splash باز شد
if (document.body.classList.contains('loader-container') || window.location.pathname.includes('Loader/index.html')) {
  setTimeout(() => {
    // مسیر صفحه بعدی رو اینجا بزار، فعلاً مثلا main.html
    window.location.href = '../main.html';
  }, 3000); // 3 ثانیه
}
  // بعد از 3 ثانیه به صفحه home.html برو
  setTimeout(() => {
    window.location.href = "home.html";
  }, 3000);
</script>
