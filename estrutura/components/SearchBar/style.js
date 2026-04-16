import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    maxWidth: 400,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    fontSize: 16,
  },
  searchButton: {
    width: "100%",
    maxWidth: 400,
    height: 50,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  cancelButton: {
    width: "100%",
    maxWidth: 400,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#FF3B30",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default styles;