import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { styles } from './songItem.styles';

export interface Song {
  image: string | undefined;
  title: string;
  artist: string;
  album: string;
  year: string;
}

export function SongItem({ image, title, artist, album, year }: Song) {
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
