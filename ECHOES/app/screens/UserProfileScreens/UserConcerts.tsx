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
import { userConcerts } from '@/data/concertData';

export default function UserConcerts() {
  const scrollRef = useRef(null);

  // format date for concert card
  function formatDate(dateStr) {
    const months = [
      'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
      'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];
    
    const [year, month, day] = dateStr.split('-');
    const monthName = months[parseInt(month, 10) - 1];
    
    return `${monthName} ${parseInt(day, 10)} ${year}`;
  }

  // concert card 
  function ConcertCard({ data }) {
    return (
      <TouchableOpacity style={[styles.concertCard, { marginBottom: 10 }]}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={data.image} style={styles.concertImage} />
        <View style={{ flex: 1, paddingVertical: 10, paddingLeft: 10 }}>
          {/* Title container with limited width and marginBottom to separate from date */}
          <View style={{ maxWidth: '100%', marginBottom: 4 }}>
            <ThemedText
              style={styles.concertText}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              <ThemedText style={{ fontFamily: 'InterExtraBold' }}>
                {data.artist}
              </ThemedText>
              {' @ ' + data.venue}
            </ThemedText>
          </View>

          {/* row for date and stars */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ThemedText style={styles.concertDateText}>{formatDate(data.date)}</ThemedText>

            {/* stars design */}
            <View style={{ flexDirection: 'row', marginLeft: 8 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <MaterialIcons
                  key={star}
                  name={star <= data.rating ? 'star' : 'star-border'}
                  size={15}
                  color="black"
                  style={{ marginRight: 2 }}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
      </TouchableOpacity>
   );
  }

  return (
      <View style={{ flex: 1, backgroundColor: '#101010', position: 'relative' }}>
      <View
        style={[
          styles.backgroundShape,
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }
        ]}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <ThemedText style={styles.headerTitle}>
            @{userInfo.username} has been to{' '}
            <ThemedText style={[styles.headerTitle, { color: '#FF9EDF' }]}>{userInfo.concerts}</ThemedText>{' '}
            Concerts
          </ThemedText>
        </View>

        {/* concert list */}
        <View style={{ alignItems: 'center' }}>
          {userConcerts.map((concert) => (
            <ConcertCard key={concert.id} data={concert} />
          ))}
        </View>

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
      </ScrollView>
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
  backgroundShape: {
    backgroundColor: '#5B60F6',
    width: '100%',
    height: '75%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: 700,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: '#FF9EDF',
    padding: 10,
    borderRadius: 24,
    zIndex: 9999,       
    elevation: 12,      
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
},
concertCard: {
  backgroundColor: 'white',
  width: '100%',
  height: 100,
  borderRadius: 30,
},
concertText: {
  color: 'black',
  fontFamily: 'InterBold',
  fontSize: 16,
  margin: 5,
  lineHeight: 17,
  includeFontPadding: false, 
  textAlignVertical: 'center',
},
concertDateText: {
  color: '#5B60F6',
  fontFamily: 'InterBold',
  fontSize: 12, 
},
concertImage: {
  width: 80,
  height: 80,
  borderRadius: 10,
  margin: 10,
}
});