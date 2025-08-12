// Theme Toggle Functionality
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'original';
    this.themeToggle = document.getElementById('themeToggle');
    this.init();
  }

  init() {
    // Apply saved theme on page load
    this.applyTheme(this.currentTheme);
    
    // Add event listener to toggle button
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    // Update toggle button appearance
    this.updateToggleButton();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'consulting' ? 'original' : 'consulting';
    this.applyTheme(this.currentTheme);
    this.saveTheme();
    this.updateToggleButton();
  }

  applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'original') {
      // Original Coral & Purple Theme
      root.style.setProperty('--primary-color', 'rgba(235, 97, 115, 0.8)');
      root.style.setProperty('--secondary-color', 'rgb(109, 77, 238)');
      root.style.setProperty('--accent-color', 'rgba(235, 97, 115, 0.8)');
      root.style.setProperty('--light-pink', '#ffa9a9');
      root.style.setProperty('--light-purple', '#b5a1f7');
      root.style.setProperty('--timeline-accent', 'rgba(235, 97, 115, 0.6)');
      root.style.setProperty('--scrollbar-accent', 'rgba(235, 97, 115, 0.295)');
      root.style.setProperty('--nav-text-color', 'rgba(69, 55, 65, 0.8)');
      root.style.setProperty('--nav-logo-color', 'rgba(65, 65, 65, 0.8)');
      root.style.setProperty('--cta-button-bg', 'linear-gradient(135deg, rgba(235, 97, 115, 0.8), rgba(109, 77, 238, 0.8))');
      
      // Update specific elements that need direct color changes
      this.updateElementColors('original');
      
    } else {
      // Consulting & Strategy Theme
      root.style.setProperty('--primary-color', '#0f172a');
      root.style.setProperty('--secondary-color', '#64748b');
      root.style.setProperty('--accent-color', '#f59e0b');
      root.style.setProperty('--light-pink', '#0f172a');
      root.style.setProperty('--light-purple', '#64748b');
      root.style.setProperty('--timeline-accent', 'rgba(15, 23, 42, 0.6)');
      root.style.setProperty('--scrollbar-accent', 'rgba(15, 23, 42, 0.295)');
      root.style.setProperty('--nav-text-color', 'rgba(255, 255, 255, 0.9)');
      root.style.setProperty('--nav-logo-color', 'rgba(255, 255, 255, 0.9)');
      root.style.setProperty('--intro-text-color', 'rgba(238, 238, 238, 0.8)');
      root.style.setProperty('--cta-button-bg', 'linear-gradient(135deg, #0f172a, #64748b)');
      root.style.setProperty('--section-heading-color', 'rgb(15, 23, 42)');
      
      // Update specific elements that need direct color changes
      this.updateElementColors('consulting');
    }
  }

  updateElementColors(theme) {
    // Update h2 elements
    const h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach(h2 => {
      h2.style.color = theme === 'original' ? 'rgba(235, 97, 115, 0.8)' : '#0f172a';
    });

    // Update highlight.bold elements
    const highlightBoldElements = document.querySelectorAll('.highlight.bold');
    highlightBoldElements.forEach(el => {
      el.style.color = theme === 'original' ? 'rgba(235, 97, 115, 0.8)' : '#0f172a';
    });

    // Update resume card colors
    const resumeCards = document.querySelectorAll('.resume-card');
    resumeCards.forEach(card => {
      if (theme === 'original') {
        card.style.borderColor = 'rgba(235, 97, 115, 0.3)';
        card.querySelector('i').style.color = 'rgba(235, 97, 115, 0.8)';
      } else {
        card.style.borderColor = 'rgba(15, 23, 42, 0.3)';
        card.querySelector('i').style.color = '#0f172a';
      }
    });

    // Update CTA section background
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
      if (theme === 'original') {
        ctaSection.style.background = 'linear-gradient(135deg, rgba(235, 97, 115, 0.05), rgba(109, 77, 238, 0.05))';
        ctaSection.style.borderColor = 'rgba(235, 97, 115, 0.1)';
      } else {
        ctaSection.style.background = 'linear-gradient(135deg, rgba(15, 23, 42, 0.05), rgba(100, 116, 139, 0.05))';
        ctaSection.style.borderColor = 'rgba(15, 23, 42, 0.1)';
      }
    }

    // Update particles background
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
      if (theme === 'original') {
        particlesContainer.style.background = 'linear-gradient(-20deg, #ffa9a9 0%, #b5a1f7 100%)';
      } else {
        particlesContainer.style.background = 'linear-gradient(-20deg, #0f172a 0%, #64748b 100%)';
      }
    }
  }

  updateToggleButton() {
    if (this.themeToggle) {
      if (this.currentTheme === 'original') {
        this.themeToggle.classList.remove('active');
        this.themeToggle.title = 'Switch to Consulting Theme';
      } else {
        this.themeToggle.classList.add('active');
        this.themeToggle.title = 'Switch to Original Theme';
      }
    }
  }

  saveTheme() {
    localStorage.setItem('theme', this.currentTheme);
  }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});
