import React, { useState, useEffect } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native-web";
import styles from "./styles";


const EditTask = ({ visible, onClose, task, onSave }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [StartDate, setStartDate] = useState("");
    const [EndDate, setEndDate] = useState("");

    useEffect(() => { setCurrentTask(taskDate); }, [taskDate]);

    return (
        <Modal visible={visible} animationType="fade">
            <View style={styles.modal}>


                <Text style={styles.Title}>Editar Tarefa
                </Text>

                <TextInput value={CurrentTask?.title}
                    style={styles.title}
                    onChangeText={t => setCurrentTask({ ...CurrentTask, title: t })} />

                <TextInput value={CurrentTask?.description}
                    style={styles.description}
                    onChangeText={d => setCurrentTask({ ...CurrentTask, description: d })} />

                <TextInput value={CurrentTask?.StartDate}
                    style={styles.StartDate}
                    onChangeText={s => setCurrentTask({ ...CurrentTask, StartDate: s })} />

                <TextInput value={CurrentTask?.EndDate}
                    style={styles.EndDate}
                    onChangeText={e => setCurrentTask({ ...CurrentTask, EndDate: e })} />

                <TouchableOpacity style={styles.saveButton} onPress={() => onSave(CurrentTask)}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>




            </View>
        </Modal>
    );
};

