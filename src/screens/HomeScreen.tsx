import ChatCard from '../components/ChatCard/ChatCard';
import ChatTabs from '../components/ChatTabs/ChatTabs';
import SearchBar from '../components/SearchBar/SearchBar';
import mockProjects from '../mockData/mockProjects';

import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';



const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = mockProjects.filter(
    (project) => activeTab === 'All' || project.status === activeTab
  );

  return (
    <View style={styles.container}>
      <SearchBar />
      <ChatTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <FlatList
        data={filteredProjects}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ChatCard project={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
});

export default HomeScreen;
