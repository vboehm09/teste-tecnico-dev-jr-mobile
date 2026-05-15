import { useState } from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const projects = [
	{
		id: '1',
		name: 'Pokedex Mobile',
		description: 'Aplicativo de consulta de Pokémons com dados reais e navegação fluida.',
		stack: 'React Native, Expo e armazenamento local, API pública de Pokémon',
	},
	{
		id: '2',
		name: 'Lista de Compras',
		description: 'Aplicativo para criar e gerenciar listas de compras com itens categorizados.',
		stack: 'React Native, Expo e armazenamento local',
	},
	{
		id: '3',
		name: 'Guia Turistico',
		description: 'App de guia turístico com informações sobre pontos de interesse, mapas e dicas de viagem.',
		stack: 'React Native, Expo, API de mapas e dados turísticos públicos',
	},
	{
		id: '4',
		name: 'MindFlow',
		description: 'Aplicativo de organização pessoal e produtividade com foco em fluxos de trabalho simples.',
		stack: 'React Native, Expo e armazenamento local',
	},
	{
		id: '5',
		name: 'CineFlix',
		description: 'App de consulta de filmes e séries com avaliações, trailers e recomendações personalizadas.',
		stack: 'React Native, Expo e API pública de filmes',
	}
];

const contactItems = [
	{
		id: 'email',
		label: 'E-mail',
		value: 'victor.b.assumpcao@aluno.senai.br',
		icon: require('../assets/gmail.png'),
		iconSize: 36,
	},
	{
		id: 'github',
		label: 'GitHub',
		value: 'github.com/vboehm09',
		icon: require('../assets/github.png'),
	},
	{
		id: 'linkedin',
		label: 'LinkedIn',
		value: 'linkedin.com/in/victorboehm',
		icon: require('../assets/linkedin.png'),
	},
	{
		id: 'instagram',
		label: 'Instagram',
		value: 'v_boehm_',
		icon: require('../assets/instagram.png'),
	},
	{
		id: 'whatsapp',
		label: 'WhatsApp',
		value: '+55 19 99186-3182',
		icon: require('../assets/whatsapp.png'),
		iconSize: 48,
	},
];

export default function ProjetosScreen() {
	const [message, setMessage] = useState('');

	const handleSendContact = () => {
		if (!message.trim()) {
			Alert.alert('Digite uma mensagem', 'Escreva uma mensagem antes de enviar o contato.');
			return;
		}

		Alert.alert('Contato enviado', 'Mensagem registrada com sucesso para demonstração do fluxo.');
		setMessage('');
	};

	return (
		<ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
			<Text style={styles.title}>Projetos e Contato</Text>
			<Text style={styles.subtitle}>
				A tela reúne projetos de exemplo e uma área de contato com os principais canais do perfil.
			</Text>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Projetos</Text>

				{projects.map((project) => (
					<View key={project.id} style={styles.projectCard}>
						<Text style={styles.projectName}>{project.name}</Text>
						<Text style={styles.projectDescription}>{project.description}</Text>
						<Text style={styles.projectStack}>{project.stack}</Text>
					</View>
				))}
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Contato</Text>

				<View style={styles.contactCard}>
					{contactItems.map((contact) => (
						<View key={contact.id} style={styles.contactItem}>
							<View style={styles.contactIconWrap}>
								<Image
									source={contact.icon}
									style={[styles.contactIcon, { width: contact.iconSize || 28, height: contact.iconSize || 38 }]}
								/>
							</View>
							<View style={styles.contactTextBlock}>
								<Text style={styles.contactLabel}>{contact.label}</Text>
								<Text style={styles.contactValue}>{contact.value}</Text>
							</View>
						</View>
					))}

					<Text style={styles.label}>Mensagem</Text>
					<TextInput
						value={message}
						onChangeText={setMessage}
						placeholder="Escreva uma mensagem para contato"
						placeholderTextColor="#7f93ad"
						multiline
						numberOfLines={5}
						textAlignVertical="top"
						style={styles.input}
					/>

					<View style={styles.buttonArea}>
						<Button title="Enviar contato" onPress={handleSendContact} color="#4c87d9" />
					</View>
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
	title: {
		color: '#ffffff',
		fontSize: 28,
		fontWeight: '800',
	},
	subtitle: {
		color: '#b3c5dc',
		fontSize: 14,
		lineHeight: 20,
		marginTop: 8,
	},
	section: {
		marginTop: 18,
	},
	sectionTitle: {
		color: '#ffffff',
		fontSize: 20,
		fontWeight: '800',
		marginBottom: 12,
	},
	projectCard: {
		backgroundColor: '#10243f',
		borderRadius: 22,
		padding: 16,
		borderWidth: 1,
		borderColor: '#1f3b63',
		marginBottom: 12,
	},
	projectName: {
		color: '#ffffff',
		fontSize: 17,
		fontWeight: '800',
	},
	projectDescription: {
		color: '#d5e1f0',
		fontSize: 14,
		lineHeight: 20,
		marginTop: 6,
	},
	projectStack: {
		color: '#8fb4ff',
		fontSize: 13,
		fontWeight: '700',
		marginTop: 10,
	},
	contactCard: {
		backgroundColor: '#10243f',
		borderRadius: 22,
		padding: 16,
		borderWidth: 1,
		borderColor: '#1f3b63',
	},
	contactItem: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#1f3350',
	},
	contactIconWrap: {
		width: 42,
		height: 42,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 12,
	},
	contactIcon: {
		width: 28,
		height: 38,
		resizeMode: 'contain',
	},
	contactTextBlock: {
		flex: 1,
	},
	contactLabel: {
		color: '#ffffff',
		fontSize: 14,
		fontWeight: '800',
	},
	contactValue: {
		color: '#d5e1f0',
		fontSize: 14,
		lineHeight: 20,
		marginTop: 2,
	},
	label: {
		color: '#ffffff',
		fontSize: 15,
		fontWeight: '700',
		marginTop: 14,
		marginBottom: 8,
	},
	input: {
		minHeight: 120,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: '#355b88',
		backgroundColor: '#0c1728',
		color: '#ffffff',
		paddingHorizontal: 14,
		paddingVertical: 12,
		fontSize: 15,
	},
	buttonArea: {
		marginTop: 14,
	},
});
