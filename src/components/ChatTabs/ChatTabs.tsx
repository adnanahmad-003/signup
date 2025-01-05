import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ChatTabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const tabs = ['All', 'Assigned', 'Completed', 'Cancelled'];

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          onPress={() => setActiveTab(tab)}
          style={[
            styles.tabContainer,
            activeTab === tab && styles.activeTabContainer,
          ]}>
          <Text
            style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ededed',
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom:10,
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 8,
    height: 40,
    minWidth: 45,
    justifyContent: 'center',
  },
  activeTabContainer: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 3,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
  },
  tabText: {
    fontSize: 16,
    color: '#6a6a6a',
    fontWeight: '600',
  },
  activeTabText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ChatTabs;
