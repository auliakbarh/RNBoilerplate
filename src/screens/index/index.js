import React from 'react';
import {SafeAreaView, Text, Button, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// import actions
import {setToken, resetToken} from '../../store/actions/authAction';

export default function (props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  return (
    <SafeAreaView>
      <View style={styles.containerSetToken}>
        <Text>Token: {token === '' ? 'no token set' : token}</Text>
        <View style={styles.containerTokenButtons}>
          <Button
            title={'Set Token'}
            onPress={() => dispatch(setToken('1234'))}
          />
          <Button
            title={'Reset Token'}
            onPress={() => dispatch(resetToken())}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  containerSetToken: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  containerTokenButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
