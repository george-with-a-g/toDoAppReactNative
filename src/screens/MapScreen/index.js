import { View, Image, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './style';//styles for this screen.

const MapScreen  = ({route}) => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: route.params.locationInfo.coords.latitude,
                    longitude: route.params.locationInfo.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
            >
                <Marker coordinate={{ latitude: route.params.locationInfo.coords.latitude, longitude: route.params.locationInfo.coords.longitude }}></Marker>
            </MapView>
        </View>
    )
}
export default MapScreen
