import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginVertical: 10,
        marginHorizontal: 18,
        flexDirection: 'row', // Alinha o conteúdo à esquerda e ações à direita
        alignItems: 'center',
        borderLeftWidth: 6, // Espessura da barra de prioridade
        
        // Sombra para dar profundidade (iOS)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        
        // Sombra para Android
        elevation: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2d3436',
        marginBottom: 4,
    },
    desc: {
        fontSize: 14,
        color: '#636e72',
        lineHeight: 20,
        marginBottom: 8,
    },
    badge: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 6,
    },
    date: {
        fontSize: 11,
        color: '#b2bec3',
        fontWeight: '500',
    },
    actions: {
        flexDirection: 'column', // Empilha Edit e Delete verticalmente
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 12,
        borderLeftWidth: 1,
        borderLeftColor: '#f1f2f6', // Divisória sutil entre texto e botões
        minHeight: 80,
    },
    icon: {
        fontSize: 13,
        fontWeight: '600',
        paddingVertical: 5,
        textTransform: 'uppercase',
    }
});

export default styles;