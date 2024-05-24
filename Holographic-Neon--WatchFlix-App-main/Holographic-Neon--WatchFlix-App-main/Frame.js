import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.dotsIcon}
        resizeMode="cover"
        source={require("../assets/dots.png")}
      />
      <Image
        style={styles.avatarIcon}
        resizeMode="cover"
        source={require("../assets/avatar.png")}
      />
      <View style={styles.watchflixParent}>
        <Text style={[styles.watchflix, styles.timeFlexBox]}>WatchFlix</Text>
        <Text style={styles.downloadAndWatch}>
          Download and watch offline wherever you are
        </Text>
        <Pressable
          style={styles.signUpButton}
          onPress={() => navigation.navigate("Frame1")}
        >
          <LinearGradient
            style={[styles.signUpButtonChild, styles.signLayout]}
            locations={[0, 1]}
            colors={["rgba(254, 83, 187, 0.5)", "rgba(9, 251, 211, 0.5)"]}
            useAngle={true}
            angle={104.74}
          />
          <View style={[styles.signUpButtonItem, styles.signLayout]} />
          <Text style={styles.signUp}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  signLayout: {
    height: 38,
    borderRadius: Border.br_xl,
    width: 160,
    left: 0,
    top: 0,
    position: "absolute",
  },
  backgroundIcon: {
    top: 83,
    left: 6,
    width: 445,
    height: 358,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.labelColorDarkPrimary,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderStyle: "solid",
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.labelColorDarkPrimary,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 14,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.defaultRegularBody,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
    letterSpacing: 0,
    width: 54,
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
    width: 54,
    position: "absolute",
  },
  statusBar: {
    width: 376,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  dotsIcon: {
    top: 799,
    left: 178,
    width: 34,
    height: 6,
    position: "absolute",
  },
  avatarIcon: {
    top: 103,
    left: 26,
    width: 338,
    height: 338,
    position: "absolute",
  },
  watchflix: {
    fontSize: 34,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    width: 292,
    textAlign: "center",
    letterSpacing: 0,
  },
  downloadAndWatch: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    width: 264,
    marginTop: 30,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "center",
    letterSpacing: 0,
  },
  signUpButtonChild: {
    backgroundColor: "transparent",
  },
  signUpButtonItem: {
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorHotpink,
    borderWidth: 3,
    borderStyle: "solid",
  },
  signUp: {
    left: 40,
    fontSize: FontSize.size_sm,
    lineHeight: 41,
    width: 79,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  signUpButton: {
    height: 41,
    width: 160,
    marginTop: 30,
  },
  watchflixParent: {
    top: 493,
    left: 49,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  view: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Frame;
