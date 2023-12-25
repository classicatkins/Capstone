import html from "html-literal";

export default () => html`
<body>
    <div class="container">
        <h2>Settings</h2>
        <form id="settingsForm">

            <div class="section">
                <h3>Personal Information</h3>
                <div class="setting">
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName">
                </div>
                <div class="setting">
                  <label for="lastName">Last  Name:</label>
                  <input type="text" id="lastName" name="lastName">
                </div>
                <div class="setting">
                  <label for="phoneNumber">Phone Number:</label>
                  <input type="text" id="phoneNumber" name="phoneNumber">
                </div>
                <div class="setting">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email">
                </div>
            </div>

            <div class="section">
                <h3>Notifications</h3>
                <div class="setting">
                    <label for="emailNotifications">Email Notifications:</label>
                    <select id="emailNotifications" name="emailNotifications">
                        <option value="enabled">Enabled</option>
                        <option value="disabled">Disabled</option>
                    </select>
                </div>
                <div class="setting">
                    <label for="smsNotifications">SMS Notifications:</label>
                    <select id="smsNotifications" name="smsNotifications">
                        <option value="enabled">Enabled</option>
                        <option value="disabled">Disabled</option>
                    </select>
                </div>
            </div>

            <div class="section">
                <h3>Other</h3>
                <div class="setting">
                    <label for="language">Language:</label>
                    <select id="language" name="language">
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                    </select>
                </div>
            </div>

            <div class="button-container">
                <button type="submit" class="submit-button">Save Changes</button>
            </div>

        </form>
    </div>

    <script>
        document.getElementById('settingsForm').addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle form submission logic here
            alert('Settings saved!');
        });
    </script>
    <br>
    <br>
    <br>
</body>
`;
