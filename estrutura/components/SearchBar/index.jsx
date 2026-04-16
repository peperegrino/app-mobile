import React, { useState, useEffect } from "react"
import { Modal, Text, TextInput, TouchableOpacity } from "react-native-web";
import styles from "./styles";

const SearchBar = ({ visible, onClose, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <Modal visible={visible} animationType="fade">
            <View style={styles.modal}>
                <Text style={styles.title}>Buscar Tarefa</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o termo de busca..."
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Text style={styles.searchButtonText}>Buscar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};