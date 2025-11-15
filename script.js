const sections = document.querySelectorAll('section');
sections.forEach(section => {
  section.style.display = 'none';
});

const nav_buttons = document.querySelectorAll('.nav-button');
nav_buttons.forEach(button => {
  button.addEventListener('click', changeTab);
});

function changeTab() {
  const tabName = this.textContent;
  nav_buttons.forEach(button => {
    if (button.id == tabName + '-btn') {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  sections.forEach(section => {
    if (section.id == tabName) {
      section.style.display = 'flex';
    } else {
      section.style.display = 'none';
    }
  });
}

const defaultTab = document.getElementById('Projects');
defaultTab.style.display = 'flex';
const defaultBtn = document.querySelector(defaultTab.id + '-btn');
