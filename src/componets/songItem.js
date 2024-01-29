import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './songItem.styles';

export function SongItem({ image, title, artist, album, year }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist} numberOfLines={1}>
            {artist} - {album}
          </Text>
        </View>
        <Text style={styles.year}>{year}</Text>
      </View>
    </View>
  );
}
