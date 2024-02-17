# Perpetua

Perpetua is a web application designed to help users build and maintain healthy habits through tracking and support mechanisms. With a focus on promoting a disciplined and organized lifestyle, Perpetua aims to make incremental changes that lead to significant improvements in one's life. Whether you're looking to improve health, increase mindfulness, or boost productivity, Habit Horizon provides the tools needed to track your progress and stay motivated.

## **Key Features**

- **Custom Habit Tracking**: Create habits with custom names, categories, frequencies, reminders, and notes. Track your progress with yes/no or measurable targets.
- **Dynamic Dashboard**: Get an overview of your habits with streaks, success rates, and upcoming tasks, all from a visually appealing and interactive dashboard.
- **Responsive Design**: Enjoy a seamless experience across all devices, thanks to a mobile-first design approach that ensures optimal usability.
- **Progress Analytics**: Dive deep into your habit performance with detailed statistics, completion trends, and success rates, presented through engaging visuals.
- **Routine Management**: Organize your day with customizable routines, marking off steps or entire routines as complete.
- **Notifications & Reminders**: Stay on track with personalized reminders for each habit and enable vacation mode to pause tracking without breaking streaks.
- **User-Centric Interface**: Navigate through the app effortlessly, with a clean and intuitive interface designed for enhanced user engagement.

## **Technologies Used**

- **Frontend**: HTML, CSS, JavaScript
- **Database**: MongoDb

## **Getting Started**

### **1. Set Up Your Environment**

Ensure you have Node.js installed on your system. You can check this by running **`node -v`** in your terminal. If Node.js is not installed, download and install it from [the official Node.js website](https://nodejs.org/).

### **2. Clone the Repository**

### **3. Install Dependencies**

### **Dependencies**

These are required for your application to run. Install them by running **`npm install`** in the root directory of your project, which will automatically install these packages:

- **`"axios": "^1.6.2"`**: For making HTTP requests.
- **`"chart.js": "^4.4.1"`**: For creating charts.
- **`"cors": "^2.8.5"`**: Middleware to enable CORS (Cross-Origin Resource Sharing).
- **`"dotenv": "^16.3.1"`**: To load environment variables from a **`.env`** file into **`process.env`**.
- **`"express": "^4.18.2"`**: Web application framework.
- **`"html-literal": "^1.1.0"`**: For working with HTML strings.
- **`"lodash": "^4.17.21"`**: A utility library offering various functions for common programming tasks.
- **`"mongoose": "^6.12.4"`**: MongoDB object modeling tool.
- **`"navigo": "^8.11.1"`**: A simple JavaScript router.
- **`"openai": "^4.0.0"`**: The OpenAI JavaScript SDK for interacting with OpenAI APIs.
- **`"parcel": "^2.10.3"`**: A web application bundler.

### **Development Dependencies**

These are tools and libraries that help in the development process but are not required for the application to run in production. Install them by running **`npm install`** as they are also included when you run this command without any flags:

- **`"buffer": "^6.0.3"`**: Node.js **`buffer`** module for use in the browser.
- **`"eslint": "^6.8.0"`**, **`"eslint-config-prettier": "^6.15.0"`**, **`"eslint-plugin-prettier": "^3.3.1"`**: These are related to ESLint, a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with integration for Prettier, a code formatter.
- **`"nodemon": "^3.0.2"`**: A utility that monitors for any changes in your source and automatically restarts your server.
- **`"prettier": "1.19.1"`**: An opinionated code formatter.
- **`"process": "^0.11.10"`**: A Node.js **`process`** module for use in the browser.

### **Scripts**

The **`scripts`** section defines shortcuts you can run with **`npm run <script_name>`**:

- **`"parcel-build"`**: Builds your project using Parcel and copies **`_redirects`** to the **`dist/`** folder.
- **`"serve"`**: Serves your project using Parcel.
- **`"app:watch"`**: Watches for changes in the **`./server`** directory and uses **`nodemon`** to restart **`app.js`** when changes are detected.

### **4. Environment Variables**

The application uses environment variables for the OpenAI API key and possibly other configurations like the server port. Create a **`.env`** file in the root directory and specify the required environment variables: 

```
PERPETUA_API_URL=
MONGODB=
OPENAI_API_KEY=
```

### **5. Run Command**

 npm run serve

## **Usage**

- **Creating Habits**: Navigate to the Habits page to add new habits. Specify details such as name, category, frequency, and reminder options.
- **Tracking Progress**: Use the dashboard to view and mark off habits as completed, skipped, or failed.
- **Viewing Analytics**: Check the Stats page for detailed insights into your habit performance, including streaks and completion trends.
- **Managing Routines**: Create and manage daily routines, adding specific habits to morning, night, or custom routines.
