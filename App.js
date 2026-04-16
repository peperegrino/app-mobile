import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from './src/styles/global';

import AddTask from './estrutura/components/AddTask/index.jsx';
import EditTask from './estrutura/components/EditTask/index.jsx';
import TaskList from './estrutura/components/TaskModal/index.jsx';
import SearchBar from './src/components/SearchBar';

export default function App() {

  const [tasks, setTasks] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [addVisible, setAddVisible] = React.useState(false);
  const [editVisible, setEditVisible] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now().toString() }]);
    setAddVisible(false);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
    setAddVisible(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => t.title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciador de Tarefas</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => setAddVisible(true)}>
        <Text style={styles.addButtonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchButton} onPress={() => setSearchVisible(true)}>
        <Text style={styles.searchButtonText}>Buscar Tarefa</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
            item={item}
            onDelete={deleteTask}
            onEdit={(task) => {
              setSelectedTask(task);
              setEditVisible(true);
            }}
          />
        )}
      />
      <AddTask visible={addVisible} onClose={() => setAddVisible(false)} onSave={addTask} />
      <EditTask visible={editVisible} onClose={() => setEditVisible(false)} task={selectedTask} onSave={updateTask} />
      <SearchBar visible={searchVisible} onClose={() => setSearchVisible(false)} onSearch={setSearchText} />
    </View>

  );
}