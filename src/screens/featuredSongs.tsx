import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { list_songs } from '../resources';
import { Song, SongItem } from '../componets/songItem';

export function FeaturedSongs() {
  const renderItem = ({ item }: { item: Song }) => {
    const { image, album, artist, title, year } = item;

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
