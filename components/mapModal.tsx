import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Image, Modal, Pressable, TouchableOpacity } from "react-native";

const MapModal = ({ visible, onClose, location }) => {

  const navigation = useNavigation();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>{location.name}</Text>
          <Image 
            source={{ uri: location.image }} 
            style={location.pintype === 'event' ? styles.imageEvent : styles.image} 
          />
          {location.pintype !== "historical" && (
            <Text style={styles.description}>{location.description}</Text>
          )}

          <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Cerrar</Text>
          </Pressable>
          {location.pintype == "historical" && (
            <TouchableOpacity 
            style={[styles.button, styles.buttonClose]} 
            onPress={() => {
              onClose(); 
              navigation.navigate('Place', { id: location._id })}}
            >
              <Text style={styles.textStyle}>Ver información</Text>
            </TouchableOpacity>
          )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  image: {
    width: 250,
    height: 160,
    marginBottom: 15,
  },
  imageEvent: {
    width: 270,
    height: 295,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});

export default MapModal;
