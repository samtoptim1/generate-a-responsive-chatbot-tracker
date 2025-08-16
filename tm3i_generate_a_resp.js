class ChatbotTracker {
  constructor() {
    this.chats = [];
    this.container = document.getElementById('chat-container');
  }

  addChat(name, message) {
    const chat = {
      id: this.chats.length + 1,
      name,
      message,
      timestamp: new Date().toLocaleTimeString(),
    };
    this.chats.push(chat);
    this.renderChat(chat);
  }

  renderChat(chat) {
    const chatHTML = `
      <div class="chat">
        <span class="chat-name">${chat.name}</span>
        <span class="chat-timestamp">${chat.timestamp}</span>
        <p class="chat-message">${chat.message}</p>
      </div>
    `;
    this.container.innerHTML += chatHTML;
  }

  trackChats() {
    const chatInput = document.getElementById('chat-input');
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const name = 'User';
        const message = chatInput.value;
        this.addChat(name, message);
        chatInput.value = '';
      }
    });
  }

  init() {
    this.trackChats();
  }
}

const tracker = new ChatbotTracker();
tracker.init();

// Test case
tracker.addChat('Bot', 'Welcome to the chat!');
tracker.addChat('User', 'Hi!');
tracker.addChat('Bot', 'How can I assist you today?');