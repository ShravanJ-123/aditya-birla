document.addEventListener("DOMContentLoaded", (function () { const t = document.querySelector(".slide-submit button"); let e = !1, n = 0, s = 0; t.addEventListener("mousedown", (s => { e = !0, n = s.clientX, t.style.transition = "none" })), document.addEventListener("mousemove", (r => { if (!e) return; const o = t.parentElement.offsetWidth; s = r.clientX - n, s < 0 && (s = 0), s > o - t.offsetWidth && (s = o - t.offsetWidth), t.style.transform = `translateX(${s}px)` })), document.addEventListener("mouseup", (() => { if (!e) return; e = !1; const n = t.parentElement.offsetWidth; s > n / 2 ? (window.location.href = "https://wa.me/+918459396466?text=I’m+interested+in+Lodha+Wakad+project.+Please+send+brochure+and+price+details.", t.style.transform = "translateX(0)", t.style.transition = "transform 0.3s ease") : (t.style.transform = "translateX(0)", t.style.transition = "transform 0.3s ease") })), t.addEventListener("touchstart", (s => { e = !0, n = s.touches[0].clientX, t.style.transition = "none" })), t.addEventListener("touchmove", (r => { if (!e) return; const o = t.parentElement.offsetWidth; s = r.touches[0].clientX - n, s < 0 && (s = 0), s > o - t.offsetWidth && (s = o - t.offsetWidth), t.style.transform = `translateX(${s}px)` })), t.addEventListener("touchend", (() => { if (!e) return; e = !1; const n = t.parentElement.offsetWidth; s > n / 2 ? (window.location.href = "https://wa.me/+918459396466?text=I’m+interested+in+Lodha+Wakad+project.+Please+send+brochure+and+price+details.", t.style.transform = "translateX(0)", t.style.transition = "transform 0.3s ease") : (t.style.transform = "translateX(0)", t.style.transition = "transform 0.3s ease") })) }));