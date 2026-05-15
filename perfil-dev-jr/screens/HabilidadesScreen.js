import { FlatList, StyleSheet, Text, View } from 'react-native';

const skills = [
	{ id: '1', name: 'React Native', detail: 'Criação de interfaces mobile com componentes nativos.' },
	{ id: '2', name: 'Expo', detail: 'Desenvolvimento rápido e execução simplificada do app.' },
	{ id: '3', name: 'JavaScript', detail: 'Estrutura de lógica e manipulação de dados da interface.' },
	{ id: '4', name: 'StyleSheet', detail: 'Estilização organizada e consistente entre as telas.' },
	{ id: '5', name: 'Git e GitHub', detail: 'Controle de versão e organização do projeto.' },
	{ id: '6', name: 'Responsividade', detail: 'Atenção ao espaçamento, leitura e adaptação visual.' },
	{ id: '7', name: 'NodeJS', detail: 'Configuração de ambiente e scripts para desenvolvimento.' },
	{ id: '8', name: 'Python', detail: 'Automatização de tarefas e organização de arquivos do projeto.' },
	{ id: '9', name: 'UI/UX Design', detail: 'Criação de interfaces intuitivas e experiências de usuário otimizadas.' }
];

export default function HabilidadesScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Habilidades</Text>
			<Text style={styles.subtitle}>
				Lista de competências técnicas e comportamentais usadas no desenvolvimento do projeto.
			</Text>

			<FlatList
				data={skills}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.list}
				renderItem={({ item, index }) => (
					<View style={styles.skillCard}>
						<View style={styles.skillBadge}>
							<Text style={styles.skillBadgeText}>{index + 1}</Text>
						</View>
						<View style={styles.skillContent}>
							<Text style={styles.skillName}>{item.name}</Text>
							<Text style={styles.skillDetail}>{item.detail}</Text>
						</View>
					</View>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 18,
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
	list: {
		paddingTop: 18,
		paddingBottom: 24,
		gap: 12,
	},
	skillCard: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		backgroundColor: '#10243f',
		borderRadius: 22,
		padding: 16,
		borderWidth: 1,
		borderColor: '#1f3b63',
	},
	skillBadge: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#244b7a',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 14,
	},
	skillBadgeText: {
		color: '#ffffff',
		fontWeight: '800',
	},
	skillContent: {
		flex: 1,
	},
	skillName: {
		color: '#ffffff',
		fontSize: 17,
		fontWeight: '800',
	},
	skillDetail: {
		color: '#d5e1f0',
		fontSize: 14,
		lineHeight: 20,
		marginTop: 4,
	},
});
