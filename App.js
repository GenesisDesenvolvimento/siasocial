import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://siasocial.ti-genesis.com.br/index.php?class=LoginForm' }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o View ocupar toda a tela
  },
  webview: {
    flex: 1, // Faz a WebView ocupar todo o espaço do View
  },
});
