import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, MapEvent } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import mapMarkerImg from '../../images/map-marker.png';

import styles from './styles';

export interface Position {
  latitude: number;
  longitude: number;
}

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation();

  const [position, setPosition] = useState<Position>({ latitude: 0, longitude: 0 } as Position);

  const handleNextStep = useCallback((position: Position) => {
    navigation.navigate('OrphanageData', { position });
  }, []);

  const handleSelectMapPosition = useCallback((event: MapEvent) => {
    setPosition(event.nativeEvent.coordinate);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{ latitude: position.latitude, longitude: position.longitude }}
          />
        )}
      </MapView>

      {position.latitude !== 0 && (
        <RectButton style={styles.nextButton} onPress={() => handleNextStep(position)}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
      )}
    </View>
  )
}

export default SelectMapPosition;
