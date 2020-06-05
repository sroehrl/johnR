import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import InvitationCard from './InvitationCard';
import { Dimensions } from 'react-native';

export default function CaroselView(props) {
  const deviceWidth = Dimensions.get('window').width;
  const [data,setData] = React.useState([])
  React.useState(async ()=>{
    let response = await fetch(
        'https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/cards.json',
    {
      method:'GET'
    });
    
    let parseObject = await response.json();
    setData(item => [...parseObject])
  },[])

  function renderItem({ item, index }) {
    //Render invitation
    return (
      <View>
        <InvitationCard item={item} />
      </View>
    );
  }

    return (
      <View style={styles.container}>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderHeight={200}
          sliderWidth={deviceWidth}
          itemWidth={deviceWidth * 0.8}
        />
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 170,
    paddingTop: 15,
  },
});