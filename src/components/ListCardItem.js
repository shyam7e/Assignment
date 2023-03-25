import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../styles/colors';

const HorizontalCard = ({name, userName, email, phone, companyName}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.userImageContainer}>
        <Text style={styles.userImageText}>{name.slice(0, 1)}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>Name: {name}</Text>
        <Text style={styles.usernameText}>UserName: @{userName}</Text>
        <Text style={styles.emailText}>Email: {email}</Text>
        <Text style={styles.phoneText}>Phone: {phone}</Text>
        <Text style={styles.phoneText}>Company: {companyName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  userImageContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  userImageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darkGrey,
    fontStyle: 'italic',
  },
  textContainer: {
    paddingVertical: 12,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  usernameText: {
    fontSize: 12,
    color: colors.grey,
    marginBottom: 4,
  },
  emailText: {
    fontSize: 12,
    color: colors.grey,
    marginBottom: 4,
  },
  phoneText: {
    fontSize: 12,
    color: colors.grey,
  },
});

export default HorizontalCard;
