import { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const projects = [
	{
		id: '1',
		name: 'DevStart Schedule',
		description: 'Aplicativo de agenda para organizar tarefas e compromissos do dia.',
		stack: 'React Native, Expo e armazenamento local',
	},
	{
		id: '2',
		name: 'Portfolio Mobile',
		description: 'Tela de apresentação profissional com foco em clareza visual.',
		stack: 'React Native, StyleSheet e componentes básicos',
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
					<Text style={styles.contactLine}>E-mail: victor.b.assumpcao@aluno.senai.br</Text>
					<Text style={styles.contactLine}>GitHub: github.com/vboehm09</Text>
					<Text style={styles.contactLine}>LinkedIn: linkedin.com/in/victorboehm</Text>

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
	contactLine: {
		color: '#d5e1f0',
		fontSize: 14,
		lineHeight: 21,
		marginBottom: 4,
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
