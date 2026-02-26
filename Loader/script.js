// این فایل JS می‌تونه برای کل پروژه استفاده بشه

// مثال: تغییر تم
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark"));
}

// فعال‌سازی تم بر اساس localStorage
window.onload = () => {
  if (localStorage.getItem("theme") === "true") {
    document.body.classList.add("dark");
  }
};
