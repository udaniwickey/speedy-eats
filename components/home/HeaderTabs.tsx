import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ColorValue,
} from 'react-native';
import React, {useState} from 'react';

interface PropsType {
  text: string;
  btnColor: ColorValue;
  textColor: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const HeaderTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Delivery');

  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton: React.FC<PropsType> = props => (
  <View style={styles.buttonBackground}>
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: props.activeTab === props.text ? 'black' : 'white'},
      ]}
      onPress={() => props.setActiveTab(props.text)}>
      <Text
        style={[
          styles.buttonText,
          {color: props.activeTab === props.text ? 'white' : 'black'},
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonBackground: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '900',
  },
});

export default HeaderTabs;
