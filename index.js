    const menuButton = document.getElementById('menu_hamburger');
      const menuModal = document.querySelector('.menu_modal');
      const closeBtn = document.querySelector('.close-btn');
      const menuLinks = document.querySelectorAll('.menu_item');

      function openMenu() {
        if (menuModal) {
          menuModal.classList.add('is-open');
        }
      }

      function closeMenu() {
        if (menuModal) {
          menuModal.classList.remove('is-open');
        }
      }

      if (menuButton) {
        menuButton.addEventListener('click', openMenu);
      }

      if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
      }

      if (menuModal) {
        menuModal.addEventListener('click', (event) => {
          if (event.target === menuModal) {
            closeMenu();
          }
        });
      }

      menuLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
      });