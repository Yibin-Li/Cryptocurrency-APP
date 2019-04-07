import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { images } from './../Utils/CoinIcons';

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  image: {
    width: 35,
    height: 35,
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold"
  },
  coinName: {
      marginTop: 10,
      marginLeft: 5,
      marginRight: 20
  },
  seperator: {
      marginTop: 10,
  },
  coinPriceMinus: {
      color: "#ffffff",
      backgroundColor: "#ff4f4f",
      alignContent: "center",
      marginTop: 10,
      marginLeft: "auto",
      marginRight: 10,
      fontWeight: "bold",
  },
  coinPricePlus: {
      color: "#ffffff",
      backgroundColor: "#42f483",
      marginTop: 10,
      marginLeft: "auto",
      marginRight: 10,
      fontWeight: "bold",
  },
  statisticsContainer: {
      display: "flex",
      borderBottomColor: "#FAFAFA",
      borderBottomWidth: 2,
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-around"
  },
  percentChangePlus: {
      color: "#00BFA5",
      fontWeight: "bold",
      marginLeft: 5
  },
  percentChangeMinus: {
      color: "#DD2C00",
      fontWeight: "bold",
      marginLeft: 5
  },
  priceChangeMinus: {
    backgroundColor: "#ff4f4f",
    color: "#ffffff",
    width: 300,
    //border: 25,
    padding: 25,
    margin: 25
  }
});

const { container, image, bold } = styles;

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_1h, percent_change_24h, percent_change_7d }) => {
    return (
      <View style={container}>
        <View style={styles.upperRow}>
          <Image
            style={styles.image}
            source={{ uri: images[symbol] }}
            />
            <Text style={styles.coinSymbol}>{symbol}</Text>
            <Text style={styles.seperator}>|</Text>
            <Text style={styles.coinName}>{coin_name}</Text>
            <Text style={percent_change_1h < 0 ? styles.coinPriceMinus : styles.coinPricePlus }>   ${price_usd}   </Text>
        </View>

        <View style={styles.statisticsContainer}>
        <Text>1h:
          <Text style={percent_change_1h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {percent_change_1h} % </Text>
        </Text>
          <Text>24h:
            <Text style={percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {percent_change_24h} % </Text>
          </Text>
          <Text>7d:
            <Text style={percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {percent_change_7d} % </Text>
          </Text>
        </View>
      </View>
    );
}

export default CoinCard;
