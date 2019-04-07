import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

  componentWillMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    console.log(crypto);
    return crypto.data.map((coin, index) =>
      <CoinCard
      key={index}
      coin_name={coin.name}
      symbol={coin.symbol}
      price_usd={coin.price_usd}
      percent_change_1h={coin.percent_change_1h}
      percent_change_24h={coin.percent_change_24h}
      percent_change_7d={coin.percent_change_7d}
      />
    )
  }

  render() {
    const { crypto } = this.props;

    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={"loading..."}
            textStyle={{color: '#253145'}}
          />
        </View>
      )
    }

    return (
      // <ScrollView contentContainerStyle={contentContainer}>
      //   {this.renderCoinCards()}
      // </ScrollView>
      <ScrollView>
        {this.renderCoinCards()}
      </ScrollView>
    )
  }
}

function mapStateToPros(state) {
  return {
    crypto: state.crypto
  }
}

const styles = {
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55
  }
}

export default connect(mapStateToPros, { FetchCoinData })(CryptoContainer)
