import React from 'react';
import { FlatList, Text, View, Image, Dimensions } from 'react-native';

const data = [
  { id: '1', title: 'penting dadi', image: 'https://cdn.oneesports.gg/cdn-data/2024/02/HonkaiStarRail_Firefly_Wallpaper.jpg' },
  { id: '2', title: 'penting dadi', image: 'https://cdn.oneesports.gg/cdn-data/2024/02/HonkaiStarRail_Firefly_Wallpaper.jpg' },
  { id: '3', title: 'penting dadi', image: 'https://cdn.oneesports.gg/cdn-data/2024/02/HonkaiStarRail_Firefly_Wallpaper.jpg' },
  { id: '4', title: 'penting dadi', image: 'https://cdn.oneesports.gg/cdn-data/2024/02/HonkaiStarRail_Firefly_Wallpaper.jpg' },
  { id: '5', title: 'penting dadi', image: 'https://cdn.oneesports.gg/cdn-data/2024/02/HonkaiStarRail_Firefly_Wallpaper.jpg' },
  { id: '6', title: 'penting dadi', image: 'https://cdn.oneesports.gg/cdn-data/2024/02/HonkaiStarRail_Firefly_Wallpaper.jpg' },
  { id: '7', title: 'penting dadi', image: 'https://cdn.oneesports.gg/cdn-data/2024/02/HonkaiStarRail_Firefly_Wallpaper.jpg' },
  { id: '8', title: 'penting dadi', image: 'https://cdn.oneesports.gg/cdn-data/2024/02/HonkaiStarRail_Firefly_Wallpaper.jpg' },
  { id: '9', title: 'penting dadi', image: 'https://cdn.oneesports.gg/cdn-data/2024/02/HonkaiStarRail_Firefly_Wallpaper.jpg' },
  { id: '10', title: 'penting dadi', image: 'https://cdn.oneesports.gg/cdn-data/2024/02/HonkaiStarRail_Firefly_Wallpaper.jpg' },
 
];

const MyComponent = () => {
  const renderItem = ({ item }) => (
    <View style={{
      flex: 1,
      margin: 10,
      alignItems: 'center',
      backgroundColor: 'grey'
    }}>
      <Image
        style={{
          width: (Dimensions.get('window').width / 2) - 30,
          height: 150,
          marginBottom: 10,
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 10,
        }}
        source={{ uri: item.image }}
      />
      <Text style={{ 
        fontSize: 16, 
        fontWeight: 'bold'
        }}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2} 
      contentContainerStyle={{ padding: 10 }}
    />
  );
};

export default MyComponent;