import './style.css'
import 'flowbite';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 let swiper1 = new Swiper(".mySwiper1", {
    modules: [Navigation, Pagination],
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    const toggleBtn = document.getElementById('filterToggle');
const closeBtn = document.getElementById('filterClose');
const panel = document.getElementById('filterPanel');
const overlay = document.getElementById('filterOverlay');

toggleBtn.addEventListener('click', () => {
  panel.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

function closeFilters() {
  panel.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeFilters);
overlay.addEventListener('click', closeFilters);
