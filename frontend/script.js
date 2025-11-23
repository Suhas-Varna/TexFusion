// TexFusion Frontend JavaScript
class TexFusion {
  constructor() {
    this.initializeElements();
    this.setupEventListeners();
    this.setupSliderUpdates();
    this.checkAuthStatus();
    this.setupAnimations();
  }

  initializeElements() {
    // Authentication elements
    this.loginBtn = document.getElementById('loginBtn');
    this.registerBtn = document.getElementById('registerBtn');
    this.logoutBtn = document.getElementById('logoutBtn');
    this.loginModal = document.getElementById('loginModal');
    this.registerModal = document.getElementById('registerModal');
    this.mainContent = document.getElementById('mainContent');
    this.userInfo = document.getElementById('userInfo');
    this.welcomeMsg = document.getElementById('welcomeMsg');

    // Form elements
    this.loginForm = document.getElementById('loginForm');
    this.registerForm = document.getElementById('registerForm');

    // Upload elements
    this.qualityUpload = document.getElementById('qualityUpload');
    this.qualityFile = document.getElementById('qualityFile');
    this.patternUpload = document.getElementById('patternUpload');
    this.patternFile = document.getElementById('patternFile');

    // Action buttons
    this.inspectBtn = document.getElementById('inspectBtn');
    this.generateBtn = document.getElementById('generateBtn');
    this.recognizeBtn = document.getElementById('recognizeBtn');

    // Result areas
    this.qualityResult = document.getElementById('qualityResult');
    this.qualityPreview = document.getElementById('qualityPreview');
    this.qualityPrediction = document.getElementById('qualityPrediction');
    this.qualityConfidence = document.getElementById('qualityConfidence');
    this.qualityTop3 = document.getElementById('qualityTop3');
    
    this.designResult = document.getElementById('designResult');
    this.generatedImage = document.getElementById('generatedImage');
    this.designPlaceholder = document.getElementById('designPlaceholder');
    this.downloadBtn = document.getElementById('downloadBtn');
    
    this.patternResult = document.getElementById('patternResult');
    this.patternPreview = document.getElementById('patternPreview');
    this.patternName = document.getElementById('patternName');
    this.patternConfidence = document.getElementById('patternConfidence');

    // Loading overlay
    this.loadingOverlay = document.getElementById('loadingOverlay');
  }

