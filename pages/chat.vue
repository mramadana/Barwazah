<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8 mr-auto">
        <div class="chat-container mt-2">
          <!-- Chat Header -->
          <div class="chat-header">
            <div class="header-content">
              <div class="profile-info">
                <img src="@/assets/images/barwzha-ai.svg" alt="AI Profile" class="profile-image">
                <span class="profile-name">Barwazah AI</span>
              </div>
              <div class="more-options">...</div>
            </div>
          </div>
      
          <!-- Chat Messages Area -->
          <div class="chat-messages" ref="messagesContainer">
            <div v-for="(message, index) in messages" 
                 :key="index" 
                 class="message"
                 :class="{'ai-message': message.isAI, 'user-message': !message.isAI}"
                 v-motion
                 :initial="{ opacity: 0, y: 50 }"
                 :enter="{ opacity: 1, y: 0 }">
              <div class="message-content">
                <img v-if="message.isAI" src="@/assets/images/barwzha-ai.svg" alt="AI" class="message-avatar">
                <img v-else src="@/assets/images/Rectangle.svg" alt="AI" class="message-avatar">
                <div class="message-text" v-html="message.text"></div>
              </div>
            </div>
            <div v-if="isLoading" class="loading-spinner">
              <div class="spinner"></div>
            </div>
          </div>
      
          <!-- Chat Input Area -->
          <div class="chat-input-container">
            <div class="input-wrapper">
              <input 
                type="text" 
                v-model="newMessage" 
                class="chat-input" 
                placeholder="اكتب رسالتك..."
                @keyup.enter="sendMessage"
                :disabled="isLoading">
            </div>
            <button 
              class="send-button" 
              @click="sendMessage"
              :disabled="isLoading || !newMessage.trim()">
              <span class="send-icon">
                <i class="fa-solid" :class="isLoading ? 'fa-spinner fa-spin' : 'fa-arrow-left'"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import MarkdownIt from 'markdown-it';

definePageMeta({
  layout: 'default'
})

const { user } = storeToRefs(useAuthStore());

// Initialize Markdown parser
const md = new MarkdownIt();

// State
const messages = ref([]);
const newMessage = ref('');
const isLoading = ref(false);
const messagesContainer = ref(null);

// Scroll to bottom of messages
const addMessage = (message) => {
  messages.value.push(message);
  const oldMessages = localStorage.getItem('messages');
  if (oldMessages) {
    localStorage.setItem('messages', JSON.stringify([...JSON.parse(oldMessages), message]));
  } else {
    localStorage.setItem('messages', JSON.stringify([message]));
  }
};

// Scroll to bottom of messages
const scrollToBottom = () => {
  if (messagesContainer.value) {
    nextTick(() => {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    });
  }
};

// Send message
const sendMessage = async () => {
  if (!newMessage.value.trim() || isLoading.value) return;
  
  // Add user message
  addMessage({
    text: newMessage.value,
    isAI: false
  });
  
  const messageText = newMessage.value;
  newMessage.value = '';
  scrollToBottom();
  
  // Set loading state
  isLoading.value = true;
  
  
  scrollToBottom();
  
  try {
    // API call with params in URL
    const response = await fetch(`https://ai.barwazah.net/Chatbot?customer_id=00000002&query=${encodeURIComponent(messageText)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const data = await response.json();
    
        // Parse Markdown response into HTML
        const parsedHtml = md.render(data);
    
    // Add AI response
    addMessage({
      text: parsedHtml,
      isAI: true
    });
    scrollToBottom();
    
  } catch (error) {
    console.error('Error:', error);

    addMessage({
      text: 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.',
      isAI: true
    });
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {

  isLoading.value = true;
  
  setTimeout(() => {
    const oldMessages = localStorage.getItem('messages');
    if (oldMessages) {
      messages.value = JSON.parse(oldMessages);
    }
    isLoading.value = false;
    scrollToBottom();
  }, 400);
});

</script>
  
<style scoped>
.message-text :deep(h3) {
  color: #2c3e50;
  font-size: 1.1rem;
  margin: 0.5rem 0;
  font-weight: 600;
}

.message-text :deep(p) {
  margin: 0.5rem 0;
  line-height: 1.5;
}

.message-text :deep(strong) {
  font-weight: 700;
  color: #2c3e50;
}

.message-text :deep(ul) {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.message-text :deep(li) {
  margin: 0.25rem 0;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px);
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
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
  scroll-behavior: smooth;
  /* position: relative; */
  /* align-items: center;
  justify-content: center;
  display: flex; */
}

.message {
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.loading-spinner {
  display: flex
;
    justify-content: center;
    padding: 1rem;
    position: absolute;
    top: 68px;
    left: 0;
    /* transform: translate(-50%, -50%); */
    background: rgba(255, 255, 255, 30%);
    width: 100%;
    height: calc(100% - 64px - 87px);
    /* bottom: 84px; */
    pointer-events: none;
}

.spinner {
  width: 30px;
  height: 30px;
  border: 3px solid rgb(158, 154, 154);
  border-top: 3px solid red;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.user-message .message-content .message-text {
  background-color: #bfdaf0;
  border-radius: 15px 15px 0 15px;
  color: #013660;
}

.ai-message {
  display: flex;
  justify-content: flex-end;
}

.ai-message .message-content {
  flex-direction: row-reverse;
}

.ai-message .message-content .message-text {
  background-color: #eef6fe;
  border-radius: 15px 15px 15px 0;
  color: #22272a;
}

.message-content {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  max-width: 70%;
}

.message-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.message-text {
  color: #333;
  line-height: 1.5;
  /* direction: rtl; */
  font-size: 14px;
  quotes: "“" "”" "‘" "’";
  padding: 0.75rem 1rem;
}

.chat-input-container {
  padding: 1rem;
  background-color: #fff;
  border-top: 1px solid #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f5f5f5;
  border-radius: 24px;
  padding: 0.5rem;
  flex: 1;
}

.chat-input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.5rem;
  outline: none;
  font-size: .8rem;
}

.send-icon {
  font-size: 1.1rem;
}

.send-button {
  background-color: red;
  margin-inline-start: 15px;
  color: #fff;
  height: 50px;
  width: 50px;
  border-radius: 6px;
  font-size: 20px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.send-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.chat-input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.input-wrapper:focus-within {
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
}
</style>