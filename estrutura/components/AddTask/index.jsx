import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native-web";
import styles from "./styles";

const AddTask = ({ visible, onClose, onAdd }) => {
    // Estados iniciais vazios para uma nova tarefa
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Média");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleSave = () => {
        if (!title.trim()) {
            alert("O título é obrigatório!");
            return;
        }

        const newTask = {
            id: Math.random().toString(36).substr(2, 9), // Gera um ID temporário
            title,
            description,
            priority,
            StartDate: startDate,
            EndDate: endDate,
        };

        onAdd(newTask);
        // Limpa os campos após salvar
        setTitle("");
        setDescription("");
        setStartDate("");
        setEndDate("");
        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.modalOverlay}>
                <View style={styles.container}>
                    <Text style={styles.modalTitle}>Nova Tarefa</Text>

                    <TextInput 
                        placeholder="Título da tarefa"
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                    />

                    <TextInput 
                        placeholder="Descrição (opcional)"
                        multiline
                        numberOfLines={3}
                        style={[styles.input, styles.textArea]}
                        value={description}
                        onChangeText={setDescription}
                    />

                    <View style={styles.row}>
                        <TextInput 
                            placeholder="Início (DD/MM)"
                            style={[styles.input, { flex: 1, marginRight: 5 }]}
                            value={startDate}
                            onChangeText={setStartDate}
                        />
                        <TextInput 
                            placeholder="Fim (DD/MM)"
                            style={[styles.input, { flex: 1, marginLeft: 5 }]}
                            value={endDate}
                            onChangeText={setEndDate}
                        />
                    </View>

                    <TouchableOpacity style={styles.addButton} onPress={handleSave}>
                        <Text style={styles.buttonText}>Criar Tarefa</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                        <Text style={styles.cancelText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default AddTask;

