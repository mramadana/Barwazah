<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8 mr-auto">
        <div class="chat-container mt-2">
          <!-- Chat Header -->
          <div class="chat-header">
            <div class="header-content">
              <div class="more-options">...</div>
              <div class="profile-info">
                <span class="profile-name">Barwazah AI</span>
                <img src="@/assets/images/Ramadan.jpg" alt="AI Profile" class="profile-image">
              </div>
            </div>
          </div>
      
          <!-- Chat Messages Area -->
          <div class="chat-messages">
            <div class="message ai-message">
              <div class="message-content">
                <img src="@/assets/images/Ramadan.jpg" alt="AI" class="message-avatar">
                <div class="message-text">
                  هذا المحادثة هي منصة زيادة المبيعات. خطط لعمل سوقك في ٦ اسابيع وتابع
                </div>
              </div>
            </div>
          </div>
      
          <!-- Chat Input Area -->
          <div class="chat-input-container">
            <div class="input-wrapper">
              <button class="back-button">
                <span class="arrow-left">←</span>
              </button>
              <input type="text" class="chat-input" placeholder="Type your message...">
              <button class="send-button">
                <span class="send-icon">⚡</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'default'
  })

  const { user } = storeToRefs(useAuthStore());
  </script>
  
  <style scoped>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 150px);
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
  }
  
  .chat-header {
    padding: 1rem;
    background-color: #fff;
    border-bottom: 1px solid #e1e1e1;
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .more-options {
    color: #666;
    font-size: 1.5rem;
  }
  
  .profile-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .profile-name {
    font-weight: 500;
    color: #333;
  }
  
  .profile-image {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  
  .chat-messages {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
  }
  
  .message {
    margin-bottom: 1rem;
  }
  
  .ai-message .message-content {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    background-color: #f0f7ff;
    padding: 1rem;
    border-radius: 12px;
    max-width: 80%;
  }
  
  .message-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  
  .message-text {
    color: #333;
    line-height: 1.5;
    direction: rtl;
  }
  
  .chat-input-container {
    padding: 1rem;
    background-color: #fff;
    border-top: 1px solid #e1e1e1;
  }
  
  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #f5f5f5;
    border-radius: 24px;
    padding: 0.5rem;
  }
  
  .chat-input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 0.5rem;
    outline: none;
    font-size: 1rem;
  }
  
  .back-button,
  .send-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
  }
  
  .arrow-left {
    font-size: 1.2rem;
  }
  
  .send-icon {
    font-size: 1.2rem;
  }
  
  /* Add hover effects */
  .back-button:hover,
  .send-button:hover {
    color: #333;
  }
  
  .input-wrapper:focus-within {
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
  }
  </style>