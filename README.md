Food Journal App README
This app is a React Native application built with Expo that allows users to create, edit, and manage food journal entries with images, descriptions, and categories. It uses the device camera and media library for image selection and stores data locally in a SQLite database.

Features
Capture photos using the device camera or select images from the gallery

Add descriptions and categorize entries (Breakfast, Lunch, Dinner, Snacks)

View, edit, and delete journal entries

Filter journal entries by category

Offline data storage using SQLite

Installation
Prerequisites
Node.js and npm/yarn installed

Expo CLI installed globally (npm install -g expo-cli)

A device or emulator to run the app

Steps
Clone the repository

bash
git clone <repository-url>
cd <repository-folder>
Install dependencies

bash
npm install
# or
yarn install
Install Expo SQLite

The app uses SQLite for local database storage. Install the Expo SQLite package:

bash
expo install expo-sqlite
Install Expo Camera and Media Library

For capturing photos and accessing the gallery, install:

bash
expo install expo-camera expo-media-library expo-image-picker
Install additional dependencies

The app uses other packages such as react-native-swipe-list-view and @react-native-picker/picker:

bash
npm install react-native-swipe-list-view @react-native-picker/picker
# or
yarn add react-native-swipe-list-view @react-native-picker/picker
Database Setup (SQLite)
The app uses SQLite for storing journal entries locally. The database operations are handled via a helper function executeSql (assumed to be in components/database/database.js).

The database schema includes a journal table with fields: id, userId, imageUri, text, category, and date.

Entries are linked to users via userId (passed as a route parameter).

CRUD operations (Create, Read, Update, Delete) are performed using SQL queries executed through the SQLite interface.

Running the App
Start the Expo development server:

bash
expo start
Use the Expo Go app on your mobile device or an emulator to run the app.

Permissions
The app requests the following permissions at runtime:

Camera access to take photos

Media library access to select images from the gallery

Make sure to grant these permissions when prompted.

Usage
Tap Take Photo to open the camera and capture an image.

Tap Choose from Gallery to pick an existing image.

Enter a description and select a category.

Tap Save Journal to save the entry.

Existing entries can be edited or deleted by swiping on the list items.

Filter entries by category using the picker at the top of the journal list.

Code Highlights
Uses React hooks (useState, useEffect, useRef) for state and lifecycle management.

Implements camera functionality with expo-camera.

Image selection via expo-image-picker.

List management with react-native-swipe-list-view.

Category filtering with @react-native-picker/picker.

Data persistence with Expo SQLite.

Troubleshooting
If camera or media library permissions are denied, the app will show a message prompting to enable them.

Database errors during CRUD operations will show alerts.

Ensure your device or emulator supports camera and media library features.

