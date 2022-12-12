import React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
import { themes } from "../../constants/colors"
import { useTheme } from "../../theme"
/* SVGR has dropped some elements not supported by react-native-svg: filter */


const TabBarSvg = (props) => {

    const { theme } = useTheme()

    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={393}
        height={97}
        fill="none"
        {...props}
        style={{ position: 'absolute', bottom: 1 }}
        >
        <G filter="url(#a)">
          <Path
            fill={themes[theme].tabBar_background}
            d="M0 25.206h114.368a41.999 41.999 0 0 1 35.321 19.274l11.91 18.51c16.692 25.945 54.725 25.641 71-.567l10.791-17.375a41.998 41.998 0 0 1 35.679-19.842H393v78.458H0V25.206z"
          />
        </G>
        <Defs></Defs>
      </Svg>
    );
}

export default TabBarSvg
