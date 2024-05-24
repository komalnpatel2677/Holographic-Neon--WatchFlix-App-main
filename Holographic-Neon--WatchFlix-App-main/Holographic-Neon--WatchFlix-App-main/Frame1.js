import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Frame1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={[styles.navigationButton, styles.buttonShadowBox]}
        onPress={() => navigation.navigate("Frame2")}
      >
        <View style={[styles.playButton, styles.buttonFlexBox]}>
          <Image
            style={styles.imagesBackgroundRemoved21}
            resizeMode="cover"
            source={require("../assets/images-background-removed-2-1.png")}
          />
        </View>
      </Pressable>
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
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.dotsIcon}
        resizeMode="cover"
        source={require("../assets/dots.png")}
      />
      <Pressable
        style={[styles.signUpButtonWrapper, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("Frame2")}
      >
        <View style={styles.signUpButton}>
          <LinearGradient
            style={[styles.signUpButtonChild, styles.signLayout]}
            locations={[0, 1]}
            colors={["rgba(254, 83, 187, 0.5)", "rgba(9, 251, 211, 0.5)"]}
            useAngle={true}
            angle={104.74}
          />
          <View style={[styles.signUpButtonItem, styles.signLayout]} />
          <Text style={styles.signUp}>Sign up</Text>
        </View>
      </Pressable>
      <Image
        style={[styles.child, styles.itemLayout]}
        resizeMode="cover"
        source={require("../assets/group-11.png")}
      />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.emailId, styles.nameTypo]}>Email Id</Text>
      <Text style={[styles.password, styles.nameTypo]}>Password</Text>
      <Image
        style={[styles.item, styles.itemLayout]}
        resizeMode="cover"
        source={require("../assets/group-12.png")}
      />
      <Image
        style={[styles.inner, styles.itemLayout]}
        resizeMode="cover"
        source={require("../assets/group-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonShadowBox: {
    width: 150,
    shadowOpacity: 1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  signLayout: {
    height: 38,
    borderRadius: Border.br_xl,
    width: 160,
    left: 0,
    top: 0,
    position: "absolute",
  },
  itemLayout: {
    height: 358,
    width: 445,
    position: "absolute",
  },
  nameTypo: {
    opacity: 0.5,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 41,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    position: "absolute",
  },
  imagesBackgroundRemoved21: {
    width: 140,
    height: 140,
  },
  playButton: {
    borderRadius: 120,
    shadowColor: "rgba(11, 251, 211, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderColor: Color.colorDarkturquoise,
    height: 150,
    padding: Padding.p_3xs,
    borderWidth: 3,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_300,
    width: 150,
    shadowOpacity: 1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  navigationButton: {
    top: 93,
    left: 127,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 12,
    elevation: 12,
    flexDirection: "row",
    position: "absolute",
    borderRadius: Border.br_31xl,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.labelColorDarkPrimary,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    borderStyle: "solid",
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
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    width: 54,
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    top: 7,
    height: 21,
    width: 54,
    left: 21,
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
  signUpButtonChild: {
    backgroundColor: "transparent",
  },
  signUpButtonItem: {
    borderColor: Color.colorHotpink,
    borderWidth: 3,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_300,
  },
  signUp: {
    left: 40,
    fontSize: FontSize.size_sm,
    width: 79,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 41,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  signUpButton: {
    height: 41,
    width: 160,
  },
  signUpButtonWrapper: {
    top: 649,
    left: 124,
    position: "absolute",
  },
  child: {
    top: 243,
    left: 21,
    width: 445,
  },
  name: {
    top: 324,
    left: 168,
  },
  emailId: {
    top: 433,
    left: 149,
  },
  password: {
    top: 541,
    left: 137,
  },
  item: {
    top: -45,
    left: -13,
  },
  inner: {
    top: 562,
    left: -30,
  },
  view: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_31xl,
  },
});

export default Frame1;
