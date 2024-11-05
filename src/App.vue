<template>
  <header class="header">
    <div class="header__container container flex">
      <router-link class="header__logo" to="/">
        <img src="/img/logo.svg" alt="Logo" width="65" height="22">
      </router-link>
      <form class="header__form flex">
        <button class="header__search">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9331 20L17.1554 16.2156M19.2489 11.1579C19.2489 13.0563 18.4948 14.8769 17.1524 16.2193C15.81 17.5617 13.9894 18.3158 12.091 18.3158C10.1926 18.3158 8.37197 17.5617 7.0296 16.2193C5.68724 14.8769 4.93311 13.0563 4.93311 11.1579C4.93311 9.2595 5.68724 7.43886 7.0296 6.0965C8.37197 4.75413 10.1926 4 12.091 4C13.9894 4 15.81 4.75413 17.1524 6.0965C18.4948 7.43886 19.2489 9.2595 19.2489 11.1579V11.1579Z" stroke="#989898" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
        <input class="header__input" placeholder="Search" type="text">
      </form>
      <nav class="header__cube">
        <ul class="header__menu flex">
          <li class="header__margin-link">
            <router-link class="header__link" to="/">Home</router-link>
          </li>
          <li class="header__margin-link">
            <a class="header__link" href="#">About</a>
          </li>
          <li class="header__margin-link">
            <a class="header__link" href="#">Contact Us</a>
          </li>
          <li class="header__margin-link">
            <a class="header__link" href="#">Blog</a>
          </li>
        </ul>
      </nav>
      <ul class="header__icons flex">
        <li class="header__margin-icon">
          <a class="header__icon" href="#" aria-label="Favorites">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="header__count">{{ authStore.favQuantity ? authStore.favQuantity : '' }}</span>
          </a>
        </li>
        <li class="header__margin-icon">
          <router-link class="header__icon" to="/cart" aria-label="Cart">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5H7L10 22H26M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97372 27.8239 6.90679 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66662 27.39 6.66667H8M12 26C12 26.5523 11.5523 27 11 27C10.4477 27 10 26.5523 10 26C10 25.4477 10.4477 25 11 25C11.5523 25 12 25.4477 12 26ZM26 26C26 26.5523 25.5523 27 25 27C24.4477 27 24 26.5523 24 26C24 25.4477 24.4477 25 25 25C25.5523 25 26 25.4477 26 26Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </router-link>
        </li>
        <li class="header__margin-icon">
          <a class="header__icon" href="#" aria-label="User">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </li>
      </ul>
      <button class="header__burger" aria-label="Burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <router-view />

  <footer class="footer">
    <div class="footer__div container">
      <ul class="footer__list mb-24">
        <li class="footer__column">
          <router-link class="footer__logo mb-24" to="/">
            <img src="/img/footer-logo.svg" alt="Logo" width="65" height="22">
          </router-link>
          <p class="footer__text">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
        </li>
        <li class="footer__list">
          <ul class="footer__cube">
            <li class="footer__margin-link">
              <p class="footer__title">Services</p>
            </li>
            <li class="footer__margin-link">
              <a class="footer__link" href="#">Bonus program</a>
            </li>
            <li class="footer__margin-link">
              <a class="footer__link" href="#">Gift cards</a>
            </li>
            <li class="footer__margin-link">
              <a class="footer__link" href="#">Credit and payment</a>
            </li>
            <li class="footer__margin-link">
              <a class="footer__link" href="#">Service contracts</a>
            </li>
            <li class="footer__margin-link">
              <a class="footer__link" href="#">Non-cash account</a>
            </li>
            <li class="footer__margin-link">
              <a class="footer__link" href="#">Payment</a>
            </li>
          </ul>
          <ul class="footer__cube">
            <li class="footer__margin-link">
              <p class="footer__title">Assistance to the buyer</p>
            </li>
            <li class="footer__margin-link">
              <a class="footer__link" href="#">Find an order</a>
            </li>
            <li class="footer__margin-link">
              <a class="footer__link" href="#">Terms of delivery</a>
            </li>
            <li class="footer__margin-link">
              <a class="footer__link" href="#">Exchange and return of goods</a>
            </li>
            <li class="footer__margin-link">
              <a class="footer__link" href="#">Guarantee</a>
            </li>
            <li class="footer__margin-link">
              <a class="footer__link" href="#">Frequently asked questions</a>
            </li>
            <li class="footer__margin-link">
              <a class="footer__link" href="#">Terms of use of the site</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="footer__center flex">
        <li class="footer__margin-icon">
          <a class="footer__icon" href="#" aria-label="Twitter">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2.91193C15.4121 3.17965 14.7791 3.3607 14.1152 3.4416C14.7932 3.02556 15.3135 2.36588 15.5586 1.58004C14.9238 1.96525 14.2222 2.2455 13.4728 2.39573C12.8755 1.74183 12.0218 1.3335 11.0771 1.3335C9.26548 1.3335 7.79574 2.84066 7.79574 4.69933C7.79574 4.9632 7.82391 5.21938 7.88026 5.46592C5.15208 5.32531 2.73381 3.98668 1.11381 1.94792C0.831132 2.44677 0.669596 3.02556 0.669596 3.64191C0.669596 4.80912 1.24905 5.83958 2.12995 6.4434C1.59277 6.42703 1.08563 6.27391 0.642365 6.02352V6.06493C0.642365 7.69632 1.77402 9.0571 3.27663 9.36527C3.00147 9.44424 2.71128 9.48373 2.41169 9.48373C2.20039 9.48373 1.99378 9.46351 1.79374 9.42402C2.21166 10.7607 3.42313 11.7344 4.86001 11.7604C3.7368 12.6637 2.32059 13.202 0.783234 13.202C0.518398 13.202 0.256383 13.1866 0 13.1558C1.45284 14.1092 3.17896 14.6668 5.03187 14.6668C11.0705 14.6668 14.3715 9.53862 14.3715 5.09033C14.3715 4.94394 14.3687 4.79756 14.3631 4.65407C15.0045 4.17929 15.5614 3.58702 16 2.91193Z" fill="white" />
            </svg>
          </a>
        </li>
        <li class="footer__margin-icon">
          <a class="footer__icon" href="#" aria-label="Facebook">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.18082 3.81794C9.18082 3.98169 9.18082 4.51541 9.18082 5.27366H11.7878L11.5052 7.59763H9.18082C9.18082 11.1816 9.18082 15.9843 9.18082 15.9843H6.09563C6.09563 15.9843 6.09563 11.2452 6.09563 7.59763H4.48804V5.27366H6.09563C6.09563 4.35204 6.09563 3.69669 6.09563 3.51422C6.09563 2.64485 6.03013 2.23235 6.39954 1.55866C6.76913 0.885005 7.81163 -0.00543266 9.61472 0.0160048C11.4183 0.0382236 12.1785 0.211724 12.1785 0.211724L11.7878 2.6885C11.7878 2.6885 10.6362 2.38441 10.0709 2.49279C9.50635 2.60119 9.18082 2.94894 9.18082 3.81794Z" fill="white" />
            </svg>
          </a>
        </li>
        <li class="footer__margin-icon">
          <a class="footer__icon" href="#" aria-label="TikTok">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5504 3.358C11.891 2.59144 11.5456 1.60104 11.5731 0.592723L9.10925 0.533203C9.10925 0.533203 9.10925 0.638323 9.10925 0.780083V10.6602C9.14365 13.786 4.20509 13.7102 4.59581 10.2551C4.83469 8.88136 6.31085 8.03592 7.62253 8.51384V5.99992C4.76685 5.50264 2.06061 7.7756 2.08909 10.6713C2.33869 16.9513 11.3461 16.9521 11.596 10.6713C11.5331 10.4465 11.5683 6.26152 11.5593 5.90856C12.6797 6.60568 13.9832 6.95416 15.3033 6.90952V4.3132C14.0829 4.3132 13.1515 3.98872 12.5504 3.358Z" fill="white" />
            </svg>
          </a>
        </li>
        <li class="footer__margin-icon">
          <a class="footer__icon" href="#" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2615_1692)">
                <path d="M7.99992 14.6668C6.57042 14.6668 5.54174 14.6661 4.73972 14.5883C3.94689 14.5115 3.43972 14.3638 3.03497 14.1095C2.57237 13.8188 2.1812 13.4277 1.89052 12.9651C1.63628 12.5604 1.4885 12.0532 1.41174 11.2604C1.33396 10.4583 1.33325 9.42966 1.33325 8.00016C1.33325 6.57067 1.33396 5.54198 1.41174 4.73996C1.4885 3.94713 1.63628 3.43996 1.89052 3.03521C2.18119 2.5726 2.57236 2.18143 3.03497 1.89077C3.43972 1.63653 3.94689 1.48875 4.73972 1.41198C5.54164 1.3342 6.57032 1.3335 7.99992 1.3335C9.42941 1.3335 10.4581 1.3342 11.2601 1.41198C12.0529 1.48875 12.5601 1.63653 12.9649 1.89077C13.4274 2.18144 13.8186 2.57261 14.1092 3.03521C14.3636 3.43996 14.5112 3.94713 14.5881 4.73996C14.6659 5.54198 14.6666 6.57067 14.6666 8.00016C14.6666 9.42966 14.6659 10.4583 14.5881 11.2604C14.5112 12.0532 14.3636 12.5604 14.1092 12.9651C13.8186 13.4277 13.4274 13.8188 12.9649 14.1095C12.5601 14.3638 12.0529 14.5115 11.2601 14.5883C10.4581 14.6661 9.42941 14.6668 7.99992 14.6668Z" fill="white" stroke="white" stroke-width="2" />
                <path d="M7.99992 11.3333C9.47268 11.3333 10.6666 10.1394 10.6666 8.66667C10.6666 7.19391 9.47268 6 7.99992 6C6.52716 6 5.33325 7.19391 5.33325 8.66667C5.33325 10.1394 6.52716 11.3333 7.99992 11.3333Z" fill="white" stroke="black" stroke-width="2" />
                <path d="M11.25 5.5C11.6642 5.5 12 5.16421 12 4.75C12 4.33579 11.6642 4 11.25 4C10.8358 4 10.5 4.33579 10.5 4.75C10.5 5.16421 10.8358 5.5 11.25 5.5Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_2615_1692">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
      </ul>
    </div>
	</footer>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { userData } from '@/stores/user';

  const authStore = userData();
</script>
