# Todo Task Management Mobile App

A cross-platform Todo Task Management mobile application built with React Native. The app allows users to manage their personal tasks efficiently and intuitively with modern UX patterns and smooth animations. Authentication is implemented using Google Sign-In.

---

## Features

### 1. Onboarding & Authentication
- Google Sign-In integration using Firebase Authentication
- Error handling with user-friendly messages

### 2. Task Management (CRUD)
- Create, Read, Update, and Delete tasks
- Fields: Title, Description, Due Date, Status (Open/Complete), Priority
- Local state management for task storage (no backend dependency)
- Mark tasks as complete/incomplete

### 3. User Experience
- Clean, intuitive, and responsive UI
- Task filtering and searching
- No data states (empty task list messages)
- Floating Action Button (FAB) for adding tasks
- Smooth animations for task actions (add, delete, complete)
- Pull-to-refresh and swipe-to-delete

### 4. Extras
- Integrated Firebase Crashlytics for crash reporting
- Designed using component-based architecture
- Organized folder structure with scalable codebase

---

## Tech Stack

- Mobile App: React Native (Expo)
- Authentication: Google (via Firebase)
- Crash Reporting: Firebase Crashlytics
- Design Pattern: MVVM (Model-View-ViewModel)

---

## APK Download

**Build Artifact (APK - Installable File):**  
https://expo.dev/artifacts/eas/vPNoDH1hQe4WDa3ktNYwLe.apk

You can download and install the APK file directly on any Android device.

---

## Folder Structure

```
todoApp/
├── assets/
├── components/
├── screens/
├── store/
├── utils/
├── firebase/
├── App.js
├── eas.json
└── README.md
```

---

## Assumptions

- Tasks are stored only in local state; no backend/database was used.
- Due to time constraints, offline persistence is limited to session-based state.
- Only Google authentication was implemented as per the requirement to choose one provider.

---

## Architecture Diagram

![Architecture Diagram](./assets/architecture-diagram.png)

---

## Demo Video

Watch the app demo here: https://drive.google.com/drive/folders/1N9BPPRsUNCsjF5jcWtrCPTFAmdSYZRzS

---

## Getting Started

### 1. Clone the repository
```
git clone https://github.com/yourusername/todoApp.git
cd todoApp
```

### 2. Install dependencies
```
npm install
```

### 3. Start the app
```
npx expo start
```

---

## How to Generate an Installable APK (Optional)

If you'd like to generate a direct APK (instead of `.aab`), update your `eas.json` like this:

```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

Then run:

```
eas build --platform android --profile production
```

Once this completes, you’ll get a `.apk` file that can be installed directly on Android devices.

---

## Acknowledgements

This project is a part of a hackathon run by https://www.katomaran.com

---

## Contributors

- Developer: Thirumurugan B