import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const profileImage = require('../assets/image-perfil.png');

export default function PerfilScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
			<View style={styles.card}>
				<View style={styles.photoFrame}>
					<Image source={profileImage} style={styles.photo} />
				</View>

				<Text style={styles.name}>Victor Boehm</Text>
				<Text style={styles.role}>Desenvolvedor Mobile Júnior</Text>

				<View style={styles.aboutBlock}>
					<Text style={styles.sectionTitle}>Sobre mim</Text>
					<Text style={styles.aboutText}>
						Sou um desenvolvedor mobile apaixonado por criar experiências digitais fluidas e centradas no usuário. Meu foco é desenvolver aplicativos em React Native que sejam não apenas funcionais, mas acessíveis, limpos e intuitivos. Em vez de depender excessivamente de bibliotecas prontas, gosto de dominar os fundamentos da tecnologia para construir arquiteturas organizadas e componentes leves, garantindo a melhor performance e usabilidade desde a primeira tela.
					</Text>
					<Text style={styles.aboutText}>
						Neste projeto, priorizei uma arquitetura limpa e a performance do aplicativo. Estruturei a aplicação com uma divisão clara de telas e utilizei exclusivamente os componentes core do React Native. O principal desafio técnico foi o desenvolvimento de uma navegação por abas inferiores (bottom tab navigation) construída totalmente do zero. Ao optar por não depender de bibliotecas visuais de terceiros, garanti um código mais leve, maior controle sobre a interface e consolidei meu domínio sobre os fundamentos do framework.
					</Text>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 32,
	},
	card: {
		backgroundColor: '#10243f',
		borderRadius: 28,
		padding: 20,
		borderWidth: 1,
		borderColor: '#1f3b63',
	},
	photoFrame: {
		alignSelf: 'center',
		width: 160,
		height: 160,
		borderRadius: 80,
		padding: 6,
		backgroundColor: '#1f3b63',
		marginBottom: 18,
	},
	photo: {
		width: '100%',
		height: '100%',
		borderRadius: 80,
		resizeMode: 'cover',
	},
	name: {
		color: '#ffffff',
		fontSize: 28,
		fontWeight: '800',
		textAlign: 'center',
	},
	role: {
		color: '#8fb4ff',
		fontSize: 16,
		fontWeight: '700',
		textAlign: 'center',
		marginTop: 6,
	},
	aboutBlock: {
		marginTop: 24,
		gap: 12,
	},
	sectionTitle: {
		color: '#ffffff',
		fontSize: 20,
		fontWeight: '800',
	},
	aboutText: {
		color: '#d5e1f0',
		fontSize: 15,
		lineHeight: 23,
	},
});
