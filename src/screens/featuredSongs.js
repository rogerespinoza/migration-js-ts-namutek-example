import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React from 'react';
import { list_songs } from '../resources';
import { SongItem } from '../componets/songItem';

export function FeaturedSongs() {
  const renderItem = ({ item: { image, album, artist, year, title } }) => {
    // console.log(item);
    return (
      <SongItem
        album={album}
        title={title}
        artist={artist}
        image={image}
        year={year}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={list_songs} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
});
