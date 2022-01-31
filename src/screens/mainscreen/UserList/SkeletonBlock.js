import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Placeholder, PlaceholderLine, Fade} from 'rn-placeholder'

const Skeleton = ({isFirst}) => {
  return (
    <Placeholder Animation={Fade}>
      <View
        style={isFirst ? [styles.cardRow, {paddingTop: 22}] : styles.cardRow}>
        <PlaceholderLine style={styles.icon} />
        <View style={{marginLeft: 16}}>
          <PlaceholderLine style={styles.textContainer} noMargin />
          <PlaceholderLine style={styles.positionText} />
        </View>
      </View>
    </Placeholder>
  )
}

const SkeletonBlock = () => {
  return (
    <View>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </View>
  )
}

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: 'row',

    alignItems: 'center',
    paddingRight: 20,
    paddingTop: 12,
    paddingLeft: 16,
  },

  icon: {
    height: 72,
    width: 72,
    borderRadius: 64,
    backgroundColor: '#FAFAFA',
  },
  textContainer: {
    // paddingLeft: 16,
    width: 144,
    height: 16,
    backgroundColor: '#FAFAFA',
    borderRadius: 50,
  },
  textRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  positionText: {
    backgroundColor: '#FAFAFA',
    marginTop: 6,
    borderRadius: 50,
    width: 80,
    height: 12,
  },
})

export {SkeletonBlock}
