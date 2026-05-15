import { useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PerfilScreen from './screens/PerfilScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';
import ProjetosScreen from './screens/ProjetosScreen';

const tabs = [
  { key: 'perfil', label: 'Perfil' },
  { key: 'habilidades', label: 'Habilidades' },
  { key: 'projetos', label: 'Projetos' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('perfil');

  const screen = useMemo(() => {
    if (activeTab === 'habilidades') {
      return <HabilidadesScreen />;
    }

    if (activeTab === 'projetos') {
      return <ProjetosScreen />;
    }

    return <PerfilScreen />;
  }, [activeTab]);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="light" />

      <View style={styles.topBar}>
        <Text style={styles.appLabel}>DevStart Mobile</Text>
        <Text style={styles.appTitle}>Perfil Dev Jr</Text>
        <Text style={styles.appSubtitle}>Aplicativo em React Native com navegação por abas</Text>
      </View>

      <View style={styles.content}>{screen}</View>

      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;

          return (
            <TouchableOpacity
              key={tab.key}
              accessibilityRole="button"
              accessibilityState={{ selected: isActive }}
              onPress={() => setActiveTab(tab.key)}
              style={[styles.tabButton, isActive && styles.tabButtonActive]}
            >
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#07111f',
  },
  topBar: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 18,
    backgroundColor: '#0d1b2a',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  appLabel: {
    color: '#8fb4ff',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  appTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 4,
  },
  appSubtitle: {
    color: '#b3c5dc',
    fontSize: 14,
    marginTop: 6,
    lineHeight: 20,
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#10243f',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#1f3b63',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 16,
  },
  tabButtonActive: {
    backgroundColor: '#244b7a',
  },
  tabLabel: {
    color: '#b8cae2',
    fontWeight: '700',
    fontSize: 13,
  },
  tabLabelActive: {
    color: '#ffffff',
  },
});
