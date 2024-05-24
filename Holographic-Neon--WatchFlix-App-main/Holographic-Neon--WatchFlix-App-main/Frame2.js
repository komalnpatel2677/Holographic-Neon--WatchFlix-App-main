import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Frame2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={[styles.statusBar, styles.symbol1Layout]}>
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
      <View style={[styles.upcomingFilms, styles.upcomingFlexBox]} />
      <View style={[styles.upcomingFilms1, styles.upcomingFlexBox]} />
      <Text style={[styles.whatWouldYou, styles.textTypo]}>
        What would you like to watch?
      </Text>
      <Text style={[styles.newMovies, styles.moviesTypo]}>New movies</Text>
      <Text style={[styles.upcomingMovies, styles.moviesTypo]}>
        Upcoming movies
      </Text>
      <View style={styles.searchfield}>
        <Image
          style={styles.iconMagnifyingglass}
          resizeMode="cover"
          source={require("../assets/icon--magnifyingglass.png")}
        />
        <Text style={styles.placeholder}>Search</Text>
        <Image
          style={styles.sfSymbolMicrophone}
          resizeMode="cover"
          source={require("../assets/sf-symbol--microphone.png")}
        />
      </View>
      <View style={styles.tabBar}>
        <Image
          style={styles.backgroundIcon}
          resizeMode="cover"
          source={require("../assets/background1.png")}
        />
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.symbolsPosition]} />
        </View>
        <View style={[styles.symbols, styles.symbolsPosition]}>
          <View style={styles.home}>
            <Image
              style={styles.image96Icon}
              resizeMode="cover"
              source={require("../assets/image-96.png")}
            />
          </View>
          <View style={styles.playTv}>
            <Text style={[styles.text, styles.textTypo]}>􀵩</Text>
          </View>
          <View style={styles.plus}>
            <Text style={[styles.symbol, styles.symbolTypo]}>􀅼</Text>
          </View>
          <View style={styles.playTv}>
            <Text style={[styles.text, styles.textTypo]}>􀏮</Text>
          </View>
          <View style={styles.playTv}>
            <Image
              style={styles.image98Icon}
              resizeMode="cover"
              source={require("../assets/image-98.png")}
            />
          </View>
        </View>
        <View style={[styles.plusButton, styles.plusButtonLayout]}>
          <Image
            style={[styles.lightingIcon, styles.plusButtonLayout]}
            resizeMode="cover"
            source={require("../assets/lighting.png")}
          />
          <Image
            style={[styles.lightingIcon, styles.plusButtonLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-224.png")}
          />
          <Text style={[styles.symbol1, styles.symbolTypo]}>􀅼</Text>
        </View>
      </View>
      <View style={[styles.inner, styles.innerLayout]}>
        <View style={[styles.backgroundParent, styles.innerLayout]}>
          <Image
            style={[styles.backgroundParent, styles.innerLayout]}
            resizeMode="cover"
            source={require("../assets/background2.png")}
          />
          <View style={[styles.newMovies1, styles.newMovies1Position]}>
            <Pressable
              style={styles.image99}
              onPress={() => navigation.navigate("Frame3")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/image-99.png")}
              />
            </Pressable>
            <Image
              style={[styles.image101Icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/image-101.png")}
            />
          </View>
          <Image
            style={[styles.image102Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/image-102.png")}
          />
          <Image
            style={[styles.image104Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/image-104.png")}
          />
          <Image
            style={[styles.image105Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/image-105.png")}
          />
          <Image
            style={[styles.image106Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/image-106.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  symbol1Layout: {
    height: 44,
    position: "absolute",
  },
  upcomingFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    fontWeight: "700",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
  },
  moviesTypo: {
    fontFamily: FontFamily.openSansRegular,
    left: 18,
    fontSize: FontSize.defaultRegularBody_size,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    position: "absolute",
  },
  symbolsPosition: {
    left: "50%",
    position: "absolute",
  },
  symbolTypo: {
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultRegularBody,
    letterSpacing: 0,
  },
  plusButtonLayout: {
    height: 60,
    width: 60,
    top: 0,
    position: "absolute",
  },
  innerLayout: {
    height: 1041,
    width: 576,
    position: "absolute",
  },
  newMovies1Position: {
    top: 383,
    position: "absolute",
  },
  iconLayout1: {
    height: 175,
    borderRadius: Border.br_8xl,
  },
  iconLayout: {
    top: 632,
    borderRadius: Border.br_8xl,
    height: 174,
    width: 127,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.labelColorDarkPrimary,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
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
    width: 18,
    height: 7,
    backgroundColor: Color.labelColorDarkPrimary,
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
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    fontFamily: FontFamily.defaultRegularBody,
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
    width: 390,
    left: 0,
    top: 0,
  },
  upcomingFilms: {
    width: 142,
    alignItems: "center",
    height: 160,
    left: 20,
    top: 558,
    justifyContent: "center",
    position: "absolute",
  },
  upcomingFilms1: {
    width: 110,
    alignItems: "center",
    height: 160,
    left: 20,
    top: 558,
    justifyContent: "center",
    position: "absolute",
  },
  whatWouldYou: {
    top: 68,
    left: 68,
    fontSize: 28,
    fontFamily: FontFamily.openSansBold,
    width: 254,
    position: "absolute",
  },
  newMovies: {
    top: 240,
  },
  upcomingMovies: {
    top: 498,
  },
  iconMagnifyingglass: {
    width: 16,
    height: 16,
  },
  placeholder: {
    lineHeight: 22,
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "left",
    marginLeft: 6,
    fontSize: FontSize.defaultRegularBody_size,
    fontFamily: FontFamily.defaultRegularBody,
    letterSpacing: 0,
    flex: 1,
  },
  sfSymbolMicrophone: {
    width: 12,
    height: 18,
    marginLeft: 6,
  },
  searchfield: {
    top: 174,
    left: 28,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fillColorLightTertiary,
    width: 343,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  backgroundIcon: {
    height: 92,
    width: 390,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  homeindicator: {
    top: 66,
    height: 34,
    width: 390,
    left: 0,
    position: "absolute",
  },
  image96Icon: {
    width: 33,
    height: 28,
  },
  home: {
    width: 49,
    height: 48,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.defaultRegularBody,
    fontWeight: "700",
  },
  playTv: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  symbol: {
    display: "none",
  },
  plus: {
    width: 53,
    height: 56,
    padding: Padding.p_3xs,
  },
  image98Icon: {
    width: 31,
    height: 32,
  },
  symbols: {
    marginLeft: -177,
    top: 12,
    width: 356,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  lightingIcon: {
    left: 0,
  },
  symbol1: {
    top: 8,
    left: 8,
    display: "flex",
    width: 44,
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    position: "absolute",
  },
  plusButton: {
    left: 164,
  },
  tabBar: {
    top: 745,
    height: 100,
    width: 390,
    left: 0,
    position: "absolute",
  },
  backgroundParent: {
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_8xl,
    width: "100%",
  },
  image99: {
    height: 174,
    width: 127,
  },
  image101Icon: {
    width: 126,
    marginLeft: 15,
  },
  newMovies1: {
    left: 3,
    width: 502,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image102Icon: {
    width: 117,
    left: 401,
    top: 383,
    position: "absolute",
  },
  image104Icon: {
    left: 127,
  },
  image105Icon: {
    left: 401,
  },
  image106Icon: {
    left: 264,
  },
  inner: {
    top: -83,
    left: -111,
  },
  view: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Frame2;
