// import { useTranslation } from "react-i18next";

// function App() {
//  const { t } = useTranslation();

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">React i18next</h1>
//       {t('welcomeMessage',{
//         count:3,
//       })}
//     </div>
//   )
// }

// export default App


import { Trans } from 'react-i18next';

export default function App() {

  return (
    <div>
      <h1 className="text-2xl font-bold">React i18next</h1>
      <Trans i18nKey="welcomeMessage">
        Welcome, <i>user</i>! <b>Test</b>
      </Trans>
    </div>
  )
}