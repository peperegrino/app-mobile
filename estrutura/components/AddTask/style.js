
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo escurecido para foco no modal
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        maxWidth: 450, // Garante que na web o modal não fique gigante
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 24,
        // Sombra para Android
        elevation: 10,
        // Sombra para iOS/Web
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1e272e',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#f8f9fa',
        borderRadius: 12,
        padding: 14,
        fontSize: 16,
        color: '#2d3436',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#e9ecef',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top', // Alinha o texto no topo em inputs de múltiplas linhas
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    inputHalf: {
        flex: 0.48, // Quase metade, deixando um pequeno gap no meio
    },
    addButton: {
        backgroundColor: '#6c5ce7', // Roxo vibrante/moderno
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#6c5ce7',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    cancelButton: {
        marginTop: 15,
        padding: 10,
        alignItems: 'center',
    },
    cancelText: {
        color: '#a4b0be',
        fontWeight: '600',
        fontSize: 14,
    }
});

export default styles;