// Hamburger Menu Logic (copy from index.html)
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
// Auto Type Text Logic
var typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Javascript Developer", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
// tetap di halaman contak

    const form = document.querySelector('form');
    form.onsubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert('Pesan terkirim, Dimas! Cek email kamu sekarang.');
                form.reset();
            } else {
                alert('Waduh, ada kesalahan teknis. Coba lagi ya.');
            }
        } catch (error) {
            alert('Gagal terhubung ke server.');
        }
    };