  setupEventListeners() {
    // Authentication event listeners
    this.loginBtn?.addEventListener('click', () => this.showModal('login'));
    this.registerBtn?.addEventListener('click', () => this.showModal('register'));
    this.logoutBtn?.addEventListener('click', () => this.logout());

    // Modal close buttons
    document.getElementById('closeLogin')?.addEventListener('click', () => this.hideModal('login'));
    document.getElementById('closeRegister')?.addEventListener('click', () => this.hideModal('register'));

    // Switch between login and register
    document.getElementById('switchToRegister')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.hideModal('login');
      this.showModal('register');
    });

    document.getElementById('switchToLogin')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.hideModal('register');
      this.showModal('login');
    });

    // Form submissions
    this.loginForm?.addEventListener('submit', (e) => this.handleLogin(e));
    this.registerForm?.addEventListener('submit', (e) => this.handleRegister(e));

    // Upload area interactions
    this.setupUploadArea(this.qualityUpload, this.qualityFile);
    this.setupUploadArea(this.patternUpload, this.patternFile);

    // Action buttons
    this.inspectBtn?.addEventListener('click', () => this.handleQualityInspection());
    this.generateBtn?.addEventListener('click', () => this.handleDesignGeneration());
    this.recognizeBtn?.addEventListener('click', () => this.handlePatternRecognition());
    this.downloadBtn?.addEventListener('click', () => this.downloadDesign());

    // Click outside modal to close
    window.addEventListener('click', (e) => {
      if (e.target === this.loginModal || e.target.classList.contains('modal-backdrop')) {
        this.hideModal('login');
      }
      if (e.target === this.registerModal || e.target.classList.contains('modal-backdrop')) {
        this.hideModal('register');
      }
    });

    // Social auth buttons
    document.querySelectorAll('.btn-social').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showLoading();
        setTimeout(() => {
          this.hideLoading();
          alert('Social authentication would be implemented here');
        }, 1500);
      });
    });
  }

  setupSliderUpdates() {
    // Update slider value displays
    const sliders = [
      { id: 'hueSlider', valueId: 'hueValue' },
      { id: 'satSlider', valueId: 'satValue' },
      { id: 'valSlider', valueId: 'valValue' },
      { id: 'motifScale', valueId: 'motifScaleValue' },
      { id: 'motifSpacing', valueId: 'motifSpacingValue' }
    ];

    sliders.forEach(slider => {
      const sliderElement = document.getElementById(slider.id);
      const valueElement = document.getElementById(slider.valueId);
      
      if (sliderElement && valueElement) {
        // Set initial value
        valueElement.textContent = sliderElement.value;
        
        // Update on change
        sliderElement.addEventListener('input', () => {
          valueElement.textContent = sliderElement.value;
        });
      }
    });
  }

  setupAnimations() {
    // Initialize scroll animations
    this.setupScrollAnimations();
    
    // Add hover effects to cards
    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  }

  setupScrollAnimations() {
    // Simple scroll animation implementation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });
  }

  setupUploadArea(uploadArea, fileInput) {
    if (!uploadArea || !fileInput) return;

    uploadArea.addEventListener('click', () => fileInput.click());

    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.classList.add('active');
    });

    uploadArea.addEventListener('dragleave', () => {
      uploadArea.classList.remove('active');
    });

    uploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.classList.remove('active');
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        fileInput.files = files;
        this.updateUploadArea(uploadArea, files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        this.updateUploadArea(uploadArea, e.target.files[0]);
      }
    });
  }

  updateUploadArea(uploadArea, file) {
    const placeholder = uploadArea.querySelector('.upload-placeholder');
    if (file && file.type.startsWith('image/')) {
      placeholder.innerHTML = `
        <div class="upload-icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <p><strong>${file.name}</strong></p>
        <span class="upload-hint">Ready for processing</span>
      `;
    }
  }

  showModal(type) {
    if (type === 'login') {
      this.loginModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    } else if (type === 'register') {
      this.registerModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  hideModal(type) {
    if (type === 'login') {
      this.loginModal.style.display = 'none';
    } else if (type === 'register') {
      this.registerModal.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
  }

  showLoading() {
    this.loadingOverlay.style.display = 'flex';
  }

  hideLoading() {
    this.loadingOverlay.style.display = 'none';
  }

  async handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
      this.showNotification('Please fill in all fields', 'error');
      return;
    }

    this.showLoading();

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('texfusion_token', data.token);
        localStorage.setItem('texfusion_user', username);
        this.showAuthenticatedState(username);
        this.hideModal('login');
        this.showNotification('Login successful!', 'success');
      } else {
        const error = await response.json();
        this.showNotification(error.message || 'Login failed', 'error');
      }
    } catch (error) {
      console.error('Login error:', error);
      // For demo purposes, simulate successful login
      localStorage.setItem('texfusion_user', username);
      this.showAuthenticatedState(username);
      this.hideModal('login');
      this.showNotification('Demo: Login successful!', 'success');
    } finally {
      this.hideLoading();
    }
  }

  async handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username || !email || !password || !confirmPassword) {
      this.showNotification('Please fill in all fields', 'error');
      return;
    }

    if (password !== confirmPassword) {
      this.showNotification('Passwords do not match', 'error');
      return;
    }

    this.showLoading();

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password })
      });

      if (response.ok) {
        this.showNotification('Registration successful! Please login.', 'success');
        this.hideModal('register');
        this.showModal('login');
      } else {
        const error = await response.json();
        this.showNotification(error.message || 'Registration failed', 'error');
      }
    } catch (error) {
      console.error('Registration error:', error);
      // For demo purposes, simulate successful registration
      this.showNotification('Demo: Registration successful! Please login.', 'success');
      this.hideModal('register');
      this.showModal('login');
    } finally {
      this.hideLoading();
    }
  }

  logout() {
    localStorage.removeItem('texfusion_token');
    localStorage.removeItem('texfusion_user');
    this.showUnauthenticatedState();
    this.showNotification('Logged out successfully', 'info');
  }

  checkAuthStatus() {
    const user = localStorage.getItem('texfusion_user');
    if (user) {
      this.showAuthenticatedState(user);
    } else {
      this.showUnauthenticatedState();
    }
  }

  showAuthenticatedState(username) {
    this.loginBtn.style.display = 'none';
    this.registerBtn.style.display = 'none';
    this.userInfo.style.display = 'flex';
    this.welcomeMsg.textContent = `Welcome, ${username}!`;
    this.mainContent.style.display = 'block';
  }

  showUnauthenticatedState() {
    this.loginBtn.style.display = 'inline-flex';
    this.registerBtn.style.display = 'inline-flex';
    this.userInfo.style.display = 'none';
    this.mainContent.style.display = 'none';
  }

  async handleQualityInspection() {
    const file = this.qualityFile.files[0];
    if (!file) {
      this.showNotification('Please select an image first', 'warning');
      return;
    }

    this.showLoading();
    this.inspectBtn.disabled = true;

    try {
      const formData = new FormData();
      formData.append('image', file);

      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:5001/api/quality-inspection', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('texfusion_token')}`
        },
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        this.displayQualityResults(result);
        this.showNotification('Quality inspection completed!', 'success');
      } else {
        throw new Error('Quality inspection failed');
      }
    } catch (error) {
      console.error('Quality inspection error:', error);
      // Demo results for testing
      this.displayQualityResults({
        prediction: 'High Quality',
        confidence: '95%',
        top3: [
          { label: 'High Quality', score: '95' },
          { label: 'Medium Quality', score: '4' },
          { label: 'Low Quality', score: '1' }
        ]
      });
      this.showNotification('Demo: Quality inspection completed!', 'info');
    } finally {
      this.hideLoading();
      this.inspectBtn.disabled = false;
    }
  }

  async handleDesignGeneration() {
    const category = document.getElementById("categorySelect").value;
    const hue = document.getElementById("hueSlider").value;
    const sat = document.getElementById("satSlider").value;
    const val = document.getElementById("valSlider").value;

    const motifFile = document.getElementById("motifUpload").files[0];
    const motifMode = document.getElementById("motifMode").value;
    const motifScale = document.getElementById("motifScale").value;
    const motifSpacing = document.getElementById("motifSpacing").value;

    const enhanceMode = document.getElementById("enhanceMode").value;

    this.showLoading();
    this.generateBtn.disabled = true;

    try {
      const formData = new FormData();
      formData.append("category", category);
      formData.append("hue", hue);
      formData.append("sat", sat);
      formData.append("val", val);

      if (motifFile) formData.append("motif", motifFile);
      formData.append("motifMode", motifMode);
      formData.append("motifScale", motifScale);
      formData.append("motifSpacing", motifSpacing);

      formData.append("enhanceMode", enhanceMode);

      const response = await fetch("http://localhost:5001/api/generate-design", {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error("Design generation failed");

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);

      this.displayDesignImage(imageUrl);
      this.showNotification('Design generated successfully!', 'success');

    } catch (error) {
      console.error("Design generation error:", error);
      // Demo image for testing
      const demoImageUrl = 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=AI+Generated+Design';
      this.displayDesignImage(demoImageUrl);
      this.showNotification('Demo: Design generated successfully!', 'info');
    } finally {
      this.hideLoading();
      this.generateBtn.disabled = false;
    }
  }

  async handlePatternRecognition() {
    const file = this.patternFile.files[0];
    if (!file) {
      this.showNotification('Please select an image first', 'warning');
      return;
    }

    this.showLoading();
    this.recognizeBtn.disabled = true;

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('http://localhost:5001/api/pattern-recognition', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error('Pattern recognition failed');

      const result = await response.json();
      this.displayPatternResults(result);
      this.showNotification('Pattern recognition completed!', 'success');
    } catch (error) {
      console.error('Pattern recognition error:', error);
      // Demo results for testing
      this.displayPatternResults({
        pattern: 'Floral',
        confidence: '88%'
      });
      this.showNotification('Demo: Pattern recognition completed!', 'info');
    } finally {
      this.hideLoading();
      this.recognizeBtn.disabled = false;
    }
  }

  displayQualityResults(result) {
    // Show uploaded image preview
    this.qualityPreview.src = URL.createObjectURL(this.qualityFile.files[0]);
    this.qualityPreview.style.display = 'block';
    
    // Update prediction and confidence
    this.qualityPrediction.textContent = result.prediction;
    this.qualityConfidence.textContent = result.confidence;
    
    // Update top 3 predictions
    const predictionsList = this.qualityTop3.querySelector('.predictions-list');
    if (result.top3 && predictionsList) {
      predictionsList.innerHTML = '';
      result.top3.forEach(item => {
        const predictionItem = document.createElement('div');
        predictionItem.className = 'prediction-item';
        predictionItem.innerHTML = `
          <span class="prediction-label">${item.label}</span>
          <span class="prediction-score">${item.score}%</span>
        `;
        predictionsList.appendChild(predictionItem);
      });
    }
  }

  displayDesignImage(imageUrl) {
    // Hide placeholder
    this.designPlaceholder.style.display = 'none';
    
    // Update image
    this.generatedImage.src = imageUrl;
    this.generatedImage.style.display = 'block';
    
    // Show download button
    this.downloadBtn.style.display = 'block';
  }

  displayPatternResults(result) {
    // Show preview
    this.patternPreview.src = URL.createObjectURL(this.patternFile.files[0]);
    this.patternPreview.style.display = 'block';
    
    // Show results
    this.patternName.textContent = result.pattern;
    this.patternConfidence.textContent = result.confidence;
  }

  downloadDesign() {
    const img = this.generatedImage;
    if (!img.src) {
      this.showNotification('Generate a design first!', 'warning');
      return;
    }

    const link = document.createElement("a");
    link.href = img.src;
    link.download = "texfusion_design.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.showNotification('Design downloaded!', 'success');
  }

  showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${this.getNotificationIcon(type)}"></i>
        <span>${message}</span>
      </div>
      <button class="notification-close">
        <i class="fas fa-times"></i>
      </button>
    `;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${this.getNotificationColor(type)};
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      gap: 8px;
      z-index: 10000;
      animation: slideInRight 0.3s ease;
      max-width: 400px;
    `;

    // Add close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
      }
    }, 5000);

    document.body.appendChild(notification);

    // Add CSS animations
    if (!document.querySelector('#notification-styles')) {
      const style = document.createElement('style');
      style.id = 'notification-styles';
      style.textContent = `
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        .notification-content {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
        }
        .notification-close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: background 0.2s;
        }
        .notification-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `;
      document.head.appendChild(style);
    }
  }

  getNotificationIcon(type) {
    const icons = {
      success: 'check-circle',
      error: 'exclamation-circle',
      warning: 'exclamation-triangle',
      info: 'info-circle'
    };
    return icons[type] || 'info-circle';
  }

  getNotificationColor(type) {
    const colors = {
      success: '#10b981',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6'
    };
    return colors[type] || '#3b82f6';
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new TexFusion();
});