import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

type ProjectCardProps = {
  project: {
    name: string;
    type: string;
    user: string;
    location: string;
    status: string;
    total: string;
    left?: string;
    date: string;
    image: string;
  };
};

const ChatCard = ({project}: ProjectCardProps) => {
  const statusStyles: {[key: string]: any} = {
    completed: styles.completed,
    cancelled: styles.cancelled,
    ongoing: styles.ongoing,
    pending: styles.pending,
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagewrapper}>
        <Image source={{uri: project.image}} style={styles.image} />
        <View style={{marginLeft: 10}}>
          <Text style={styles.name}>
            {project.name} <Text style={styles.type}>({project.type})</Text>
          </Text>
          <Text style={styles.details}>
            {project.user} | {project.location}
          </Text>
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.statuswrap}>
          <Text style={[styles.status]}>Status</Text>
          <Text
            style={[
              styles.status,
              statusStyles[project.status.toLowerCase()] || null,
            ]}>
            {project.status}
          </Text>
        </View>
        <View>
          {project.left && (
            <Text style={styles.left}>Left: {project.left}</Text>
          )}
          {project.total && (
            <Text style={styles.total}>Total: {project.total}</Text>
          )}
          <Text style={styles.date}>{project.date}</Text>
        </View>
      </View>
      {/* Horizontal Line Divider */}
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  imagewrapper: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statuswrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  info: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  type: {
    fontWeight: 'normal',
    color: 'gray',
  },
  details: {
    color: 'gray',
    fontSize: 14,
  },
  status: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  completed: {
    color: 'green',
  },
  cancelled: {
    color: 'red',
  },
  ongoing: {
    color: 'blue',
  },
  pending: {
    color: 'orange',
  },
  date: {
    marginTop: 4,
    color: 'gray',
    fontSize: 12,
  },
  total: {
    marginTop: 4,
    fontSize: 14,
  },
  left: {
    color: 'red',
    fontSize: 14,
  },
  divider: {
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default ChatCard;
