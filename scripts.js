// Load header, then attach mobile sidebar toggle handler after elements are in the DOM
fetch('shared/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-wrapper').innerHTML = html;

    // Навешиваем обработчик после вставки header-а
    const menuToggle = document.getElementById('menu-toggle');
    const mobileSidebar = document.getElementById('sidebar-mobile');

    menuToggle.addEventListener('click', () => {
      mobileSidebar.classList.toggle('hidden');
    });
  });


// Load footer.html into #footer-wrapper
fetch('shared/footer.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('footer-wrapper').innerHTML = html;
    })
    .catch(err => console.error('Error loading header:', err));

// Load desktop sidebar content
fetch('shared/sidebar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('sidebar-wrapper').innerHTML = html;
  })
  .catch(err => console.error('Failed to load desktop sidebar:', err));