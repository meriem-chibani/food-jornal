# 🍽️ Food Journal - React Native App

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)

A mobile food journal application that helps users track their meals with photos, descriptions, and categories.

## ✨ Features

- **Camera Integration**: Capture meal photos directly in-app
- **Gallery Selection**: Choose existing photos from device
- **Meal Categorization**: Organize by Breakfast/Lunch/Dinner/Snacks
- **Swipe Actions**: Edit or delete entries with swipe gestures
- **Search & Filter**: Find entries by category
- **Responsive Design**: Works on both iOS and Android

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/meriem-chibani/food-jornal.git
   cd food-journal-app
Install dependencies:

bash
npm install
### or
yarn install
Start the development server:

   ```bash
   expo start
 ```

⚙️ Configuration
Environment Setup
Install Expo CLI globally:

 ```bash
npm install -g expo-cli
```

Configure permissions in app.json:

 ```bash
json
{

  "expo": {

    "plugins": [

      ["expo-image-picker", {

        "photosPermission": "App needs photo access for meal images"
      }],

      ["expo-camera", {

        "cameraPermission": "App needs camera access to take meal photos"

      }]

    ]

  }

}
 ```

🗃️ Database Schema

sql
 ``` bash

CREATE TABLE journal (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId TEXT NOT NULL,
  imageUri TEXT NOT NULL,
  text TEXT NOT NULL,
  category TEXT NOT NULL,
  date TEXT NOT NULL
);
 ```

🏗️ Project Structure

/src
├── components/
│   ├── database/       # Database operations
├── screens/
│   └── HomeScreen.js   # Main application screen

🤝 Contributing

Contributions are welcome! Please follow these steps:

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License

Distributed under the MIT License. See LICENSE for more information.
