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
						Neste projeto, desenvolvido como um teste técnico para Desenvolvedor Mobile Jr., apliquei as melhores práticas de organização e performance no React Native. Em vez de recorrer a bibliotecas de UI prontas, optei por construir uma navegação por abas (bottom tabs) totalmente customizada utilizando apenas os componentes core do framework. Essa decisão garantiu uma aplicação extremamente leve e me permitiu demonstrar um domínio sólido sobre o ciclo de vida dos componentes e a estruturação de layouts acessíveis e responsivos.
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
