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
  TextInput, 
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';
import { BackgroundGlow, Section} from '@/app/(tabs)/HomePage';
import { MaterialIcons } from '@expo/vector-icons';

const filterOptions=[
    'Song',
    'Genre',
    'Release Date',
];

const recommendedSongs = [
    {id: '1', title: 'Other People', image: require('@/assets/images/CLAIRO-VIBES.png')},
    {id: '2', title: 'PASSENGER', image: require('@/assets/images/Magdalena-Bay.png')},
    {id: '3', title: 'Carolina', image: require('@/assets/images/GYM.png')},
]

// choosing songs based on emotion
function EmotionsTab() {
    const [emotions, setEmotions] = useState([]);
    const [input, setInput] = useState('');

    const addEmotion = (emotion) => {
        if (emotions && !emotions.includes(emotion)) {
            setEmotions([...emotions, emotion]);
        }
        setInput('');
    };

    const removeEmotion = (emotion) => {
        setEmotions(emotions.filter((e) => e !== emotion));
      };

      return (
        <View>
            {/* input to add new emotion */}
            <View style={{ alignItems: 'center' }}>
                <TextInput
                style={styles.input}
                placeholder="Type an emotion..."
                value={input}
                onChangeText={setInput}
                onSubmitEditing={() => addEmotion(input.trim())}
                />
                <TouchableOpacity
                style={styles.addButton}
                onPress={() => addEmotion(input.trim())}
                >   
                </TouchableOpacity>
            </View>

            {/* predefined emotions */}
            {['Happy', 'Sad', 'Excited', 'Tired'].map((emo) => (
            <TouchableOpacity
                key={emo}
                style={styles.predefinedButton}
                onPress={() => addEmotion(emo)}
            >
                <ThemedText style={styles.predefinedText}>{emo}</ThemedText>
            </TouchableOpacity>
            ))}

            {/* selected emotions */}
            <FlatList
            data={emotions}
            keyExtractor={(item) => item}
            horizontal
            style={{ width: '100%' }}                 
            contentContainerStyle={styles.selectedListContent}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
            <View style={styles.chip}>
                <ThemedText style={styles.chipText}>{item}</ThemedText>
                <TouchableOpacity onPress={() => removeEmotion(item)}>
                <ThemedText style={styles.removeText}> ✕ </ThemedText>
                </TouchableOpacity>
            </View>
            )}
        />
        </View>
      );
}

export default function PerfectForYou() {
    const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);

    const handlePress = () => {
        const currentIndex = filterOptions.indexOf(selectedFilter);
        const nextIndex = (currentIndex + 1) % filterOptions.length;
        setSelectedFilter(filterOptions[nextIndex]);
      };    

    return (
        <View style={{ flex: 1, backgroundColor: '#121212' }}>
        <BackgroundGlow colors={['#5B60F6', '#BD7CBE', '#BBBE7C']}/>
            <ScrollView style={styles.container}>
                <ThemedText style={styles.headerTitle}>Our Picks For You</ThemedText>

                {/* filter bar */}
                <View style={[styles.filterBar, { alignSelf: 'flex-start' }]}>
                    <ThemedText style={styles.filterLabel}>Sort by</ThemedText>
                    <TouchableOpacity style={styles.filterButton}>
                        <ThemedText style={styles.filterButtonText}>{selectedFilter}</ThemedText>
                        <MaterialIcons name="close" size={20} color="white" style={{ marginLeft: 6 }} /> 
                    </TouchableOpacity>
                </View>

                <Section data={recommendedSongs} />

                {/* songs based on moods */}
                <ThemedText style={styles.headerTitle}>How are you feeling today?</ThemedText>
                <View style={styles.emotionsTab}>
                    <EmotionsTab />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    headerTitle: {
        fontSize: 24,
        fontFamily: 'interBold',
        color: 'white',
        padding: 30,
      },
    filterBar: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between', //
        width: '80%',
        borderRadius: 20,
        backgroundColor: 'black',
        opacity: 0.9,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 8,
        alignSelf: 'center',
        marginLeft: 20, 
        paddingHorizontal: 10,
        paddingVertical: 10,
      },
      filterLabel: {
        fontFamily: 'InterLight',
        fontSize: 18,
        color: 'white',
      },
      filterButton: {
        backgroundColor: '#5B60F6',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 3,
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        justifyContent: 'space-between',
      },
      filterButtonText: {
        fontFamily: 'InterMedium',
        fontSize: 16,
        color: 'white',
      },
      emotionsTab: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'column',    
        alignItems: 'stretch',     
        justifyContent: 'flex-start',
        borderRadius: 20,
        backgroundColor: 'black',
        opacity: 0.9,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        overflow: 'hidden',
      },
      inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,               
        marginBottom: 10,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
        width: '90%',
        margin: 5,
        alignSelf: 'center',
      },
      addButton: {
        marginLeft: 10,
        backgroundColor: '#4CAF50',
        paddingHorizontal: 15,
        justifyContent: 'center',
        borderRadius: 8,
      },
      addButtonText: {
        color: 'white',
        fontWeight: '600',
      },
      predefinedRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 8,
      },
      predefinedButton: {
        backgroundColor: '#eee',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        margin: 4,
      },
      predefinedText: {
        fontSize: 14,
      },
      chipList: {
        paddingVertical: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '100%',
      },
      chip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ddd',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 8,
      },
      chipText: {
        fontSize: 14,
        marginRight: 6,
      },
      removeText: {
        color: '#ff4444',
        fontWeight: 'bold',
      },
    });