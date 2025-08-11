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
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { MaterialIcons } from '@expo/vector-icons';
import { userInfo, popularPlaylists } from '@/data/userData';

export default function UserConcerts() {
  const scrollRef = useRef(null);

  return (
    <View style={{ flex: 1, position: 'relative' }}> 
    <ScrollView 
    ref={scrollRef}
    contentContainerStyle={{ flexGrow: 1, backgroundColor:'#101010', paddingBottom: 200 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'left', flexWrap: 'wrap', padding: 20 }}>
          <ThemedText style={styles.headerTitle}>
          @{userInfo.username} has been to{' '}
          <ThemedText style={[styles.headerTitle, { color: '#FF9EDF' }]}>{userInfo.concerts}</ThemedText>{' '}
          Concerts
        </ThemedText>
      </View>


    </ScrollView>
    {/* floating arrow */}
    <TouchableOpacity
            onPress={() => {
              console.log('arrow pressed');
              if (scrollRef.current) {
                scrollRef.current.scrollToEnd({ animated: true });
              }
            }}
            style={styles.arrowButton}
          >
            <MaterialIcons name="arrow-downward" size={20} color="black" />
          </TouchableOpacity>
    </View> 
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'InterBold',
    fontSize: 30,
    color: 'white',
    lineHeight: 30,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#FF9EDF',
    padding: 10,
    borderRadius: 24,
    zIndex: 9999,       
    elevation: 12,      
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
},
});