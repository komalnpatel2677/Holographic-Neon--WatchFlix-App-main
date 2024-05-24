import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame3 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.lineargradient}
      locations={[0, 1]}
      colors={["#000", "#19191b"]}
      useAngle={true}
      angle={180}
    >
      <Image
        style={[styles.image104Icon, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/image-1041.png")}
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
        <View style={[styles.timeStyle, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <Pressable
        style={[styles.navigationButton, styles.childShadowBox]}
        onPress={() => navigation.navigate("Frame2")}
      >
        <View style={[styles.playButton, styles.playShadowBox]}>
          <Image
            style={styles.image95Icon}
            resizeMode="cover"
            source={require("../assets/image-95.png")}
          />
        </View>
      </Pressable>
      <Image
        style={[styles.image97Icon, styles.image97IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-97.png")}
      />
      <Image
        style={styles.playButton1Position}
        resizeMode="cover"
        source={require("../assets/lighting1.png")}
      />
      <LinearGradient
        style={[styles.child, styles.childShadowBox]}
        locations={[0, 1]}
        colors={["rgba(245, 164, 237, 0.5)", "rgba(108, 207, 221, 0.5)"]}
        useAngle={true}
        angle={112.45}
      />
      <View style={[styles.myFaultParent, styles.parentPosition]}>
        <Text style={[styles.myFault, styles.casts1Typo]}>My Fault</Text>
        <View style={styles.romanceDrama1h57mParent}>
          <Text style={[styles.romanceDrama1h57m, styles.romanceDrama1h57mClr]}>
            2023 Romance-Drama 1h57m
          </Text>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-226.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-226.png")}
          />
        </View>
        <View style={styles.rating}>
          <Image
            style={[styles.ratingChild, styles.ratingChildLayout]}
            resizeMode="cover"
            source={require("../assets/star-1.png")}
          />
          <Image
            style={[styles.ratingItem, styles.ratingChildLayout]}
            resizeMode="cover"
            source={require("../assets/star-1.png")}
          />
          <Image
            style={[styles.ratingInner, styles.ratingChildLayout]}
            resizeMode="cover"
            source={require("../assets/star-1.png")}
          />
          <Image
            style={[styles.starIcon, styles.ratingChildLayout]}
            resizeMode="cover"
            source={require("../assets/star-6.png")}
          />
          <Image
            style={[styles.ratingChild1, styles.ratingChildLayout]}
            resizeMode="cover"
            source={require("../assets/star-5.png")}
          />
        </View>
        <Text
          style={[
            styles.spanishRomanticDramaFilmDi,
            styles.romanceDrama1h57mClr,
          ]}
        >{`Spanish romantic drama film directed by Domingo González in his directorial feature length debut and starring Nicole Wallace and Gabriel Guevara. `}</Text>
      </View>
      <View style={[styles.playButton1, styles.playButton1Position]}>
        <Text style={[styles.text, styles.timeFlexBox]}>􀊄</Text>
      </View>
      <View style={[styles.castsParent, styles.image97IconPosition]}>
        <View style={styles.casts}>
          <View style={styles.angelinaJolie}>
            <View style={[styles.subtractParent, styles.subtractLayout]}>
              <Image
                style={styles.subtractLayout}
                resizeMode="cover"
                source={require("../assets/subtract.png")}
              />
              <Text
                style={[
                  styles.nicoleWallaceNoahContainer,
                  styles.casts1FlexBox,
                ]}
              >
                <Text style={styles.nicoleWallace}>{`Nicole Wallace
`}</Text>
                <Text style={styles.noah}>Noah</Text>
              </Text>
            </View>
            <Image
              style={[styles.avatarIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/avatar1.png")}
            />
          </View>
          <View style={styles.salmaHayek}>
            <View style={[styles.subtractParent, styles.subtractLayout]}>
              <Image
                style={styles.subtractLayout}
                resizeMode="cover"
                source={require("../assets/subtract1.png")}
              />
              <Text
                style={[
                  styles.nicoleWallaceNoahContainer,
                  styles.casts1FlexBox,
                ]}
              >
                <Text style={styles.nicoleWallace}>{`Fran Berenguer
`}</Text>
                <Text style={styles.noah}>Ronnie</Text>
              </Text>
            </View>
            <Image
              style={[styles.avatarIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/avatar1.png")}
            />
          </View>
          <View style={[styles.gemmaChan, styles.gemmaChanPosition]}>
            <View style={[styles.subtractParent, styles.subtractLayout]}>
              <Image
                style={styles.subtractLayout}
                resizeMode="cover"
                source={require("../assets/subtract1.png")}
              />
              <Text
                style={[
                  styles.gabrielGuevaraNickContainer,
                  styles.containerPosition,
                ]}
              >
                <Text style={styles.nicoleWallace}>{`Gabriel Guevara
`}</Text>
                <Text style={styles.noah}>Nick</Text>
              </Text>
            </View>
            <Image
              style={[styles.avatarIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/avatar1.png")}
            />
          </View>
          <View style={[styles.richardMadden, styles.gemmaChanPosition]}>
            <View style={[styles.subtractParent, styles.subtractLayout]}>
              <Image
                style={styles.subtractLayout}
                resizeMode="cover"
                source={require("../assets/subtract1.png")}
              />
              <Text
                style={[styles.evaRuizJennaContainer, styles.containerPosition]}
              >
                <Text style={styles.nicoleWallace}>{`Eva Ruiz
`}</Text>
                <Text style={styles.noah}>Jenna</Text>
              </Text>
            </View>
            <Image
              style={[styles.avatarIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/avatar1.png")}
            />
          </View>
          <Text style={[styles.casts1, styles.casts1FlexBox]}>Casts</Text>
        </View>
        <Image
          style={[styles.image107Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-107.png")}
        />
        <Image
          style={[styles.image110Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-110.png")}
        />
        <Image
          style={[styles.image111Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-111.png")}
        />
        <Image
          style={[styles.image112Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-112.png")}
        />
        <View style={[styles.salmaHayekParent, styles.salmaPosition]}>
          <View style={styles.salmaHayek1}>
            <View style={[styles.subtractParent, styles.subtractLayout]}>
              <Image
                style={styles.subtractLayout}
                resizeMode="cover"
                source={require("../assets/subtract1.png")}
              />
              <Text
                style={[
                  styles.nicoleWallaceNoahContainer,
                  styles.casts1FlexBox,
                ]}
              >
                <Text style={styles.nicoleWallace}>{`Ivan Sanchez
`}</Text>
                <Text style={styles.noah}>William Leister</Text>
              </Text>
            </View>
            <Image
              style={[styles.avatarIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/avatar1.png")}
            />
          </View>
          <Image
            style={[styles.image113Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/image-113.png")}
          />
        </View>
        <View style={[styles.salmaHayekGroup, styles.salmaPosition]}>
          <View style={styles.salmaHayek2}>
            <View style={[styles.subtractParent, styles.subtractLayout]}>
              <Image
                style={styles.subtractLayout}
                resizeMode="cover"
                source={require("../assets/subtract1.png")}
              />
              <Text
                style={[
                  styles.nicoleWallaceNoahContainer,
                  styles.casts1FlexBox,
                ]}
              >
                <Text style={styles.nicoleWallace}>{`Marta Hazas
`}</Text>
                <Text style={styles.noah}>Rafaella</Text>
              </Text>
            </View>
            <Image
              style={[styles.avatarIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/avatar1.png")}
            />
          </View>
          <Image
            style={[styles.image114Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/image-114.png")}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    width: 390,
    left: 0,
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    position: "absolute",
  },
  playShadowBox: {
    padding: Padding.p_3xs,
    borderWidth: 3,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(11, 251, 211, 0.25)",
    backgroundColor: Color.colorGray_300,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    borderStyle: "solid",
    borderRadius: Border.br_31xl,
  },
  image97IconPosition: {
    top: 625,
    position: "absolute",
  },
  parentPosition: {
    left: 52,
    position: "absolute",
  },
  casts1Typo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  romanceDrama1h57mClr: {
    color: Color.colorGray_200,
    textAlign: "center",
  },
  groupLayout: {
    width: 4,
    top: 8,
    height: 4,
    position: "absolute",
  },
  ratingChildLayout: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
  },
  playButton1Position: {
    left: 321,
    top: 347,
    height: 60,
    width: 60,
    position: "absolute",
  },
  subtractLayout: {
    height: 50,
    width: 112,
  },
  casts1FlexBox: {
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout1: {
    width: 60,
    height: 60,
  },
  gemmaChanPosition: {
    left: 180,
    width: 164,
    height: 60,
    position: "absolute",
  },
  containerPosition: {
    left: 17,
    textAlign: "left",
    fontSize: FontSize.size_2xs,
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    top: 7,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_64xl,
    position: "absolute",
  },
  salmaPosition: {
    top: 184,
    height: 60,
    position: "absolute",
  },
  iconPosition: {
    top: 1,
    borderRadius: Border.br_64xl,
    left: 0,
    position: "absolute",
  },
  image104Icon: {
    top: -3,
    height: 598,
    borderRadius: 3,
    width: 390,
    position: "absolute",
  },
  border: {
    right: 2,
    borderColor: Color.labelColorDarkPrimary,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderStyle: "solid",
    height: 11,
    top: 0,
    borderRadius: 3,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    opacity: 0.4,
    height: 4,
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
    width: 54,
    position: "absolute",
    left: 0,
  },
  timeStyle: {
    height: 21,
    left: 21,
    top: 7,
    width: 54,
  },
  statusBar: {
    width: 381,
    height: 44,
    top: 0,
    left: 0,
    position: "absolute",
  },
  image95Icon: {
    width: 29,
    height: 34,
  },
  playButton: {
    borderColor: Color.colorDarkturquoise,
    height: 60,
    width: 60,
  },
  navigationButton: {
    top: 52,
    left: 25,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 12,
    elevation: 12,
    flexDirection: "row",
  },
  image97Icon: {
    left: 335,
    width: 32,
    height: 32,
  },
  child: {
    top: 365,
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(76, 75, 75, 0.25)",
    shadowRadius: 50,
    elevation: 50,
    height: 241,
    opacity: 0.7,
    width: 390,
    left: 0,
    backgroundColor: "transparent",
  },
  myFault: {
    fontSize: FontSize.size_5xl,
    color: "rgba(255, 255, 255, 0.85)",
    width: 170,
    textAlign: "center",
    letterSpacing: 0,
  },
  romanceDrama1h57m: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    letterSpacing: 0,
    color: Color.colorGray_200,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    left: 32,
  },
  groupItem: {
    left: 191,
  },
  romanceDrama1h57mParent: {
    width: 241,
    height: 22,
    marginTop: 20,
  },
  ratingChild: {
    left: 0,
  },
  ratingItem: {
    left: 20,
  },
  ratingInner: {
    left: 40,
  },
  starIcon: {
    left: 61,
  },
  ratingChild1: {
    left: 80,
  },
  rating: {
    width: 94,
    height: 14,
    marginTop: 20,
  },
  spanishRomanticDramaFilmDi: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.1,
    fontFamily: FontFamily.interRegular,
    width: 285,
    marginTop: 20,
  },
  myFaultParent: {
    top: 402,
    justifyContent: "center",
    alignItems: "center",
    left: 52,
  },
  text: {
    lineHeight: 24,
    fontFamily: FontFamily.defaultRegularTitle3,
    fontSize: FontSize.defaultRegularTitle3_size,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
  },
  playButton1: {
    borderColor: Color.colorHotpink,
    padding: Padding.p_3xs,
    borderWidth: 3,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(11, 251, 211, 0.25)",
    backgroundColor: Color.colorGray_300,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    borderStyle: "solid",
    borderRadius: Border.br_31xl,
  },
  nicoleWallace: {
    fontFamily: FontFamily.openSansRegular,
  },
  noah: {
    fontWeight: "300",
    fontFamily: FontFamily.openSansLight,
  },
  nicoleWallaceNoahContainer: {
    left: 16,
    width: 89,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    top: 7,
  },
  subtractParent: {
    top: 5,
    left: 52,
    position: "absolute",
  },
  avatarIcon: {
    height: 60,
    top: 0,
    left: 0,
    position: "absolute",
  },
  angelinaJolie: {
    width: 164,
    top: 45,
    height: 60,
    left: 0,
    position: "absolute",
  },
  salmaHayek: {
    top: 115,
    width: 164,
    height: 60,
    left: 0,
    position: "absolute",
  },
  gabrielGuevaraNickContainer: {
    height: 31,
    width: 89,
  },
  gemmaChan: {
    top: 45,
  },
  evaRuizJennaContainer: {
    width: 88,
  },
  richardMadden: {
    top: 115,
  },
  casts1: {
    left: 2,
    fontSize: FontSize.defaultRegularTitle3_size,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    top: 0,
  },
  casts: {
    width: 344,
    height: 175,
    left: 2,
    top: 0,
    position: "absolute",
  },
  image107Icon: {
    left: 3,
    height: 61,
    width: 59,
    top: 45,
  },
  image110Icon: {
    left: 182,
    top: 45,
    height: 60,
    width: 60,
  },
  image111Icon: {
    top: 115,
    left: 2,
    height: 60,
    width: 60,
  },
  image112Icon: {
    left: 182,
    top: 115,
    height: 60,
    width: 60,
  },
  salmaHayek1: {
    width: 164,
    left: 2,
    height: 60,
    top: 0,
    position: "absolute",
  },
  image113Icon: {
    width: 61,
    height: 59,
  },
  salmaHayekParent: {
    width: 166,
    left: 0,
  },
  salmaHayek2: {
    width: 164,
    height: 60,
    top: 0,
    left: 0,
    position: "absolute",
  },
  image114Icon: {
    height: 58,
    width: 59,
  },
  salmaHayekGroup: {
    left: 182,
    width: 164,
  },
  castsParent: {
    width: 346,
    height: 244,
    left: 21,
  },
  lineargradient: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: "transparent",
    borderRadius: Border.br_31xl,
  },
});

export default Frame3;
