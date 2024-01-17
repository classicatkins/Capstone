import html from "html-literal";
export default state => html`
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Chat</title>
</head>
<body>
    <h2>Chat with AI</h2>
    <div class="chat-container" id="chat-container">
        <!-- Chat messages will appear here -->
    </div>
    <div class="chat-container-text-bar">
    <form id="message-form">
        <input type="text" id="user-input" placeholder="Type your message here...">
        <button type="submit" id="send-button">Send</button>
    </form>
    </div>
    <br>
    <br>
    <br>

    <script>
        document.getElementById('message-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const userInput = document.getElementById('user-input');
            const message = userInput.value.trim();

            if (message) {
                addMessageToChat('user', message);
                userInput.value = '';

                // Here you would typically send the message to the AI and get a response
                // For now, we will just echo the message
                setTimeout(() => addMessageToChat('ai', 'Echo: ' + message), 500);
            }
        });

        function addMessageToChat(sender, message) {
            const chatContainer = document.getElementById('chat-container');
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', sender === 'ai' ? 'ai-message' : 'user-message');
            messageDiv.textContent = message;
            chatContainer.appendChild(messageDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
        }
    </script>
</body>
</html>
`;
