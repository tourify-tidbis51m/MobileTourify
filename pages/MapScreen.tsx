import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import locationsService from "../services/locationService";
import MapView, { Marker } from "react-native-maps";
import MapModal from "../components/mapModal";

const Map = () => {
  const { user } = useAuth();
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const pinTypeImages = {
    event: "https://cdn-icons-png.flaticon.com/512/1968/1968779.png",
    restaurant: "https://cdn-icons-png.flaticon.com/512/948/948036.png",
    "Lugar Histórico": "https://cdn-icons-png.flaticon.com/512/1501/1501479.png",
    Museo: "https://cdn-icons-png.flaticon.com/512/2747/2747427.png",
    Teatro: "https://cdn-icons-png.flaticon.com/512/571/571940.png",
    "Pueblo Mágico": "https://cdn-icons-png.flaticon.com/512/1151/1151658.png",
    Monumento: "https://cdn-icons-png.flaticon.com/512/3655/3655070.png",
  };

  const getImageUri = (location) => {
    if (location.pintype == "historical") {
      return pinTypeImages[location.loctype];
    } else {
      return pinTypeImages[location.pintype];
    }
  };

  useEffect(() => {
    const fetchLocations  = async () => {
      try {
        const data = await locationsService.fetchLocations(user.token);
        setLocations(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchLocations();
  }, [user.token]);

  const handleMarkerPress = (location) => {
    setSelectedLocation(location);
    setModalVisible(true);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: 28.643951810520395,
          longitude: -106.0729363634578,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {locations.map((location) => (
          <Marker
            key={location._id}
            coordinate={{
              latitude: parseFloat(location.coordinate.split(", ")[0]),
              longitude: parseFloat(location.coordinate.split(", ")[1]),
            }}
            onPress={() => handleMarkerPress(location)}
          >
            <Image
              source={{ uri: getImageUri(location) }}
              style={{ width: 25, height: 25 }}
            />
          </Marker>
        ))}
        
      </MapView>
      {selectedLocation && (
        <MapModal 
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          location={selectedLocation}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;
