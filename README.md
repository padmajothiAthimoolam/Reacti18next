# React i18next Example with package management via pnpm.

This project demonstrates how to implement internationalization (i18n) in a React application using the react-i18next library.

Features
Utilizes the useTranslation hook for simple translations.
Employs the Trans component for advanced translations with JSX support.
Getting Started
Install Dependencies

Ensure you have the necessary packages installed:

````bash
pnpm add react-i18next i18next
````

Setup i18next
Create a configuration file (e.g., i18n.ts) to set up your translations and initialize i18next. Here’s a basic example:

````bash
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources: {
      en: {
        translation: {
          welcomeMessage: "Welcome, <i>user</i>! <b>Test</b>",
        },
      },
      fr: {
        translation: {
          welcomeMessage: "Bonjour, <i>user</i>! <b>Test</b>",
        },
      }
      // Add more languages here
    },

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;

````

Integrate i18n into Your App

````bash
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n'; // Import the i18n configuration

ReactDOM.render(<App />, document.getElementById('root'));
````

Example App Component
````bash
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-2xl font-bold">React i18next</h1>
      {t('welcomeMessage', { count: 3 })}
      <Trans i18nKey="welcomeMessage">
        Welcome, <i>user</i>! <b>Test</b>
      </Trans>
    </div>
  );
}

export default App;
````
Running the Application
````bash
pnpm dev
````
To add support for additional languages, simply extend the resources object in your i18n configuration with the desired translations.
