// src/App.js
import {NativeBaseProvider, Text} from 'native-base'
import SwitchSelector from 'react-native-switch-selector';
import { useTranslation } from 'react-i18next'

const options = [
  { label: "English", value: 'en'},
  { label: "Hindi", value: 'hn'},
  { label: "Oriya", value: 'or'}
]

export default function App() {
  const {t, i18n} = useTranslation();

  return (
    <NativeBaseProvider>
      <SwitchSelector options={options} initial={2} onPress={(language) => {
        i18n.changeLanguage(language);
      }}/>
      <Text fontSize="6xl" style={{textAlign:'center'}}>{t('appScreen.welcome')}</Text>
      <Text fontSize="xl" style={{textAlign:'center'}}>{t('appScreen.rn')}</Text>
    </NativeBaseProvider>
  );
}