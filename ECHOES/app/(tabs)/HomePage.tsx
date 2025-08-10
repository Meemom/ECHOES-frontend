import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatList,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';

//placeholder images
const PerfectForYou = [
    {id: '1', title: 'CLAIRO VIBES', image: require('@/assets/images/CLAIRO-VIBES.png')},
    {id: '2', title: 'Magdalena Bay', image: require('@/assets/images/Magdalena-Bay.png')},
    {id: '3', title: 'Gym 🔥', image: require('@/assets/images/GYM.png')},
];

const TrySomethingNew =  [
    {id: '1', title: 'Jubilee', image: require('@/assets/images/jubilee.png')},
    {id: '2', title: 'Atout. Point De Vue', image: require('@/assets/images/Atout.png')},
    {id: '3', title: 'ROMANTIQUE (Mastered by Bernie Grundman', image: require('@/assets/images/ROMANTIQUE.png')},
];

const RecentlyPlayed = [
    {id: '1', title: 'DOPAMINE', image: require('@/assets/images/DOPAMINE.png')},
    {id: '2', title: 'I-69', image: require('@/assets/images/I-69.png')},
    {id: '3', title: "You Can't Kill Me", image: require('@/assets/images/you-cant-kill-me.png')},
];

const PopularWithFriends = [
    {id: '1', title: 'ARIZONA BABY', image: require('@/assets/images/arizona-baby.png')},
    {id: '2', title: 'Bloody Kisses', image: require('@/assets/images/bloody-kisses.png')},
    {id: '3', title: "No Way Out", image: require('@/assets/images/no-way-out.png')},
];

// TO DO: figure out how to change circle positions every time the page loads
export function BackgroundGlow( { colors = ['#BD7CBE', '#5B60F6', '#BBBE7C']}) {
    return (
        <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
      <Defs>
        {/* glow 1 */}
        <RadialGradient id="grad1" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={colors[0]} stopOpacity="0.3" />
          <Stop offset="100%" stopColor="#121212" stopOpacity="1" />
        </RadialGradient>

        {/* glow 2 */}
        <RadialGradient id="grad2" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={colors[1]} stopOpacity="0.4" />
          <Stop offset="100%" stopColor="#121212" stopOpacity="0" />
        </RadialGradient>

        {/* glow 3 */}
        <RadialGradient id="grad3" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={colors[2]} stopOpacity="0.4" />
          <Stop offset="100%" stopColor="#121212" stopOpacity="0" />
        </RadialGradient>
      </Defs>

      <Circle cx="20%" cy="10%" r="50%" fill="url(#grad1)" />
      <Circle cx="100%" cy="70%" r="50%" fill="url(#grad2)" />
      <Circle cx="20%" cy="100%" r="80%" fill="url(#grad3)" />
    </Svg>
    );
  }

function ColorChangingText({ text, style }) {
    const [clicked, setClicked] = useState(false);
  
    return (
      <TouchableOpacity onPress={() => setClicked(!clicked)}>
        <ThemedText style={[styles.headerTitle, clicked && styles.clickedTitle]}>
          {text}
        </ThemedText>
      </TouchableOpacity>
    );
}

// section component for section title + horizontal song list
const Section = ({ title, data }) => {
    const listRef = useRef(null);

    const handleNext = () => {
        if (listRef.current) {
        listRef.current.scrollToOffset({
            offset: 150, 
            animated: true,
        });
        }
    };

    return (
        <View style={styles.section}>
        {/* Section Header with Arrow */}
        <View style={styles.header}>
          <ColorChangingText style={styles.headerTitle} text={title} />
          <TouchableOpacity style={styles.arrowButton} onPress={handleNext}>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>
        </View>
  
        {/* Horizontal List */}
        <FlatList
          ref={listRef}
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <ThemedText 
              style={styles.songTitle}
              numberOfLines={1}
              ellipsizeMode='tail'
              >
                {item.title}
              </ThemedText>
            </TouchableOpacity>
          )}
        />
      </View>
);
}

export default function HomePage() {

    return (
        <View style={{ flex: 1, backgroundColor: '#121212' }}>
            <BackgroundGlow />
            <ScrollView style={styles.container}>
                {/* Perfect For You */}
                <Section title="Perfect for You" data={PerfectForYou}/> 

                {/* Try Something New */}
                <Section title="Try Something New" data={TrySomethingNew} />

                {/* Recently Played */}
                <Section title="Recently Played" data={RecentlyPlayed} />

                {/* Popular with Friends */}
                <Section title="Popular with Friends" data={PopularWithFriends} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
     },
     section: {
        marginBottom: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      clickedTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF9EDF',
      },
      arrowButton: {
        backgroundColor: '#5B60F6',
        borderRadius: 20,
        padding: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 8,
      },
      card: {
        marginHorizontal: 10,
        alignItems: 'center',
      },
      image: {
        width: 108,
        height: 108,
      },
      songTitle: {
        color: 'white',
        marginTop: 6,
        fontSize: 12,
        opacity: 0.6, 
        maxWidth: 90,
      },
});