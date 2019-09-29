import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'

const SearchList = ( { header, results, navigation } ) => {

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <FlatList style={styles.list}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
          <TouchableOpacity onPress={ () => navigation.navigate('ShowResults', { id: item.id }) }>
            <ResultsDetail result={item} />
          </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
   container: {
     marginBottom: 10
   },
   list: {
     border:
     flex: 1
   }
})

export default withNavigation(SearchList)
