import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style'; // Importe apenas uma vez

// Simulação de um objeto de tema para as cores de prioridade
const theme = {
    colors: {
        priority: {
            Alta: '#FF5252',
            Média: '#FFC107',
            Baixa: '#4CAF50'
        },
        textSub: '#95a5a6'
    }
};

export default function Card({ item, onDelete, onEdit }) {
    // Definindo a cor baseada na prioridade (ou cor padrão)
    const priorityColor = theme.colors.priority[item.priority] || theme.colors.textSub;

    return (
        <View style={[styles.card, { borderLeftColor: priorityColor }]}>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                
                <Text style={styles.desc} numberOfLines={2}>
                    {item.description}
                </Text>

                {/* Badge de Prioridade */}
                <Text style={[styles.badge, { color: priorityColor }]}>
                    ● {item.priority || 'Sem prioridade'}
                </Text>

                {/* Exibindo as datas corretamente */}
                <Text style={styles.date}>
                    {item.StartDate} - {item.EndDate}
                </Text>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.actionButton} onPress={() => onEdit(item)}>
                    <Text style={[styles.icon, { color: '#2980b9' }]}>Edit</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.actionButton} onPress={() => onDelete(item.id)}>
                    <Text style={[styles.icon, { color: '#e74c3c' }]}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}