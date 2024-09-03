import { useEffect, useRef } from "react";
import { StyleSheet, Animated } from "react-native";

type Props = {
  isOpen: boolean;
};

export default function Bulle({ isOpen }: Props) {
  const widthAnim = useRef(new Animated.Value(isOpen ? 35 : 10)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: isOpen ? 35 : 10,
      duration: 150, 
      useNativeDriver: false, 
    }).start();
  }, [isOpen]);

  return (
    <Animated.View
      style={[
        styles.bulle,
        { width: widthAnim },
        {
          backgroundColor: isOpen ? "#173EA5" : "#4565B7",
          opacity: isOpen ? 1 : 0.25,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  bulle: {
    height: 10,
    borderRadius: 999,
  },
});
