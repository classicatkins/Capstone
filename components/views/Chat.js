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
    </script>
</body>
</html>
`;
