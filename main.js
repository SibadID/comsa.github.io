const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const gambar1 = document.getElementById('buku1');
const gambar2 = document.getElementById('buku2');
const gambar3 = document.getElementById('buku3');
const gambar4 = document.getElementById('buku4');
const menfess = document.getElementById('menfess');
const judul1 = document.getElementById('judul1');
const judul2 = document.getElementById('judul2');
const judul3 = document.getElementById('judul3');
const judul4 = document.getElementById('judul4');
const judul5 = document.getElementById('judul5');
const judul6 = document.getElementById('judul6');
const judul7 = document.getElementById('judul7');
const jadwal_piket = document.getElementById("senin");


toggle.addEventListener('click', function() {
  this.classList.toggle('bi-brightness-high-fill');
  if (this.classList.toggle('bi-moon')) {
    body.style.backgroundImage = "linear-gradient(#FF8008,#FFFDE9 )";
    body.style.color = 'white';
    body.style.transition = '2s';
    body.style.opacity = '97%';
    document.getElementById('Welc').style.boxShadow = 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px';
    document.getElementById('tarik').style.backgroundImage = "linear-gradient(whitesmoke,white)";
    document.getElementById('tarik').style.filter = 'invert(0)';
    document.getElementById("menfess").style.backgroundImage = 'linear-gradient(-45deg,#F4C183,#F4B446)';
    document.getElementById('submit').style.color = 'white';
    menfess.style.height = '28em';
    judul1.style.color = 'white';
    judul2.style.color = 'white';
    judul3.style.color = 'white';
    judul4.style.color = 'white';
    judul5.style.color = 'white';
    judul6.style.color = 'white';
    judul7.style.color = 'white';
    gambar1.style.filter = 'invert(0)';
    gambar2.style.filter = 'invert(0)';
    gambar3.style.filter = 'invert(0)';
    gambar4.style.filter = 'invert(0)';



  } else {
    body.style.backgroundImage = "linear-gradient(black, purple)";
    body.style.color = 'white';
    body.style.opacity = '87%';
    body.style.transition = '2s';
    document.getElementById('navbar_bottom').style.position = 'sticky';
    document.getElementById('Welc').style.boxShadow = '#E6E6E6 0px 10px 20px, #E6E6E6 0px 6px 6px';
    document.getElementById('tarik').style.backgroundImage = "linear-gradient(white,skyblue)";
    document.getElementById('tarik').style.color = 'black';
    jadwal_piket.style.color = 'red';

    document.getElementById('submit').style.color = 'black';
    document.getElementById("menfess").style.backgroundImage = 'linear-gradient(#70c2fc,black)';
    menfess.style.height = '28em';
    document.getElementById('tarik').style.filter = 'invert(1)';
    judul1.style.color = 'black';
    judul2.style.color = 'red';
    judul3.style.color = 'red';
    judul4.style.color = 'red';
    judul5.style.color = 'red';
    judul6.style.color = 'red';
    judul7.style.color = 'black';
    gambar1.style.filter = 'invert()';
    gambar2.style.filter = 'invert()';
    gambar3.style.filter = 'invert()';
    gambar4.style.filter = 'invert()';


  }
});
