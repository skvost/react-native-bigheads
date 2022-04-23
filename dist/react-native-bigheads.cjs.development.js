'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNativeSvg = require('react-native-svg');
var reactNative = require('react-native');

var colors = {
  skin: {
    light: {
      base: '#fdd2b2',
      shadow: '#f3ab98'
    },
    yellow: {
      base: '#FBE8B3',
      shadow: '#EDD494'
    },
    brown: {
      base: '#D8985D',
      shadow: '#C6854E'
    },
    dark: {
      base: '#A56941',
      shadow: '#8D5638'
    },
    red: {
      base: '#CC734C',
      shadow: '#B56241'
    },
    black: {
      base: '#754437',
      shadow: '#6B3D34'
    }
  },
  hair: {
    blonde: {
      base: '#FEDC58',
      shadow: '#EDBF2E'
    },
    orange: {
      base: '#D96E27',
      shadow: '#C65C22'
    },
    black: {
      base: '#592d3d',
      shadow: '#592d3d'
    },
    white: {
      base: '#ffffff',
      shadow: '#E2E2E2'
    },
    brown: {
      base: '#A56941',
      shadow: '#8D5638'
    },
    blue: {
      base: '#85c5e5',
      shadow: '#67B7D6'
    },
    pink: {
      base: '#D69AC7',
      shadow: '#C683B4'
    }
  },
  lipColors: {
    red: {
      base: '#DD3E3E',
      shadow: '#C43333'
    },
    purple: {
      base: '#B256A1',
      shadow: '#9C4490'
    },
    pink: {
      base: '#D69AC7',
      shadow: '#C683B4'
    },
    turqoise: {
      base: '#5CCBF1',
      shadow: '#49B5CD'
    },
    green: {
      base: '#4AB749',
      shadow: '#3CA047'
    }
  },
  clothing: {
    white: {
      base: '#FFFFFF',
      shadow: '#E2E2E2'
    },
    blue: {
      base: '#85c5e5',
      shadow: '#67B7D6'
    },
    black: {
      base: '#633749',
      shadow: '#5E3244'
    },
    green: {
      base: '#89D86F',
      shadow: '#7DC462'
    },
    red: {
      base: '#D67070',
      shadow: '#C46565'
    }
  },
  bgColors: {
    blue: '#85c5e5',
    green: '#89D86F',
    red: '#ED9191',
    orange: '#F6AD55',
    yellow: '#F6E05E',
    turqoise: '#4FD1C5',
    pink: '#F687B3',
    purple: '#B794F4'
  },
  outline: '#592d3d',
  white: '#ffffff',
  tongue: '#f28195'
};

var theme = {
  __proto__: null,
  colors: colors
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var ThemeContext = /*#__PURE__*/React__default.createContext({
  colors: colors,
  skin: colors.skin.light
});
var useTheme = function useTheme() {
  return React.useContext(ThemeContext);
};

var Noop = function Noop() {
  return React__default.createElement(React__default.Fragment, null);
};

var DressShirt = function DressShirt(_ref) {
  var color = _ref.color,
      _ref$graphic = _ref.graphic,
      Graphic = _ref$graphic === void 0 ? Noop : _ref$graphic;

  var _useTheme = useTheme(),
      colors = _useTheme.colors,
      skin = _useTheme.skin;

  var base = colors.clothing[color].base;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Polygon, {
    points: "547.85 847.98 505.72 813.61 580.35 758.82 419.65 758.82 494.28 813.61 452.15 847.98 414.52 791.48 414.52 869.96 588.78 869.96 588.78 786.52 547.85 847.98",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M616.66,758.16l-42.73.1a119.49,119.49,0,0,1-1.43,13.48,63.7,63.7,0,0,1-1.74,6.34c-2.34,6.49-17.26,12-21.49,16.73a48.22,48.22,0,0,1-4.5,4.43c-25.17,18.2-65.17,19.2-89.48-.58a51.36,51.36,0,0,1-7.11-7.61c-4.23-5.56-16.4-11.59-18.1-18.94a60,60,0,0,1-1.08-6.59,63.55,63.55,0,0,1-.36-6.8s-45.21-.56-45.21-.56a13.28,13.28,0,0,0-13.28,13.27v284.69a13.28,13.28,0,0,0,13.28,13.27H622.36a13.27,13.27,0,0,0,13.27-13.27V778C635.63,765.82,629.75,758.16,616.66,758.16Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M612.84,758.16c63.54,0,88.52,43.39,78.9,272-18.74,6.7-55.91,4.59-55.91,4.59Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Polygon, {
    points: "451.06 855.4 499.51 831.31 548.09 855.4 511.03 812.38 467.14 813.21 451.06 855.4",
    fill: colors.clothing.white.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M635.63,831.31s-22.79,84.54-19.31,234l33.21-31,3.58-137.58C647.49,824.5,635.63,831.31,635.63,831.31Z",
    fill: colors.clothing.white.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M389,758.16c-61.78,0-88.88,56.45-80.75,245.48,22.42,9.91,56.19,5.58,56.19,5.58Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M306.94,957.49q.26,20.46,1.21,43.48c15.27.73,43.69.88,57.11,0l4.18-42.81C358.67,956.9,323.66,956.49,306.94,957.49Z",
    fill: colors.clothing.white.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M370.12,831.31l-.5,177.69-13.35.9C353.3,860.85,370.12,831.31,370.12,831.31Z",
    fill: colors.clothing.white.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M612.84,758.16c67.42,0,78.45,56.28,78.9,133.78v138.22s-50,5.53-55.91,4.59l-.1-142.11",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M389,758.16c-25.73,0-43.52,8.12-55.71,22.44-19.45,22.87-24.63,61.54-25,108.27v123.77c12.06,3.32,61.36-3.64,61.36-3.64l.49-118.6",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M372.6,1011.24c-1.83,2.61-73.77,1.92-74.67,0s-2.19-37.5,0-41c1.8-2.88,72.11-2.27,74.67,0S374.43,1008.63,372.6,1011.24Z",
    fill: colors.white,
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M383.43,1069.39H500c-109.19,0-100.91-231.14-129.89-231.14v217.87A13.28,13.28,0,0,0,383.43,1069.39Z",
    fill: colors.clothing.white.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M364.15,860.29c-.19-3.67-.11-7.35.06-11s.47-7.34.85-11c.2-1.83.41-3.67.65-5.51s.49-3.67.85-5.5a44.05,44.05,0,0,1,3.59-11,44.05,44.05,0,0,1,3.59,11c.36,1.83.62,3.67.85,5.5s.45,3.68.65,5.51q.58,5.52.86,11c.16,3.67.24,7.35,0,11Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M635.63,869.4v8c.26,34,.26,69,0,102.76,0,2.87,0,5.72,0,8.53v67.41a13.27,13.27,0,0,1-13.27,13.27H383.43a13.28,13.28,0,0,1-13.28-13.27V990.3c-.26-34.86-.26-69.86,0-105.3V860.29",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M697.42,970.24c2.22,2.26,1.59,38.39,0,41s-64,1.92-64.77,0-1.9-37.5,0-41c.27-.5,2.28-.89,5.45-1.18",
    fill: colors.white,
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M678.92,968.3c3.8.3,15-1.18,15.42-.76",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M678.92,968.3a23.67,23.67,0,0,1,1.88-2.16,12.13,12.13,0,0,1,1.78-1.47,12.74,12.74,0,0,1,1.81-1c.61-.29,1.22-.54,1.83-.79a24.1,24.1,0,0,1,3.79-1.18,15.85,15.85,0,0,1,2-.31c.36,0,.73,0,1.17,0,.25,0,.46,0,.82,0,.12,0,.44,0,.71.07l.35,0,.49.11.25.06.2.06.57.21a6.45,6.45,0,0,1,2,1.37l4.2,4.29-8.65,8.48-4.12-4.37a5.73,5.73,0,0,0,1.91,1.32c.18.08.36.14.54.2l.17,0,.19.05a2.34,2.34,0,0,0,.38.09l.19,0h0c.1,0,.26,0,.22,0s-.07,0-.15,0l-.75,0c-.57,0-1.19,0-1.82,0a26.27,26.27,0,0,1-3.92-.53c-.67-.15-1.34-.3-2-.49a12.56,12.56,0,0,1-2-.72,10,10,0,0,1-2.08-1.32A8.19,8.19,0,0,1,678.92,968.3Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Polygon, {
    points: "592.51 763.64 517.84 818.45 559.98 852.83 619.4 763.59 592.51 763.64",
    fill: colors.clothing.white.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M629.63,869.4c-.19-4.18-.1-8.36.06-12.53s.47-8.36.86-12.53c.2-2.09.4-4.18.64-6.27s.49-4.18.86-6.27a54.83,54.83,0,0,1,3.58-12.53,54.37,54.37,0,0,1,3.59,12.53c.36,2.09.63,4.18.85,6.27s.45,4.18.65,6.27c.39,4.17.69,8.35.85,12.53s.26,8.35.06,12.53Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M383.43,758.26l233.23-.1",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Polygon, {
    points: "529.39 835.55 507.04 813.21 484.7 835.55 495.68 846.53 485.96 953.16 506.7 969.33 528.12 953.16 518.41 846.53 529.39 835.55",
    fill: colors.clothing.white.shadow
  }), React__default.createElement(reactNativeSvg.Line, {
    x1: "500.04",
    y1: "813.21",
    x2: "500.04",
    y2: "1069.39",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "6px"
  }), React__default.createElement(reactNativeSvg.Polygon, {
    points: "500.04 813.21 522.39 828.55 500.04 850.9 477.7 828.55 500.04 813.21",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M419.62,758.8s43.27,39.34,74.66,54.81C479,838.82,452.15,848,452.15,848l-59.43-89.23Z",
    fill: colors.white,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M580.38,758.8S541,800,505.72,813.61c10,20.28,42.13,34.37,42.13,34.37l59.43-89.23Z",
    fill: colors.white,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.G, {
    transform: "translate(0 30)"
  }, React__default.createElement(Graphic, null)), React__default.createElement(reactNativeSvg.Polygon, {
    points: "478.96 946.16 499.7 962.33 521.12 946.16 511.12 836.38 488.96 836.38 478.96 946.16",
    fill: base
  }), React__default.createElement(reactNativeSvg.Polyline, {
    points: "477.7 828.55 488.68 839.53 478.96 946.16 499.7 962.33 521.12 946.16 511.41 839.53 522.39 828.55",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M638.1,969.06c7.51-.71,21.51-.89,34-.67",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M637.54,963.08a50.92,50.92,0,0,1,8.84-.47c2.9.07,5.78.3,8.66.65,1.43.18,2.87.37,4.3.61a43.36,43.36,0,0,1,4.29.85,27.53,27.53,0,0,1,8.5,3.67,30.13,30.13,0,0,1-8.52,3.5c-1.41.36-2.82.63-4.23.86s-2.81.47-4.21.69c-2.8.42-5.59.78-8.35,1s-5.52.5-8.16.54l-6,.1-1-11.13Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "515.77",
    cy: "982.93",
    r: "4.8",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M490.89,836.19c-.05-.06,0,0,0,0l.07.05a.88.88,0,0,1,.17.12l.38.29c.25.21.52.42.78.65.53.45,1.09.93,1.7,1.39s1.27.9,2,1.42a27.37,27.37,0,0,1,2.71,2.33,5.61,5.61,0,0,1-3.13,2.43,9.41,9.41,0,0,1-3.7.27,11,11,0,0,1-3.63-1,9.72,9.72,0,0,1-1.65-1,8.85,8.85,0,0,1-.77-.63c-.12-.11-.25-.23-.37-.36l-.2-.21-.25-.29Z",
    fill: colors.outline
  }));
};

var Base = function Base(_ref) {
  var Eyes = _ref.eyes,
      Eyebrows = _ref.eyebrows,
      Mouth = _ref.mouth,
      _ref$hair = _ref.hair,
      hair = _ref$hair === void 0 ? {
    Front: Noop,
    Back: Noop
  } : _ref$hair,
      FacialHair = _ref.facialHair,
      _ref$clothing = _ref.clothing,
      clothing = _ref$clothing === void 0 ? {
    Front: Noop,
    Back: Noop
  } : _ref$clothing,
      Accessory = _ref.accessory,
      Graphic = _ref.graphic,
      _ref$hat = _ref.hat,
      hat = _ref$hat === void 0 ? {
    Front: Noop,
    Back: Noop
  } : _ref$hat,
      body = _ref.body,
      hairColor = _ref.hairColor,
      clothingColor = _ref.clothingColor,
      _ref$bgShape = _ref.bgShape,
      bgShape = _ref$bgShape === void 0 ? {
    Shape: Noop,
    Mask: Noop
  } : _ref$bgShape,
      bgColor = _ref.bgColor,
      lipColor = _ref.lipColor,
      hatColor = _ref.hatColor,
      showBackground = _ref.showBackground,
      lashes = _ref.lashes,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 100 : _ref$size,
      _ref$containerStyles = _ref.containerStyles,
      containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
      _ref$containerProps = _ref.containerProps,
      containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
      svgRef = _ref.svgRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["eyes", "eyebrows", "mouth", "hair", "facialHair", "clothing", "accessory", "graphic", "hat", "body", "hairColor", "clothingColor", "bgShape", "bgColor", "lipColor", "hatColor", "showBackground", "lashes", "size", "containerStyles", "containerProps", "svgRef"]);

  var _useTheme = useTheme(),
      skin = _useTheme.skin;

  var FrontHair = hair.Front,
      BackHair = hair.Back,
      hatScale = hair.hatScale;
  var FrontHat = hat.Front,
      BackHat = hat.Back;
  var FrontBody = body.Front,
      BackBody = body.Back,
      hasBreasts = body.hasBreasts;
  var ClothingFront = clothing.Front,
      ClothingBack = clothing.Back,
      _clothing$braStraps = clothing.braStraps,
      braStraps = _clothing$braStraps === void 0 ? true : _clothing$braStraps;
  var BgShape = bgShape.Shape,
      BgMask = bgShape.Mask;
  return React__default.createElement(reactNative.View, Object.assign({
    style: _extends({}, containerStyles, {
      height: size,
      width: size
    })
  }, containerProps), React__default.createElement(reactNativeSvg.Svg, Object.assign({
    ref: svgRef,
    viewBox: "0 0 1000 990"
  }, rest), showBackground && React__default.createElement(BgMask, {
    id: "mask"
  }), React__default.createElement(reactNativeSvg.G, {
    mask: "url(#mask)"
  }, showBackground && React__default.createElement(BgShape, {
    bgColor: bgColor
  }), React__default.createElement(BackHat, {
    color: hatColor,
    scale: hatScale
  }), React__default.createElement(BackHair, {
    hairColor: hairColor,
    hasHat: FrontHat !== Noop
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M610,758.72c90.76,0,72,114.24,72.87,241.28H610Z",
    fill: skin.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M632.74,831.87,610,870l11.38,130h31.76C653.91,819.73,632.74,831.87,632.74,831.87Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M233.25,500c0-147.32,119.43-266.75,266.75-266.75S766.75,352.68,766.75,500A266.22,266.22,0,0,1,668.1,707.12q-8.21,6.68-16.94,12.69C591,758,515,758,446.39,751.89c-6.66-1-13.3-2.26-19.89-3.71-26.33-5.8-51.82-14.75-75.37-27.8Q342.4,715,334.2,708.76a199.59,199.59,0,0,1-15.8-13.38q-7.14-6.63-13.79-13.78A265.86,265.86,0,0,1,233.25,500Z",
    fill: skin.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M269.61,634.48c.7,1.2,1.39,2.4,2.11,3.58.43.72.88,1.42,1.33,2.14.66,1.07,1.32,2.14,2,3.19.48.76,1,1.5,1.46,2.24.66,1,1.32,2,2,3,.51.76,1,1.52,1.56,2.28.66,1,1.32,1.92,2,2.88.54.77,1.1,1.53,1.65,2.3s1.34,1.85,2,2.77,1.15,1.53,1.73,2.29,1.37,1.8,2.07,2.7,1.19,1.51,1.79,2.26,1.41,1.76,2.12,2.63,1.23,1.49,1.85,2.23,1.44,1.72,2.17,2.57,1.27,1.47,1.91,2.2l2.22,2.5c.65.73,1.31,1.44,2,2.16.86.94,1.73,1.87,2.6,2.79l1.21,1.28c1.29,1.34,2.59,2.68,3.91,4l.26.27c1.29,1.28,2.6,2.55,3.91,3.81l1.58,1.5c.95.89,1.9,1.78,2.86,2.66l1.16,1.06c1,.94,2.09,1.86,3.14,2.78q4.9,4.27,10,8.19,8.19,6.24,16.93,11.62c23.55,13,49,22,75.37,27.8,6.59,1.45,13.23,2.7,19.89,3.71,42.1,3.75,87,5.18,129.28-3.08C508.45,729,185.59,612.74,388.8,257.48h0c-2.72,1.25-5.4,2.54-8.06,3.88l-.59.29c-1.22.61-2.44,1.24-3.65,1.88l-1,.53c-3.76,2-7.48,4.07-11.13,6.23l-.9.53c-1.16.69-2.31,1.39-3.46,2.1l-.87.54q-5.36,3.35-10.55,6.93l-1.08.75c-1.09.76-2.16,1.52-3.23,2.29l-.66.47q-3.27,2.39-6.46,4.84l-.62.48c-1,.78-2,1.58-3,2.39l-1.17.94c-1,.81-2,1.62-3,2.45l0,0c-2.11,1.75-4.19,3.55-6.24,5.37l-1.14,1-2.69,2.45L318,305q-4.28,4-8.37,8.17l-1.38,1.41c-.79.82-1.58,1.64-2.36,2.47-.46.49-.92,1-1.37,1.48q-2.06,2.2-4.06,4.46c-.45.51-.91,1-1.36,1.54-.71.81-1.41,1.63-2.11,2.45l-1.51,1.79c-.68.81-1.36,1.62-2,2.44-.54.66-1.08,1.33-1.61,2-1.07,1.33-2.12,2.66-3.16,4-.54.7-1.08,1.4-1.61,2.11s-1.2,1.59-1.79,2.4-1.07,1.45-1.59,2.18-1.13,1.55-1.68,2.33q-1.42,2-2.8,4.05c-.5.73-1,1.48-1.49,2.22s-1.1,1.66-1.64,2.5l-1.49,2.31-1.68,2.71c-.43.69-.86,1.38-1.28,2.07-.89,1.46-1.75,2.93-2.61,4.4l-1.22,2.16c-.54.95-1.08,1.91-1.61,2.87-.4.73-.8,1.46-1.19,2.19-.64,1.19-1.27,2.39-1.9,3.59l-1.2,2.34c-.64,1.28-1.28,2.55-1.91,3.84-.33.69-.67,1.39-1,2.09-.52,1.09-1,2.19-1.53,3.29-.31.66-.61,1.32-.91,2q-1.11,2.47-2.17,5c-.22.52-.43,1.05-.65,1.57-.53,1.27-1.05,2.54-1.56,3.82-.27.67-.53,1.34-.79,2-.5,1.26-1,2.53-1.45,3.8-.21.55-.42,1.1-.62,1.65q-.94,2.63-1.85,5.26l-.56,1.7q-.66,2-1.29,4l-.6,1.91c-.47,1.54-.93,3.08-1.37,4.63-.1.33-.2.66-.29,1q-.78,2.76-1.5,5.54c-.16.59-.3,1.19-.45,1.78-.35,1.39-.69,2.78-1,4.18l-.42,1.75c-.43,1.9-.85,3.8-1.24,5.71l-.15.77q-.51,2.55-1,5.1c-.11.61-.21,1.21-.32,1.82-.26,1.49-.51,3-.74,4.5-.08.51-.17,1-.24,1.52-.3,1.95-.57,3.91-.83,5.88l-.15,1.3c-.2,1.59-.38,3.19-.55,4.79-.06.6-.13,1.2-.19,1.81-.16,1.68-.31,3.37-.45,5.06,0,.35-.06.69-.08,1q-.22,3-.39,6.05c0,.53,0,1.07-.07,1.6q-.1,2.36-.18,4.71c0,.59,0,1.18,0,1.77,0,2.05-.08,4.11-.08,6.17,0,0,0,.07,0,.1,0,2.22,0,4.42.08,6.62,0,.76.06,1.52.08,2.28.05,1.47.1,2.94.17,4.41,0,.89.11,1.77.16,2.66.08,1.33.15,2.66.25,4,.07,1,.16,1.89.24,2.83.11,1.26.21,2.52.34,3.77.09,1,.21,1.94.31,2.91.14,1.21.27,2.43.42,3.64.12,1,.26,2,.39,2.95.16,1.18.32,2.37.5,3.55.15,1,.31,2,.47,3,.18,1.16.37,2.33.57,3.49.18,1,.36,2,.55,3,.21,1.15.43,2.3.65,3.44s.41,2,.62,3c.24,1.14.48,2.27.74,3.4s.44,2,.68,2.93c.26,1.13.54,2.25.82,3.36s.49,1.95.74,2.91c.3,1.12.6,2.23.91,3.34.26,1,.53,1.92.81,2.87.32,1.11.65,2.21,1,3.31s.58,1.89.88,2.84.7,2.19,1.06,3.28.62,1.87.94,2.8c.38,1.09.76,2.18,1.15,3.27.33.91.65,1.83,1,2.74l1.24,3.27c.35.89.69,1.79,1,2.68.44,1.09.89,2.19,1.34,3.28.36.86.71,1.73,1.08,2.59.47,1.12,1,2.22,1.45,3.33.37.82.73,1.65,1.1,2.47.52,1.16,1.07,2.3,1.6,3.44l1.08,2.3c.61,1.26,1.24,2.5,1.87,3.75.32.63.62,1.27.95,1.9q2.88,5.61,6,11.07C268.88,633.26,269.25,633.87,269.61,634.48Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M233.25,500c0-147.32,119.43-266.75,266.75-266.75S766.75,352.68,766.75,500A266.22,266.22,0,0,1,668.1,707.12q-8.21,6.68-16.94,12.69C591,758,515,758,446.39,751.89c-6.66-1-13.3-2.26-19.89-3.71-26.33-5.8-51.82-14.75-75.37-27.8Q342.4,715,334.2,708.76a199.59,199.59,0,0,1-15.8-13.38q-7.14-6.63-13.79-13.78A265.86,265.86,0,0,1,233.25,500Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M386.12,758.72c-90.77,0-72,114.24-72.87,241.28h72.87Z",
    fill: skin.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M367.23,831.87,390,870l-11.39,130H346.88C346.07,819.73,367.23,831.87,367.23,831.87Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M619.47,1070H380.53a13.28,13.28,0,0,1-13.27-13.28V772a13.28,13.28,0,0,1,13.27-13.28H613.76c13.09,0,19,7.66,19,19.88v278.08A13.28,13.28,0,0,1,619.47,1070Z",
    fill: skin.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M629.05,766.62a19.33,19.33,0,0,1-2.51-4,17.25,17.25,0,0,0-8.28-3.51,28.88,28.88,0,0,0-4.5-.34H380.53A13.28,13.28,0,0,0,367.26,772c29,10.42,83.29,16.24,132.74,16.24C563.06,788.24,604.38,778.89,629.05,766.62Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M610,758.72c90.76,0,72,114.24,72.87,241.28H632.74",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M386.12,758.72c-90.77,0-72,114.24-72.87,241.28h50.07",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M380.53,758.82l233.23-.1",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M380.53,1070H497.15C388,1070,396.24,838.82,367.26,838.82v217.86A13.28,13.28,0,0,0,380.53,1070Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M361.26,860.85c-.19-3.67-.11-7.34.05-11s.47-7.35.86-11c.2-1.84.4-3.67.65-5.51s.49-3.67.85-5.51a44.18,44.18,0,0,1,3.59-11,44.18,44.18,0,0,1,3.59,11c.36,1.84.62,3.67.85,5.51s.45,3.67.65,5.51c.38,3.67.68,7.34.85,11s.25,7.34.06,11Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M632.74,870v8c.26,34,.26,69,0,102.75,0,2.87,0,5.72,0,8.53v67.41A13.28,13.28,0,0,1,619.47,1070H380.53a13.28,13.28,0,0,1-13.27-13.28V998.52c0-2.51,0-5.07,0-7.65-.25-34.87-.25-69.87,0-105.3V860.85",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M626.74,870c-.19-4.17-.1-8.35.06-12.53s.47-8.35.85-12.53c.2-2.09.41-4.18.65-6.27s.49-4.17.85-6.26a55.09,55.09,0,0,1,3.59-12.53,55.09,55.09,0,0,1,3.59,12.53c.36,2.09.62,4.18.85,6.26s.45,4.18.65,6.27c.38,4.18.69,8.35.85,12.53s.25,8.36.06,12.53Z",
    fill: colors.outline
  }), React__default.createElement(BackBody, {
    clothingColor: clothingColor,
    braStraps: braStraps
  }), React__default.createElement(ClothingBack, {
    color: clothingColor,
    graphic: Graphic,
    hasBreasts: hasBreasts
  }), !(ClothingFront === Noop && ClothingBack === Noop) && React__default.createElement(FrontBody, {
    clothingColor: ClothingBack === DressShirt ? 'white' : clothingColor,
    braStraps: braStraps
  }), React__default.createElement(ClothingFront, {
    color: clothingColor,
    graphic: Graphic,
    hasBreasts: hasBreasts
  }), React__default.createElement(Eyebrows, null), React__default.createElement(Eyes, {
    withLashes: lashes
  }), React__default.createElement(FacialHair, {
    color: hairColor
  }), React__default.createElement(Mouth, {
    lipColor: lipColor
  }), React__default.createElement(FrontHair, {
    hairColor: hairColor,
    hasHat: FrontHat !== Noop
  }), React__default.createElement(FrontHat, {
    color: hatColor,
    scale: hatScale
  }), React__default.createElement(Accessory, null))));
};

var NormalEyebrows = function NormalEyebrows() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M600.89,460.57a318.14,318.14,0,0,1,33.51-6.65l-2.66.35c13.18-1.74,26.54-2.25,39.75-.48l-2.66-.36c3.27.46,6.54,1,9.82,1.42l-2.66-.36a221,221,0,0,1,29.48,6.11c5,1.39,11.1-1.73,12.3-7a10.19,10.19,0,0,0-7-12.3,239.21,239.21,0,0,0-34.59-6.78l2.66.36a143,143,0,0,0-33.44-1.95,235.08,235.08,0,0,0-33.09,4.55c-5.62,1.13-11.2,2.43-16.76,3.8-5.08,1.25-8.62,7.26-7,12.3a10.19,10.19,0,0,0,12.3,7Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M286.14,460.6a202.56,202.56,0,0,1,29.25-6.19l-2.66.36a195.53,195.53,0,0,1,51.38.08l-2.66-.35a218.94,218.94,0,0,1,29.45,6.1c5,1.4,11.1-1.73,12.3-7a10.19,10.19,0,0,0-7-12.3A227.26,227.26,0,0,0,352,433.6a208.27,208.27,0,0,0-71.22,7.71,10.39,10.39,0,0,0-6,4.6,10.2,10.2,0,0,0-1,7.7c1.65,5.11,6.91,8.54,12.3,7Z",
    fill: colors.outline
  }));
};

var LeftLoweredEyebrows = function LeftLoweredEyebrows() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M603.1,452.29a320.74,320.74,0,0,1,33.51-6.66L634,446a150.31,150.31,0,0,1,39.75-.48l-2.66-.36c3.28.45,6.54,1,9.82,1.41l-2.66-.35a222.52,222.52,0,0,1,29.48,6.1c5,1.4,11.11-1.72,12.3-7a10.19,10.19,0,0,0-7-12.3,239.34,239.34,0,0,0-34.58-6.78l2.65.36a142.93,142.93,0,0,0-33.43-1.95,236.67,236.67,0,0,0-33.1,4.54c-5.61,1.14-11.19,2.44-16.76,3.81-5.08,1.25-8.61,7.26-7,12.3a10.21,10.21,0,0,0,12.3,7Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M261.26,502.22l14.13-1.48,33.67-3.52L350,492.93l35.18-3.69c5.72-.59,11.44-1.17,17.16-1.79l.24,0c2.73-.28,5.07-.92,7.07-2.93a10,10,0,0,0,0-14.14c-1.83-1.69-4.48-3.2-7.07-2.93l-14.13,1.48-33.67,3.53-41,4.29-35.18,3.68c-5.72.6-11.44,1.18-17.16,1.8l-.24,0c-2.73.29-5.07.93-7.07,2.93a10,10,0,0,0,0,14.15c1.83,1.68,4.48,3.2,7.07,2.92Z",
    fill: colors.outline
  }));
};

var Grin = function Grin() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M463.75,593.17c15.55,0,25.12,12.76,36.49,12.76s25.91-12.76,41.27-12.76,23.72,11.12,23.72,26.52c0,16.65-16.75,46-62.6,46s-65.4-27.74-65.4-45.45C437.23,603.89,448.2,593.17,463.75,593.17Z",
    fill: colors.white,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Line, {
    x1: "477.85",
    y1: "596.6",
    x2: "477.85",
    y2: "662.1",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Line, {
    x1: "526.99",
    y1: "596.6",
    x2: "526.99",
    y2: "662.1",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }));
};

var SadMouth = function SadMouth() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M538.71,665.74c-15.55,0-25.12-12.76-36.48-12.76S476.31,665.74,461,665.74s-23.73-11.11-23.73-26.51c0-16.65,16.75-46.06,62.61-46.06s65.39,27.74,65.39,45.46C565.23,655,554.27,665.74,538.71,665.74Z",
    fill: colors.outline,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M511.14,655.25C506.58,643,491,635,473.29,636.57c-14.79,1.34-26.93,9.09-31.84,19.1,3.92,6.26,10.51,10.07,19.51,10.07,15.35,0,29.9-12.76,41.27-12.76A21.5,21.5,0,0,1,511.14,655.25Z",
    fill: colors.tongue
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M455.06,628.66l.87-.35.73-.25c.47-.16.94-.28,1.41-.4a21.33,21.33,0,0,1,2.85-.53,24.24,24.24,0,0,1,5.84-.07,21.24,21.24,0,0,1,11.15,4.48,20.07,20.07,0,0,1,6.55,9.27,17.31,17.31,0,0,1,.2,10.44c-2.5-2.58-4.46-4.94-6.43-6.88a27.89,27.89,0,0,0-2.88-2.58,13.78,13.78,0,0,0-3-1.72,15.18,15.18,0,0,0-6.35-1.15,29.08,29.08,0,0,0-3.43.3c-.57.1-1.16.19-1.72.31l-.84.19-.39.08c-.09,0-.29.08-.22,0Z",
    fill: colors.outline
  }));
};

var Lips = function Lips(_ref) {
  var lipColor = _ref.lipColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var _colors$lipColors = colors.lipColors[lipColor || 'red'],
      base = _colors$lipColors.base,
      shadow = _colors$lipColors.shadow;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M558.55,642.44c-3.63,0-5.35-1.31-15.58-10.79-7.49-6.93-12.63-10.36-18.91-11.46-7.83-1.37-15.83-.88-24.36,7.68-8.53-8.56-16.52-9-24.36-7.68-6.28,1.1-11.42,4.53-18.91,11.46-10.23,9.48-11.95,10.79-15.58,10.79a1.84,1.84,0,0,0-1.3,3.14q26.25,26.25,60.15,26.28t60.15-26.28A1.84,1.84,0,0,0,558.55,642.44Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M559.57,645.84l-.55-2.21c-70.56,16.12-118.17.53-118.17.53l-1.77-.31a1.82,1.82,0,0,0,.47,1.73q26.25,26.25,60.15,26.28Q533.38,671.86,559.57,645.84Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M479.28,650.39c13.45-.94,26.69-1.44,39.89-3,6.59-.76,13.15-1.74,19.67-2.86s13-2.41,19.51-3.8l1.34,5.85q-9.87,2.34-19.92,3.81t-20.16,2.06c-6.75.37-13.5.54-20.25.27A127.84,127.84,0,0,1,479.28,650.39Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M441.79,641.31c1.69.43,3.57,1,5.38,1.48s3.65,1.08,5.49,1.63,3.68,1.1,5.52,1.77a27.06,27.06,0,0,1,5.46,2.64,22.06,22.06,0,0,1-6.05.9c-2,0-3.95-.16-5.93-.32s-3.93-.47-5.88-.85a38.82,38.82,0,0,1-5.86-1.55Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M558.55,642.44c-3.63,0-5.35-1.31-15.58-10.79-7.49-6.93-12.53-11.29-18.91-11.46-11.21-.3-19.15,6.12-24.76,6.12s-10.45-7.53-24-6.12c-6.34.66-11.42,4.53-18.91,11.46-10.23,9.48-11.95,10.79-15.58,10.79a1.84,1.84,0,0,0-1.3,3.14q26.25,26.25,60.15,26.28t60.15-26.28A1.84,1.84,0,0,0,558.55,642.44Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M524.06,626.48a41.49,41.49,0,0,0-12.19,2.94c-1.94.77-3.87,1.6-5.85,2.42a20.2,20.2,0,0,1-6.42,1.74,8.92,8.92,0,0,1-3.47-.64,24,24,0,0,1-3-1.4,59.7,59.7,0,0,0-5.58-2.83,27.56,27.56,0,0,0-5.94-1.73,38.5,38.5,0,0,0-6.29-.5,26.31,26.31,0,0,1,6.4-.48,24.54,24.54,0,0,1,6.38,1.25,46,46,0,0,1,5.9,2.6c1.87.94,3.71,1.83,5.52,1.74a19.76,19.76,0,0,0,5.8-1.51c2-.71,4-1.51,6-2.13A30,30,0,0,1,524.06,626.48Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M472.62,652.36c3.22,0,3.23-5,0-5s-3.22,5,0,5Z",
    fill: colors.outline
  }));
};

var SmileOpen = function SmileOpen() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M443.14,621.86c0-18.9,113.72-16.06,113.72,0a56.86,56.86,0,0,1-113.72,0Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M495,643c-16.95-1-31.73,6.75-36.65,18.22a56.86,56.86,0,0,0,65.14,12.53A55.39,55.39,0,0,0,530,670.2C529.08,656.09,514.06,644.18,495,643Z",
    fill: colors.tongue
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M443.14,621.86c0-18.9,113.72-16.06,113.72,0a56.86,56.86,0,0,1-113.72,0Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "6px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M478.12,632.46c.45-.11.63-.16.92-.21l.75-.14c.49-.09,1-.14,1.46-.18a21.54,21.54,0,0,1,2.89-.1,25,25,0,0,1,5.79.81,21.4,21.4,0,0,1,10.35,6.1,20.18,20.18,0,0,1,5.08,10.16A17.27,17.27,0,0,1,504,659.25c-2.07-2.93-3.66-5.56-5.32-7.76a28.41,28.41,0,0,0-2.45-3,14.06,14.06,0,0,0-2.7-2.16,15.48,15.48,0,0,0-6.11-2.09A29.5,29.5,0,0,0,484,644c-.59,0-1.18,0-1.76.05l-.85.06-.39,0c-.1,0-.3,0-.23,0Z",
    fill: colors.outline
  }));
};

var Back = function Back(_ref) {
  var hairColor = _ref.hairColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var base = colors.hair[hairColor].base;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M501.71,209.52c-166.14,0-300.83,134.68-300.83,300.83V816.78c0,166.14,134.69,300.83,300.83,300.83S802.54,982.92,802.54,816.78V510.35C802.54,344.2,667.85,209.52,501.71,209.52Z",
    fill: base,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }));
};
var Front = function Front(_ref2) {
  var hairColor = _ref2.hairColor;

  var _useTheme2 = useTheme(),
      colors = _useTheme2.colors,
      skin = _useTheme2.skin;

  var base = colors.hair[hairColor].base;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M559.29,397.34c-12.87,24-60,37.44-63.83,31.42-4.3-6.73,37.84-55.32,13.9-106.14",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M746.9,365.72c-43.51-90.29-140.27-142-244.74-142-131.19,0-253.5,95-275.32,223.74,0,0,202.41,15.32,275.25-67.4C511.7,384.77,658.18,457.67,746.9,365.72Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M502.16,233.15a361.93,361.93,0,0,0-51.86,7.33l-12.68,3.05c-4.2,1.13-8.36,2.37-12.54,3.55l-12.39,4c-4.09,1.46-8.13,3-12.2,4.54a339.08,339.08,0,0,0-46.87,22.71,388.52,388.52,0,0,0-43.25,29.58,233,233,0,0,1,40.79-33.56,258.22,258.22,0,0,1,47.14-24.31c4.17-1.5,8.32-3.06,12.5-4.51,4.24-1.29,8.44-2.7,12.7-3.9s8.58-2.19,12.89-3.21,8.68-1.76,13-2.53A224.82,224.82,0,0,1,502.16,233.15Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M537.23,398.81C526.9,418.12,489.07,428.88,486,424c-3.45-5.4,30.38-44.42,11.16-85.22",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M240.15,454.33s185.57,8.28,259.86-72c-5,19.52-15.75,34.09-13.79,37.16,2.89,4.53,38-5.42,48.16-23.35,45.56,19,131.48,41.33,206.15-16.09",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }));
};
var hatScale = 1.12;

var LongHair = {
  __proto__: null,
  Back: Back,
  Front: Front,
  hatScale: hatScale
};

var Back$1 = function Back() {
  return React__default.createElement(React__default.Fragment, null);
};
var Front$1 = function Front(_ref) {
  var hairColor = _ref.hairColor,
      _ref$hasHat = _ref.hasHat,
      hasHat = _ref$hasHat === void 0 ? false : _ref$hasHat;

  var _useTheme = useTheme(),
      colors = _useTheme.colors,
      skin = _useTheme.skin;

  var _colors$hair$hairColo = colors.hair[hairColor],
      base = _colors$hair$hairColo.base,
      shadow = _colors$hair$hairColo.shadow;
  return React__default.createElement(React__default.Fragment, null, !hasHat && React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Circle, {
    cx: "499.7",
    cy: "170.67",
    r: "107.58",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M559.29,397.34c-12.87,24-60,37.44-63.83,31.42-4.3-6.73,37.84-55.32,13.9-106.14",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M420.82,134.59A71.58,71.58,0,0,1,433,112.84c1.37-1.59,2.72-3.21,4.16-4.74s3-3,4.53-4.41,3.21-2.73,4.88-4,3.41-2.5,5.17-3.65,3.6-2.21,5.47-3.19l2.82-1.43a31,31,0,0,1,2.86-1.35c2-.76,3.89-1.62,5.89-2.29s4-1.32,6-1.81a72,72,0,0,1,24.86-2,112.32,112.32,0,0,0-24,5c-1,.26-1.9.7-2.85,1l-2.85,1c-1.88.73-3.69,1.65-5.54,2.45s-3.58,1.85-5.38,2.77-3.44,2.09-5.17,3.12-3.33,2.28-5,3.41-3.15,2.52-4.76,3.75-3,2.68-4.53,4l-4.28,4.31A110.47,110.47,0,0,0,420.82,134.59Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M409.8,229.76C429,259,435.67,233.25,498,233.25c107.21,0,73.62,25,92.69-5.15-27.59-9.65-44-19.39-88.13-19.39C460.26,208.71,438.69,219.05,409.8,229.76Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "499.7",
    cy: "170.67",
    r: "107.58",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  })), React__default.createElement(reactNativeSvg.Path, {
    d: "M421.52,244.56C335.16,273.62,263.78,346.74,245.06,429.8,213,556.34,262.89,634,307.17,681.6c4.37,4.7-69.46-138.26-2.43-241,61.1-2.32,152.42-14.38,195.78-62.86C496.18,398.87,484,415,486,418.18c2.88,4.51,38.19-5.53,47.84-23.54l.83-3.61c34.72,12.58,91.76,26.59,144,6.61C801.81,535.94,691.29,689,700.3,679a265.78,265.78,0,0,0,69-179c0-86.42-44.28-148.89-44.28-148.89C694.5,296.7,641.5,259.24,580.22,242",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M326.66,439.38c5.38-52.22,25-112.5,64.7-181.9h0q-4.07,1.88-8.06,3.88l-.59.29c-1.22.61-2.44,1.24-3.65,1.88l-1,.53q-5.64,3-11.13,6.23l-.9.53c-1.16.69-2.31,1.39-3.46,2.1l-.86.54q-5.37,3.35-10.56,6.93l-1.08.75c-1.08.76-2.16,1.52-3.23,2.29l-.65.47q-3.27,2.39-6.47,4.84l-.62.48c-1,.78-2,1.58-3,2.39l-1.18.94c-1,.81-2,1.62-3,2.45l0,0c-2.11,1.75-4.18,3.55-6.24,5.37l-1.14,1-2.69,2.45L320.53,305q-4.27,4-8.37,8.17l-1.37,1.41c-.8.82-1.59,1.64-2.37,2.47l-1.37,1.48Q305,320.77,303,323c-.46.51-.92,1-1.37,1.54-.71.81-1.41,1.63-2.11,2.46-.51.59-1,1.18-1.51,1.78-.68.81-1.36,1.62-2,2.44-.54.66-1.07,1.33-1.61,2-1.06,1.33-2.11,2.66-3.15,4-.55.7-1.09,1.4-1.62,2.11s-1.2,1.59-1.79,2.4l-1.59,2.18c-.56.78-1.13,1.55-1.68,2.33-.94,1.34-1.88,2.69-2.8,4.05-.5.73-1,1.48-1.48,2.22s-1.11,1.66-1.65,2.5-1,1.54-1.48,2.31-1.13,1.8-1.69,2.71c-.43.69-.86,1.38-1.28,2.07q-1.32,2.19-2.6,4.4c-.42.72-.82,1.44-1.23,2.16-.54.95-1.08,1.91-1.61,2.87-.4.73-.8,1.46-1.19,2.19-.64,1.19-1.27,2.39-1.89,3.59-.41.78-.81,1.56-1.21,2.34-.64,1.28-1.28,2.55-1.9,3.84-.34.69-.67,1.39-1,2.09-.52,1.09-1,2.19-1.54,3.29l-.91,2q-1.11,2.47-2.17,5c-.22.52-.43,1.05-.65,1.57-.53,1.27-1,2.54-1.56,3.82-.26.67-.53,1.34-.79,2-.49,1.26-1,2.53-1.45,3.8l-.61,1.65q-1,2.63-1.86,5.26l-.56,1.7q-.66,2-1.29,4c-.2.63-.4,1.27-.59,1.91q-.72,2.31-1.38,4.63c-.1.33-.2.66-.29,1q-.78,2.76-1.5,5.54l-.45,1.78c-.19.74-.37,1.49-.55,2.24-1.56,6.69-2.88,13.23-4,19.64-.1.65-.22,1.3-.32,1.95l-.24,1.51q-.45,2.94-.82,5.89c-.06.43-.11.87-.16,1.3-.2,1.59-.38,3.19-.55,4.79l-.18,1.81c-.17,1.68-.32,3.37-.45,5.06l-.09,1q-.23,3-.38,6.05c0,.53-.05,1.07-.08,1.6q-.11,2.36-.18,4.71c0,.59,0,1.18-.05,1.77,0,2.05-.07,4.11-.07,6.17v.1q0,3.31.08,6.62c0,.76.06,1.52.08,2.28.05,1.47.1,2.94.17,4.41.05.89.11,1.77.16,2.66.08,1.33.16,2.66.25,4,.07,1,.16,1.89.24,2.83.11,1.26.21,2.52.34,3.77.09,1,.21,1.94.31,2.91.14,1.21.27,2.43.42,3.64.12,1,.26,2,.39,2.95.16,1.18.33,2.37.5,3.55.15,1,.31,2,.47,3,.19,1.16.37,2.33.58,3.49.17,1,.35,2,.54,3,.21,1.15.43,2.3.66,3.44s.4,2,.61,3c.24,1.14.48,2.27.74,3.4s.45,2,.68,2.93c.26,1.13.54,2.25.82,3.36s.49,1.95.75,2.91c.29,1.12.59,2.23.9,3.34.27,1,.53,1.92.81,2.87.32,1.11.65,2.21,1,3.31s.57,1.89.87,2.84.71,2.19,1.07,3.28c.31.93.61,1.87.93,2.8l1.15,3.27,1,2.74c.41,1.09.83,2.18,1.25,3.27.34.89.68,1.79,1,2.68.44,1.09.89,2.19,1.34,3.28.36.86.71,1.73,1.08,2.59.48,1.12,1,2.22,1.46,3.33.36.83.72,1.65,1.09,2.47.52,1.16,1.07,2.3,1.61,3.44.36.77.71,1.54,1.08,2.3.6,1.26,1.23,2.5,1.86,3.75l.95,1.9q2.88,5.61,6,11.07c.36.62.73,1.23,1.09,1.84.7,1.2,1.39,2.4,2.11,3.58.44.72.89,1.42,1.33,2.14.66,1.07,1.32,2.14,2,3.19.48.76,1,1.5,1.47,2.24.65,1,1.31,2,2,3,.51.76,1,1.52,1.56,2.28.66,1,1.32,1.92,2,2.88.54.77,1.1,1.53,1.65,2.3s1.34,1.85,2,2.77,1.15,1.53,1.72,2.29l2.07,2.7c.59.76,1.19,1.51,1.79,2.26s1.41,1.76,2.12,2.63,1.23,1.49,1.85,2.23,1.44,1.72,2.17,2.57,1.27,1.47,1.91,2.2l2.22,2.5c.65.73,1.31,1.44,2,2.16l1.15,1.25c2.9,1.92-68.91-139.3-2.51-241.08C311.7,440.33,319,439.94,326.66,439.38Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M657.94,378.93s-2.1,20.81-50.63,28.22c23.11,1.6,47.74-.46,71.38-9.51C681.91,401.25,657.94,378.93,657.94,378.93Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M304.74,441s-11,1.14-30.77-1.89",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M305.35,447c-.51.08-.81.11-1.19.15s-.71.07-1.07.1c-.7,0-1.39.08-2.08.08-1.37,0-2.73,0-4.08-.16a61,61,0,0,1-8-1.22c-1.31-.29-2.61-.59-3.9-1a31.69,31.69,0,0,1-3.83-1.25,22.55,22.55,0,0,1-7.25-4.59,23.84,23.84,0,0,1,4.11-1.63,31.51,31.51,0,0,1,3.95-.91c2.59-.42,5.12-.55,7.64-.79s5-.39,7.45-.53c1.22-.08,2.44-.12,3.63-.17l1.78,0c.29,0,.59,0,.86,0s.6,0,.73,0Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M677,396.19s-10.71-14.3-40.38-31",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M672.14,399.78l-1.77-1.91-2-2.12c-1.39-1.41-2.82-2.85-4.27-4.25-2.92-2.82-5.95-5.62-9-8.4s-6.3-5.44-9.43-8.32c-1.56-1.44-3.13-2.91-4.63-4.52a48,48,0,0,1-4.39-5.1,43.5,43.5,0,0,1,6.65,1.34,60,60,0,0,1,6.24,2.24c2,.89,4,1.83,5.91,2.91s3.84,2.13,5.72,3.29A96.15,96.15,0,0,1,672,382.62c1.71,1.45,3.43,2.91,5,4.53.82.79,1.61,1.63,2.39,2.5.39.45.78.87,1.16,1.35s.72.89,1.22,1.59Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M421.52,244.56C335.16,273.62,263.78,346.74,245.06,429.8,213,556.34,262.89,634,307.17,681.6c4.37,4.7-69.46-138.26-2.43-241,61.1-2.32,152.42-14.38,195.78-62.86C496.18,398.87,484,415,486,418.18c2.88,4.51,38.19-5.53,47.84-23.54l.83-3.61c34.72,12.58,91.76,26.59,144,6.61C801.81,535.94,691.29,689,700.3,679a265.78,265.78,0,0,0,69-179c0-86.42-44.28-148.89-44.28-148.89C694.5,296.7,641.5,259.24,580.22,242",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M520.11,249.17a367.15,367.15,0,0,0-42.48,4.93c-3.49.68-7,1.42-10.44,2.06s-6.9,1.61-10.35,2.41l-10.27,2.72c-3.39,1-6.76,2.08-10.14,3.11A312.8,312.8,0,0,0,397,280.14a347.55,347.55,0,0,0-37.25,21A183.48,183.48,0,0,1,394.83,276a218.27,218.27,0,0,1,39.76-17.3c3.47-1,6.93-2.08,10.42-3.05s7-1.82,10.54-2.59,7.1-1.41,10.66-2,7.15-1.08,10.74-1.52A189.39,189.39,0,0,1,520.11,249.17Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M529.83,233.83a70.16,70.16,0,0,1,15.44-1.92c2.56-.06,5.11,0,7.67.13s5.12.3,7.68.52a138.69,138.69,0,0,1,15.35,2.2A95.37,95.37,0,0,1,591.05,239l-3.9,11.35c-4.61-1.38-9.24-2.78-13.94-4.07s-9.45-2.51-14.25-3.71l-7.25-1.76c-2.43-.57-4.87-1.15-7.3-1.81A85.14,85.14,0,0,1,529.83,233.83Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M412.45,241.49a96.65,96.65,0,0,1,13.65-4.15,138.88,138.88,0,0,1,14-2.45c2.34-.28,4.68-.53,7-.71s4.69-.33,7-.34a57.35,57.35,0,0,1,14.27,1.58,77.5,77.5,0,0,1-13.13,5.5c-2.19.73-4.39,1.37-6.59,2l-6.55,1.93c-4.34,1.32-8.67,2.6-12.94,4s-8.52,2.72-12.79,4Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "514.26",
    cy: "233.25",
    r: "5.84",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "497.99",
    cy: "233.25",
    r: "4.13",
    fill: colors.outline
  }));
};

var BunHair = {
  __proto__: null,
  Back: Back$1,
  Front: Front$1
};

var Back$2 = function Back() {
  return React__default.createElement(React__default.Fragment, null);
};
var Front$2 = function Front(_ref) {
  var hairColor = _ref.hairColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors,
      skin = _useTheme.skin;

  var _colors$hair$hairColo = colors.hair[hairColor],
      base = _colors$hair$hairColo.base,
      shadow = _colors$hair$hairColo.shadow;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M558.73,399.34c-12.86,24-60,37.44-63.83,31.42-4.29-6.73,37.85-55.32,13.9-106.14",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M784,342.85c-5.1-5.1-31.06,1.83-57.19-.23A281,281,0,0,0,505.63,228.28c-2.44-20.48-.75-37.68-2.61-40.1-2.49-3.22-15.49,12.68-18.87,31-11.91-15-32.14-23-32.72-18.8-.38,2.68,7.44,14.09,14.81,29.9-111.6,13.47-203.08,92.26-235.08,197-13.86,11.92-26.86,20.34-27,25.69-.27,9.92,39.31,9.36,56.58,7.82v-.06c60.65-2,179-13.78,236.42-72.89C491.64,406.93,481.47,421,483.43,424c3,4.67,38.32-5.19,50.07-23.24,48,19.59,139.49,43.16,219-16.16l-.22-.43C766.77,372.06,790.35,349.25,784,342.85Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M726.85,348.62c-5.4.24-10.66.11-16-.14s-10.59-.67-15.87-1.26c-2.64-.29-5.28-.6-7.91-1s-5.27-.72-7.89-1.23a76.91,76.91,0,0,1-15.58-4.54,91.87,91.87,0,0,1,16-2.62c2.63-.22,5.26-.37,7.89-.48l7.88-.34c5.25-.22,10.49-.34,15.72-.45s10.48-.12,15.62,0Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M236.6,430s0,.24,0,.39l-.12.53-.28,1.11c-.21.75-.43,1.52-.66,2.29-.47,1.55-1,3.14-1.54,4.75s-1.06,3.28-1.77,5a20.6,20.6,0,0,1-1.38,2.6,17.91,17.91,0,0,1-2.07,2.77,13.14,13.14,0,0,1-3.72-5.47,16.11,16.11,0,0,1-.76-2.9c-.21-1-.31-2-.43-2.95a30,30,0,0,1,0-6,24.44,24.44,0,0,1,.48-3c.12-.5.25-1,.41-1.51a7.84,7.84,0,0,1,.27-.77c.1-.28.18-.48.36-.9Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M260.74,460.82v-.06c17-.56,38.63-1.9,62.14-4.84,2.63-55.92,22-121.58,65.92-198.44h0L382,254.23A282.15,282.15,0,0,0,231.16,427.31c-13.86,11.92-26.86,20.34-27,25.69C203.89,462.92,243.47,462.36,260.74,460.82Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M784,342.85c-5.1-5.1-31.06,1.83-57.19-.23A281,281,0,0,0,505.63,228.28c-2.44-20.48-.75-37.68-2.61-40.1-2.49-3.22-15.49,12.68-18.87,31-11.91-15-32.14-23-32.72-18.8-.38,2.68,7.44,14.09,14.81,29.9-111.6,13.47-203.08,92.26-235.08,197-13.86,11.92-26.86,20.34-27,25.69-.27,9.92,39.31,9.36,56.58,7.82v-.06c60.65-2,179-13.78,236.42-72.89C491.64,406.93,481.47,421,483.43,424c3,4.67,38.32-5.19,50.07-23.24,48,19.59,139.49,43.16,219-16.16l-.22-.43C766.77,372.06,790.35,349.25,784,342.85Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M505.93,244.31a367.42,367.42,0,0,0-42.48,4.94c-3.48.67-6.95,1.41-10.44,2.05s-6.9,1.61-10.35,2.41l-10.26,2.72c-3.4,1-6.77,2.08-10.15,3.12a314.12,314.12,0,0,0-39.43,15.73,348.31,348.31,0,0,0-37.25,21,183.85,183.85,0,0,1,35.08-25.14,219.23,219.23,0,0,1,39.76-17.29c3.48-1,6.94-2.09,10.42-3.05s7-1.82,10.55-2.6,7.1-1.4,10.66-2,7.15-1.07,10.73-1.52A190,190,0,0,1,505.93,244.31Z",
    fill: colors.white
  }));
};

var ShortHair = {
  __proto__: null,
  Back: Back$2,
  Front: Front$2
};

var Back$3 = function Back() {
  return React__default.createElement(React__default.Fragment, null);
};
var Front$3 = function Front(_ref) {
  var hairColor = _ref.hairColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors,
      skin = _useTheme.skin;

  var _colors$hair$hairColo = colors.hair[hairColor],
      base = _colors$hair$hairColo.base,
      shadow = _colors$hair$hairColo.shadow;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Rect, {
    x: "290.23",
    y: "414.02",
    width: "439.24",
    height: "64.15",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M710,667.66q-4.71,5.82-9.71,11.37C697.79,681.8,702.87,677.91,710,667.66Zm15-316.55C694.5,296.7,641.5,259.24,580.22,242l-6.35-1.71c-22.7-6.28-46.62-7-71.32-7-26.69,0-52.46,2.74-76.77,10l-4.26,1.27C335.16,273.62,263.78,346.74,245.06,429.8,213,556.34,262.89,634,307.17,681.6c4.37,4.7-57.93-101.85-17.42-216,7.73-.29,20.24-.51,36.19-.67l15.5-50.61,17.44,50.38c27.4-.13,59.88-.15,93.88-.12l12.32-52.36L479,464.6c74.37.14,151.44.52,195.28.77l13.2-52.17,15,52.33,8.21.05C760.78,572,728.5,641.13,710,667.66A265.62,265.62,0,0,0,769.3,500C769.3,413.58,725,351.11,725,351.11Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M325.14,464.92c.9-57.85,19.88-126.43,66.22-207.44h0q-4.07,1.88-8.06,3.88l-.59.29c-1.22.61-2.44,1.24-3.65,1.88l-1,.53q-5.64,3-11.13,6.23l-.9.53c-1.16.69-2.31,1.39-3.46,2.1l-.86.54q-5.37,3.35-10.56,6.93l-1.08.75c-1.08.76-2.16,1.52-3.23,2.29l-.65.47q-3.27,2.39-6.47,4.84l-.62.48c-1,.78-2,1.58-3,2.39l-1.18.94c-1,.81-2,1.62-3,2.45l0,0c-2.11,1.75-4.18,3.55-6.24,5.37l-1.14,1-2.69,2.45L320.53,305q-4.27,4-8.37,8.17l-1.37,1.41c-.8.82-1.59,1.64-2.37,2.47l-1.37,1.48Q305,320.77,303,323c-.46.51-.92,1-1.37,1.54-.71.81-1.41,1.63-2.11,2.45L298,328.8c-.68.81-1.36,1.62-2,2.44-.54.66-1.07,1.33-1.61,2-1.06,1.33-2.11,2.66-3.15,4-.55.7-1.09,1.4-1.62,2.11s-1.2,1.59-1.79,2.4l-1.59,2.18c-.56.78-1.13,1.55-1.68,2.33-.94,1.34-1.88,2.69-2.8,4.05-.5.73-1,1.48-1.48,2.22s-1.11,1.66-1.65,2.5-1,1.54-1.48,2.31-1.13,1.8-1.69,2.71c-.43.69-.86,1.38-1.28,2.07q-1.32,2.19-2.6,4.4c-.42.72-.82,1.44-1.23,2.16-.54.95-1.08,1.91-1.61,2.87-.4.73-.8,1.46-1.19,2.19-.64,1.19-1.27,2.39-1.89,3.59-.41.78-.81,1.56-1.21,2.34-.64,1.28-1.28,2.55-1.9,3.84-.34.69-.67,1.39-1,2.09-.52,1.09-1,2.19-1.54,3.29l-.91,2q-1.11,2.47-2.17,5c-.22.52-.43,1.05-.65,1.57-.53,1.27-1,2.54-1.56,3.82-.27.67-.53,1.34-.79,2-.49,1.26-1,2.53-1.45,3.8l-.61,1.65q-1,2.63-1.86,5.26l-.56,1.7q-.66,2-1.29,4c-.2.63-.4,1.27-.59,1.91q-.72,2.31-1.38,4.63c-.1.33-.2.66-.29,1q-.78,2.76-1.5,5.54l-.45,1.78c-.19.74-.37,1.49-.55,2.24-1.56,6.69-2.88,13.23-4,19.63-.1.66-.22,1.31-.32,2l-.24,1.52q-.45,2.93-.82,5.88c-.06.43-.11.87-.16,1.3-.2,1.59-.38,3.19-.55,4.79l-.18,1.81c-.17,1.68-.32,3.37-.45,5.06l-.09,1q-.23,3-.38,6.05c0,.53-.05,1.07-.08,1.6q-.11,2.36-.18,4.71c0,.59,0,1.18-.05,1.77,0,2.05-.07,4.11-.07,6.17v.1c0,2.22,0,4.42.08,6.62,0,.76.06,1.52.08,2.28.05,1.47.1,2.94.17,4.41.05.89.11,1.77.16,2.66.08,1.33.16,2.66.25,4l.24,2.83c.11,1.26.21,2.52.34,3.77.09,1,.21,1.94.31,2.91.14,1.21.27,2.43.42,3.64.12,1,.26,2,.39,2.95.16,1.18.33,2.37.5,3.55.15,1,.31,2,.47,3,.19,1.16.37,2.33.58,3.49.17,1,.35,2,.54,3,.21,1.15.43,2.3.66,3.44s.4,2,.61,3c.24,1.14.48,2.27.74,3.4s.45,2,.68,2.93c.27,1.13.54,2.25.82,3.36s.49,1.95.75,2.92.59,2.22.9,3.33c.26,1,.53,1.92.81,2.87.32,1.11.65,2.21,1,3.31s.57,1.89.87,2.84.71,2.19,1.07,3.28c.31.93.61,1.87.93,2.8.38,1.09.76,2.18,1.15,3.27l1,2.74c.41,1.09.83,2.18,1.25,3.27.34.89.68,1.79,1,2.68.44,1.09.89,2.19,1.34,3.28.36.86.71,1.73,1.08,2.59.48,1.12,1,2.22,1.46,3.33.36.83.72,1.65,1.09,2.47.52,1.16,1.07,2.3,1.61,3.44.36.77.71,1.54,1.08,2.3.6,1.26,1.23,2.5,1.86,3.75l.95,1.9q2.88,5.61,6,11.07c.36.62.73,1.23,1.09,1.84.7,1.2,1.39,2.4,2.11,3.58.44.72.89,1.42,1.33,2.14.66,1.07,1.32,2.14,2,3.19.48.76,1,1.5,1.47,2.24.65,1,1.31,2,2,3,.51.76,1,1.52,1.56,2.28.66,1,1.32,1.92,2,2.88.54.77,1.1,1.53,1.65,2.3s1.34,1.85,2,2.77,1.15,1.53,1.72,2.29l2.07,2.7c.59.76,1.19,1.51,1.79,2.26s1.41,1.76,2.12,2.63,1.23,1.49,1.85,2.23,1.44,1.72,2.17,2.57l1.91,2.2,2.22,2.5c.65.73,1.31,1.44,2,2.16.4.44.81.87,1.22,1.31,2.37,1.37-57.48-103.69-17.57-216.15C297.34,465.29,309.57,465.08,325.14,464.92Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M420.82,134.59A71.58,71.58,0,0,1,433,112.84c1.37-1.59,2.72-3.21,4.16-4.74s3-3,4.53-4.41,3.21-2.73,4.88-4,3.41-2.5,5.17-3.65,3.6-2.21,5.47-3.19l2.82-1.43a31,31,0,0,1,2.86-1.35c2-.76,3.89-1.62,5.89-2.29s4-1.32,6-1.81a72,72,0,0,1,24.86-2,112.32,112.32,0,0,0-24,5c-1,.26-1.9.7-2.85,1l-2.85,1c-1.88.73-3.69,1.65-5.54,2.45s-3.58,1.85-5.38,2.77-3.44,2.09-5.17,3.12-3.33,2.28-5,3.41-3.15,2.52-4.76,3.75-3,2.68-4.53,4l-4.28,4.31A110.47,110.47,0,0,0,420.82,134.59Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M520.11,249.17a367.15,367.15,0,0,0-42.48,4.93c-3.49.68-7,1.42-10.44,2.06s-6.9,1.61-10.35,2.41l-10.27,2.72c-3.39,1-6.76,2.08-10.14,3.11A312.8,312.8,0,0,0,397,280.14a347.55,347.55,0,0,0-37.25,21A183.48,183.48,0,0,1,394.83,276a218.27,218.27,0,0,1,39.76-17.3c3.47-1,6.93-2.08,10.42-3.05s7-1.82,10.54-2.59,7.1-1.41,10.66-2,7.15-1.08,10.74-1.52A189.39,189.39,0,0,1,520.11,249.17Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M529.83,233.83a70.16,70.16,0,0,1,15.44-1.92c2.56-.06,5.11,0,7.67.13s5.12.3,7.68.52a138.69,138.69,0,0,1,15.35,2.2A95.37,95.37,0,0,1,591.05,239l-3.89,11.35c-4.62-1.38-9.25-2.78-13.95-4.07s-9.45-2.51-14.25-3.71l-7.25-1.76c-2.43-.57-4.87-1.15-7.3-1.81A85.14,85.14,0,0,1,529.83,233.83Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M710,667.66q-4.71,5.82-9.71,11.37C697.79,681.8,702.87,677.91,710,667.66Zm15-316.55C694.5,296.7,641.5,259.24,580.22,242l-6.35-1.71c-22.7-6.28-46.62-7-71.32-7-26.69,0-52.46,2.74-76.77,10l-4.26,1.27C335.16,273.62,263.78,346.74,245.06,429.8,213,556.34,262.89,634,307.17,681.6c4.37,4.7-57.93-101.85-17.42-216,7.73-.29,20.24-.51,36.19-.67l15.5-50.61,17.44,50.38c27.4-.13,59.88-.15,93.88-.12l12.32-52.36L479,464.6c74.37.14,151.44.52,195.28.77l13.2-52.17,15,52.33,8.21.05C760.78,572,728.5,641.13,710,667.66A265.62,265.62,0,0,0,769.3,500C769.3,413.58,725,351.11,725,351.11Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M284.48,462.85c.18-.75.33-1.32.53-1.94s.4-1.2.62-1.78c.46-1.17,1-2.31,1.51-3.42a48.48,48.48,0,0,1,3.85-6.42,37.51,37.51,0,0,1,4.88-5.75,17,17,0,0,1,7-4,31,31,0,0,1-.87,7.68c-.28,1.14-.59,2.25-.93,3.32l-1,3.25q-1,3.23-2,6.39c-.33,1.06-.68,2.09-1,3.13-.17.51-.37,1-.56,1.53s-.39,1-.56,1.4Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M710.68,459.58a35,35,0,0,1,6.23.06,60.73,60.73,0,0,1,6.24.86c1,.2,2.08.4,3.12.64a25.74,25.74,0,0,1,3.11.86,18.53,18.53,0,0,1,6.24,3.58,18.74,18.74,0,0,1-6.24,3.59,25.68,25.68,0,0,1-3.11.85c-1,.25-2.08.45-3.12.65q-3.12.58-6.24.86a35,35,0,0,1-6.23.05Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M444.84,452.07a132.29,132.29,0,0,1,1.49-14.25c.72-4.7,1.6-9.37,2.61-14s2.15-9.25,3.44-13.83A132.09,132.09,0,0,1,457,396.4a131.77,131.77,0,0,1-1.5,14.25q-1.08,7.05-2.61,14t-3.44,13.83A137,137,0,0,1,444.84,452.07Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M668,452.07a134.88,134.88,0,0,1,1.49-14.25q1.09-7.05,2.61-14T675.49,410a132.09,132.09,0,0,1,4.57-13.58,131.76,131.76,0,0,1-1.49,14.25q-1.1,7.05-2.61,14c-1,4.64-2.16,9.25-3.45,13.83A134.48,134.48,0,0,1,668,452.07Z",
    fill: colors.white
  }));
};

var PixieCut = {
  __proto__: null,
  Back: Back$3,
  Front: Front$3
};

var Back$4 = function Back() {
  return React__default.createElement(React__default.Fragment, null);
};
var Front$4 = function Front(_ref) {
  var hairColor = _ref.hairColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors,
      skin = _useTheme.skin;

  var base = colors.hair[hairColor].base;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M425.22,300.35a148.61,148.61,0,0,1,35.91-15A151.13,151.13,0,0,1,500,280,145.16,145.16,0,0,1,539,285.08a138.61,138.61,0,0,1,35.82,15.27,315.9,315.9,0,0,0-37.19-9.13A210.64,210.64,0,0,0,500.05,288a222,222,0,0,0-37.55,3.48A366.93,366.93,0,0,0,425.22,300.35Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M425.22,328.3a148.61,148.61,0,0,1,35.91-15A151.56,151.56,0,0,1,500,308,145.15,145.15,0,0,1,539,313a138.61,138.61,0,0,1,35.82,15.27,317.89,317.89,0,0,0-37.19-9.13,210.64,210.64,0,0,0-37.54-3.23,222,222,0,0,0-37.55,3.48A369.62,369.62,0,0,0,425.22,328.3Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M574.78,328.43a310.55,310.55,0,0,1-37.2,5.68Q518.85,335.91,500,336c-12.55,0-25.1-.47-37.6-1.64a271,271,0,0,1-37.19-5.91c12.59-.39,25-.34,37.49-.37L500,328l37.29-.13C549.73,327.87,562.2,327.86,574.78,328.43Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M574.78,300.47a330.88,330.88,0,0,1-37.24,5.22q-18.72,1.63-37.53,1.71c-12.53.05-25.06-.42-37.56-1.48a288,288,0,0,1-37.23-5.45c12.57-.59,25-.7,37.47-.84L500,299.4c12.42,0,24.85-.06,37.31,0S562.22,299.7,574.78,300.47Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M871.11,500c-94.26-5.93-88.36-172.82-144.1-140.14h0l.42.69c-1.08,8.7-11.09,100.12,26.09,224.1.41-1.25.81-2.51,1.21-3.77,2,5.4,17,39.1,75.81,23.16-40.58-34.22-31.47-75.27-31.47-75.27S843.62,530.09,871.11,500Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M871.11,500c-94.26-5.93-88.36-172.82-144.1-140.14h0l.42.69c-1.08,8.7-11.09,100.12,26.09,224.1.41-1.25.81-2.51,1.21-3.77,2,5.4,17,39.1,75.81,23.16-40.58-34.22-31.47-75.27-31.47-75.27S843.62,530.09,871.11,500Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M766.75,500a121.9,121.9,0,0,1,1.52,21.66,210.12,210.12,0,0,1-1.6,21.69q-.7,5.4-1.62,10.78c-.65,3.57-1.35,7.14-2.16,10.69a190.76,190.76,0,0,1-6,21l-7.59-2.54c2.11-6.73,4.13-13.49,5.92-20.32l1.32-5.13,1.22-5.16,1.17-5.17,1.07-5.2c1.41-6.94,2.5-13.94,3.53-21S765.53,507.16,766.75,500Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M730.85,358.46A199.08,199.08,0,0,1,742,378.52c.83,1.72,1.62,3.46,2.42,5.2l2.3,5.25,2.15,5.32,2,5.36a210.27,210.27,0,0,1,6.64,21.88,127.56,127.56,0,0,1,3.37,22.58c-2.76-7.11-5.29-14.18-7.94-21.19s-5.32-13.95-8.36-20.76l-2.29-5.09-2.39-5-2.45-5-2.55-4.95c-3.43-6.59-7.09-13-10.87-19.43Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M128.89,500c94.26-5.93,88.36-172.82,144.1-140.14h0l-.42.69c1.08,8.7,11.09,100.12-26.09,224.1-.41-1.25-.81-2.51-1.21-3.77-2,5.4-17,39.1-75.81,23.16,40.58-34.22,31.47-75.27,31.47-75.27S156.38,530.09,128.89,500Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M128.89,500c94.26-5.93,88.36-172.82,144.1-140.14h0l-.42.69c1.08,8.7,11.09,100.12-26.09,224.1-.41-1.25-.81-2.51-1.21-3.77-2,5.4-17,39.1-75.81,23.16,40.58-34.22,31.47-75.27,31.47-75.27S156.38,530.09,128.89,500Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M233.25,500c1.22,7.16,2.18,14.24,3.24,21.28s2.12,14.05,3.53,21l1.07,5.2,1.17,5.17,1.22,5.16,1.32,5.13c1.79,6.83,3.8,13.59,5.92,20.32l-7.59,2.54a190.76,190.76,0,0,1-6-21c-.81-3.55-1.51-7.12-2.16-10.69s-1.15-7.18-1.62-10.78a210.12,210.12,0,0,1-1.6-21.69A121.9,121.9,0,0,1,233.25,500Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M276,362.65c-3.78,6.39-7.44,12.84-10.87,19.43L262.55,387l-2.45,5-2.39,5-2.29,5.09c-3,6.81-5.74,13.76-8.36,20.76s-5.18,14.08-7.94,21.19a127.56,127.56,0,0,1,3.37-22.58,210.27,210.27,0,0,1,6.64-21.88l2-5.36L253.3,389l2.3-5.25c.8-1.74,1.59-3.48,2.42-5.2a199.08,199.08,0,0,1,11.13-20.06Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M198.29,528.85l-1.6-15.59c-.26-2.66-.59-5.32-.79-8-.07-1.36-.15-2.72-.11-4.13a28.85,28.85,0,0,1,.3-4.29,30.11,30.11,0,0,1,4.45,7.27c.57,1.27,1.06,2.57,1.51,3.88s.88,2.63,1.29,4,.76,2.67,1.1,4,.63,2.72.89,4.09.49,2.75.65,4.15a36.91,36.91,0,0,1,.31,4.34Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M793.65,527.37a36.62,36.62,0,0,1,.88-6.66c.24-1.07.53-2.14.82-3.2s.66-2.11,1-3.15a39.45,39.45,0,0,1,2.68-6.07,17.68,17.68,0,0,1,4.45-5.25,33.5,33.5,0,0,1,.11,6.68c-.09,1-.18,2.09-.31,3.1L803,515.9l-.63,6.1c-.22,2-.43,4.09-.72,5.93Z",
    fill: colors.outline
  }));
};
var hatScale$1 = 0;

var BaldingHair = {
  __proto__: null,
  Back: Back$4,
  Front: Front$4,
  hatScale: hatScale$1
};

var Back$5 = Noop;
var Front$5 = function Front(_ref) {
  var hairColor = _ref.hairColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var _colors$hair$hairColo = colors.hair[hairColor],
      base = _colors$hair$hairColo.base,
      shadow = _colors$hair$hairColo.shadow;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M500,233.25c-135.7,0-247.73,101.33-264.56,232.45a307.11,307.11,0,0,0,70.16-98.91A919.45,919.45,0,0,0,500,387.94a899.57,899.57,0,0,0,194.4-21.15,307.11,307.11,0,0,0,70.16,98.91C747.73,334.58,635.7,233.25,500,233.25Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M305.6,366.79q15.94,3.45,32.07,6.35c10.61-35.4,27.23-73.88,51.13-115.66h0c-1.33.62-2.66,1.24-4,1.87l-.17.08c-1.31.63-2.62,1.27-3.92,1.93l-.59.29c-1.22.61-2.44,1.24-3.65,1.88l-1,.53c-3.76,2-7.48,4.07-11.13,6.23l-.8.47-.14.09q-1.73,1-3.42,2.07l-.87.54q-5.36,3.35-10.55,6.93l-1.08.75c-1,.71-2,1.42-3,2.14l-.71.52-.15.1q-3.27,2.39-6.46,4.84l-.62.48c-1,.78-2,1.58-3,2.39l-1.17.94-2.41,2-.78.65c-2.05,1.71-4.06,3.45-6.06,5.22l-1.14,1-2.69,2.45L318,305q-4.28,4-8.37,8.17l-1,1c-.22.22-.43.44-.64.67-.7.72-1.39,1.44-2.08,2.17-.46.49-.92,1-1.37,1.48q-2.06,2.2-4.06,4.46l-.48.55c-.31.35-.63.7-.94,1.06L297,327c-.11.14-.22.27-.34.4l-1.2,1.43c-.61.72-1.21,1.45-1.81,2.18-.39.47-.78,1-1.17,1.44l-.66.82q-1.59,2-3.13,4l-.07.09c-.53.68-1.05,1.36-1.57,2.05-.4.52-.79,1.05-1.17,1.57l-1,1.33-1.22,1.68-1,1.35-1.41,2c-.57.81-1.13,1.62-1.69,2.44s-1.11,1.64-1.65,2.46l-.25.36-1.52,2.31-1.74,2.72c-.52.83-1,1.66-1.55,2.49h0c-.57.92-1.14,1.84-1.7,2.77s-1,1.68-1.48,2.52-.92,1.56-1.36,2.34l-.57,1-1.13,2c-.42.77-.85,1.53-1.26,2.3-.14.25-.28.5-.41.75-.42.78-.84,1.57-1.25,2.36s-.68,1.29-1,1.94l-.84,1.63-.93,1.88c-.39.78-.78,1.55-1.16,2.34l-.82,1.71-.3.65c-.44.92-.87,1.85-1.3,2.78l-.72,1.59c-.41.91-.81,1.83-1.21,2.75l-1,2.34c-.45,1.07-.88,2.14-1.32,3.21-.32.77-.63,1.53-.94,2.3-.11.26-.21.53-.31.8-.35.88-.69,1.77-1,2.66s-.61,1.57-.9,2.36l-.16.43c-.38,1-.74,2-1.1,3.06s-.64,1.79-1,2.69c-.37,1.08-.73,2.15-1.08,3.23-.3.91-.6,1.82-.89,2.73-.35,1.09-.68,2.17-1,3.26-.28.92-.55,1.84-.82,2.77-.32,1.09-.64,2.19-.94,3.29-.26.92-.51,1.85-.75,2.78-.3,1.11-.59,2.22-.87,3.34-.24.92-.46,1.86-.68,2.79-.27,1.12-.54,2.25-.8,3.37-.21.93-.41,1.87-.61,2.8-.24,1.14-.49,2.29-.73,3.44-.18.91-.35,1.82-.52,2.74s-.39,2-.57,3l-.18,1-.33,2c-.18,1.09-.37,2.19-.54,3.29,0,.21-.07.42-.1.63q-.45,3-.84,6A307.11,307.11,0,0,0,305.6,366.79Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M500,233.25c-135.7,0-247.73,101.33-264.56,232.45a307.11,307.11,0,0,0,70.16-98.91A919.45,919.45,0,0,0,500,387.94a899.57,899.57,0,0,0,194.4-21.15,307.11,307.11,0,0,0,70.16,98.91C747.73,334.58,635.7,233.25,500,233.25Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M506.21,250.1c-12.57,1.68-24.94,3.38-37.16,5.76s-24.29,5.18-36.18,8.64-23.62,7.48-35.18,12.07-22.95,9.73-34.46,15.05a170,170,0,0,1,31.87-20.78,204.11,204.11,0,0,1,73.07-21.19A172.76,172.76,0,0,1,506.21,250.1Z",
    fill: colors.white
  }));
};

var BuzzCut = {
  __proto__: null,
  Back: Back$5,
  Front: Front$5
};

var Back$6 = function Back(_ref) {
  var hairColor = _ref.hairColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var _colors$hair$hairColo = colors.hair[hairColor],
      base = _colors$hair$hairColo.base,
      shadow = _colors$hair$hairColo.shadow;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M833.15,369a58.35,58.35,0,0,0-35.89-54.16,58.56,58.56,0,0,0,25.82-48.77c0-27.77-19-51-44.47-56.88a59.13,59.13,0,0,0,7.51-28.9C786.12,148.1,760.55,122,729,122a55.89,55.89,0,0,0-24.2,5.49,58.35,58.35,0,0,0,.67-8.92c0-32.21-25.57-58.33-57.12-58.33a56.49,56.49,0,0,0-43.76,20.86c-1.61-30.74-26.53-55.17-57-55.17A56.9,56.9,0,0,0,497.6,56a56.93,56.93,0,0,0-50-30.07c-30.5,0-55.42,24.43-57,55.17a56.53,56.53,0,0,0-43.77-20.86c-31.53,0-57.11,26.11-57.11,58.33a59.65,59.65,0,0,0,.66,8.92A55.76,55.76,0,0,0,266.21,122c-31.54,0-57.12,26.12-57.12,58.33a59,59,0,0,0,7.51,28.9c-25.45,5.88-44.46,29.11-44.46,56.88A58.56,58.56,0,0,0,198,314.86a58.83,58.83,0,0,0-1.13,107.85,58.81,58.81,0,0,0-14.6,39c0,28.51,20.05,52.25,46.54,57.33-11.51,10.31,545.36,10.93,534.18.55,28.2-3.57,50-28.11,50-57.87a58.87,58.87,0,0,0-14.61-39A58.4,58.4,0,0,0,833.15,369ZM270.81,513.54c-.93-.52-1.89-1-2.85-1.41C268.93,511.56,270.81,513.54,270.81,513.54Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M470,505.43a51,51,0,0,1-85.38-36.67,51.1,51.1,0,0,1-63.44-66.59,51.18,51.18,0,0,1-32.54-87.48,51.32,51.32,0,0,1-1.26-93.62A51.42,51.42,0,0,1,327,136.89h.16a51.55,51.55,0,0,1,50-63.89,53,53,0,0,1,5.66.31,56.13,56.13,0,0,0-36-13.09c-31.54,0-57.11,26.11-57.11,58.33a59.65,59.65,0,0,0,.66,8.92A55.76,55.76,0,0,0,266.21,122c-31.54,0-57.12,26.12-57.12,58.33a59,59,0,0,0,7.51,28.9c-25.45,5.88-44.46,29.11-44.46,56.88A58.56,58.56,0,0,0,198,314.86a58.83,58.83,0,0,0-1.13,107.85,58.81,58.81,0,0,0-14.6,39c0,28.51,20.05,52.25,46.54,57.33-5.61,5,123.81,7.75,256.66,8A51.14,51.14,0,0,1,470,505.43Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M741.2,386l-35,78.16,39.47,58.61c12.24-.91,18.61-2,17.31-3.17,28.2-3.57,50-28.11,50-57.87a60.75,60.75,0,0,0-.8-9.7C792.18,391.39,741.2,386,741.2,386Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M833.15,369a58.35,58.35,0,0,0-35.89-54.16,58.56,58.56,0,0,0,25.82-48.77c0-27.77-19-51-44.47-56.88a59.13,59.13,0,0,0,7.51-28.9C786.12,148.1,760.55,122,729,122a55.89,55.89,0,0,0-24.2,5.49,58.35,58.35,0,0,0,.67-8.92c0-32.21-25.57-58.33-57.12-58.33a56.49,56.49,0,0,0-43.76,20.86c-1.61-30.74-26.53-55.17-57-55.17A56.9,56.9,0,0,0,497.6,56a56.93,56.93,0,0,0-50-30.07c-30.5,0-55.42,24.43-57,55.17a56.53,56.53,0,0,0-43.77-20.86c-31.53,0-57.11,26.11-57.11,58.33a59.65,59.65,0,0,0,.66,8.92A55.76,55.76,0,0,0,266.21,122c-31.54,0-57.12,26.12-57.12,58.33a59,59,0,0,0,7.51,28.9c-25.45,5.88-44.46,29.11-44.46,56.88A58.56,58.56,0,0,0,198,314.86a58.83,58.83,0,0,0-1.13,107.85,58.81,58.81,0,0,0-14.6,39c0,28.51,20.05,52.25,46.54,57.33-11.51,10.31,545.36,10.93,534.18.55,28.2-3.57,50-28.11,50-57.87a58.87,58.87,0,0,0-14.61-39A58.4,58.4,0,0,0,833.15,369Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }));
};
var Front$6 = function Front(_ref2) {
  var hairColor = _ref2.hairColor;

  var _useTheme2 = useTheme(),
      colors = _useTheme2.colors,
      skin = _useTheme2.skin;

  var _colors$hair$hairColo2 = colors.hair[hairColor],
      base = _colors$hair$hairColo2.base,
      shadow = _colors$hair$hairColo2.shadow;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M558.42,406.88c-12.87,24-60,37.45-63.83,31.42-4.3-6.73,37.85-55.32,13.9-106.14",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M500.15,221.81C369,221.81,247.79,328.25,226,457c0,0,201.33,15.23,274.66-66.75-4.65,22.65-17.72,39.87-15.51,43.33,3.08,4.84,40.92-5.92,51.25-25.22l-3.66-5.48C582.65,421,680.23,443.46,746,375.26,702.52,285,604.61,221.81,500.15,221.81Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M331.52,454.81a51.09,51.09,0,0,1-10.35-52.64,51.12,51.12,0,0,1-47.23-58.35c-24.09,33.69-41,72.3-48,113.18A671.08,671.08,0,0,0,331.52,454.81Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M739.66,389.6C665,447,579.07,424.7,533.51,405.69c-10.14,17.94-45.26,27.89-48.15,23.36-2-3.08,8.82-17.65,13.78-37.16-74.28,80.27-259.85,72-259.85,72",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M280.92,140.17a53.59,53.59,0,0,0-20.26,5A45.83,45.83,0,0,0,245,157a18.94,18.94,0,0,0-1.53,1.92c-.48.66-1,1.28-1.46,2a43.23,43.23,0,0,0-2.56,4.23,52.32,52.32,0,0,0-3.9,9.18,62.77,62.77,0,0,0-2.29,20.8A36.91,36.91,0,0,1,229.42,173l.53-2.86.29-1.44c.11-.47.27-.93.41-1.4.28-.94.56-1.88.87-2.81s.76-1.8,1.14-2.71a43.25,43.25,0,0,1,2.76-5.21c.51-.85,1.14-1.61,1.7-2.42a24.27,24.27,0,0,1,1.82-2.33,39.88,39.88,0,0,1,19.58-12.56A34.18,34.18,0,0,1,280.92,140.17Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M358.88,77.15a62.84,62.84,0,0,0-18,2,52.26,52.26,0,0,0-15.47,7.06A51.64,51.64,0,0,0,313.09,98c-.84,1.18-1.8,2.31-2.53,3.58l-1.21,1.88c-.43.62-.71,1.3-1.09,2a73.25,73.25,0,0,0-4.1,8.38,28.54,28.54,0,0,1,.39-9.7c.17-.8.27-1.63.52-2.42l.74-2.36a31.32,31.32,0,0,1,1.91-4.61A39,39,0,0,1,321,79.59,39.38,39.38,0,0,1,339.89,73,32.35,32.35,0,0,1,358.88,77.15Z",
    fill: colors.white
  }));
};
var hatScale$2 = 0;

var Afro = {
  __proto__: null,
  Back: Back$6,
  Front: Front$6,
  hatScale: hatScale$2
};

var Back$7 = function Back(_ref) {
  var hairColor = _ref.hairColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var _colors$hair$hairColo = colors.hair[hairColor],
      base = _colors$hair$hairColo.base,
      shadow = _colors$hair$hairColo.shadow;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M501.71,209.52c-166.14,0-300.83,134.68-300.83,300.83V673.78c9.48,10.52,25.37,19.57,46,27.19L260.2,661.2l14.46,48.46c152.76,40.64,466.71,25.28,527.88-35.88V510.35C802.54,344.2,667.85,209.52,501.71,209.52Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M242.87,699.45c1.32.51,2.65,1,4,1.52L260.2,661.2l14.46,48.46c45.22,12,104.55,19.15,167.28,21.63l27.28-26.22L235.81,529.43S229.67,630.88,242.87,699.45Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M617.2,552.78l25.31,170.76c34.8-4.34,66.62-10.27,93.11-17.73h0s33.09-36.89,29.52-176.38S617.2,552.78,617.2,552.78Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M501.71,209.52c-166.14,0-300.83,134.68-300.83,300.83V673.78c9.48,10.52,25.37,19.57,46,27.19L260.2,661.2l14.46,48.46c152.76,40.64,466.71,25.28,527.88-35.88V510.35C802.54,344.2,667.85,209.52,501.71,209.52Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }));
};
var Front$7 = function Front(_ref2) {
  var hairColor = _ref2.hairColor;

  var _useTheme2 = useTheme(),
      colors = _useTheme2.colors,
      skin = _useTheme2.skin;

  var base = colors.hair[hairColor].base;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Rect, {
    x: "290.23",
    y: "414.02",
    width: "439.24",
    height: "64.15",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M710,667.66q-4.71,5.82-9.71,11.37C697.79,681.8,702.87,677.91,710,667.66Zm15-316.55C694.5,296.7,641.5,259.24,580.22,242l-6.35-1.71c-22.7-6.28-46.62-7-71.32-7-26.69,0-52.46,2.74-76.77,10l-4.26,1.27A283.11,283.11,0,0,0,332.67,294q-4.37,3.58-8.57,7.32c-28.34,23.69-50.34,53.69-65.47,87.9q-2.2,4.92-4.16,9.93a212.31,212.31,0,0,0-9.41,30.61C213,556.34,262.89,634,307.17,681.6c4.37,4.7-57.93-101.85-17.42-216,7.73-.29,20.24-.51,36.19-.67l15.5-50.61,17.44,50.38c27.4-.13,59.88-.15,93.88-.12l12.32-52.36L479,464.6c74.37.14,151.44.52,195.28.77l13.2-52.17,15,52.33,8.21.05C760.78,572,728.5,641.13,710,667.66A265.62,265.62,0,0,0,769.3,500C769.3,413.58,725,351.11,725,351.11Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M710,667.66q-4.71,5.82-9.71,11.37C697.79,681.8,702.87,677.91,710,667.66Zm15-316.55C694.5,296.7,641.5,259.24,580.22,242l-6.35-1.71c-22.7-6.28-46.62-7-71.32-7-26.69,0-52.46,2.74-76.77,10l-4.26,1.27A283.11,283.11,0,0,0,332.67,294q-4.37,3.58-8.57,7.32c-28.34,23.69-50.34,53.69-65.47,87.9q-2.2,4.92-4.16,9.93a212.31,212.31,0,0,0-9.41,30.61C213,556.34,262.89,634,307.17,681.6c4.37,4.7-57.93-101.85-17.42-216,7.73-.29,20.24-.51,36.19-.67l15.5-50.61,17.44,50.38c27.4-.13,59.88-.15,93.88-.12l12.32-52.36L479,464.6c74.37.14,151.44.52,195.28.77l13.2-52.17,15,52.33,8.21.05C760.78,572,728.5,641.13,710,667.66A265.62,265.62,0,0,0,769.3,500C769.3,413.58,725,351.11,725,351.11Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M584.15,228l-6.47-1.74c-25.21-7-50.93-7.55-75.13-7.55-30.59,0-57.07,3.49-80.91,10.64l-4.26,1.27-.49.15a299.89,299.89,0,0,0-93.42,52c-3,2.46-6,5-8.84,7.55-29.63,24.82-52.93,56.11-69.24,93-1.56,3.49-3,7.05-4.42,10.57-4.18,10.69-21.29,59.77-23.75,70.65l72.53,1c7.73-.29,20.24-.51,36.19-.67l15.5-50.61,17.44,50.38c27.4-.13,59.88-.15,93.88-.12l12.32-52.36L479,464.6c74.37.14,151.44.52,195.28.77l13.2-52.17,15,52.33,8.21.05L783.8,500c0-86.19-41.3-149-46.48-156.6C706,288,651.63,247,584.15,228ZM750.31,547.25c-3.17-25.92-11.17-55.26-26.51-87.84l-3.89-8.27-6.49,0-26.78-93.63L663,450.81c-40.43-.22-107.06-.54-172.86-.69l-25.95-97.57-22.94,97.5c-27.4,0-51.55,0-72.09.09L340.6,367.53l-25.42,83c-11.45.15-20.16.34-26,.56l-9.83.38-3.29,9.26C261.72,501.22,257.92,545,264.76,591c-15.9-40-22.46-91.39-5.65-157.63l.09-.38A197.7,197.7,0,0,1,268,404.47c1.2-3.09,2.51-6.22,3.91-9.35,14.54-32.86,35.24-60.67,61.51-82.63l.33-.29c2.65-2.35,5.39-4.69,8.14-6.95a270.41,270.41,0,0,1,84-46.87l4.05-1.2c21.12-6.34,44.87-9.43,72.6-9.43,22.22,0,45.73.51,67.45,6.52l6.38,1.71c60.24,17,108.53,53.27,136,102.23l.37.66.44.63c.42.59,41.61,59.63,41.61,140.5A252.08,252.08,0,0,1,750.31,547.25Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M710,667.66q-4.71,5.82-9.71,11.37C697.79,681.8,702.87,677.91,710,667.66ZM307.17,681.6c4.37,4.7-57.93-101.85-17.42-216,7.73-.29,20.24-.51,36.19-.67l15.5-50.61,17.44,50.38c27.4-.13,59.88-.15,93.88-.12l12.32-52.36L479,464.6c74.37.14,151.44.52,195.28.77l13.2-52.17,15,52.33,8.21.05C760.78,572,728.5,641.13,710,667.66",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M284.48,462.85c.18-.75.33-1.32.53-1.94s.4-1.2.62-1.78c.46-1.17,1-2.31,1.51-3.42a48.48,48.48,0,0,1,3.85-6.42,37.51,37.51,0,0,1,4.88-5.75,17,17,0,0,1,7-4,31,31,0,0,1-.87,7.68c-.28,1.14-.59,2.25-.93,3.32l-1,3.25q-1,3.23-2,6.39c-.33,1.06-.68,2.09-1,3.13-.17.51-.37,1-.56,1.53s-.39,1-.56,1.4Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M710.68,459.58a35,35,0,0,1,6.23.06,60.73,60.73,0,0,1,6.24.86c1,.2,2.08.4,3.12.64a25.74,25.74,0,0,1,3.11.86,18.53,18.53,0,0,1,6.24,3.58,18.74,18.74,0,0,1-6.24,3.59,25.68,25.68,0,0,1-3.11.85c-1,.25-2.08.45-3.12.65q-3.12.58-6.24.86a35,35,0,0,1-6.23.05Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M444.84,452.07a134.88,134.88,0,0,1,1.49-14.25c.72-4.7,1.6-9.37,2.61-14s2.15-9.25,3.44-13.83A132.09,132.09,0,0,1,457,396.4a131.77,131.77,0,0,1-1.5,14.25q-1.08,7.05-2.61,14t-3.44,13.83A137,137,0,0,1,444.84,452.07Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M668,452.07a134.88,134.88,0,0,1,1.49-14.25q1.09-7.05,2.61-14T675.49,410a132.09,132.09,0,0,1,4.57-13.58,131.76,131.76,0,0,1-1.49,14.25q-1.1,7.05-2.61,14c-1,4.64-2.16,9.25-3.45,13.83A134.48,134.48,0,0,1,668,452.07Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M237.55,468.26a143,143,0,0,1,11.42-38",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M231.6,467.51c.09-1,.18-1.85.32-2.73s.29-1.72.46-2.58c.35-1.7.75-3.38,1.23-5a78.48,78.48,0,0,1,3.47-9.75,66.09,66.09,0,0,1,4.7-9.22,29.18,29.18,0,0,1,7.19-7.91,50.46,50.46,0,0,1-.48,10.43c-.25,1.63-.51,3.25-.83,4.84s-.58,3.19-.83,4.78l-1.63,9.49-.83,4.68c-.12.78-.28,1.56-.42,2.32s-.3,1.57-.44,2.19Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M769.33,496s-.46-20.78-8.37-47.63",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M763.33,496.12l-.24-2.76c-.08-1-.16-1.93-.22-2.89l-.45-5.84-.91-11.8c-.3-3.95-.71-7.91-1-11.93-.08-2-.16-4.06-.1-6.14a47.58,47.58,0,0,1,.5-6.4,42.78,42.78,0,0,1,6.58,10.89,62.13,62.13,0,0,1,2.17,5.84c.67,2,1.24,4,1.81,6a111.89,111.89,0,0,1,2.69,12.17c.33,2.05.63,4.12.81,6.21q.16,1.56.24,3.15c.06,1.07.08,2.07.07,3.28Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M506.7,235.5a369.62,369.62,0,0,0-42.48,4.93c-3.48.68-7,1.42-10.44,2.06s-6.9,1.61-10.35,2.41l-10.26,2.72c-3.4,1-6.77,2.08-10.15,3.12a314.87,314.87,0,0,0-39.44,15.73,348.17,348.17,0,0,0-37.24,21,183.41,183.41,0,0,1,35.08-25.14A219.23,219.23,0,0,1,421.18,245c3.48-1,6.94-2.09,10.42-3.05s7-1.82,10.55-2.6,7.1-1.4,10.65-2,7.16-1.07,10.74-1.52A190,190,0,0,1,506.7,235.5Z",
    fill: colors.white
  }));
};
var hatScale$3 = 1.12;

var BobCut = {
  __proto__: null,
  Back: Back$7,
  Front: Front$7,
  hatScale: hatScale$3
};

// it seems there is an issue with the scale when greater than 1
// for now the scale will be hardcoded to 1
// "Back" and "Front" components -> "G" element
// export const Front = ({ color, scale = 1 }: ClothingProps & HatProps) => {

var Front$8 = function Front(_ref) {
  var color = _ref.color;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var _colors$clothing$colo = colors.clothing[color],
      base = _colors$clothing$colo.base,
      shadow = _colors$clothing$colo.shadow;
  return React__default.createElement(reactNativeSvg.G, {
    transform: {
      scale: 1,
      origin: 'center'
    }
  }, React__default.createElement(reactNativeSvg.Circle, {
    cx: "491.44",
    cy: "157.14",
    r: "47.48",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M491.44,204.62a47.47,47.47,0,0,0,46.46-57.31c-30.78-4.77-62.7-2-93.77,6-.1,1.26-.17,2.53-.17,3.82A47.48,47.48,0,0,0,491.44,204.62Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "491.44",
    cy: "157.14",
    r: "47.48",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M240.26,423.13a254.67,254.67,0,0,1,6.54-57.5q1.29-5.55,2.81-11c2.9-32.3,20-58.94,42.86-82.73,4.76-3.81,5.71-12.37,10.47-17.13,16.18-14.27,30.45-28.55,48.53-40,74.22-47.58,172.23-73.27,251.21-29.5,16.17,8.56,34.25,13.32,47.57,24.74,25.7,21.88,43.77,47.58,69.47,68.51,22.83,19,26.64,49.48,34.74,76.07q1.53,5.44,2.81,11a254.67,254.67,0,0,1,6.54,57.5Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M246.8,365.63a254.67,254.67,0,0,0-6.54,57.5h83C321.7,342.47,301,275.11,406,193,330.68,221.59,262.05,284.38,246.8,365.63Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M258.18,321.12a109.41,109.41,0,0,0-8.57,33.51q-1.52,5.44-2.81,11a254.67,254.67,0,0,0-6.54,57.5H440.31a827.17,827.17,0,0,1,127.59,0H763.81a254.67,254.67,0,0,0-6.54-57.5q-1.29-5.55-2.81-11c-3.46-11.37-6.15-23.44-9.86-35C582.71,259.73,419,261,258.18,321.12Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M240.26,423.13a254.67,254.67,0,0,1,6.54-57.5q1.29-5.55,2.81-11c2.9-32.3,20-58.94,42.86-82.73,4.76-3.81,5.71-12.37,10.47-17.13,16.18-14.27,30.45-28.55,48.53-40,74.22-47.58,172.23-73.27,251.21-29.5,16.17,8.56,34.25,13.32,47.57,24.74,25.7,21.88,43.77,47.58,69.47,68.51,22.83,19,26.64,49.48,34.74,76.07q1.53,5.44,2.81,11a254.67,254.67,0,0,1,6.54,57.5Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M225.35,356.43c183.42-78,371.14-79.06,555.94,0,17.53,7.5,17.43,139.87,0,133.81-180.47-62.83-371.33-63.5-555.94,0C203.39,497.79,205.53,364.86,225.35,356.43Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M751.33,443.71a43.58,43.58,0,0,1,1.35,9.9c.09,3.27-.11,6.52-.26,9.78l-.36,4.87c-.16,1.62-.32,3.24-.52,4.85-.4,3.23-.89,6.44-1.59,9.61l-7.87-1.41c.44-3.17,1-6.31,1.64-9.45l1-4.71,1-4.7c.74-3.13,1.37-6.27,2.22-9.4A53.94,53.94,0,0,1,751.33,443.71Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M749.91,342.47a175.32,175.32,0,0,1,3.63,19c.43,3.19.78,6.39,1.09,9.59s.49,6.42.66,9.63c.26,6.42.37,12.84.06,19.25a114.35,114.35,0,0,1-2.45,19.11c-1-6.39-1.67-12.7-2.32-19s-1.21-12.55-2.05-18.78c-.39-3.12-.83-6.22-1.3-9.32s-1-6.19-1.52-9.27c-1.07-6.17-2.3-12.29-3.59-18.41Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M668.78,322c7.56,42.87,6.71,89.49,0,138.73",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M598.19,307.61c5.15,42.9,4.57,89.55,0,138.83",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M533.85,356.47a172.75,172.75,0,0,1,2.37,20.68c.4,6.9.52,13.8.65,20.71l0,10.36c0,3.45,0,6.9-.12,10.35-.15,6.9-.4,13.8-.87,20.69l-8-.4c.22-6.87.57-13.73.94-20.59l1.21-20.57c.46-6.86.82-13.73,1.35-20.6S532.69,363.36,533.85,356.47Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M535.93,299.88a58.54,58.54,0,0,1,.28,6.35c0,1.06-.05,2.12-.08,3.18L536,312.6c-.17,2.12-.32,4.25-.68,6.38a22.42,22.42,0,0,1-2.08,6.41,23.29,23.29,0,0,1-2.7-6.21c-.57-2.08-.93-4.16-1.31-6.25l-.49-3.12c-.13-1.05-.28-2.09-.39-3.13a55,55,0,0,1-.35-6.29Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M467.76,299.65c.35,43,.31,89.67,0,139",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M403.38,306.18c-2.06,43-1.83,89.73,0,139.11",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M333.37,391.65a161.31,161.31,0,0,1,2.71,16.78c.63,5.59,1.09,11.17,1.65,16.75l1.51,16.73c.47,5.57.93,11.15,1.25,16.74l-8,.64c-.58-5.61-.93-11.24-1.18-16.87-.13-2.82-.2-5.64-.28-8.46l-.1-8.46c0-5.64.05-11.29.35-16.93A117.52,117.52,0,0,1,333.37,391.65Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M340.48,320.18c-.25,3.65-.64,7.28-1.05,10.91l-.66,5.45-.72,5.45c-.54,3.64-.95,7.28-1.6,10.93a67.39,67.39,0,0,1-2.8,10.92,55.71,55.71,0,0,1-2-11.14c-.3-3.72-.32-7.42-.38-11.14l0-5.56c.06-1.86.11-3.71.2-5.56.2-3.71.49-7.41,1-11.09Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M264.86,340.45c-6.86,43-6.09,89.85,0,139.3",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M753.07,434.58a3.75,3.75,0,1,0-3.75-3.75,3.8,3.8,0,0,0,3.75,3.75Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M758.28,341.38c10,42.84,8.85,89.43,0,138.64",
    fill: "none",
    stroke: shadow,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M681,320c7.56,42.87,6.71,89.49,0,138.74",
    fill: "none",
    stroke: shadow,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M610.38,305.45c5.15,42.9,4.57,89.55,0,138.83",
    fill: "none",
    stroke: shadow,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M544.06,297.82c2.74,42.92,2.44,89.61,0,138.92",
    fill: "none",
    stroke: shadow,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M479.8,297.16c.34,42.95.31,89.67,0,139",
    fill: "none",
    stroke: shadow,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M415.34,303.53c-2.06,43-1.83,89.73,0,139.11",
    fill: "none",
    stroke: shadow,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M348.41,317c-4.46,43-4,89.79,0,139.21",
    fill: "none",
    stroke: shadow,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M276.74,337.64c-6.86,43-6.09,89.85,0,139.3",
    fill: "none",
    stroke: shadow,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M225.35,356.43c183.42-78,371.14-79.06,555.94,0,17.53,7.5,17.43,139.87,0,133.81-180.47-62.83-371.33-63.5-555.94,0C203.39,497.79,205.53,364.86,225.35,356.43Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M426.76,283.72A328.8,328.8,0,0,1,465.37,278c3.25-.28,6.49-.56,9.74-.78l9.75-.56c3.26-.14,6.51-.2,9.77-.3l9.77-.13c13,0,26.05.63,39,1.84a324.4,324.4,0,0,1,38.6,5.8c-13-.29-26-.79-38.88-1.13s-25.84-.49-38.75-.52h-9.68c-3.23,0-6.46.12-9.69.11l-9.68.14c-3.23.11-6.46.16-9.7.2C452.72,283,439.78,283.46,426.76,283.72Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M347.31,233.83a183.71,183.71,0,0,1,22.38-15.33c7.78-4.62,15.81-8.84,24-12.66,2-1,4.13-1.86,6.2-2.78s4.13-1.86,6.24-2.67c4.22-1.65,8.4-3.38,12.7-4.8a217,217,0,0,1,26.06-7.5c-2.07.91-4.16,1.78-6.25,2.63s-4.19,1.64-6.25,2.56c-4.15,1.74-8.31,3.42-12.43,5.22l-3.09,1.33c-1,.43-2.08.85-3.1,1.32l-6.15,2.73c-2.06.88-4.09,1.83-6.14,2.75s-4.09,1.84-6.1,2.83l-6.1,2.83c-2,1-4,2-6.05,3-4,1.94-8,4-12.05,6C363.19,225.31,355.23,229.48,347.31,233.83Z",
    fill: colors.white
  }));
}; // export const Back = ({ scale = 1 }: HatProps) => {

var Back$8 = function Back() {
  var _useTheme2 = useTheme(),
      colors = _useTheme2.colors;

  return React__default.createElement(reactNativeSvg.G, {
    transform: {
      scale: 1,
      origin: 'center'
    }
  }, React__default.createElement(reactNativeSvg.Path, {
    d: "M225.35,498c183.42,77.95,371.14,79.06,555.94,0,17.53-7.5,17.43-139.87,0-133.81-180.47,62.83-371.33,63.5-555.94,0C203.39,356.6,205.53,489.53,225.35,498Z",
    fill: colors.outline,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }));
};

var Beanie = {
  __proto__: null,
  Front: Front$8,
  Back: Back$8
};

var Front$9 = function Front(_ref) {
  var color = _ref.color;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var _colors$clothing$colo = colors.clothing[color],
      base = _colors$clothing$colo.base,
      shadow = _colors$clothing$colo.shadow;
  return React__default.createElement(reactNativeSvg.G // TODO
  // it seems there is an issue with the scale when greater than 1
  // for now the scale will be hardcoded to 1
  , {
    // TODO
    // it seems there is an issue with the scale when greater than 1
    // for now the scale will be hardcoded to 1
    transform: {
      scale: 1,
      origin: 'center'
    }
  }, React__default.createElement(reactNativeSvg.Path, {
    d: "M765.63,495.43s.3-2.94.8-8.24C759.75,345.82,643,233.25,500,233.25c-147.32,0-266.75,119.43-266.75,266.75,0,7.28.31,14.49.89,21.63,12.11-39.32,161.32-77.95,298.44-133.08C631.75,452.24,765.63,495.43,765.63,495.43Z",
    opacity: 0.15
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M747.94,163.66l0,0C684.65,74.76,266,93.83,204.16,155.69c-66.94,66.94,29.18,351,29.18,351,0-41.1,160.33-82.31,303.37-139.83,99.17,63.69,228.92,108.54,228.92,108.54S793.59,209.32,747.94,163.66Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M610.06,159.09c-36.6-4-184.31-1.44-322.45,25.65A481,481,0,0,0,235,197.59c-4.25,1.37-8.49,2.76-12.62,4.33s-8.24,3.18-12.18,5a112.44,112.44,0,0,0-11.34,5.93c-3.54,2.16-10.85,8.81-13.51,11.39l-7.3-15.56a69.81,69.81,0,0,1,12.33-9.59,116.58,116.58,0,0,1,13-6.93,217.66,217.66,0,0,1,26.74-10.11,460.64,460.64,0,0,1,54.55-12.9c18.3-3.27,36.69-5.71,55.1-7.7s35.8-7.94,54.26-8.88C494.59,148.61,592.19,154.62,610.06,159.09Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M188.17,320.14c3.47-1.42,6.8-2.75,10.2-4.07s6.78-2.61,10.18-3.87c6.79-2.57,13.62-5,20.45-7.36q20.52-7.09,41.26-13.47c6.91-2.14,13.82-4.25,20.78-6.22l10.42-3c3.47-1,6.94-2,10.44-2.93l20.94-5.59,21-5.25C382,261.7,484.59,232.18,513.37,230c-7,1.8-168.2,54.82-176.74,57.39L316,293.56q-20.57,6.22-41,12.91c-6.83,2.16-13.6,4.47-20.38,6.76s-13.54,4.65-20.3,7l-10.1,3.61q-5.07,1.77-10.08,3.64l-10,3.71c-3.32,1.23-6.69,2.52-9.9,3.78Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M711.7,270.48c-39.92,36.15-102.55,67-169.48,94.19l16.51,15.78h0S659.21,340.49,711.7,270.48Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M214.45,457.18a24.45,24.45,0,0,1,.66-5.43,27,27,0,0,1,1.75-4.9,36.8,36.8,0,0,1,5.26-8,72.69,72.69,0,0,1,13-11.7,206,206,0,0,1,28.63-16.72c19.57-9.69,39.67-17.6,59.8-25.27s40.4-14.82,60.64-22S424.76,349,445,341.87c40.42-14.25,79.8-31.3,119.21-47.95,9.86-4.14,93.82-54.66,102.72-60.67-8.32,6.8-67.53,50.51-99.82,67.22-39.1,18-78.43,35.84-118.64,50.95-20.13,7.5-40.29,14.87-60.43,22.25s-40.27,14.71-60.19,22.46c-10,3.88-19.86,7.85-29.66,12s-19.51,8.46-28.95,13.15A195.93,195.93,0,0,0,242.3,437a64.46,64.46,0,0,0-10.93,9.68c-3,3.49-7.94,11.25-7.92,14.53Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M747.94,163.66l0,0C684.65,74.76,266,93.83,204.16,155.69c-66.94,66.94,29.18,351,29.18,351,0-41.1,160.33-82.31,303.37-139.83,99.17,63.69,228.92,108.54,228.92,108.54S793.59,209.32,747.94,163.66Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M534.47,361.33c16.1-6.69,32.19-13.37,48.12-20.36l6-2.61,5.95-2.67,6-2.66,5.91-2.76,5.92-2.73c2-.91,3.92-1.88,5.88-2.81,3.91-1.89,7.83-3.75,11.69-5.74q23.34-11.6,45.56-25.15a427.09,427.09,0,0,0,43-29.7c-1.44,1.66-2.86,3.34-4.34,5s-2.9,3.33-4.49,4.84c-3.12,3.11-6.22,6.29-9.55,9.17-1.64,1.49-3.31,2.92-5,4.39s-3.41,2.8-5.12,4.21-3.45,2.76-5.2,4.11l-5.32,4A448.92,448.92,0,0,1,634.62,328c-3.84,2.18-7.74,4.23-11.63,6.29s-7.8,4.1-11.74,6.08l-5.9,3-6,2.87c-4,1.91-7.92,3.84-11.93,5.64q-24,11.06-48.52,20.65Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M769.08,431.09c-1.42-.23-2.71-.46-4-.72s-2.63-.53-3.94-.82c-2.62-.55-5.2-1.21-7.79-1.86q-7.74-2-15.34-4.43a315.52,315.52,0,0,1-29.83-11.2A306.66,306.66,0,0,1,679.61,398a208.59,208.59,0,0,1-26.43-17.56c2.42,1.09,4.82,2.19,7.19,3.35s4.7,2.34,7.12,3.39c4.77,2.18,9.47,4.49,14.28,6.55q14.25,6.56,28.91,12l7.33,2.71L725.4,411c4.94,1.65,9.9,3.22,14.89,4.67s10,2.83,15,4.13l3.77.91c1.26.32,2.52.62,3.78.89,2.5.57,5.08,1.14,7.49,1.59Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M615.36,160c-36.49-4.61-73.12-6.62-109.74-7.18s-73.25.43-109.73,3.15c-18.24,1.33-36.45,3.08-54.58,5.35s-36.18,5-54.06,8.36a484.87,484.87,0,0,0-52.83,12.84,211.12,211.12,0,0,0-25,9.44A113.77,113.77,0,0,0,197.84,198a56.05,56.05,0,0,0-9.85,7.45L179.5,197a67.76,67.76,0,0,1,12-9.28,115.9,115.9,0,0,1,12.81-6.8,226.14,226.14,0,0,1,26.49-10A457.87,457.87,0,0,1,285.08,158c36.5-6.53,73.31-10.19,110.17-12.17a1068.52,1068.52,0,0,1,110.62-.17c9.2.53,18.4,1.16,27.59,1.94s18.35,1.78,27.49,2.93A542.75,542.75,0,0,1,615.36,160Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M210.05,449.36a24.5,24.5,0,0,1,.64-5.37,26.93,26.93,0,0,1,1.71-4.87,36.36,36.36,0,0,1,5.18-8,71.43,71.43,0,0,1,12.89-11.68,202.41,202.41,0,0,1,28.39-16.69c19.41-9.65,39.35-17.52,59.32-25.14s40.08-14.74,60.17-21.86,40.21-14,60.25-21.15c40.11-14.17,80-28.92,119.07-45.49q14.67-6.18,29.14-12.83t28.69-13.79q14.22-7.17,28-15.08t27.08-16.87c-8.25,6.75-16.94,13-25.81,18.91s-18,11.55-27.24,16.89S598.9,276.71,589.4,281.6s-19.15,9.51-28.82,14c-38.79,18-78.6,33.46-118.5,48.49-20,7.46-40,14.78-59.95,22.12s-39.95,14.62-59.72,22.33c-9.87,3.85-19.7,7.81-29.41,11.95s-19.35,8.41-28.71,13.08a191.39,191.39,0,0,0-26.63,15.63,63.16,63.16,0,0,0-10.78,9.64c-3,3.47-4.85,7.2-4.83,10.48Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M184.48,311.25C198,305.7,211.57,300.86,225.22,296s27.38-9.26,41.18-13.53c27.6-8.52,55.41-16.36,83.45-23.23S406,246,434.45,240.93L445.09,239l5.33-1,5.34-.85L477.15,234c7.13-1.1,14.3-1.92,21.46-2.74s14.33-1.6,21.5-2.31q-10.54,2.44-21.09,4.73c-7,1.55-14.09,2.94-21.08,4.63-14,3.22-28.07,6.22-42,9.66q-42,9.66-83.48,21.17l-20.73,5.79L311.07,281c-13.74,4.12-27.44,8.36-41.07,12.81-6.84,2.15-13.63,4.46-20.42,6.74s-13.57,4.62-20.35,6.94c-13.48,4.75-27,9.69-40.19,14.83Z",
    fill: colors.outline
  }));
};
var Back$9 = Noop;

var Turban = {
  __proto__: null,
  Front: Front$9,
  Back: Back$9
};

var Front$a = Noop;
var Back$a = function Back() {
  var _useTheme = useTheme(),
      skin = _useTheme.skin,
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M570.68,842.45C570.9,833,582.9,829,588.9,835a10.61,10.61,0,1,1-15.16,14.85A10.4,10.4,0,0,1,570.68,842.45Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M408.11,842.15C407.9,834,416.9,830,422.9,833c8,3,8,14,0,19-4,2-8,0-11.75-2.48A10.39,10.39,0,0,1,408.11,842.15Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M500,831.77a27.13,27.13,0,0,1,1.5,5.84,42.47,42.47,0,0,1,.49,5.84l.3,11.69c.09,3.89.21,7.79.25,11.69l.17,11.67c.23,15.57.22,31.16.28,46.74s.18,31.16,0,46.74c-.09,7.79-.3,15.58-.53,23.37-.1,3.89-.29,7.79-.67,11.68a92.5,92.5,0,0,1-1.77,11.69,92.5,92.5,0,0,1-1.77-11.69c-.38-3.89-.57-7.79-.67-11.68-.23-7.79-.44-15.58-.53-23.37-.2-15.58,0-31.16,0-46.74s0-31.15.18-46.73l.17-11.7.33-11.68.33-11.68a44.11,44.11,0,0,1,.5-5.84A27.13,27.13,0,0,1,500,831.77Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M425.22,883a18.51,18.51,0,0,1,4.67-1.5,29.75,29.75,0,0,1,4.68-.5l9.35-.33,18.7-.41c12.46-.19,24.91-.24,37.38-.27s24.93-.16,37.39,0c6.23.09,12.46.3,18.7.53,3.11.11,6.23.3,9.34.67a61.34,61.34,0,0,1,9.35,1.78,59.17,59.17,0,0,1-9.35,1.77c-3.11.38-6.23.57-9.34.67-6.24.23-12.47.43-18.7.52-12.46.19-24.92,0-37.39,0s-24.93,0-37.4-.15c-6.23-.06-12.46-.26-18.68-.5l-9.35-.34a29.5,29.5,0,0,1-4.67-.5A18.45,18.45,0,0,1,425.22,883Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M442.41,914.38a12.51,12.51,0,0,1,3.74-1.11,18.35,18.35,0,0,1,3.62-.15c2.39.1,4.78.16,7.17.21,4.78.11,9.56.15,14.34.17,9.63,0,19.09.08,28.76-.21s19.26-.43,28.88-.39c4.81,0,9.62.13,14.42.24a70.37,70.37,0,0,1,7.23.47,38.17,38.17,0,0,1,7.27,1.53,36.56,36.56,0,0,1-7.16,2,61.08,61.08,0,0,1-7.21.86c-4.82.35-9.64.65-14.45.82-9.64.36-19.27.32-28.88.45-4.81,0-9.61.22-14.48.1s-9.69-.13-14.52-.31-9.68-.58-14.5-1.08c-2.42-.27-4.82-.57-7.23-.9a16.82,16.82,0,0,1-3.57-.84A11.51,11.51,0,0,1,442.41,914.38Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M438.93,949.87a13.07,13.07,0,0,1,3.82-1.5,19.13,19.13,0,0,1,3.82-.49l7.63-.32c5.09-.18,10.19-.33,15.28-.41C479.66,947,489.84,947,500,947s20.36-.17,30.54,0c5.09.09,10.18.3,15.27.53a72.73,72.73,0,0,1,7.63.66A41.2,41.2,0,0,1,561.1,950a41.25,41.25,0,0,1-7.63,1.77,70.34,70.34,0,0,1-7.64.67c-5.09.23-10.18.44-15.27.53-10.18.2-20.37.06-30.55,0s-20.36-.06-30.54-.25c-5.09-.1-10.19-.28-15.28-.49l-7.63-.37a19.33,19.33,0,0,1-3.82-.5A12.85,12.85,0,0,1,438.93,949.87Z",
    fill: skin.shadow
  }));
};
var hasBreasts = false;

var Chest = {
  __proto__: null,
  Front: Front$a,
  Back: Back$a,
  hasBreasts: hasBreasts
};

var Front$b = function Front(_ref) {
  var clothingColor = _ref.clothingColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var base = colors.clothing[clothingColor].base;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M426.88,961.63a69.32,69.32,0,0,0,65.62-47,71,71,0,0,1-118.19,6.64L374.26,936C387,951.63,405.15,961.63,426.88,961.63Z",
    opacity: 0.1
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M573.12,961.63a69.32,69.32,0,0,1-65.62-47,71,71,0,0,0,118.19,6.64l0,14.72C613,951.63,594.85,961.63,573.12,961.63Z",
    opacity: 0.1
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M407,943.81A69.33,69.33,0,0,1,380.42,831.7",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M407,943.81a57.14,57.14,0,0,1-31.21-16l-1.62-1.6c-.53-.54-1-1.13-1.53-1.69s-1-1.15-1.48-1.73a22,22,0,0,1-1.43-1.79c-.9-1.23-1.81-2.46-2.68-3.72l-2.37-3.93a69,69,0,0,1-6.71-17.13,70.52,70.52,0,0,1-1.69-18.3,64.09,64.09,0,0,1,3.4-17.93c.26-.71.49-1.43.76-2.14l.88-2.1c.55-1.4,1.26-2.74,1.91-4.09a60.79,60.79,0,0,1,4.74-7.63c.85-1.21,1.82-2.35,2.75-3.49s1.94-2.23,3-3.23a47.65,47.65,0,0,1,6.73-5.59c-5.79,10-9.9,20.19-11.66,30.67A78.09,78.09,0,0,0,367.61,878a84.63,84.63,0,0,0,2,15.41,80.81,80.81,0,0,0,5.12,14.65,76.2,76.2,0,0,0,8.08,13.47,79,79,0,0,0,10.81,11.95A115,115,0,0,0,407,943.81Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M593.05,943.81A69.33,69.33,0,0,0,619.58,831.7",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M593.05,943.81a115,115,0,0,0,13.35-10.29,79,79,0,0,0,10.81-11.95,76.2,76.2,0,0,0,8.08-13.47,80.81,80.81,0,0,0,5.12-14.65,84.63,84.63,0,0,0,2-15.41,78.09,78.09,0,0,0-1.15-15.67c-1.76-10.48-5.87-20.64-11.66-30.67a47.65,47.65,0,0,1,6.73,5.59c1.08,1,2,2.14,3,3.23s1.9,2.28,2.75,3.49a60.79,60.79,0,0,1,4.74,7.63c.65,1.35,1.36,2.69,1.91,4.09l.88,2.1c.27.71.5,1.43.76,2.14a64.09,64.09,0,0,1,3.4,17.93,70.52,70.52,0,0,1-1.69,18.3,69,69,0,0,1-6.71,17.13L633,917.26c-.87,1.26-1.78,2.49-2.68,3.72a22,22,0,0,1-1.43,1.79c-.49.58-1,1.16-1.48,1.73s-1,1.15-1.53,1.69l-1.62,1.6A57.14,57.14,0,0,1,593.05,943.81Z",
    fill: colors.outline
  }));
};
var Back$b = function Back(_ref2) {
  var clothingColor = _ref2.clothingColor,
      braStraps = _ref2.braStraps;

  var _useTheme2 = useTheme(),
      skin = _useTheme2.skin,
      colors = _useTheme2.colors;

  var _colors$clothing$clot = colors.clothing[clothingColor],
      base = _colors$clothing$clot.base,
      shadow = _colors$clothing$clot.shadow;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M502.07,878.86A69.31,69.31,0,1,1,371,847.39",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M371,847.39a69.68,69.68,0,0,1,15-19.67",
    fill: skin.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M365.65,844.66a27,27,0,0,1,3.38-5.84,37.22,37.22,0,0,1,4.53-5c.84-.76,1.69-1.5,2.58-2.19a21.1,21.1,0,0,1,2.81-1.92,15,15,0,0,1,7-2,25,25,0,0,1-1.75,6.81c-.39,1-.83,1.88-1.29,2.77l-1.3,2.67c-.85,1.76-1.69,3.49-2.55,5.19a54.51,54.51,0,0,1-2.76,5Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M489.33,838.82a69,69,0,0,1,12.74,40",
    fill: skin.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M489.33,838.82a26.55,26.55,0,0,1,8.69,7.55,38.8,38.8,0,0,1,3.1,4.79c.93,1.67,1.77,3.39,2.55,5.15a55.12,55.12,0,0,1,3.46,11,48,48,0,0,1,.94,11.53h-12c-.19-3.25-.36-6.48-.7-9.73s-.77-6.48-1.4-9.74l-.5-2.44-.58-2.45c-.42-1.63-.87-3.26-1.29-4.93A104.17,104.17,0,0,1,489.33,838.82Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M641.65,878.86a69.14,69.14,0,0,0-21.94-50.6",
    fill: skin.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M635.65,878.86A107,107,0,0,0,634.39,866a81.92,81.92,0,0,0-3.12-12.67c-.34-1-.74-2.07-1.11-3.11s-.84-2.05-1.25-3.09-.94-2-1.38-3.05l-1.46-3c-2-4.1-4.17-8.19-6.36-12.75a35.76,35.76,0,0,1,12.22,8.61c.83.94,1.7,1.86,2.47,2.85s1.54,2,2.25,3,1.43,2.09,2.07,3.18,1.31,2.18,1.88,3.32A62.19,62.19,0,0,1,646,863.58a56.6,56.6,0,0,1,1.62,15.28Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M503,878.86a69.31,69.31,0,1,0,138.61,0",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M515.77,838.82a69,69,0,0,0-12.73,40",
    fill: skin.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M515.77,838.82a104.17,104.17,0,0,1-2.27,10.75c-.42,1.67-.87,3.3-1.29,4.93l-.57,2.45-.5,2.44c-.63,3.26-1.09,6.5-1.41,9.74s-.5,6.48-.69,9.73H497a47,47,0,0,1,.94-11.53,54.48,54.48,0,0,1,3.46-11c.77-1.76,1.61-3.48,2.54-5.15a40,40,0,0,1,3.1-4.79A26.66,26.66,0,0,1,515.77,838.82Z",
    fill: colors.outline
  }), braStraps && React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Line, {
    x1: "383.44",
    y1: "837.55",
    x2: "383.44",
    y2: "758.72",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Line, {
    x1: "616.46",
    y1: "837.55",
    x2: "616.46",
    y2: "758.72",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  })), React__default.createElement(reactNativeSvg.Path, {
    d: "M470.5,897.78h53.9v19.7c-17.74-6.05-35.71-5.9-53.9,0Z",
    fill: base,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M638.1,878.86a69.06,69.06,0,0,0-18.63-47.28c-4.22-4.52-44.27,6.19-67.81,27.26-23.11,20.69-43.23,54.49-40.35,58.75A69.31,69.31,0,0,0,638.1,878.86Z",
    fill: base,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M598.11,848.39c-6.12,3.67-12.15,7.18-18,11a154.79,154.79,0,0,0-16.53,12.18c-5.15,4.46-10.11,9.32-15,14.26s-9.69,10-14.75,15.07a100,100,0,0,1,11.18-18.17A106.06,106.06,0,0,1,559.72,867a84.36,84.36,0,0,1,18.14-11.73A83.45,83.45,0,0,1,598.11,848.39Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M361.9,878.86a69.06,69.06,0,0,1,18.63-47.28c4.22-4.52,44.27,6.19,67.81,27.26,23.11,20.69,43.23,54.49,40.35,58.75A69.31,69.31,0,0,1,361.9,878.86Z",
    fill: base,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M455.75,938.92a85.36,85.36,0,0,1-85.36-85.36,86.38,86.38,0,0,1,.44-8.71,69.31,69.31,0,0,0,96.31,93.29A85.67,85.67,0,0,1,455.75,938.92Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M361.9,878.86a69.06,69.06,0,0,1,18.63-47.28c4.22-4.52,44.27,6.19,67.81,27.26,23.11,20.69,43.23,54.49,40.35,58.75A69.31,69.31,0,0,1,361.9,878.86Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M401.89,848.39a83.45,83.45,0,0,1,20.25,6.87A84.36,84.36,0,0,1,440.28,867a106.06,106.06,0,0,1,14.65,15.71,100,100,0,0,1,11.18,18.17c-5.06-5-9.84-10.13-14.75-15.07s-9.84-9.8-15-14.26a154.79,154.79,0,0,0-16.53-12.18C414,855.57,408,852.06,401.89,848.39Z",
    fill: colors.white
  }));
};
var hasBreasts$1 = true;

var Breasts = {
  __proto__: null,
  Front: Front$b,
  Back: Back$b,
  hasBreasts: hasBreasts$1
};

var MediumBeard = function MediumBeard(_ref) {
  var color = _ref.color;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var _colors$hair$color = colors.hair[color],
      base = _colors$hair$color.base,
      shadow = _colors$hair$color.shadow;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M670.06,788.32q3.3-3.32,6.5-6.71c45.16-54.71,48.7-112.39,57.87-148.37V619l-2.44.84c.83-1.52,1.65-3,2.44-4.56-.06-.1-3.49,3.38-3.55,3.28A33.65,33.65,0,0,1,725.8,622l-32.55,11.28a220.36,220.36,0,0,1-43.89,3.82c-63-.26-63.24-14.87-113.2-20l-96.49,1.58c-25.69,3.84-37.06,11.81-88,12.85-44.15.9-83.62-10-83.62-10v12.68c14,36.84,4.58,64.43,29,110.49,0-.65,0-1.31-.05-2-4.39-21.71,0-41.57,2.12-49.19.21-1.88.36-2.92.36-2.92v-.07c0-.12,0-.2,0-.2l0,.1c0,.14.11.45.22.9.23-.72.36-1.11.36-1.11s.89,4.91,2.54,12.74c3.93,15.48,11.16,43,19.45,70.08.92,2.43,1.87,4.81,2.84,7.11.07.21.15.44.23.65,27.94,29.88,62.13,55.36,93.14,74.5,3.34,2,6.51,3.87,9.48,5.61a86.4,86.4,0,0,1,2.41-43.06s.07.38.21,1.08c.24-.77.4-1.19.4-1.19s11.43,47.45,34.52,62.83c.57.24,1.15.47,1.73.66l-.44.16.1.06c.58.33,1.18.65,1.77,1a208.45,208.45,0,0,0,21.34,8.53c5.41,1.57,9.84,2.39,12,2.39,4.75,0,32-10.61,48.69-49.07,1.1-3.27,1.63-5.32,1.63-5.32l.28.69c.11-.27.22-.53.32-.8A56,56,0,0,1,560.7,869a526,526,0,0,0,72.06-47.55l0-.11c.27-.64.53-1.29.8-1.94l.06-.13.81-2v0l.84-2.08v0c14.48-35.83,23.58-89,23.58-89,.06-.18.28.09.6.74,0-.55,0-.85,0-.85S675.72,748.49,670.06,788.32Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M670.06,788.32q3.3-3.32,6.5-6.71c45.16-54.71,48.7-112.39,57.87-148.37V619l-2.44.84c.83-1.52,1.65-3,2.44-4.56-.06-.1-3.49,3.38-3.55,3.28A33.65,33.65,0,0,1,725.8,622l-32.55,11.28a220.36,220.36,0,0,1-43.89,3.82c-63-.26-63.24-14.87-113.2-20l-96.49,1.58c-25.69,3.84-37.06,11.81-88,12.85-44.15.9-83.62-10-83.62-10v12.68c14,36.84,4.58,64.43,29,110.49,0-.65,0-1.31-.05-2-4.39-21.71,0-41.57,2.12-49.19.21-1.88.36-2.92.36-2.92v-.07c0-.12,0-.2,0-.2l0,.1c0,.14.11.45.22.9.23-.72.36-1.11.36-1.11s.89,4.91,2.54,12.74c3.93,15.48,11.16,43,19.45,70.08.92,2.43,1.87,4.81,2.84,7.11.07.21.15.44.23.65,27.94,29.88,62.13,55.36,93.14,74.5,3.34,2,6.51,3.87,9.48,5.61a86.4,86.4,0,0,1,2.41-43.06s.07.38.21,1.08c.24-.77.4-1.19.4-1.19s11.43,47.45,34.52,62.83c.57.24,1.15.47,1.73.66l-.44.16.1.06c.58.33,1.18.65,1.77,1a208.45,208.45,0,0,0,21.34,8.53c5.41,1.57,9.84,2.39,12,2.39,4.75,0,32-10.61,48.69-49.07,1.1-3.27,1.63-5.32,1.63-5.32l.28.69c.11-.27.22-.53.32-.8A56,56,0,0,1,560.7,869a526,526,0,0,0,72.06-47.55l0-.11c.27-.64.53-1.29.8-1.94l.06-.13.81-2v0l.84-2.08v0c14.48-35.83,23.58-89,23.58-89,.06-.18.28.09.6.74,0-.55,0-.85,0-.85S675.72,748.49,670.06,788.32Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M670.06,788.32q3.3-3.32,6.5-6.71c45.16-54.71,48.7-112.39,57.87-148.37V619l-2.44.84c.83-1.52,1.65-3,2.44-4.56-.06-.1-3.49,3.38-3.55,3.28A33.65,33.65,0,0,1,725.8,622l-32.55,11.28a220.36,220.36,0,0,1-43.89,3.82c-63-.26-78.3-19.69-113.2-20s-76.95-1.23-96.49,1.58-37.06,11.81-88,12.85c-44.15.9-83.62-10-83.62-10v12.68c14,36.84,4.58,64.43,29,110.49,0-.65,0-1.31-.05-2-4.39-21.71,0-41.57,2.12-49.19.21-1.88.36-2.92.36-2.92v-.07c0-.12,0-.2,0-.2l0,.1c0,.14.11.45.22.9.23-.72.36-1.11.36-1.11s.89,4.91,2.54,12.74c3.93,15.48,11.16,43,19.45,70.08.92,2.43,1.87,4.81,2.84,7.11.07.21.15.44.23.65,27.94,29.88,62.13,55.36,93.14,74.5,3.34,2,6.51,3.87,9.48,5.61a86.4,86.4,0,0,1,2.41-43.06s.07.38.21,1.08c.24-.77.4-1.19.4-1.19s11.43,47.45,34.52,62.83c.57.24,1.15.47,1.73.66l-.44.16.1.06c.58.33,1.18.65,1.77,1a208.45,208.45,0,0,0,21.34,8.53c5.41,1.57,9.84,2.39,12,2.39,4.75,0,32-10.61,48.69-49.07,1.1-3.27,1.63-5.32,1.63-5.32l.28.69c.11-.27.22-.53.32-.8A56,56,0,0,1,560.7,869a526,526,0,0,0,72.06-47.55l0-.11c.27-.64.53-1.29.8-1.94l.06-.13.81-2v0l.84-2.08v0c14.48-35.83,23.58-89,23.58-89,.06-.18.28.09.6.74,0-.55,0-.85,0-.85S675.72,748.49,670.06,788.32Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M343.5,706.91a23.12,23.12,0,0,0,13.79,5.8C343,701.34,337.78,690.32,336,685.36A271.66,271.66,0,0,1,326,630.81a329.37,329.37,0,0,1-57.87-9.33v12.68c14,36.84,4.58,64.43,29,110.49,0-.65,0-1.31-.05-2-4.39-21.71,0-41.57,2.12-49.19.21-1.88.36-2.92.36-2.92v-.07c0-.12,0-.2,0-.2l0,.1c0,.14.11.45.22.9.23-.72.36-1.11.36-1.11s.89,4.91,2.54,12.74c3.93,15.48,11.16,43,19.45,70.08.92,2.43,1.87,4.81,2.84,7.11.07.21.15.44.23.65,27.94,29.88,62.13,55.36,93.14,74.5,3.34,2,6.51,3.87,9.48,5.61a86.4,86.4,0,0,1,2.41-43.06s.07.38.21,1.08c.24-.77.4-1.19.4-1.19s11.43,47.45,34.52,62.83c.57.24,1.15.47,1.73.66l-.44.16.1.06c.58.33,1.18.65,1.77,1a208.45,208.45,0,0,0,21.34,8.53c5.41,1.57,9.84,2.39,12,2.39,3.53,0,19.51-5.88,34.33-24.72C466.94,846.06,380.78,800,343.5,706.91Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M433.87,816.78s9.49,9,29.29,4.09c-1.47,3.55-5.93,5.4-5.93,5.4s6.17,8.13,19.06,7.75c0,0-7.73,4.8-15.53,1.65A169.67,169.67,0,0,0,442.41,834l-13.51-9.38Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M351.7,631.52q-2.64.48-5.28.84c-.89.11-1.77.25-2.65.35l-2.66.24-5.32.38c-1.78.08-3.56.09-5.33.14-3.56.07-7.11-.07-10.67-.2s-7.1-.37-10.64-.71-7.07-.7-10.61-1.1-7.05-1-10.56-1.56a196.89,196.89,0,0,1-21-4.57l-3.85-1.08,2.1-7.57,3.88.94c6.61,1.61,13.47,3.13,20.27,4.49s13.68,2.64,20.57,3.72c3.44.59,6.89,1,10.35,1.56s6.92,1,10.39,1.31C337.67,629.65,344.64,630.36,351.7,631.52Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M669.31,789.07c10.26-10.26,9.29-9.63,17.79-20.94-1.5-34.48-30-53.71-30-53.71L659,726.08c.84.16,7.91,18.47,7.56,46.08Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M575.36,859.87c-5.72-24.9-22.42-29.15-22.42-29.15l3.21,19.45a96.48,96.48,0,0,1,3.9,19.14c5-2.72,10.16-5.66,15.45-8.78Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M340.09,735.62a90.52,90.52,0,0,0,6.59,20.14A121.79,121.79,0,0,0,357,773.89l3.09,4.18c.53.68,1,1.42,1.56,2.07l1.66,2c1.13,1.31,2.19,2.68,3.35,4l3.56,3.78c.6.62,1.16,1.28,1.77,1.89l1.9,1.78,3.77,3.58c2.58,2.32,5.33,4.45,7.94,6.75l-6.28,3.32-.06-4c.05-1.32.07-2.64.2-4s.23-2.65.46-4c.11-.66.18-1.32.32-2l.43-2a43.84,43.84,0,0,1,2.52-7.67A35,35,0,0,1,385,780c.34-.6.73-1.18,1.13-1.77.21-.29.4-.57.64-.87s.42-.54.78-.95l4.46-5.06.56,6.55c.1,1.09.3,2.4.53,3.61s.51,2.46.84,3.68a48,48,0,0,0,2.51,7.14,36.29,36.29,0,0,0,3.9,6.55,29,29,0,0,0,5.62,5.42,23.79,23.79,0,0,1-7-4.07,31.32,31.32,0,0,1-5.54-6.17,43.85,43.85,0,0,1-4-7.32c-.54-1.28-1-2.58-1.46-3.91a34,34,0,0,1-1.11-4.16l5,1.49c0,.08-.22.35-.34.55s-.26.46-.39.69c-.25.48-.5,1-.73,1.48a33.23,33.23,0,0,0-1.24,3.15,44.39,44.39,0,0,0-1.62,6.69,55.25,55.25,0,0,0-.65,6.94c-.06,1.16,0,2.34,0,3.51l.16,3.53.4,8.64-6.68-5.32c-1.44-1.15-2.87-2.29-4.29-3.46l-2.14-1.75c-.7-.59-1.44-1.14-2.09-1.79l-4-3.83-2-1.91c-.64-.67-1.25-1.36-1.86-2.05l-3.67-4.15c-1.21-1.39-2.26-2.92-3.38-4.39a105.25,105.25,0,0,1-6.17-9.19,91.82,91.82,0,0,1-8.63-20.3C340.61,750.19,339.43,742.84,340.09,735.62Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M638.78,724.34A5.35,5.35,0,0,1,640,726a16.7,16.7,0,0,1,.84,1.94A33.87,33.87,0,0,1,642,732a58.47,58.47,0,0,1,1.08,8.32,94.26,94.26,0,0,1-.54,16.71,109.35,109.35,0,0,1-9,32.28A90.58,90.58,0,0,1,614.3,817a70.11,70.11,0,0,1-28.51,17,111.55,111.55,0,0,0,23.91-21.31A118.63,118.63,0,0,0,626.25,786a157.47,157.47,0,0,0,10.09-30,151.49,151.49,0,0,0,2.81-15.76c.32-2.65.54-5.32.63-8a33.51,33.51,0,0,0-.08-4,14.64,14.64,0,0,0-.26-2A5.74,5.74,0,0,0,638.78,724.34Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M262.51,621.57c22.24,43.9,7.22,72.38,35.18,124.3-7-29,2.43-55.68,2.43-55.68S310,744.78,325,780.12c7.28,23.46,69.85,61.4,103.55,81.17a86.33,86.33,0,0,1,2.32-43.58s11.89,49.36,35.91,63.71c13.43,7.58,30.15,11.89,35.13,11.89s34.53-11.58,50.92-54.5a56,56,0,0,1,7.9,30.68c22.18-12,53.39-25.68,72.45-47.65C659.52,787.15,659.52,726,659.52,726S676,748.85,669.93,789.3c61.76-68.3,54.34-143.14,71.42-175.57",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M734.38,616.77a3.8,3.8,0,0,0,1.16,1.29,4,4,0,0,0,2.15.7,3.81,3.81,0,0,0,1.68-.34h0l-.09,0-.2.11-.48.24-1,.51-2,1q-2,1-4,2c-2.69,1.32-5.41,2.57-8.13,3.81s-5.5,2.41-8.27,3.57-5.6,2.23-8.47,3.26c-1.44.51-2.89,1-4.39,1.43a39.36,39.36,0,0,1-4.75,1.15c-.47.08-.81.11-1.18.16l-1.12.13c-.74.09-1.48.16-2.23.23-1.49.14-3,.3-4.49.4a85.55,85.55,0,0,1-18.09-.43c5.86-1.58,11.62-2.89,17.37-4.29l8.59-2a35.39,35.39,0,0,0,3.81-1.36c1.31-.52,2.63-1.14,4-1.72,2.65-1.19,5.29-2.47,7.93-3.77s5.29-2.61,7.93-3.93l7.94-4,4-2,2-1,1-.48.53-.25.3-.13.16-.08.05,0a4.11,4.11,0,0,1,5.19,1.57l2.13,3.38-7.06,4.19Z",
    fill: colors.outline
  }));
};

var HappyEyes = function HappyEyes() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M296.49,572.61V559.68a49.6,49.6,0,0,1,1.94-25.32,46,46,0,0,1,3.51-7.65C305.29,518,314.29,511,323.29,508c14-4,31-2,42,9,14,15,12,37,12.45,55.62",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M623.31,573c-2.34-26.62,1.66-63.62,36.13-67.17a45,45,0,0,1,8.12,0A43.68,43.68,0,0,1,690,514.41c18,15,14,39,13.95,58.63",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }));
};

var RightLash = function RightLash() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.Path, {
    d: "M721.21,500.43c7.82-6.25,14.69-21.65,12.5-20-15.72,12.14-28,10-30.28,9.19-61.66-16.6-100.28,14-72.48,9,32.73-11.48,76.32-2.8,89.38,17.44,12.5-2.88,27.76-11.11,33.4-26.94C734.42,500.22,732.56,500.21,721.21,500.43Z",
    fill: colors.outline,
    fillRule: "evenodd"
  });
};
var LeftLash = function LeftLash() {
  var _useTheme2 = useTheme(),
      colors = _useTheme2.colors;

  return React__default.createElement(reactNativeSvg.Path, {
    d: "M243.89,489.13c5.64,15.83,20.9,24.06,33.4,26.94,13.06-20.24,56.65-28.92,89.37-17.44,27.8,5-10.81-25.57-72.47-9-2.31.85-14.56,2.95-30.28-9.19-2.19-1.69,4.68,13.71,12.5,20C265.06,500.21,263.2,500.22,243.89,489.13Z",
    fill: colors.outline,
    fillRule: "evenodd"
  });
};

var NormalEyes = function NormalEyes(_ref) {
  var withLashes = _ref.withLashes;

  var _useTheme = useTheme(),
      skin = _useTheme.skin,
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M271.4,568.53c-1-28.36,18-52.36,43.28-63.56a62.37,62.37,0,0,1,8.16-2.7A70,70,0,0,1,365.05,505a71.67,71.67,0,0,1,8.93,4.16c29.53,15.89,42.79,53.25,31.36,83.46a61.68,61.68,0,0,1-4.18,8.82,54.68,54.68,0,0,1-17.51,20.83,69.25,69.25,0,0,1-7.85,5c-27.38,13-64.38,9-86.45-11.4a68.39,68.39,0,0,1-6.11-7.47,64.89,64.89,0,0,1-5.57-9.5A55.78,55.78,0,0,1,272,577.1,75.67,75.67,0,0,1,271.4,568.53Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M269.77,550.18c-1-28.36,18-52.36,43.28-63.56a62.23,62.23,0,0,1,8.15-2.7,70,70,0,0,1,42.22,2.68,71.54,71.54,0,0,1,8.92,4.16c29.53,15.89,42.79,53.26,31.36,83.46a59.6,59.6,0,0,1-4.18,8.82,63.85,63.85,0,0,1-4.71,7.8,64.78,64.78,0,0,1-5.68,7,63.08,63.08,0,0,1-7.12,6.07,68.37,68.37,0,0,1-7.85,5c-27.38,13-64.38,9-86.44-11.39a68.28,68.28,0,0,1-6.11-7.48,65,65,0,0,1-5.58-9.5,55.59,55.59,0,0,1-5.71-21.73A71.3,71.3,0,0,1,269.77,550.18Z",
    fill: colors.white,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "338.51",
    cy: "550.79",
    r: "12.24",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M583.89,560.47c.43-15.13,6.67-30.09,15.1-41.33a72.82,72.82,0,0,1,7.12-8.53,69.73,69.73,0,0,1,90.17-8.95,73.27,73.27,0,0,1,6.53,5.13c27,21.45,30.12,63.14,15.32,93.23a62.31,62.31,0,0,1-4.78,6.86,72.09,72.09,0,0,1-7.58,8.13c-20.27,17.83-51.81,22.13-77.41,12.42a71.34,71.34,0,0,1-10.55-5c-17.9-10.78-30.37-31.09-33.43-52.23A62.93,62.93,0,0,1,583.89,560.47Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M589.38,549c.42-14.15,6.42-28.15,14.52-38.66a70.56,70.56,0,0,1,6.86-8A68.55,68.55,0,0,1,697.53,494a69.81,69.81,0,0,1,6.28,4.79c26,20.07,29,59.07,14.74,87.22a56.5,56.5,0,0,1-4.6,6.42,68.91,68.91,0,0,1-7.29,7.6c-19.51,16.68-49.86,20.71-74.49,11.62A68.79,68.79,0,0,1,622,606.9c-17.22-10.08-29.22-29.08-32.17-48.85A56.34,56.34,0,0,1,589.38,549Z",
    fill: colors.white,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "659.21",
    cy: "550.79",
    r: "12.24",
    fill: colors.outline
  }), withLashes && React__default.createElement(reactNativeSvg.G, {
    transform: "translate(0 -5)"
  }, React__default.createElement(LeftLash, null), React__default.createElement(RightLash, null)));
};

var LeftTwitchEyes = function LeftTwitchEyes(_ref) {
  var withLashes = _ref.withLashes;

  var _useTheme = useTheme(),
      skin = _useTheme.skin,
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M271.4,568.53c-1-28.36,18-52.36,43.28-63.56a62.37,62.37,0,0,1,8.16-2.7A70,70,0,0,1,365.05,505a71.67,71.67,0,0,1,8.93,4.16c29.53,15.89,42.79,53.25,31.36,83.46a61.68,61.68,0,0,1-4.18,8.82,54.68,54.68,0,0,1-17.51,20.83,69.25,69.25,0,0,1-7.85,5c-27.38,13-64.38,9-86.45-11.4a68.39,68.39,0,0,1-6.11-7.47,64.89,64.89,0,0,1-5.57-9.5A55.78,55.78,0,0,1,272,577.1,75.67,75.67,0,0,1,271.4,568.53Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M269.77,550.18c-1-28.36,18-52.36,43.28-63.56a62.23,62.23,0,0,1,8.15-2.7,70,70,0,0,1,42.22,2.68,71.54,71.54,0,0,1,8.92,4.16c29.53,15.89,42.79,53.26,31.36,83.46a59.6,59.6,0,0,1-4.18,8.82,63.85,63.85,0,0,1-4.71,7.8,64.78,64.78,0,0,1-5.68,7,63.08,63.08,0,0,1-7.12,6.07,68.37,68.37,0,0,1-7.85,5c-27.38,13-64.38,9-86.44-11.39a68.28,68.28,0,0,1-6.11-7.48,65,65,0,0,1-5.58-9.5,55.59,55.59,0,0,1-5.71-21.73A71.3,71.3,0,0,1,269.77,550.18Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "338.51",
    cy: "541.79",
    r: "12.24",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M399.52,583a59.6,59.6,0,0,0,4.18-8.82,62.5,62.5,0,0,0,2.57-8.64c-68.32-7.75-127,20.81-127,20.81l1.1,1.75c.41.62.82,1.24,1.25,1.84a68.28,68.28,0,0,0,6.11,7.48c22.06,20.36,59.06,24.36,86.44,11.39a68.37,68.37,0,0,0,7.85-5,63.08,63.08,0,0,0,7.12-6.07,64.78,64.78,0,0,0,5.68-7A63.85,63.85,0,0,0,399.52,583Z",
    fill: skin.base,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "6px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M269.77,550.18c-1-28.36,18-52.36,43.28-63.56a62.23,62.23,0,0,1,8.15-2.7,70,70,0,0,1,42.22,2.68,71.54,71.54,0,0,1,8.92,4.16c29.53,15.89,42.79,53.26,31.36,83.46a59.6,59.6,0,0,1-4.18,8.82,63.85,63.85,0,0,1-4.71,7.8,64.78,64.78,0,0,1-5.68,7,63.08,63.08,0,0,1-7.12,6.07,68.37,68.37,0,0,1-7.85,5c-27.38,13-64.38,9-86.44-11.39a68.28,68.28,0,0,1-6.11-7.48,65,65,0,0,1-5.58-9.5,55.59,55.59,0,0,1-5.71-21.73A71.3,71.3,0,0,1,269.77,550.18Z",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    fill: "none",
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M583.89,560.47c.43-15.13,6.67-30.09,15.1-41.33a72.82,72.82,0,0,1,7.12-8.53,69.73,69.73,0,0,1,90.17-8.95,73.27,73.27,0,0,1,6.53,5.13c27,21.45,30.12,63.14,15.32,93.23a62.31,62.31,0,0,1-4.78,6.86,72.09,72.09,0,0,1-7.58,8.13c-20.27,17.83-51.81,22.13-77.41,12.42a71.34,71.34,0,0,1-10.55-5c-17.9-10.78-30.37-31.09-33.43-52.23A62.93,62.93,0,0,1,583.89,560.47Z",
    fill: skin.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M589.38,549c.42-14.15,6.42-28.15,14.52-38.66a70.56,70.56,0,0,1,6.86-8A68.55,68.55,0,0,1,697.53,494a69.81,69.81,0,0,1,6.28,4.79c26,20.07,29,59.07,14.74,87.22a56.5,56.5,0,0,1-4.6,6.42,68.91,68.91,0,0,1-7.29,7.6c-19.51,16.68-49.86,20.71-74.49,11.62A68.79,68.79,0,0,1,622,606.9c-17.22-10.08-29.22-29.08-32.17-48.85A56.34,56.34,0,0,1,589.38,549Z",
    stroke: colors.outline,
    fill: colors.white,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "659.21",
    cy: "550.79",
    r: "12.24",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M718.86,618.11c-10.23,5-20.32,9.55-31.34,12.69a97.34,97.34,0,0,1-16.46,3.3,141.1,141.1,0,0,1-17.69.3A144.2,144.2,0,0,1,633,632.48c-1.93-.31-4.13.51-4.62,2.62-.41,1.81.55,4.28,2.62,4.62a164.26,164.26,0,0,0,19.66,2.1c3.19.13,6.37.06,9.56.16a78.25,78.25,0,0,0,9.06-.21c12-1,23.62-4.28,34.76-8.76,6.32-2.55,12.52-5.4,18.63-8.42a3.77,3.77,0,0,0,1.34-5.13,3.83,3.83,0,0,0-5.13-1.35Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M365.31,627.42c-11.37,2.16-22.4,3.8-34.06,3.83a95.68,95.68,0,0,1-17-1.36,171.78,171.78,0,0,1-35.56-11.64,3.85,3.85,0,0,0-5.13,1.35c-.95,1.62-.5,4.27,1.34,5.13a164.42,164.42,0,0,0,17.87,7.1c2.91,1,5.87,1.7,8.78,2.6a91.22,91.22,0,0,0,8.91,2.35c11.95,2.42,24.22,2.37,36.31,1,6.88-.76,13.71-1.88,20.51-3.17,2-.37,3.12-2.77,2.62-4.61a3.83,3.83,0,0,0-4.62-2.62Z",
    fill: colors.outline
  }), withLashes && React__default.createElement(reactNativeSvg.G, {
    transform: "translate(0 -5)"
  }, React__default.createElement(LeftLash, null), React__default.createElement(RightLash, null)));
};

var Shirt = function Shirt(_ref) {
  var color = _ref.color,
      _ref$graphic = _ref.graphic,
      Graphic = _ref$graphic === void 0 ? Noop : _ref$graphic;

  var _useTheme = useTheme(),
      colors = _useTheme.colors,
      skin = _useTheme.skin;

  var _colors$clothing$colo = colors.clothing[color],
      base = _colors$clothing$colo.base,
      shadow = _colors$clothing$colo.shadow;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M677.8,906.35c.21-37.11-1.21-70.07-7.73-95.39C660,785.6,641.89,770.48,610,770.48L632.79,905S655.31,915.24,677.8,906.35Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M686.41,895.79a20.31,20.31,0,0,1-3.7,2.43",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M326.11,809.88c-6.83,25.57-8,59.13-7.74,97,19.9,8.54,50.42-2.15,50.42-2.15l17.33-132.24C355.25,772.46,336.85,786.36,326.11,809.88Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M613.76,758.72H559.55v.1a62.78,62.78,0,0,1-1.44,13.39,60.92,60.92,0,0,1-1.74,6.33,50.88,50.88,0,0,1-10,16.83,48.2,48.2,0,0,1-4.5,4.43c-25.17,18.2-65.17,19.2-89.48-.58a51.79,51.79,0,0,1-7.11-7.6,50.84,50.84,0,0,1-9.1-19.41,62.41,62.41,0,0,1-1.07-6.59,61,61,0,0,1-.37-6.8v-.1H380.53A13.28,13.28,0,0,0,367.26,772v284.68A13.28,13.28,0,0,0,380.53,1070H619.47a13.28,13.28,0,0,0,13.27-13.28V778.6C632.74,766.38,626.85,758.72,613.76,758.72Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M610,758.72c63.54,0,73.4,56,73.9,133.17-18.6,11.62-48.91,1.31-48.91,1.31Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M632.74,831.87,610,870l11.38,130h11.61V894.35l17.28,2.89C644.6,825.07,632.74,831.87,632.74,831.87Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M386.12,758.72c-61.78,0-75.83,53.8-76.85,127.66,19,19.86,58,4.58,58,4.58Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M367.23,831.87V891l-17.31,4.31C355.59,825.19,367.23,831.87,367.23,831.87Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M610,758.72c67.41,0,78.45,56.29,78.9,133.78-26.2,12.43-53.91.7-53.91.7",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M386.12,758.72c-66.79,0-80.08,54.7-80.76,130.72C326,904.22,367.22,891,367.22,891",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M380.53,1070H497.15C388,1070,396.24,838.82,367.26,838.82v217.86A13.28,13.28,0,0,0,380.53,1070Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M361.26,860.85c-.19-3.67-.11-7.34.05-11s.47-7.35.86-11c.2-1.84.4-3.67.65-5.51s.49-3.67.85-5.51a44.18,44.18,0,0,1,3.59-11,43.74,43.74,0,0,1,3.58,11c.37,1.84.63,3.67.86,5.51s.45,3.67.65,5.51c.38,3.67.68,7.34.85,11s.25,7.34.06,11Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M632.74,870v8c.26,34,.26,69,0,102.75,0,2.87,0,5.72,0,8.53v67.41A13.28,13.28,0,0,1,619.47,1070H380.53a13.28,13.28,0,0,1-13.27-13.28V998.52c0-2.51,0-5.07,0-7.65-.25-34.87-.25-69.87,0-105.3V860.85",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M626.74,870c-.19-4.17-.1-8.35.06-12.53s.47-8.35.85-12.53c.2-2.09.41-4.18.65-6.27s.49-4.17.86-6.26a54.55,54.55,0,0,1,3.58-12.53,55.09,55.09,0,0,1,3.59,12.53c.36,2.09.62,4.18.85,6.26s.45,4.18.65,6.27c.38,4.18.69,8.35.85,12.53s.25,8.36.06,12.53Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M380.53,758.82l233.23-.1",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M559.55,758.82a62.78,62.78,0,0,1-1.44,13.39,60.92,60.92,0,0,1-1.74,6.33,50.88,50.88,0,0,1-10,16.83,48.2,48.2,0,0,1-4.5,4.43c-25.17,18.2-65.17,19.2-89.48-.58a51.79,51.79,0,0,1-7.11-7.6,50.84,50.84,0,0,1-9.1-19.41,62.41,62.41,0,0,1-1.07-6.59,61,61,0,0,1-.37-6.8",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M503.4,828.39a66.61,66.61,0,0,1-18.39,1.1,69.79,69.79,0,0,1-18.2-3.76,61.46,61.46,0,0,1-16.5-8.64l-1.86-1.41c-.61-.48-1.2-1-1.79-1.52a32.24,32.24,0,0,1-3.33-3.28,43.83,43.83,0,0,1-5.38-7.51,87.37,87.37,0,0,0,6.74,6.09c.58.48,1.17.95,1.75,1.4s1.23.82,1.84,1.24,1.22.84,1.85,1.23l1.91,1.16a88.05,88.05,0,0,0,16.1,7.46,106.26,106.26,0,0,0,17.25,4.45A173.7,173.7,0,0,0,503.4,828.39Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M307.83,892.5a24.54,24.54,0,0,0,3.68,2.77",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M674.7,882.69a19.88,19.88,0,0,1-6.76,2.52,34.83,34.83,0,0,1-7.2.65,40.16,40.16,0,0,1-7.18-.79c-1.18-.21-2.33-.56-3.49-.87s-2.27-.77-3.37-1.24c1.21,0,2.38.18,3.56.28l3.52.29c1.17,0,2.33.2,3.5.21s2.32.11,3.48.12q3.5.06,7-.19A49.31,49.31,0,0,0,674.7,882.69Z",
    fill: colors.outline
  }), React__default.createElement(Graphic, null));
};

var ContentEyes = function ContentEyes() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M703.51,506.11V519a49.59,49.59,0,0,1-1.94,25.32,45.67,45.67,0,0,1-3.51,7.65c-3.35,8.71-12.35,15.71-21.35,18.71-14,4-31,2-42-9-14-15-12-37-12.45-55.62",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M376.69,505.7c2.34,26.61-1.66,63.61-36.13,67.17a45.89,45.89,0,0,1-8.12,0A43.6,43.6,0,0,1,310,564.31c-18-15-14-39-13.95-58.62",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }));
};

var SeriousEyebrows = function SeriousEyebrows() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M407.29,474.84H286.65c-5.56,0-11.12-.08-16.68,0h-.24c-5.23,0-10.24,4.6-10,10a10.17,10.17,0,0,0,10,10H390.37c5.55,0,11.12.08,16.68,0h.24c5.23,0,10.24-4.6,10-10a10.18,10.18,0,0,0-10-10Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M726.32,474.84H605.68c-5.56,0-11.12-.08-16.68,0h-.24c-5.23,0-10.24,4.6-10,10a10.17,10.17,0,0,0,10,10H709.4c5.56,0,11.12.08,16.68,0h.24c5.23,0,10.24-4.6,10-10a10.18,10.18,0,0,0-10-10Z",
    fill: colors.outline
  }));
};

var RoundGlasses = function RoundGlasses() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Circle, {
    cx: "338.9",
    cy: "548.55",
    r: "93.31",
    fill: "white",
    opacity: 0.2
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M744.47,606.82a103.27,103.27,0,0,1-188.33-51.49c-37-14.6-74.43-14.47-114.19.39a103.43,103.43,0,0,1-103,96.13c-32.48,0-76-36.5-71-28.39,14,20.69,47,36.45,72.54,36.45,54.55,0,97.87-39.29,101.56-92.92,39.76-14.85,77.23-15,114.19-.39,3.5,53.82,48.39,93.53,103.07,93.53C704,660.13,729.4,626,744.47,606.82Z",
    opacity: 0.15
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M320,648.75,443.07,525.67a93.05,93.05,0,0,0-10-17.27L302.72,638.76A93.1,93.1,0,0,0,320,648.75Z",
    fill: "white",
    opacity: 0.4
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "338.9",
    cy: "548.55",
    r: "93.31",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "20px"
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "659.21",
    cy: "548.55",
    r: "93.31",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "20px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M432.77,548.55c45.2-18.31,89.61-19,133.14,0",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "20px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M314.7,492.5c2.06,6.5-5.94,11.5-11.94,12.5-6,0-10-4-12-9-1-5,0-10,4-13,5-2,12-4,16.45,1.13A11.66,11.66,0,0,1,314.7,492.5Z",
    fill: "white"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M325.37,488.67c-.61,4.33-6.61,4.33-7.61.33,0-3,1-4,3.85-4.1A3.76,3.76,0,0,1,325.37,488.67Z",
    fill: "white"
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "659.21",
    cy: "548.55",
    r: "93.31",
    fill: "white",
    opacity: 0.2
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M645.19,640.81,751.47,534.52a94.74,94.74,0,0,0-2.41-11.22L634,638.4A94.31,94.31,0,0,0,645.19,640.81Z",
    fill: "white",
    opacity: 0.4
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "659.21",
    cy: "548.55",
    r: "93.31",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "20px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M635,492.5c2.06,6.5-5.94,11.5-11.94,12.5-6,0-10-4-12-9-1-5,0-10,4-13,5-2,12-4,16.45,1.13A11.7,11.7,0,0,1,635,492.5Z",
    fill: "white"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M645.69,488.67c-.61,4.33-6.61,4.33-7.61.33,0-3,1-4,3.84-4.1A3.77,3.77,0,0,1,645.69,488.67Z",
    fill: "white"
  }));
};

var AngryEyebrows = function AngryEyebrows() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M427.29,501.13l-13-4.39-31.2-10.54-37.6-12.71-32.49-11c-5.27-1.78-10.51-3.68-15.81-5.34l-.22-.08a10,10,0,0,0-5.32,19.29l13,4.39,31.2,10.54,37.6,12.7,32.49,11c5.26,1.78,10.5,3.67,15.81,5.34l.22.08a10,10,0,0,0,5.32-19.29Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M697.18,453.9,684.46,459l-30.54,12.31-36.81,14.84L585.3,499q-7.74,3.12-15.47,6.24l-.22.08c-2.51,1-4.56,2.17-6,4.6a10.18,10.18,0,0,0-1,7.71,10.06,10.06,0,0,0,4.6,6c2.22,1.18,5.26,2,7.7,1l12.73-5.13,30.54-12.31L655,492.33l31.81-12.82c5.15-2.08,10.32-4.15,15.47-6.24l.22-.09c2.51-1,4.56-2.17,6-4.59a10,10,0,0,0-3.59-13.69c-2.22-1.17-5.27-2-7.71-1Z",
    fill: colors.outline
  }));
};

var StubbleBeard = function StubbleBeard() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M664.05,702.32c28.31-23,54.41-54.72,70.68-86.1-.06-.1-3.49,3.38-3.55,3.28S710.11,638.28,649.66,638c-76.3-.31-60.54-21.68-152.51-21.68-81.42,0-68.49,11.89-145.15,16.15-62.09,3.45-83.62-13-83.62-13l-.2.33a261.18,261.18,0,0,0,40.56,57.53c4.32,4.65,8.86,9.18,13.48,13.48a193.3,193.3,0,0,0,15.35,13c5.18,3.95,10.67,7.72,16.33,11.21,21.71,12,46.48,21.14,73.63,27.13,6.49,1.43,13,2.64,19.31,3.6,65.81,5.85,141.08,6.7,200.74-31.12C653.21,710.78,658.75,706.63,664.05,702.32Z",
    opacity: 0.15
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "311.51",
    cy: "659.14",
    r: "4.18",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "338.51",
    cy: "663.32",
    r: "2.96",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "401.05",
    cy: "707.98",
    r: "2.96",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "506.83",
    cy: "711.31",
    r: "2.96",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "517.63",
    cy: "704.5",
    r: "2.96",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "578.33",
    cy: "701.54",
    r: "2.96",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "581.29",
    cy: "683.15",
    r: "2.96",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "391.69",
    cy: "690.72",
    r: "5.37",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "600.44",
    cy: "707.45",
    r: "2.09",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "642.96",
    cy: "696.08",
    r: "4.18",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "462.56",
    cy: "724.04",
    r: "4.18",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "642.96",
    cy: "663.22",
    r: "2.96",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "654.05",
    cy: "673.06",
    r: "2.96",
    fill: colors.outline
  }));
};

var RedwoodGraphic = function RedwoodGraphic() {
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Rect, {
    x: "441.15",
    y: "860.49",
    width: "112",
    height: "112",
    fill: "none"
  }), React__default.createElement(reactNativeSvg.Rect, {
    x: "433.91",
    y: "856",
    width: "132.18",
    height: "132.18",
    fill: "none"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M490.59,859c-4.7,2.37-14.62,7-20,10.65s-4.7,7.1-7.05,9.47-9.4,8.28-14.1,11.83-3.53,13-4.7,16.56-3.53,11.83-4.71,15.38,2.35,8.28,4.71,13,8.22,17.74,10.57,22.48,9.41,2.36,15.28,7.09a206.67,206.67,0,0,0,20,14.2c5.87,3.55,8.23,3.55,14.1,0a205.35,205.35,0,0,0,20-14.2c5.88-4.73,12.93-2.36,15.29-7.09s8.22-17.75,10.57-22.48,5.88-9.47,4.71-13-3.53-11.83-4.71-15.38,0-13-4.7-16.56a174,174,0,0,1-14.1-11.83c-4-3.77-2.35-5.92-7.06-9.47s-15.28-8.28-20-10.65A14.93,14.93,0,0,0,490.59,859Z",
    fillRule: "evenodd",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M474,879.46l22,15a3.14,3.14,0,0,0,1.68.52,3,3,0,0,0,1.67-.52l22-15.07a3,3,0,0,0-.41-5.13l-22-10.9a3.05,3.05,0,0,0-2.64,0l-21.94,10.9a3,3,0,0,0-.36,5.18Zm31.14,19.73a3,3,0,0,0,1.3,2.49l17.64,12.06a3,3,0,0,0,3.66-.24l14.79-13.23a3,3,0,0,0-.13-4.6l-14.12-11.29a3,3,0,0,0-3.55-.14l-18.29,12.51A3,3,0,0,0,505.13,899.19Zm-43.87,16.4a3,3,0,0,1,1,2.54,3,3,0,0,1-1.49,2.29l-10.53,6.31a3,3,0,0,1-3.39-.23,3,3,0,0,1-1-3.27l3.9-12.25a3,3,0,0,1,2.05-2,2.92,2.92,0,0,1,2.78.66Zm57.13,1.28-19.05-13a3,3,0,0,0-3.34,0l-19,13a3,3,0,0,0-1.3,2.29,3.13,3.13,0,0,0,1,2.46l19,17a2.94,2.94,0,0,0,2,.75,3,3,0,0,0,2-.75l19-17a3,3,0,0,0,1-2.46A3,3,0,0,0,518.39,916.87ZM467.6,913.5l-14.78-13.23a3.07,3.07,0,0,1-1-2.37,3,3,0,0,1,1.12-2.28l14.12-11.36a3,3,0,0,1,3.57-.13l18.27,12.5a3.05,3.05,0,0,1,1.36,2.53,3,3,0,0,1-1.36,2.52l-17.62,12.06A3,3,0,0,1,467.6,913.5Zm75.88,19-15.05-9a3,3,0,0,0-3.51.34l-18.39,16.41a3,3,0,0,0,.87,5l25.51,10.34a3,3,0,0,0,3.85-1.57l7.9-17.71A3,3,0,0,0,543.48,932.51ZM545.57,911l3.89,12.25h0a3,3,0,0,1-2.86,3.93,2.91,2.91,0,0,1-1.52-.43l-10.55-6.31a2.93,2.93,0,0,1-1.44-2.29,3,3,0,0,1,1-2.54l6.69-6a3,3,0,0,1,2.77-.66A3,3,0,0,1,545.57,911Zm-55.8,32a3,3,0,0,0-1-2.76l-18.39-16.41a3,3,0,0,0-3.51-.34l-15,9a3.05,3.05,0,0,0-1.2,3.84l7.92,17.71a3,3,0,0,0,3.84,1.56l25.5-10.33A3,3,0,0,0,489.77,943Zm9,5,20.46,8.29a3,3,0,0,1,.54,5.27l-20.48,14.22a2.94,2.94,0,0,1-1.67.54,3,3,0,0,1-1.67-.54l-20.46-14.22a3,3,0,0,1,.58-5.27l20.46-8.29A3.09,3.09,0,0,1,498.79,948.06Z",
    fill: "#c04927",
    fillRule: "evenodd"
  }));
};

var GatsbyGraphic = function GatsbyGraphic() {
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M500,860.85a59.07,59.07,0,1,0,59.07,59.07A59.24,59.24,0,0,0,500,860.85Zm-32.91,92a45.79,45.79,0,0,1-13.5-32.07l46,45.57C487.76,965.91,476,961.69,467.09,952.83Zm43,12.23L454.86,909.8a46.37,46.37,0,0,1,82.69-17.3L531.22,898A39,39,0,0,0,500,882a38.38,38.38,0,0,0-35.86,25.31l48.52,48.52a38.26,38.26,0,0,0,24.47-27.42H516.88v-8.44h29.53A46.54,46.54,0,0,1,510.13,965.06Z",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "16px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M500,860.85a59.07,59.07,0,1,0,59.07,59.07A59.24,59.24,0,0,0,500,860.85Zm-32.91,92a45.79,45.79,0,0,1-13.5-32.07l46,45.57C487.76,965.91,476,961.69,467.09,952.83Zm43,12.23L454.86,909.8a46.37,46.37,0,0,1,82.69-17.3L531.22,898A39,39,0,0,0,500,882a38.38,38.38,0,0,0-35.86,25.31l48.52,48.52a38.26,38.26,0,0,0,24.47-27.42H516.88v-8.44h29.53A46.54,46.54,0,0,1,510.13,965.06Z",
    fill: "#663795"
  }));
};

var Front$c = function Front(_ref) {
  var color = _ref.color;

  var _useTheme = useTheme(),
      colors = _useTheme.colors,
      skin = _useTheme.skin;

  var base = colors.clothing[color].base;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M329.09,794.17c56.12,35.58,168.48,75.53,168.48,75.53l-.16,14S397,879.36,316.32,844.9C316.32,814.38,329.09,794.17,329.09,794.17Z",
    fill: base,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M648.66,870.5s17.7-1.85,30.9-9c-.11-4.25-.6-8.11-.6-8.11l-30.85,10.68Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M671.55,794.43C619,831.8,503,869.7,503,869.7l.17,14s100.41-4.3,181.08-38.76C684.29,822.67,671.55,794.43,671.55,794.43Z",
    fill: base,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M320.63,822.65c.28.24.83.61,1.27.92s1,.64,1.45.95c1,.6,2,1.21,3.08,1.77,2.08,1.16,4.23,2.25,6.43,3.28s4.42,2,6.65,3c1.12.5,2.23,1,3.34,1.58s2.22,1.1,3.31,1.76a40.85,40.85,0,0,1-7.42-1.08q-3.63-.9-7.17-2.15a65,65,0,0,1-7-2.89c-1.13-.56-2.26-1.16-3.36-1.84-.55-.34-1.09-.69-1.64-1.06a15.93,15.93,0,0,1-1.67-1.31Z",
    fill: colors.outline
  }));
};
var Back$c = function Back(_ref2) {
  var color = _ref2.color;

  var _useTheme2 = useTheme(),
      colors = _useTheme2.colors;

  var _colors$clothing$colo = colors.clothing[color],
      base = _colors$clothing$colo.base,
      shadow = _colors$clothing$colo.shadow;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M568.44,849.8c-21.18,6.89-42,17.48-62.85,19.67-26.75,2.82-54.1-13.37-82.3-21.08-2.15-2.58-18.35-14.44-33.47-13.94-11.88.4-15.09,4.3-18.4,8.19l-4.16,213.48a13.27,13.27,0,0,0,13.27,13.27H619.47a13.27,13.27,0,0,0,13.27-13.27l-2.38-215.36c-4.43,0-7.1-9.4-20.41-5.09C593.66,841,569.71,848.28,568.44,849.8Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Polygon, {
    points: "632.74 831.31 609.95 869.4 621.34 999.43 632.94 999.43 632.94 893.78 632.74 831.31",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M380.53,1069.39H497.15c-109.2,0-100.91-231.14-129.89-231.14v217.87A13.27,13.27,0,0,0,380.53,1069.39Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M361.26,860.4a63.71,63.71,0,0,1-.1-8.29q.19-4.15.71-8.31c.18-1.39.35-2.77.57-4.16s.44-2.77.78-4.16a27.84,27.84,0,0,1,3.44-8.35,27.54,27.54,0,0,1,3.73,8.22c.39,1.38.68,2.76.93,4.13s.5,2.76.72,4.14c.44,2.75.79,5.51,1,8.27a62,62,0,0,1,.21,8.29Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M632.74,869.4v8c.26,34,.26,69,0,102.76,0,2.87,0,5.72,0,8.53v67.41a13.27,13.27,0,0,1-13.27,13.27H380.53a13.27,13.27,0,0,1-13.27-13.27V998q0-3.76,0-7.65c-.25-34.86-.25-69.86,0-105.3V860.29",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M626.76,869.38a65.79,65.79,0,0,1,.65-8.53q.57-4.25,1.46-8.47c.3-1.41.6-2.82.94-4.22s.69-2.81,1.15-4.21a29.21,29.21,0,0,1,4.18-8.28,28.9,28.9,0,0,1,3,8.78c.26,1.45.42,2.89.55,4.33s.25,2.88.35,4.31c.18,2.87.28,5.74.25,8.59a67.65,67.65,0,0,1-.54,8.54Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M557.91,889.36c4.41-.78,8.76-1.39,13.1-2l13-1.93c4.31-.65,8.61-1.36,12.91-2.1s8.61-1.58,13.07-2.2a62.58,62.58,0,0,1-12.33,5.26,87,87,0,0,1-13,3,94.61,94.61,0,0,1-13.33,1.11A65.72,65.72,0,0,1,557.91,889.36Z",
    fill: colors.outline
  }));
};
var braStraps = false;

var Dress = {
  __proto__: null,
  Front: Front$c,
  Back: Back$c,
  braStraps: braStraps
};

var SquintEyes = function SquintEyes(_ref) {
  var withLashes = _ref.withLashes;

  var _useTheme = useTheme(),
      colors = _useTheme.colors,
      skin = _useTheme.skin;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M271.4,576.82c-1-28.36,18-52.36,43.28-63.56a62.37,62.37,0,0,1,8.16-2.7,70,70,0,0,1,42.21,2.68A71.67,71.67,0,0,1,374,517.4c29.53,15.88,42.79,53.25,31.36,83.46a61.68,61.68,0,0,1-4.18,8.82,54.68,54.68,0,0,1-17.51,20.83,69.25,69.25,0,0,1-7.85,5c-27.38,13-64.38,9-86.45-11.4a69.35,69.35,0,0,1-6.11-7.47,64.89,64.89,0,0,1-5.57-9.5A55.78,55.78,0,0,1,272,585.39,75.67,75.67,0,0,1,271.4,576.82Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M269.77,558.47c-1-28.36,18-52.36,43.28-63.56a62.23,62.23,0,0,1,8.15-2.7,70,70,0,0,1,42.22,2.68,71.54,71.54,0,0,1,8.92,4.16c29.53,15.89,42.79,53.25,31.36,83.46a59.6,59.6,0,0,1-4.18,8.82,63.85,63.85,0,0,1-4.71,7.8,64.78,64.78,0,0,1-5.68,7,63.08,63.08,0,0,1-7.12,6.07,68.37,68.37,0,0,1-7.85,5c-27.38,13-64.38,9-86.44-11.4a67.24,67.24,0,0,1-6.11-7.47,65,65,0,0,1-5.58-9.5A55.59,55.59,0,0,1,270.32,567,71.3,71.3,0,0,1,269.77,558.47Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "338.51",
    cy: "559.08",
    r: "12.24",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M339.2,490.12a68.31,68.31,0,0,0-48.45,20.07,69.79,69.79,0,0,0-6.86,8,73.12,73.12,0,0,0-10.3,18.39H403.92a58.59,58.59,0,0,0-20.12-30,69.37,69.37,0,0,0-6.28-4.79A68.21,68.21,0,0,0,339.2,490.12Z",
    fill: skin.base,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M274.09,581.45c5.5,13.75,15.3,25.93,27.92,33.32a68.27,68.27,0,0,0,10.15,4.7c24.63,9.09,55,5.07,74.49-11.61a69.9,69.9,0,0,0,7.29-7.61,55.62,55.62,0,0,0,4.6-6.42,77.37,77.37,0,0,0,4.94-12.38Z",
    fill: skin.base,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M269.77,558.47c-1-28.36,18-52.36,43.28-63.56a62.23,62.23,0,0,1,8.15-2.7,70,70,0,0,1,42.22,2.68,71.54,71.54,0,0,1,8.92,4.16c29.53,15.89,42.79,53.25,31.36,83.46a59.6,59.6,0,0,1-4.18,8.82,63.85,63.85,0,0,1-4.71,7.8,64.78,64.78,0,0,1-5.68,7,63.08,63.08,0,0,1-7.12,6.07,68.37,68.37,0,0,1-7.85,5c-27.38,13-64.38,9-86.44-11.4a67.24,67.24,0,0,1-6.11-7.47,65,65,0,0,1-5.58-9.5A55.59,55.59,0,0,1,270.32,567,71.3,71.3,0,0,1,269.77,558.47Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M583.89,568.76c.43-15.13,6.67-30.09,15.1-41.33a72.82,72.82,0,0,1,7.12-8.53A69.73,69.73,0,0,1,696.28,510a73.27,73.27,0,0,1,6.53,5.13c27,21.45,30.12,63.14,15.32,93.23a62.31,62.31,0,0,1-4.78,6.86,72.09,72.09,0,0,1-7.58,8.13c-20.27,17.83-51.81,22.13-77.41,12.42a71.34,71.34,0,0,1-10.55-5c-17.9-10.78-30.37-31.09-33.43-52.23A62.93,62.93,0,0,1,583.89,568.76Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M589.38,557.26c.42-14.15,6.42-28.15,14.52-38.66a70.56,70.56,0,0,1,6.86-8,68.55,68.55,0,0,1,86.77-8.37,69.81,69.81,0,0,1,6.28,4.79c26,20.07,29,59.07,14.74,87.22a56.5,56.5,0,0,1-4.6,6.42,68.91,68.91,0,0,1-7.29,7.6C687.15,625,656.8,629,632.17,619.9A68.79,68.79,0,0,1,622,615.19c-17.22-10.08-29.22-29.08-32.17-48.85A56.34,56.34,0,0,1,589.38,557.26Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "659.21",
    cy: "559.08",
    r: "12.24",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M659.21,490.55a68.31,68.31,0,0,0-48.45,20.07,70.56,70.56,0,0,0-6.86,8A73.3,73.3,0,0,0,593.6,537H723.93A58.63,58.63,0,0,0,703.81,507a69.81,69.81,0,0,0-6.28-4.79A68.21,68.21,0,0,0,659.21,490.55Z",
    fill: skin.base,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M594.1,581.87c5.51,13.76,15.3,25.94,27.92,33.32a68.79,68.79,0,0,0,10.15,4.71c24.63,9.09,55,5.06,74.49-11.62a68.91,68.91,0,0,0,7.29-7.6,56.5,56.5,0,0,0,4.6-6.42,76.19,76.19,0,0,0,4.94-12.39Z",
    fill: skin.base,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M589.38,557.26c.42-14.15,6.42-28.15,14.52-38.66a70.56,70.56,0,0,1,6.86-8,68.55,68.55,0,0,1,86.77-8.37,69.81,69.81,0,0,1,6.28,4.79c26,20.07,29,59.07,14.74,87.22a56.5,56.5,0,0,1-4.6,6.42,68.91,68.91,0,0,1-7.29,7.6C687.15,625,656.8,629,632.17,619.9A68.79,68.79,0,0,1,622,615.19c-17.22-10.08-29.22-29.08-32.17-48.85A56.34,56.34,0,0,1,589.38,557.26Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), withLashes && React__default.createElement(React__default.Fragment, null, React__default.createElement(LeftLash, null), React__default.createElement(RightLash, null)));
};

var ConcernedEyebrows = function ConcernedEyebrows() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M255.06,519.62l13-4.4,31.2-10.54,37.6-12.7,32.49-11c5.27-1.78,10.55-3.51,15.8-5.34l.23-.07a10.6,10.6,0,0,0,6-4.6,10,10,0,0,0-3.58-13.68,10,10,0,0,0-7.71-1l-13,4.39-31.2,10.54-37.6,12.71-32.49,11c-5.27,1.78-10.55,3.52-15.8,5.34l-.23.08a10.6,10.6,0,0,0-6,4.6,10,10,0,0,0,3.58,13.68,10,10,0,0,0,7.71,1Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M617.56,475l12.73,5.13,30.54,12.31,36.81,14.84,31.81,12.83c5.15,2.07,10.26,4.3,15.47,6.24l.22.08c2.25.91,5.71.16,7.71-1a10,10,0,0,0,3.58-13.69l-1.56-2a10,10,0,0,0-4.41-2.57L737.73,502l-30.54-12.32-36.81-14.84L638.57,462c-5.15-2.08-10.26-4.31-15.47-6.24l-.22-.09c-2.25-.91-5.71-.16-7.71,1a10,10,0,0,0-3.58,13.68l1.56,2a10.07,10.07,0,0,0,4.41,2.58Z",
    fill: colors.outline
  }));
};

var Shades = function Shades() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M725,631.82a265.34,265.34,0,0,0,26.3-59.43c-17.24,35.74-49.84,65.46-92.11,65.46A106.75,106.75,0,0,1,552.58,531.22,105.67,105.67,0,0,1,560.41,491H758a105.33,105.33,0,0,1,7.62,33.39c.73-8,1.12-16.19,1.12-24.42a269.16,269.16,0,0,0-1.58-29H575v0H423.14v0H234.83a269.16,269.16,0,0,0-1.58,29c0,4.73.14,9.42.38,14.09A104.92,104.92,0,0,1,240.1,491H437.7a106.7,106.7,0,0,1-98.8,146.82c-38.8,0-68.82-25.83-87.48-56.89a266.14,266.14,0,0,0,24.76,52.84c19.39,12.07,38.25,24.05,62.72,24.05A126.78,126.78,0,0,0,465.53,531.22c0-1.81,0-3.61-.12-5.4,23.38-8.23,45.52-8.35,67.31-.36-.08,1.91-.14,3.83-.14,5.76A126.78,126.78,0,0,0,659.21,657.85C685,657.85,705,645.1,725,631.82ZM535.26,505.18c-23.4-7.55-47.64-7.42-72.33.39A124.62,124.62,0,0,0,459,491h80.1A122.6,122.6,0,0,0,535.26,505.18Z",
    opacity: 0.15
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M233.59,469.82s.41,32.23.41,50.2c0,64.41,40.48,116.63,104.9,116.63A116.68,116.68,0,0,0,444.2,469.82Z",
    fill: colors.outline,
    opacity: 0.95
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M553.91,469.82a116.68,116.68,0,0,0,105.3,166.83c64.42,0,107.54-52.22,107.54-116.63,0-18-2.23-50.2-2.23-50.2Z",
    fill: colors.outline,
    opacity: 0.95
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M320,626.86,443.07,503.78a93.05,93.05,0,0,0-10-17.27L302.72,616.88A93.62,93.62,0,0,0,320,626.86Z",
    fill: colors.white,
    opacity: 0.25
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M455.86,507.53c29.52-12,58.53-12.42,87,0",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "20px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M274.28,504.75c2.06,6.51-5.94,11.51-11.94,12.51-6,0-10-4-12-9-1-5,0-10,4-13,5-2,12-4,16.44,1.12A11.7,11.7,0,0,1,274.28,504.75Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M285,500.93c-.61,4.33-6.61,4.33-7.61.33,0-3,1-4,3.84-4.1A3.77,3.77,0,0,1,285,500.93Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M645.19,618.92,751.47,512.64a93.89,93.89,0,0,0-2.41-11.22L634,616.51A94.31,94.31,0,0,0,645.19,618.92Z",
    fill: colors.white,
    opacity: 0.25
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M590.68,505.73c2.06,6.51-5.94,11.51-11.94,12.51-6,0-10-4-12-9-1-5,0-10,4-13,5-2,12-4,16.45,1.12A11.69,11.69,0,0,1,590.68,505.73Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M601.35,501.91c-.61,4.33-6.61,4.33-7.61.33,0-3,1-4,3.85-4.1A3.76,3.76,0,0,1,601.35,501.91Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M233.59,469.82s-.34,31.69.41,50.2c2.6,64.36,40.48,116.63,104.9,116.63A116.68,116.68,0,0,0,444.2,469.82Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "20px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M553.91,469.82a116.68,116.68,0,0,0,105.3,166.83c64.42,0,107.54-51.53,107.54-115.94,0-18-2.23-50.89-2.23-50.89Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "20px"
  }), React__default.createElement(reactNativeSvg.Line, {
    x1: "423.14",
    y1: "469.81",
    x2: "574.97",
    y2: "469.81",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "20px"
  }));
};

var TankTop = function TankTop(_ref) {
  var color = _ref.color,
      _ref$graphic = _ref.graphic,
      Graphic = _ref$graphic === void 0 ? Noop : _ref$graphic;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var _colors$clothing$colo = colors.clothing[color],
      base = _colors$clothing$colo.base,
      shadow = _colors$clothing$colo.shadow;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M613.76,758.16H559.55v.1H589a175.21,175.21,0,0,1-2.12,27.22q-1,6.57-2.57,12.88a116.51,116.51,0,0,1-14.71,34.22,92,92,0,0,1-6.61,9c-37.06,37-95.95,39-131.74-1.19A98.26,98.26,0,0,1,420.8,825a124.07,124.07,0,0,1-13.4-39.48q-1-6.57-1.58-13.39c-.35-4.54-.54-9.15-.54-13.82h29.47v-.1H380.53c.82,22.29-1.59,75.64-9.11,84.48l-4.16,213.48a13.27,13.27,0,0,0,13.27,13.27H619.47a13.27,13.27,0,0,0,13.27-13.27l-2.38-215.36C620.61,840.76,613.42,783.07,613.76,758.16Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Polygon, {
    points: "632.74 831.31 609.95 869.4 621.34 999.43 632.94 999.43 632.94 893.78 632.74 831.31",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M380.53,1069.39H497.15c-109.2,0-100.91-231.14-129.89-231.14v217.87A13.27,13.27,0,0,0,380.53,1069.39Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M361.26,860.4a63.71,63.71,0,0,1-.1-8.29q.19-4.15.71-8.31c.18-1.39.35-2.77.57-4.16s.44-2.77.78-4.16a27.84,27.84,0,0,1,3.44-8.35,27.54,27.54,0,0,1,3.73,8.22c.39,1.38.68,2.76.93,4.13s.5,2.76.72,4.14c.44,2.75.79,5.51,1,8.27a62,62,0,0,1,.21,8.29Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M632.74,869.4v8c.26,34,.26,69,0,102.76,0,2.87,0,5.72,0,8.53v67.41a13.27,13.27,0,0,1-13.27,13.27H380.53a13.27,13.27,0,0,1-13.27-13.27V998q0-3.76,0-7.65c-.25-34.86-.25-69.86,0-105.3V860.29",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M626.76,869.38a65.79,65.79,0,0,1,.65-8.53q.57-4.25,1.46-8.47c.3-1.41.6-2.82.94-4.22s.69-2.81,1.15-4.21a29.21,29.21,0,0,1,4.18-8.28,28.9,28.9,0,0,1,3,8.78c.26,1.45.42,2.89.55,4.33s.25,2.88.35,4.31c.18,2.87.28,5.74.25,8.59a67.65,67.65,0,0,1-.54,8.54Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M368.1,833c21.58-5.27,12.43-74.73,12.43-74.73l233.23-.1s3.93,76.62,19.18,82.92",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M589,758.26a175.22,175.22,0,0,1-2.11,27.22q-1,6.57-2.57,12.88a116.51,116.51,0,0,1-14.71,34.22,92,92,0,0,1-6.61,9c-37.06,37-95.95,39-131.74-1.19A98.26,98.26,0,0,1,420.8,825a124.07,124.07,0,0,1-13.4-39.48q-1-6.57-1.58-13.39c-.35-4.54-.54-9.15-.54-13.82",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.G, {
    transform: "translate(0 30)"
  }, React__default.createElement(Graphic, null)));
};

var SimpleEyes = function SimpleEyes() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Circle, {
    cx: "341.06",
    cy: "569.08",
    r: "20.96",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M340.93,586c1.79-.1,3.79-.26,5.7-.46s3.86-.44,5.79-.74,3.87-.65,5.81-1,3.92-.68,6-.83a24.74,24.74,0,0,1-5.31,3.12,48.86,48.86,0,0,1-5.78,2,50.61,50.61,0,0,1-6,1.36,36.13,36.13,0,0,1-6.24.54Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "661.77",
    cy: "569.08",
    r: "20.96",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M661.77,586c1.8-.1,3.79-.26,5.7-.46s3.87-.44,5.8-.74,3.87-.65,5.81-1,3.92-.68,6-.83a25,25,0,0,1-5.31,3.12,48.86,48.86,0,0,1-5.78,2,51.06,51.06,0,0,1-6,1.36,36.22,36.22,0,0,1-6.24.54Z",
    fill: colors.outline
  }));
};

var Vue = function Vue() {
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M517.8,866.62l-14.4,24.94L489,866.62H441l62.36,108,62.36-108Z",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "16px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M517.8,866.62l-14.4,24.94L489,866.62H441l62.36,108,62.36-108Z",
    fill: "#44b783"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M517.8,866.62l-14.4,24.94L489,866.62H466l37.42,64.81,37.42-64.81Z",
    fill: "#364a5e"
  }));
};

var DizzyEyes = function DizzyEyes() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Line, {
    x1: "375.88",
    y1: "603.9",
    x2: "306.24",
    y2: "534.26",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: "16px"
  }), React__default.createElement(reactNativeSvg.Line, {
    x1: "306.24",
    y1: "603.9",
    x2: "375.88",
    y2: "534.26",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: "16px"
  }), React__default.createElement(reactNativeSvg.Line, {
    x1: "695.99",
    y1: "603.9",
    x2: "626.34",
    y2: "534.26",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: "16px"
  }), React__default.createElement(reactNativeSvg.Line, {
    x1: "626.34",
    y1: "603.9",
    x2: "695.99",
    y2: "534.26",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: "16px"
  }));
};

var WinkEyes = function WinkEyes(_ref) {
  var withLashes = _ref.withLashes;

  var _useTheme = useTheme(),
      colors = _useTheme.colors,
      skin = _useTheme.skin;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M271.4,576.82c-1-28.36,18-52.36,43.28-63.56a62.37,62.37,0,0,1,8.16-2.7,70,70,0,0,1,42.21,2.68A71.67,71.67,0,0,1,374,517.4c29.53,15.88,42.79,53.25,31.36,83.46a61.68,61.68,0,0,1-4.18,8.82,54.68,54.68,0,0,1-17.51,20.83,69.25,69.25,0,0,1-7.85,5c-27.38,13-64.38,9-86.45-11.4a69.35,69.35,0,0,1-6.11-7.47,64.89,64.89,0,0,1-5.57-9.5A55.78,55.78,0,0,1,272,585.39,75.67,75.67,0,0,1,271.4,576.82Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M269.77,558.47c-1-28.36,18-52.36,43.28-63.56a62.23,62.23,0,0,1,8.15-2.7,70,70,0,0,1,42.22,2.68,71.54,71.54,0,0,1,8.92,4.16c29.53,15.89,42.79,53.25,31.36,83.46a59.6,59.6,0,0,1-4.18,8.82,63.85,63.85,0,0,1-4.71,7.8,64.78,64.78,0,0,1-5.68,7,63.08,63.08,0,0,1-7.12,6.07,68.37,68.37,0,0,1-7.85,5c-27.38,13-64.38,9-86.44-11.4a67.24,67.24,0,0,1-6.11-7.47,65,65,0,0,1-5.58-9.5A55.59,55.59,0,0,1,270.32,567,71.3,71.3,0,0,1,269.77,558.47Z",
    fill: colors.white,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "338.51",
    cy: "559.08",
    r: "12.24",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Line, {
    x1: "715.03",
    y1: "559.08",
    x2: "603.4",
    y2: "559.08",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: "16px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M627,574.16a114.14,114.14,0,0,1,13.07-1.56c4.36-.3,8.72-.43,13.08-.44s8.71.14,13.07.43a114.34,114.34,0,0,1,13.08,1.57,112.18,112.18,0,0,1-13.08,1.58q-6.54.43-13.07.42t-13.08-.43A112,112,0,0,1,627,574.16Z",
    fill: colors.outline
  }), withLashes && React__default.createElement(LeftLash, null));
};

var HeartEyes = function HeartEyes(_ref) {
  var withLashes = _ref.withLashes;

  var _useTheme = useTheme(),
      colors = _useTheme.colors,
      skin = _useTheme.skin;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M271.4,576.82c-1-28.36,18-52.36,43.28-63.56a62.37,62.37,0,0,1,8.16-2.7,70,70,0,0,1,42.21,2.68A71.67,71.67,0,0,1,374,517.4c29.53,15.88,42.79,53.25,31.36,83.46a61.68,61.68,0,0,1-4.18,8.82,54.68,54.68,0,0,1-17.51,20.83,69.25,69.25,0,0,1-7.85,5c-27.38,13-64.38,9-86.45-11.4a69.35,69.35,0,0,1-6.11-7.47,64.89,64.89,0,0,1-5.57-9.5A55.78,55.78,0,0,1,272,585.39,75.67,75.67,0,0,1,271.4,576.82Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M269.77,558.47c-1-28.36,18-52.36,43.28-63.56a62.23,62.23,0,0,1,8.15-2.7,70,70,0,0,1,42.22,2.68,71.54,71.54,0,0,1,8.92,4.16c29.53,15.89,42.79,53.25,31.36,83.46a59.6,59.6,0,0,1-4.18,8.82,63.85,63.85,0,0,1-4.71,7.8,64.78,64.78,0,0,1-5.68,7,63.08,63.08,0,0,1-7.12,6.07,68.37,68.37,0,0,1-7.85,5c-27.38,13-64.38,9-86.44-11.4a67.24,67.24,0,0,1-6.11-7.47,65,65,0,0,1-5.58-9.5A55.59,55.59,0,0,1,270.32,567,71.3,71.3,0,0,1,269.77,558.47Z",
    fill: colors.white,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M374,551.07v5.67a2,2,0,0,0-.13.39,21.27,21.27,0,0,1-1.92,6.53,44.36,44.36,0,0,1-8.59,12.09,120.43,120.43,0,0,1-24.25,18.93.87.87,0,0,1-1.06,0,128.66,128.66,0,0,1-19.86-14.63,61.62,61.62,0,0,1-11.37-13.31,24,24,0,0,1-3.08-18.5c3.22-14.32,21-20.17,32.15-10.57.95.81,1.79,1.76,2.74,2.7a2.75,2.75,0,0,1,.19-.28c5-5.56,11.1-8,18.44-6.81,8.05,1.35,13.32,6.16,15.89,13.9A36.94,36.94,0,0,1,374,551.07Z",
    fill: "#e2495b"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M583.89,568.76c.43-15.13,6.67-30.09,15.1-41.33a72.82,72.82,0,0,1,7.12-8.53A69.73,69.73,0,0,1,696.28,510a73.27,73.27,0,0,1,6.53,5.13c27,21.45,30.12,63.14,15.32,93.23a62.31,62.31,0,0,1-4.78,6.86,72.09,72.09,0,0,1-7.58,8.13c-20.27,17.83-51.81,22.13-77.41,12.42a71.34,71.34,0,0,1-10.55-5c-17.9-10.78-30.37-31.09-33.43-52.23A62.93,62.93,0,0,1,583.89,568.76Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M589.38,557.26c.42-14.15,6.42-28.15,14.52-38.66a70.56,70.56,0,0,1,6.86-8,68.55,68.55,0,0,1,86.77-8.37,69.81,69.81,0,0,1,6.28,4.79c26,20.07,29,59.07,14.74,87.22a56.5,56.5,0,0,1-4.6,6.42,68.91,68.91,0,0,1-7.29,7.6C687.15,625,656.8,629,632.17,619.9A68.79,68.79,0,0,1,622,615.19c-17.22-10.08-29.22-29.08-32.17-48.85A56.34,56.34,0,0,1,589.38,557.26Z",
    fill: colors.white,
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M695.19,549.32v5.6a2.91,2.91,0,0,0-.12.39,21,21,0,0,1-1.89,6.44,43.87,43.87,0,0,1-8.49,11.94,118.43,118.43,0,0,1-24,18.69.87.87,0,0,1-1,0,127,127,0,0,1-19.61-14.44,61.31,61.31,0,0,1-11.22-13.14,23.82,23.82,0,0,1-3-18.27c3.18-14.14,20.79-19.91,31.75-10.44.94.8,1.77,1.74,2.7,2.67.06-.1.13-.19.19-.28,4.9-5.49,11-7.94,18.21-6.72,8,1.33,13.16,6.08,15.69,13.72A33.67,33.67,0,0,1,695.19,549.32Z",
    fill: "#e2495b"
  }), withLashes && React__default.createElement(React__default.Fragment, null, React__default.createElement(LeftLash, null), React__default.createElement(RightLash, null)));
};

var OpenMouth = function OpenMouth() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Circle, {
    cx: "499.7",
    cy: "642.93",
    r: "53.95",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M491.21,663.39c-14.07-3.37-27.62,1-33.45,9.87a48.46,48.46,0,0,0,52.82,20.14,49.33,49.33,0,0,0,6-2C517.93,679.39,507.08,667.18,491.21,663.39Z",
    fill: colors.tongue
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M478.65,652l.8,0h.65c.43,0,.84,0,1.25.06a17.92,17.92,0,0,1,2.44.35,21,21,0,0,1,4.74,1.53,18.15,18.15,0,0,1,7.78,6.65,17.17,17.17,0,0,1,2.77,9.28,14.75,14.75,0,0,1-2.69,8.47c-1.3-2.76-2.24-5.2-3.31-7.29a24,24,0,0,0-1.62-2.87,12.38,12.38,0,0,0-1.95-2.21,13,13,0,0,0-4.82-2.66,24.72,24.72,0,0,0-2.85-.69c-.49-.07-1-.16-1.47-.22l-.73-.07-.33,0c-.08,0-.26,0-.19,0Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "499.7",
    cy: "642.93",
    r: "53.95",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }));
};

var SeriousMouth = function SeriousMouth() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.Line, {
    x1: "446.66",
    y1: "606.02",
    x2: "542.53",
    y2: "606.02",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  });
};

var ReactGraphic = function ReactGraphic() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M566.88,917.83c0-8.86-11.1-17.26-28.11-22.47,3.93-17.34,2.18-31.13-5.51-35.55a9.56,9.56,0,0,0-6.08-1.56c-8,.13-17.31,5.35-27.23,14.62C490,863.65,479,858.2,472.71,858.36c-3.16.09-4.37.52-6.16,1.56-7.67,4.41-9.38,18.18-5.43,35.47-17,5.23-28,13.61-28,22.44s11.1,17.26,28.11,22.47c-3.93,17.34-2.18,31.13,5.51,35.55a11.93,11.93,0,0,0,6.13,1.53c7.5,0,17.31-5.35,27.24-14.62,9.92,9.22,19.74,14.51,27.24,14.51a12.11,12.11,0,0,0,6.16-1.53c7.66-4.42,9.38-18.19,5.42-35.47C555.84,935.06,566.88,926.66,566.88,917.83Zm-39.72-53.49v0a6.32,6.32,0,0,1,3.1.71c3.71,2.13,5.32,10.23,4.07,20.64-.3,2.56-.79,5.26-1.39,8a133,133,0,0,0-17.32-3,132.78,132.78,0,0,0-11.34-13.63C513.16,868.87,521.49,864.35,527.16,864.34Zm-51.32,67.45q1.92,3.27,3.93,6.38c-3.87-.57-7.61-1.28-11.18-2.15,1-3.52,2.26-7.15,3.68-10.77C473.39,927.43,474.56,929.61,475.84,931.79Zm-7.33-32.15c3.57-.84,7.33-1.58,11.23-2.15-1.33,2.1-2.67,4.25-3.92,6.46s-2.43,4.36-3.55,6.54A114.8,114.8,0,0,1,468.51,899.64Zm6.95,18.27c1.69-3.65,3.6-7.31,5.65-10.88s4.3-7.17,6.57-10.41c4.06-.36,8.18-.55,12.32-.55s8.23.19,12.27.52c2.26,3.24,4.47,6.71,6.6,10.36s4,7.2,5.67,10.85c-1.72,3.66-3.6,7.31-5.65,10.88s-4.3,7.17-6.57,10.42c-4.06.35-8.18.54-12.32.54s-8.23-.19-12.27-.52c-2.26-3.24-4.47-6.7-6.6-10.36S477.18,921.56,475.46,917.91Zm48.7,13.8c1.25-2.18,2.42-4.39,3.54-6.57A114.8,114.8,0,0,1,531.46,936c-3.57.87-7.33,1.61-11.23,2.18C521.57,936.07,522.9,933.92,524.16,931.71Zm0-27.84c-1.25-2.18-2.59-4.31-3.93-6.38q5.82.85,11.18,2.15c-1,3.52-2.26,7.15-3.68,10.77C526.58,908.23,525.41,906.05,524.13,903.87ZM507.5,890.15c-2.46-.1-5-.19-7.5-.19s-5.1.06-7.58.19a105.71,105.71,0,0,1,7.5-8.72A114.37,114.37,0,0,1,507.5,890.15Zm-37.93-25a6.08,6.08,0,0,1,3.14-.71v0c5.64,0,14,4.5,22.9,12.71a129.42,129.42,0,0,0-11.26,13.6,129.07,129.07,0,0,0-17.34,3c-.63-2.72-1.09-5.37-1.42-7.9C464.31,875.43,465.89,867.33,469.57,865.18Zm-6.87,69.23c-2.7-.85-5.26-1.78-7.63-2.78-9.66-4.12-15.9-9.52-15.9-13.8s6.24-9.71,15.9-13.8c2.34-1,4.9-1.91,7.55-2.75a130.83,130.83,0,0,0,6.13,16.6A130.68,130.68,0,0,0,462.7,934.41Zm10.12,36.91a6.43,6.43,0,0,1-3.08-.73c-3.71-2.13-5.32-10.23-4.07-20.64.3-2.57.79-5.26,1.39-8a131.33,131.33,0,0,0,17.32,3,131.87,131.87,0,0,0,11.34,13.64C486.83,966.8,478.49,971.32,472.82,971.32Zm27.23-17.09a114.59,114.59,0,0,1-7.58-8.73c2.46.11,5,.19,7.5.19s5.1-.05,7.58-.19A105.91,105.91,0,0,1,500.05,954.23Zm30.38,16.25a6.08,6.08,0,0,1-3.14.71c-5.64,0-14-4.5-22.9-12.71a129.42,129.42,0,0,0,11.26-13.6,129.07,129.07,0,0,0,17.34-3,75.63,75.63,0,0,1,1.42,7.93C535.69,960.23,534.11,968.32,530.43,970.48Zm14.48-38.85c-2.35,1-4.91,1.9-7.56,2.75a131.52,131.52,0,0,0-6.13-16.61,129,129,0,0,0,6-16.52c2.7.85,5.26,1.77,7.66,2.78,9.66,4.12,15.9,9.52,15.9,13.8S554.56,927.54,544.91,931.63Z",
    stroke: colors.white,
    strokeWidth: "16px"
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "499.97",
    cy: "917.83",
    r: "12.46",
    stroke: colors.white,
    strokeWidth: "24px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M566.88,917.83c0-8.86-11.1-17.26-28.11-22.47,3.93-17.34,2.18-31.13-5.51-35.55a9.56,9.56,0,0,0-6.08-1.56c-8,.13-17.31,5.35-27.23,14.62C490,863.65,479,858.2,472.71,858.36c-3.16.09-4.37.52-6.16,1.56-7.67,4.41-9.38,18.18-5.43,35.47-17,5.23-28,13.61-28,22.44s11.1,17.26,28.11,22.47c-3.93,17.34-2.18,31.13,5.51,35.55a11.93,11.93,0,0,0,6.13,1.53c7.5,0,17.31-5.35,27.24-14.62,9.92,9.22,19.74,14.51,27.24,14.51a12.11,12.11,0,0,0,6.16-1.53c7.66-4.42,9.38-18.19,5.42-35.47C555.84,935.06,566.88,926.66,566.88,917.83Zm-39.72-53.49v0a6.32,6.32,0,0,1,3.1.71c3.71,2.13,5.32,10.23,4.07,20.64-.3,2.56-.79,5.26-1.39,8a133,133,0,0,0-17.32-3,132.78,132.78,0,0,0-11.34-13.63C513.16,868.87,521.49,864.35,527.16,864.34Zm-51.32,67.45q1.92,3.27,3.93,6.38c-3.87-.57-7.61-1.28-11.18-2.15,1-3.52,2.26-7.15,3.68-10.77C473.39,927.43,474.56,929.61,475.84,931.79Zm-7.33-32.15c3.57-.84,7.33-1.58,11.23-2.15-1.33,2.1-2.67,4.25-3.92,6.46s-2.43,4.36-3.55,6.54A114.8,114.8,0,0,1,468.51,899.64Zm6.95,18.27c1.69-3.65,3.6-7.31,5.65-10.88s4.3-7.17,6.57-10.41c4.06-.36,8.18-.55,12.32-.55s8.23.19,12.27.52c2.26,3.24,4.47,6.71,6.6,10.36s4,7.2,5.67,10.85c-1.72,3.66-3.6,7.31-5.65,10.88s-4.3,7.17-6.57,10.42c-4.06.35-8.18.54-12.32.54s-8.23-.19-12.27-.52c-2.26-3.24-4.47-6.7-6.6-10.36S477.18,921.56,475.46,917.91Zm48.7,13.8c1.25-2.18,2.42-4.39,3.54-6.57A114.8,114.8,0,0,1,531.46,936c-3.57.87-7.33,1.61-11.23,2.18C521.57,936.07,522.9,933.92,524.16,931.71Zm0-27.84c-1.25-2.18-2.59-4.31-3.93-6.38q5.82.85,11.18,2.15c-1,3.52-2.26,7.15-3.68,10.77C526.58,908.23,525.41,906.05,524.13,903.87ZM507.5,890.15c-2.46-.1-5-.19-7.5-.19s-5.1.06-7.58.19a105.71,105.71,0,0,1,7.5-8.72A114.37,114.37,0,0,1,507.5,890.15Zm-37.93-25a6.08,6.08,0,0,1,3.14-.71v0c5.64,0,14,4.5,22.9,12.71a129.42,129.42,0,0,0-11.26,13.6,129.07,129.07,0,0,0-17.34,3c-.63-2.72-1.09-5.37-1.42-7.9C464.31,875.43,465.89,867.33,469.57,865.18Zm-6.87,69.23c-2.7-.85-5.26-1.78-7.63-2.78-9.66-4.12-15.9-9.52-15.9-13.8s6.24-9.71,15.9-13.8c2.34-1,4.9-1.91,7.55-2.75a130.83,130.83,0,0,0,6.13,16.6A130.68,130.68,0,0,0,462.7,934.41Zm10.12,36.91a6.43,6.43,0,0,1-3.08-.73c-3.71-2.13-5.32-10.23-4.07-20.64.3-2.57.79-5.26,1.39-8a131.33,131.33,0,0,0,17.32,3,131.87,131.87,0,0,0,11.34,13.64C486.83,966.8,478.49,971.32,472.82,971.32Zm27.23-17.09a114.59,114.59,0,0,1-7.58-8.73c2.46.11,5,.19,7.5.19s5.1-.05,7.58-.19A105.91,105.91,0,0,1,500.05,954.23Zm30.38,16.25a6.08,6.08,0,0,1-3.14.71c-5.64,0-14-4.5-22.9-12.71a129.42,129.42,0,0,0,11.26-13.6,129.07,129.07,0,0,0,17.34-3,75.63,75.63,0,0,1,1.42,7.93C535.69,960.23,534.11,968.32,530.43,970.48Zm14.48-38.85c-2.35,1-4.91,1.9-7.56,2.75a131.52,131.52,0,0,0-6.13-16.61,129,129,0,0,0,6-16.52c2.7.85,5.26,1.77,7.66,2.78,9.66,4.12,15.9,9.52,15.9,13.8S554.56,927.54,544.91,931.63Z",
    fill: "#61dafb"
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "499.97",
    cy: "917.83",
    r: "12.46",
    fill: "#61dafb"
  }));
};

var TinyGlasses = function TinyGlasses() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Circle, {
    cx: "382.91",
    cy: "594.66",
    r: "33.84",
    fill: colors.white,
    opacity: 0.2
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M375.87,631l43.31-41.74a147.47,147.47,0,0,0-7.57-12.9l-45.87,44.21C367.64,621.9,373.72,630.08,375.87,631Z",
    fill: colors.white,
    opacity: 0.4
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "382.91",
    cy: "594.66",
    r: "33.84",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M378,580.47c1.22,3.83-3.5,6.78-7,7.37-3.54,0-5.9-2.36-7.08-5.31-.59-2.95,0-5.9,2.36-7.67,2.95-1.18,7.08-2.36,9.7.67A6.85,6.85,0,0,1,378,580.47Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M384.32,578.21a2.29,2.29,0,0,1-4.49.19c0-1.77.59-2.36,2.27-2.42a2.22,2.22,0,0,1,2.22,2.22Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "615.2",
    cy: "594.66",
    r: "33.84",
    fill: colors.white,
    opacity: 0.2
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M610.12,628.11l38.54-38.54c-.21-1.37-5.91-8.1-6.29-9.44l-41.72,41.74C602,622.24,608.75,627.91,610.12,628.11Z",
    fill: colors.white,
    opacity: 0.4
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "615.2",
    cy: "594.66",
    r: "33.84",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M607.36,579.91c1,3.25-3,5.75-6,6.25-3,0-5-2-6-4.5-.5-2.5,0-5,2-6.5,2.5-1,6-2,8.23.57A5.85,5.85,0,0,1,607.36,579.91Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M612.7,578a1.94,1.94,0,0,1-3.8.16c0-1.5.5-2,1.92-2A1.88,1.88,0,0,1,612.7,578Z",
    fill: colors.white
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M416.74,594.66q83.68-30,164.63,0",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M615.2,634.5A39.9,39.9,0,0,1,575.6,599c-50-17.65-101.46-17.64-153.1,0a39.81,39.81,0,0,1-50.92,33.84,38,38,0,0,0,54.51-29.91c49.22-16.86,98.28-16.88,145.93,0a38,38,0,0,0,54.51,30A40,40,0,0,1,615.2,634.5Z",
    opacity: 0.15
  }));
};

var VNeck = function VNeck(_ref) {
  var color = _ref.color,
      _ref$graphic = _ref.graphic,
      Graphic = _ref$graphic === void 0 ? Noop : _ref$graphic;

  var _useTheme = useTheme(),
      colors = _useTheme.colors,
      skin = _useTheme.skin;

  var _colors$clothing$colo = colors.clothing[color],
      base = _colors$clothing$colo.base,
      shadow = _colors$clothing$colo.shadow;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M680.7,905.78c.2-37.1-1.21-70.07-7.74-95.39-10.08-25.35-28.18-40.47-60.12-40.47l22.85,134.47S658.2,914.68,680.7,905.78Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M689.3,895.23a20.28,20.28,0,0,1-3.69,2.42",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M329,809.32c-6.82,25.57-8,59.13-7.74,97,19.9,8.55,50.43-2.15,50.43-2.15L389,771.89C358.14,771.89,339.74,785.79,329,809.32Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M616.66,758.16l-38.44.1c0,53.72-75.33,111.14-75.33,111.14s-80.8-60.58-80.8-111.14l-38.66-.1a13.28,13.28,0,0,0-13.28,13.27v284.69a13.28,13.28,0,0,0,13.28,13.27H622.36a13.27,13.27,0,0,0,13.27-13.27V778C635.63,765.82,629.75,758.16,616.66,758.16Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M612.84,758.16c63.54,0,73.4,56,73.9,133.16-18.59,11.62-48.91,1.32-48.91,1.32Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M635.63,831.31,612.84,869.4l11.39,130h11.6V893.78l17.28,2.89C647.49,824.5,635.63,831.31,635.63,831.31Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M389,758.16c-61.78,0-75.82,53.79-76.85,127.66,19,19.85,57.95,4.58,57.95,4.58Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M370.12,831.31V890.4l-17.31,4.3C358.48,824.63,370.12,831.31,370.12,831.31Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M612.84,758.16c67.42,0,78.45,56.28,78.9,133.78-26.2,12.42-53.91.7-53.91.7",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M389,758.16c-66.79,0-80.08,54.69-80.75,130.71,20.59,14.79,61.85,1.53,61.85,1.53",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M383.43,1069.39H500c-109.19,0-100.91-231.14-129.89-231.14v217.87A13.28,13.28,0,0,0,383.43,1069.39Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M364.15,860.29c-.19-3.67-.11-7.35.06-11s.47-7.34.85-11c.2-1.83.41-3.67.65-5.51s.49-3.67.85-5.5a44.05,44.05,0,0,1,3.59-11,44.05,44.05,0,0,1,3.59,11c.36,1.83.62,3.67.85,5.5s.45,3.68.65,5.51q.58,5.52.86,11c.16,3.67.24,7.35,0,11Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M635.63,869.4v8c.26,34,.26,69,0,102.76,0,2.87,0,5.72,0,8.53v67.41a13.27,13.27,0,0,1-13.27,13.27H383.43a13.28,13.28,0,0,1-13.28-13.27V990.3c-.26-34.86-.26-69.86,0-105.3V860.29",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M629.63,869.4c-.19-4.18-.1-8.36.06-12.53s.47-8.36.86-12.53c.2-2.09.4-4.18.64-6.27s.49-4.18.86-6.27a54.83,54.83,0,0,1,3.58-12.53,54.37,54.37,0,0,1,3.59,12.53c.36,2.09.63,4.18.85,6.27s.45,4.18.65,6.27c.39,4.17.69,8.35.85,12.53s.26,8.35.06,12.53Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M383.43,758.26l233.23-.1",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M310.72,891.94a24.84,24.84,0,0,0,3.68,2.76",
    fill: "none",
    stroke: colors.outline,
    strokeLinecap: "square",
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M677.59,882.13a20.25,20.25,0,0,1-6.75,2.52,34.91,34.91,0,0,1-7.21.64,39.94,39.94,0,0,1-7.17-.78c-1.18-.22-2.34-.57-3.49-.87s-2.28-.78-3.38-1.24c1.21,0,2.39.17,3.56.27l3.52.29c1.17,0,2.33.2,3.5.21s2.33.11,3.49.12c2.32.05,4.64,0,7-.18A50.81,50.81,0,0,0,677.59,882.13Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M578.22,758.26c0,53.72-75.33,111.14-75.33,111.14s-80.8-60.58-80.8-111.14",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "12px"
  }), React__default.createElement(reactNativeSvg.G, {
    transform: "translate(0 30)"
  }, React__default.createElement(Graphic, null)));
};

var GraphQLGraphic = function GraphQLGraphic() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M551.55,939.73a11.33,11.33,0,0,0-3-1.2V907.92a11.25,11.25,0,0,0,3.06-1.22,11.49,11.49,0,1,0-14.08-17.84L511,873.57a11.48,11.48,0,1,0-22.48-3.28,11.68,11.68,0,0,0,.47,3.26l-26.5,15.3a11.65,11.65,0,0,0-2.59-2.05,11.49,11.49,0,1,0-11.48,19.9,11.25,11.25,0,0,0,3.06,1.22v30.6a11.71,11.71,0,0,0-3,1.21,11.49,11.49,0,1,0,11.48,19.9,11.65,11.65,0,0,0,2.57-2L489,972.9a11.25,11.25,0,0,0-.47,3.25,11.48,11.48,0,1,0,23,0,11.68,11.68,0,0,0-.58-3.62l26.33-15.2a11.24,11.24,0,0,0,2.84,2.3,11.49,11.49,0,0,0,11.48-19.9ZM465.35,947a11.36,11.36,0,0,0-1.21-3,11.59,11.59,0,0,0-2-2.56l34.68-60.06a11.67,11.67,0,0,0,3.2.45,11.37,11.37,0,0,0,3.21-.46l34.67,60.06a11.45,11.45,0,0,0-3.23,5.6Zm69.45-53.36a11.46,11.46,0,0,0,8.26,14.28v30.65l-.44.11-34.68-60.07.3-.3Zm-43.06-15.34.33.32-34.68,60.07-.45-.12V907.89a11.45,11.45,0,0,0,8.25-14.29Zm16.75,90.14a11.5,11.5,0,0,0-16.76-.23l-26.51-15.31.12-.44h69.32c.06.25.13.51.21.75Z",
    stroke: colors.white,
    strokeWidth: "16px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M551.55,939.73a11.33,11.33,0,0,0-3-1.2V907.92a11.25,11.25,0,0,0,3.06-1.22,11.49,11.49,0,1,0-14.08-17.84L511,873.57a11.48,11.48,0,1,0-22.48-3.28,11.68,11.68,0,0,0,.47,3.26l-26.5,15.3a11.65,11.65,0,0,0-2.59-2.05,11.49,11.49,0,1,0-11.48,19.9,11.25,11.25,0,0,0,3.06,1.22v30.6a11.71,11.71,0,0,0-3,1.21,11.49,11.49,0,1,0,11.48,19.9,11.65,11.65,0,0,0,2.57-2L489,972.9a11.25,11.25,0,0,0-.47,3.25,11.48,11.48,0,1,0,23,0,11.68,11.68,0,0,0-.58-3.62l26.33-15.2a11.24,11.24,0,0,0,2.84,2.3,11.49,11.49,0,0,0,11.48-19.9ZM465.35,947a11.36,11.36,0,0,0-1.21-3,11.59,11.59,0,0,0-2-2.56l34.68-60.06a11.67,11.67,0,0,0,3.2.45,11.37,11.37,0,0,0,3.21-.46l34.67,60.06a11.45,11.45,0,0,0-3.23,5.6Zm69.45-53.36a11.46,11.46,0,0,0,8.26,14.28v30.65l-.44.11-34.68-60.07.3-.3Zm-43.06-15.34.33.32-34.68,60.07-.45-.12V907.89a11.45,11.45,0,0,0,8.25-14.29Zm16.75,90.14a11.5,11.5,0,0,0-16.76-.23l-26.51-15.31.12-.44h69.32c.06.25.13.51.21.75Z",
    fill: "#e535ab"
  }));
};

var Tongue = function Tongue() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M443.14,621.86c0-18.9,113.72-16.06,113.72,0a56.86,56.86,0,0,1-113.72,0Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M443.14,621.86c0-18.9,113.72-16.06,113.72,0a56.86,56.86,0,0,1-113.72,0Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "6px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M532.49,646.6c0-8.06-14.55-14.6-32.49-14.6s-32.49,6.54-32.49,14.6h0v44.34c0,14.41,14.55,26.08,32.49,26.08s32.49-11.67,32.49-26.08V646.61Z",
    fill: colors.tongue
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M532.49,646.6c0-8.06-14.55-14.6-32.49-14.6s-32.49,6.54-32.49,14.6h0v44.34c0,14.41,14.55,26.08,32.49,26.08s32.49-11.67,32.49-26.08V646.61Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: 10,
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M479.31,626.6l.91-.21.76-.14c.49-.08,1-.14,1.46-.18a21.42,21.42,0,0,1,2.89-.1,25,25,0,0,1,5.79.81,21.39,21.39,0,0,1,10.34,6.11A20.07,20.07,0,0,1,506.54,643a17.19,17.19,0,0,1-1.37,10.35c-2.08-2.93-3.66-5.55-5.32-7.76a27.26,27.26,0,0,0-2.46-3,14.09,14.09,0,0,0-2.69-2.16,15.31,15.31,0,0,0-6.11-2.08,25.67,25.67,0,0,0-3.43-.22c-.59,0-1.18,0-1.76,0l-.85.06-.4,0c-.09,0-.29,0-.22,0Z",
    fill: colors.outline
  }));
};

var FaceMask = function FaceMask() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M651.16 719.81C656.98 715.803 662.627 711.573 668.1 707.12C695.227 685.146 717.73 658.082 734.371 627.5C561.069 558.7 446.39 556.5 265.626 627.5C276.216 646.947 289.274 665.143 304.61 681.6C309.044 686.367 313.64 690.96 318.4 695.38C323.432 700.11 328.706 704.576 334.2 708.76C339.667 712.92 345.31 716.793 351.13 720.38C374.68 733.43 400.17 742.38 426.5 748.18C433.09 749.63 439.73 750.89 446.39 751.89C515 758 591 758 651.16 719.81Z",
    fill: "#C3F4FF"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M440.5 606C473 600.5 523.5 600.5 556.5 606M668.1 707.12C662.627 711.573 656.98 715.803 651.16 719.81C591 758 515 758 446.39 751.89C439.73 750.89 433.09 749.63 426.5 748.18C400.17 742.38 374.68 733.43 351.13 720.38C345.31 716.793 339.667 712.92 334.2 708.76C328.706 704.576 323.432 700.11 318.4 695.38C313.64 690.96 309.044 686.367 304.61 681.6C289.274 665.143 276.216 646.947 265.626 627.5C446.39 556.5 561.069 558.7 734.371 627.5C717.73 658.082 695.227 685.146 668.1 707.12Z",
    fill: "#C3F4FF",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var HoopEarrings = function HoopEarrings() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M255 592C233.5 592 238 754.5 253.5 754.5C263.49 754.5 267.457 686.993 265.266 639L263 635C261.667 669.667 257.9 739 253.5 739C245 707.5 248 602.5 258.5 602L255 592Z",
    fill: "#FFC227",
    stroke: colors.outline,
    strokeWidth: "2"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M745 592.5C766.5 592.5 761.851 754.5 746.351 754.5C736.361 754.5 732.394 686.993 734.586 639L736.851 635C738.185 669.667 741.951 739 746.351 739C754.851 707.5 751.5 602.5 741 602L745 592.5Z",
    fill: "#FFC227",
    stroke: colors.outline,
    strokeWidth: "2"
  }));
};

var Hoodie = function Hoodie(_ref) {
  var color = _ref.color;

  var _useTheme = useTheme(),
      colors = _useTheme.colors,
      skin = _useTheme.skin;

  var _colors$clothing$colo = colors.clothing[color],
      base = _colors$clothing$colo.base,
      shadow = _colors$clothing$colo.shadow;
  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M306 889.71C306.37 842.98 311.55 804.31 331 781.44C339.861 771.03 351.682 763.897 367.36 760.777V1009.84H306V889.71Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M306 889.71C306.37 842.98 311.55 804.31 331 781.44C339.861 771.03 351.682 763.897 367.36 760.777V1009.84H306V889.71Z",
    fill: "black",
    fillOpacity: "0.2"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M306 889.71C306.37 842.98 311.55 804.31 331 781.44C339.861 771.03 351.682 763.897 367.36 760.777V1009.84H306V889.71Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M688.36 889.933C687.99 843.203 682.81 804.533 663.36 781.663C654.499 771.253 642.678 764.12 627 761V1010.06H688.36V889.933Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M688.36 889.933C687.99 843.203 682.81 804.533 663.36 781.663C654.499 771.253 642.678 764.12 627 761V1010.06H688.36V889.933Z",
    fill: "black",
    fillOpacity: "0.2"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M688.36 889.933C687.99 843.203 682.81 804.533 663.36 781.663C654.499 771.253 642.678 764.12 627 761V1010.06H688.36V889.933Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M368.02 761.002L625.995 760.94C626.547 760.94 626.995 761.388 626.995 761.94V1010L367.02 1010.07V762.002C367.02 761.45 367.468 761.002 368.02 761.002Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M644.53 1045.17L648.11 907.591C642.49 835.361 630.63 842.171 630.63 842.171V1058.15L644.53 1045.17Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M644.53 1045.17L648.11 907.591C642.49 835.361 630.63 842.171 630.63 842.171V1058.15L644.53 1045.17Z",
    fill: "black",
    fillOpacity: "0.2"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M630.631 842.171C630.631 842.171 607.841 926.711 611.321 1076.17L630.631 1058.15V842.171Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M365.12 842.171L364.62 1019.86L351.27 1020.76C348.3 871.711 365.12 842.171 365.12 842.171Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M365.12 842.171L364.62 1019.86L351.27 1020.76C348.3 871.711 365.12 842.171 365.12 842.171Z",
    fill: "black",
    fillOpacity: "0.2"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M378.43 1080.25H495C385.81 1080.25 394.09 849.111 365.11 849.111V1066.98C365.112 1068.73 365.457 1070.46 366.128 1072.07C366.798 1073.68 367.78 1075.15 369.018 1076.38C370.255 1077.61 371.723 1078.59 373.338 1079.25C374.954 1079.92 376.684 1080.26 378.43 1080.25Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M368.025 761L626 760.938C626.552 760.937 627 761.385 627 761.938V1010L367.025 1010.06V762C367.025 761.447 367.472 761 368.025 761Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M536.5 939H458C458 958 443 974 423 974V1010H571.5V974C550.3 974 536.5 959 536.5 939Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M536.5 939H458C458 958 443 974 423 974V1010H571.5V974C550.3 974 536.5 959 536.5 939Z",
    fill: "black",
    fillOpacity: "0.2"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M536.5 939H458C458 958 443 974 423 974V1010H571.5V974C550.3 974 536.5 959 536.5 939Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeLinejoin: "round"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M478 814V863.5",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeLinecap: "round"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M527 814V863.5",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeLinecap: "round"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M651.092 719.69C656.912 715.683 662.558 711.453 668.032 707C692 766.5 598.931 783.88 531.931 794.88H470.431C403.431 783.88 308 766.5 332.007 707L334.132 708.64C339.598 712.8 345.242 716.673 351.062 720.26C374.612 733.31 400.102 742.26 426.432 748.06C433.022 749.51 439.662 750.77 446.322 751.77C514.932 757.88 590.932 757.88 651.092 719.69Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M668.101 707.12L673.703 704.973L670.74 697.238L664.314 702.466L668.101 707.12ZM650.861 720L654.076 725.066L654.171 725.006L654.263 724.942L650.861 720ZM446.391 751.89L445.5 757.824L445.678 757.85L445.858 757.866L446.391 751.89ZM426.501 748.18L425.21 754.04L425.211 754.04L426.501 748.18ZM334.201 708.76L330.534 713.509L330.55 713.522L330.567 713.535L334.201 708.76ZM531.028 789.079C527.758 789.616 525.543 792.702 526.08 795.972C526.616 799.242 529.702 801.458 532.972 800.921L531.028 789.079ZM332.076 707.12L335.743 702.371L329.486 697.54L326.516 704.866L332.076 707.12ZM469.528 800.921C472.798 801.458 475.884 799.242 476.421 795.972C476.958 792.702 474.742 789.616 471.472 789.079L469.528 800.921ZM664.314 702.466C658.977 706.809 653.16 711.133 647.458 715.058L654.263 724.942C660.202 720.854 666.278 716.338 671.887 711.774L664.314 702.466ZM647.645 714.934C589.329 751.954 515.468 752.018 446.923 745.914L445.858 757.866C514.533 763.982 592.073 764.426 654.076 725.066L647.645 714.934ZM447.281 745.957C440.773 744.979 434.267 743.745 427.79 742.32L425.211 754.04C431.914 755.515 438.688 756.801 445.5 757.824L447.281 745.957ZM427.791 742.32C401.928 736.623 377.001 727.856 354.039 715.132L348.222 725.628C372.361 739.004 398.413 748.137 425.21 754.04L427.791 742.32ZM354.278 715.272C348.626 711.789 343.145 708.027 337.834 703.985L330.567 713.535C336.189 717.813 341.995 721.798 347.983 725.488L354.278 715.272ZM662.498 709.267C667.916 723.408 666.499 733.998 661.244 742.453C655.761 751.274 645.555 758.654 631.69 764.85C603.92 777.26 564.807 783.534 531.028 789.079L532.972 800.921C566.194 795.466 607.081 788.99 636.586 775.805C651.359 769.204 664.109 760.574 671.435 748.788C678.989 736.637 680.235 722.022 673.703 704.973L662.498 709.267ZM326.516 704.866C319.847 721.314 321.292 735.635 329.097 747.628C336.633 759.207 349.638 767.901 364.67 774.673C394.757 788.227 436.197 795.448 469.528 800.921L471.472 789.079C437.803 783.552 397.993 776.523 369.599 763.732C355.391 757.331 344.848 749.829 339.155 741.082C333.732 732.75 332.268 722.616 337.637 709.374L326.516 704.866ZM347.95 725.468C407.898 762.942 454.235 782.254 501.087 782.155C547.933 782.056 594.212 762.553 654.045 725.085L647.676 714.915C588.349 752.067 544.448 770.064 501.062 770.155C457.681 770.246 413.733 752.438 354.311 715.292L347.95 725.468ZM337.867 704.011L335.743 702.371L328.41 711.869L330.534 713.509L337.867 704.011Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M648.54 721.447C588.781 758.098 514.068 757.917 446.39 751.89C439.73 750.89 433.09 749.63 426.5 748.18C400.17 742.38 374.68 733.43 351.13 720.38C469.676 794.485 530.99 794.535 648.54 721.447Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M648.54 721.447C588.781 758.098 514.068 757.917 446.39 751.89C439.73 750.89 433.09 749.63 426.5 748.18C400.17 742.38 374.68 733.43 351.13 720.38C469.676 794.485 530.99 794.535 648.54 721.447ZM648.54 721.447C649.357 720.939 650.177 720.427 651 719.912C650.183 720.43 649.363 720.942 648.54 721.447Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }));
};

var DenimJacket = function DenimJacket(_ref) {
  var color = _ref.color;

  var _useTheme = useTheme(),
      colors = _useTheme.colors,
      skin = _useTheme.skin;

  var _colors$clothing$colo = colors.clothing[color],
      base = _colors$clothing$colo.base,
      shadow = _colors$clothing$colo.shadow;
  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M544.85 848.98L502.72 814.61L577.35 759.82H416.65L491.28 814.61L449.15 848.98L411.52 792.48V870.96H585.78V787.52L544.85 848.98Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M613.66 759.16L570.93 759.26C570.709 763.777 570.232 768.277 569.5 772.74C569.03 774.882 568.449 776.998 567.76 779.08C565.42 785.57 550.5 791.08 546.27 795.81C544.869 797.383 543.366 798.863 541.77 800.24L452.29 799.66C449.669 797.371 447.286 794.821 445.18 792.05C440.95 786.49 428.78 780.46 427.08 773.11C426.598 770.935 426.238 768.735 426 766.52C425.759 764.261 425.639 761.991 425.64 759.72L380.43 759.16C376.91 759.16 373.534 760.558 371.044 763.046C368.553 765.534 367.153 768.91 367.15 772.43V1057.12C367.153 1060.64 368.553 1064.02 371.044 1066.5C373.534 1068.99 376.91 1070.39 380.43 1070.39H619.36C622.88 1070.39 626.255 1068.99 628.744 1066.5C631.232 1064.01 632.63 1060.64 632.63 1057.12V779C632.63 766.82 626.75 759.16 613.66 759.16Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M609.84 759.16C673.38 759.16 698.36 802.55 688.74 1031.16C670 1037.86 632.83 1035.75 632.83 1035.75L609.84 759.16Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M448 818.5L496.51 800.93L545.09 818.5L508.03 786.5L464.14 787.33L448 818.5Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M632.63 832.31C632.63 832.31 609.84 916.85 613.32 1066.31L646.53 1035.31L650.11 897.73C644.49 825.5 632.63 832.31 632.63 832.31Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M386 759.16C324.22 759.16 297.12 815.61 305.25 1004.64C327.67 1014.55 361.44 1010.22 361.44 1010.22L386 759.16Z",
    fill: base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M303.94 958.49C304.113 972.13 304.517 986.623 305.15 1001.97C320.42 1002.7 348.84 1002.85 362.26 1001.97L366.44 959.16C355.67 957.9 320.66 957.49 303.94 958.49Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M367.12 832.31L366.62 1010L353.27 1010.9C350.3 861.85 367.12 832.31 367.12 832.31Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M609.84 759.16C677.26 759.16 688.29 815.44 688.74 892.94V1031.16C688.74 1031.16 638.74 1036.69 632.83 1035.75L632.73 893.64",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M386 759.16C360.27 759.16 342.48 767.28 330.29 781.6C310.84 804.47 305.66 843.14 305.29 889.87V1013.64C317.35 1016.96 366.65 1010 366.65 1010L367.14 891.4",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M369.6 1012.24C367.77 1014.85 295.83 1014.16 294.93 1012.24C294.03 1010.32 292.74 974.74 294.93 971.24C296.73 968.36 367.04 968.97 369.6 971.24C372.16 973.51 371.43 1009.63 369.6 1012.24Z",
    fill: shadow,
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M380.43 1070.39H497C387.81 1070.39 396.09 839.25 367.11 839.25V1057.12C367.112 1058.87 367.457 1060.6 368.128 1062.21C368.798 1063.82 369.78 1065.29 371.018 1066.52C372.255 1067.75 373.723 1068.73 375.338 1069.39C376.954 1070.06 378.684 1070.4 380.43 1070.39Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M342.5 770.5C361.3 792.5 366.767 840.193 367.15 861.29V886C366.89 921.44 366.89 956.44 367.15 991.3V1057.1C367.153 1060.62 368.553 1064 371.043 1066.48C373.533 1068.97 376.91 1070.37 380.43 1070.37H619.36C622.879 1070.37 626.255 1068.97 628.743 1066.48C631.232 1063.99 632.63 1060.62 632.63 1057.1V989.69C632.63 986.88 632.63 984.03 632.63 981.16C632.89 947.4 632.89 912.4 632.63 878.4V870.4C632.63 840 628.743 792.5 654 770.5",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M694.42 971.24C696.64 973.5 696.01 1009.63 694.42 1012.24C692.83 1014.85 630.42 1014.16 629.65 1012.24C628.88 1010.32 627.75 974.74 629.65 971.24C629.92 970.74 631.93 970.35 635.1 970.06",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M694.42 971.24C696.64 973.5 696.01 1009.63 694.42 1012.24C692.83 1014.85 630.42 1014.16 629.65 1012.24C628.88 1010.32 627.75 974.74 629.65 971.24C629.92 970.74 631.93 970.35 635.1 970.06",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M675.92 969.3C679.72 969.6 690.92 968.12 691.34 968.54Z",
    fill: "black"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M675.92 969.3C676.502 968.543 677.13 967.821 677.8 967.14C678.345 966.595 678.941 966.102 679.58 965.67C680.155 965.288 680.761 964.954 681.39 964.67C682 964.38 682.61 964.13 683.22 963.88C684.449 963.383 685.716 962.988 687.01 962.7C687.669 962.554 688.337 962.451 689.01 962.39C689.37 962.39 689.74 962.39 690.18 962.39C690.43 962.39 690.64 962.39 691 962.39C691.12 962.39 691.44 962.39 691.71 962.46H692.06L692.55 962.57L692.8 962.63L693 962.69L693.57 962.9C694.317 963.226 694.996 963.691 695.57 964.27L699.77 968.56L691.12 977.04L687 972.67C687.54 973.236 688.19 973.685 688.91 973.99C689.09 974.07 689.27 974.13 689.45 974.19H689.62L689.81 974.24C689.934 974.281 690.061 974.311 690.19 974.33H690.38C690.48 974.33 690.64 974.33 690.6 974.33C690.56 974.33 690.53 974.33 690.45 974.33H689.7C689.13 974.33 688.51 974.33 687.88 974.33C686.562 974.252 685.251 974.075 683.96 973.8C683.29 973.65 682.62 973.5 681.96 973.31C681.274 973.127 680.605 972.886 679.96 972.59C679.215 972.237 678.516 971.794 677.88 971.27C677.119 970.73 676.456 970.064 675.92 969.3V969.3Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M589.51 764.64L513.36 805.62L555.5 822.5L616.4 764.59L589.51 764.64Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M380.43 759.26L613.66 759.16",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M497.04 789V1070.39",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M416.62 759.8C416.62 759.8 459.89 769.53 491.28 785C476 810.21 449.15 812.5 449.15 812.5L389.72 759.77L416.62 759.8Z",
    fill: base,
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M577.38 759.8C577.38 759.8 538 771.39 502.72 785C512.72 805.28 544.85 812.5 544.85 812.5L604.28 759.75L577.38 759.8Z",
    fill: base,
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M635.1 970.06C642.61 969.35 656.61 969.17 669.1 969.39Z",
    fill: "black"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M634.54 964.08C637.468 963.667 640.425 963.51 643.38 963.61C646.28 963.68 649.16 963.91 652.04 964.26C653.47 964.44 654.91 964.63 656.34 964.87C657.784 965.081 659.215 965.365 660.63 965.72C663.65 966.455 666.524 967.696 669.13 969.39C666.486 970.986 663.613 972.167 660.61 972.89C659.2 973.25 657.79 973.52 656.38 973.75C654.97 973.98 653.57 974.22 652.17 974.44C649.37 974.86 646.58 975.22 643.82 975.44C641.06 975.66 638.3 975.94 635.66 975.98L629.66 976.08L628.66 964.95L634.54 964.08Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M424 907C424 909.209 425.791 911 428 911C430.209 911 432 909.209 432 907H424ZM432 922C432 919.791 430.209 918 428 918C425.791 918 424 919.791 424 922H432ZM424 933C424 935.209 425.791 937 428 937C430.209 937 432 935.209 432 933H424ZM432 948C432 945.791 430.209 944 428 944C425.791 944 424 945.791 424 948H432ZM424 959C424 961.209 425.791 963 428 963C430.209 963 432 961.209 432 959H424ZM432 974C432 971.791 430.209 970 428 970C425.791 970 424 971.791 424 974H432ZM424 985C424 987.209 425.791 989 428 989C430.209 989 432 987.209 432 985H424ZM405 849V882.5H413V849H405ZM405 882.5C405 887.718 406.822 892.566 411.002 896.021C415.071 899.384 420.86 901 428 901V893C421.94 893 418.229 891.616 416.098 889.854C414.078 888.184 413 885.782 413 882.5H405ZM428 901C434.989 901 441.06 899.721 445.489 896.63C450.149 893.379 452.5 888.464 452.5 882.5H444.5C444.5 886.136 443.201 888.471 440.911 890.07C438.39 891.829 434.211 893 428 893V901ZM452.5 882.5V849H444.5V882.5H452.5ZM405 849C405 861.099 414.882 872 428 872V864C419.518 864 413 856.901 413 849H405ZM428 872C440.648 872 452.5 862.053 452.5 849H444.5C444.5 856.947 436.952 864 428 864V872ZM413 849V846H405V849H413ZM452.5 849V846H444.5V849H452.5ZM447.5 841H410V849H447.5V841ZM424 897V907H432V897H424ZM424 922V933H432V922H424ZM424 948V959H432V948H424ZM424 974V985H432V974H424ZM452.5 846C452.5 843.239 450.261 841 447.5 841V849C445.843 849 444.5 847.657 444.5 846H452.5ZM413 846C413 847.657 411.657 849 410 849V841C407.239 841 405 843.239 405 846H413Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "428",
    cy: "858",
    r: "3",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "457",
    cy: "791",
    r: "5",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "537",
    cy: "791",
    r: "5",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M561 907C561 909.209 562.791 911 565 911C567.209 911 569 909.209 569 907H561ZM569 922C569 919.791 567.209 918 565 918C562.791 918 561 919.791 561 922H569ZM561 933C561 935.209 562.791 937 565 937C567.209 937 569 935.209 569 933H561ZM569 948C569 945.791 567.209 944 565 944C562.791 944 561 945.791 561 948H569ZM561 959C561 961.209 562.791 963 565 963C567.209 963 569 961.209 569 959H561ZM569 974C569 971.791 567.209 970 565 970C562.791 970 561 971.791 561 974H569ZM561 985C561 987.209 562.791 989 565 989C567.209 989 569 987.209 569 985H561ZM542 849V882.5H550V849H542ZM542 882.5C542 887.718 543.822 892.566 548.002 896.021C552.071 899.384 557.86 901 565 901V893C558.94 893 555.229 891.616 553.098 889.854C551.078 888.184 550 885.782 550 882.5H542ZM565 901C571.989 901 578.06 899.721 582.489 896.63C587.149 893.379 589.5 888.464 589.5 882.5H581.5C581.5 886.136 580.201 888.471 577.911 890.07C575.39 891.829 571.211 893 565 893V901ZM589.5 882.5V849H581.5V882.5H589.5ZM542 849C542 861.099 551.882 872 565 872V864C556.518 864 550 856.901 550 849H542ZM565 872C577.648 872 589.5 862.053 589.5 849H581.5C581.5 856.947 573.952 864 565 864V872ZM550 849V846H542V849H550ZM589.5 849V846H581.5V849H589.5ZM584.5 841H547V849H584.5V841ZM561 897V907H569V897H561ZM561 922V933H569V922H561ZM561 948V959H569V948H561ZM561 974V985H569V974H561ZM589.5 846C589.5 843.239 587.261 841 584.5 841V849C582.843 849 581.5 847.657 581.5 846H589.5ZM550 846C550 847.657 548.657 849 547 849V841C544.239 841 542 843.239 542 846H550Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "565",
    cy: "858",
    r: "3",
    fill: colors.outline
  }));
};

var Front$d = function Front(_ref) {
  var color = _ref.color,
      hasBreasts = _ref.hasBreasts;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var base = colors.clothing[color].base;

  if (!hasBreasts) {
    return null;
  }

  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M407 943.809L380.434 831.734C367.11 854.533 367.208 872.681 367.944 882.999C368.727 889.486 370.834 920.267 407 943.809Z",
    fill: colors.clothing.white.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M593.051 943.809L619.585 831.699C629.709 848.064 634.378 869.819 631.285 889.008C629.333 901.121 621.865 925.38 593.051 943.809Z",
    fill: colors.clothing.white.base
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M380.5 831.982H380.297C380.127 832.282 379.968 832.563 379.816 832.831C378.117 835.831 377.43 837.044 375.17 841.98H382.025V851.991H371.35C370.193 855.237 369.983 857.11 368.867 861.982H382V881.979H367.827C367.827 881.979 368.434 887.676 369.329 892.002H381.984V901.992H372.164C372.164 901.992 374.079 907.314 376.729 911.999H381.984V920.453C382.462 921.131 387.83 928.219 391.999 931.969V911.999H399.47L397.09 901.992H391.999V891.998L394.745 891.999L392.344 881.979H391.999V880.511L380.5 831.982ZM401.999 922.696V932.028H392.057C392.643 932.83 400.4 939.611 406.995 943.804L401.999 922.696Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M619.516 831.984H619.766C621.245 834.372 624.022 839.561 624.981 841.941L617.152 841.977L619.516 831.984Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M614.781 851.992H628.734C629.806 855.029 631.108 861.065 631.191 861.979H612.418L614.781 851.992Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M600.578 912.004H602.028V932.032H595.848L593.498 941.947H595.793C600.734 938.443 605.701 934.735 612.043 927.927V911.991H623.354C625.681 907.765 627.341 903.552 627.88 901.973H612.043V891.981H630.719C631.235 890.029 631.898 885.655 632.267 881.963H612.043V863.531L600.578 912.004Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M392 912.003H381.985V901.996H392V912.003ZM392 892.002V881.983H382.001L381.985 892.006L392 892.002ZM382.001 861.986H387.675L385.268 851.997L382.026 851.995L382.001 861.986Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M402 940.363V932.032H404.219L406.633 941.958H404.255L402 940.363Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M607.696 882.023H612.036V892.013H605.301L607.696 882.023Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M602.005 937.374V932.012H608.078C606.578 933.43 603.263 936.487 602.005 937.374Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M602.942 902.005H612.033V912.008H602.012V905.765L602.942 902.005Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M370.844 898H396.148L395.648 896H370.262C370.392 896.467 370.691 897.52 370.844 898Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M604.363 896.002L603.9 898.003H629.21C629.398 897.344 629.777 896 629.777 896L604.363 896.002Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M396 935.598V897.402L398 905.812V937.271L396 935.598Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M596.021 931.351V941.845L598.016 940.422V922.88L596.021 931.351Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M383.8 846H373.453L372.688 848H384.286L383.8 846Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M626.608 846L627.375 848H615.719L616.206 846H626.608Z",
    fill: base,
    fillOpacity: "0.17"
  }));
};
var Back$d = function Back(_ref2) {
  var color = _ref2.color;

  var _useTheme2 = useTheme(),
      colors = _useTheme2.colors,
      skin = _useTheme2.skin;

  var base = colors.clothing[color].base;
  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M544.846 847.98L502.716 813.61L577.346 758.82H416.646L491.276 813.61L449.146 847.98L411.516 791.48V869.96H585.776V786.52L544.846 847.98Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M613.655 758.16L570.926 758.26C570.704 762.777 570.227 767.277 569.496 771.74C569.025 773.882 568.444 775.998 567.756 778.08C565.416 784.57 550.496 790.08 546.266 794.81C544.864 796.383 543.361 797.863 541.766 799.24C516.596 817.44 476.596 818.44 452.286 798.66C449.664 796.371 447.282 793.821 445.176 791.05C440.946 785.49 428.776 779.46 427.076 772.11C426.593 769.935 426.233 767.735 425.996 765.52C425.754 763.261 425.634 760.992 425.636 758.72C425.636 758.72 380.426 758.16 380.426 758.16C376.905 758.16 373.529 759.558 371.039 762.046C368.548 764.534 367.148 767.91 367.146 771.43V1056.12C367.148 1059.64 368.548 1063.02 371.039 1065.5C373.529 1067.99 376.905 1069.39 380.426 1069.39H619.355C622.875 1069.39 626.25 1067.99 628.739 1065.5C631.227 1063.01 632.626 1059.64 632.626 1056.12V778C632.626 765.82 626.745 758.16 613.655 758.16Z",
    fill: colors.clothing.white.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M609.836 758.16C673.376 758.16 698.356 801.55 688.736 1030.16C669.996 1036.86 632.826 1034.75 632.826 1034.75L609.836 758.16Z",
    fill: colors.clothing.white.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M448.056 855.4L496.506 831.31L545.086 855.4L508.026 812.38L464.136 813.21L448.056 855.4Z",
    fill: colors.clothing.white.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M632.626 831.31C632.626 831.31 609.836 915.85 613.316 1065.31L646.526 1034.31L650.106 896.73C644.486 824.5 632.626 831.31 632.626 831.31Z",
    fill: colors.clothing.white.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M385.996 758.16C324.216 758.16 297.116 814.61 305.246 1003.64C327.666 1013.55 361.436 1009.22 361.436 1009.22L385.996 758.16Z",
    fill: colors.clothing.white.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M303.936 957.49C304.109 971.13 304.512 985.623 305.146 1000.97C320.416 1001.7 348.836 1001.85 362.256 1000.97L366.436 958.16C355.666 956.9 320.656 956.49 303.936 957.49Z",
    fill: colors.clothing.white.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M367.116 831.31L366.616 1009L353.266 1009.9C350.296 860.85 367.116 831.31 367.116 831.31Z",
    fill: colors.clothing.white.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M380.426 1069.39H496.996C387.806 1069.39 396.086 838.25 367.106 838.25V1056.12C367.107 1057.87 367.453 1059.6 368.124 1061.21C368.794 1062.82 369.776 1064.29 371.013 1065.52C372.251 1066.75 373.719 1067.73 375.334 1068.39C376.949 1069.06 378.679 1069.4 380.426 1069.39Z",
    fill: colors.clothing.white.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M589.506 763.64L514.836 818.45L556.976 852.83L616.396 763.59L589.506 763.64Z",
    fill: colors.clothing.white.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M609.836 758.16C677.256 758.16 688.286 814.44 688.736 891.94V1030.16C688.736 1030.16 638.736 1035.69 632.826 1034.75L632.726 892.64",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M385.996 758.16C360.266 758.16 342.476 766.28 330.286 780.6C310.836 803.47 305.656 842.14 305.286 888.87V1012.64C317.346 1015.96 366.646 1009 366.646 1009L367.136 890.4",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M369.596 1011.24C367.766 1013.85 295.826 1013.16 294.926 1011.24C294.026 1009.32 292.736 973.74 294.926 970.24C296.726 967.36 367.036 967.97 369.596 970.24C372.156 972.51 371.426 1008.63 369.596 1011.24Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M361.146 860.29C360.956 856.62 361.036 852.94 361.206 849.29C361.376 845.64 361.676 841.95 362.056 838.29C362.256 836.46 362.466 834.62 362.706 832.78C362.946 830.94 363.196 829.11 363.556 827.28C364.263 823.472 365.47 819.773 367.146 816.28C368.821 819.773 370.028 823.472 370.736 827.28C371.096 829.11 371.356 830.95 371.586 832.78C371.816 834.61 372.036 836.46 372.236 838.29C372.622 841.97 372.909 845.637 373.096 849.29C373.256 852.96 373.336 856.64 373.096 860.29H361.146Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M632.626 869.4V877.4C632.886 911.4 632.886 946.4 632.626 980.16C632.626 983.03 632.626 985.88 632.626 988.69V1056.1C632.626 1059.62 631.228 1062.99 628.739 1065.48C626.25 1067.97 622.875 1069.37 619.356 1069.37H380.426C376.905 1069.37 373.529 1067.97 371.039 1065.48C368.549 1063 367.148 1059.62 367.146 1056.1V990.3C366.886 955.44 366.886 920.44 367.146 885V860.29",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M694.416 970.24C696.636 972.5 696.006 1008.63 694.416 1011.24C692.826 1013.85 630.416 1013.16 629.646 1011.24C628.876 1009.32 627.746 973.74 629.646 970.24C629.916 969.74 631.926 969.35 635.096 969.06",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M675.916 968.3C679.716 968.6 690.916 967.12 691.336 967.54Z",
    fill: "black"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M675.916 968.3C676.499 967.543 677.126 966.821 677.796 966.14C678.341 965.595 678.937 965.102 679.576 964.67C680.151 964.288 680.757 963.954 681.386 963.67C681.996 963.38 682.606 963.13 683.216 962.88C684.445 962.383 685.712 961.989 687.006 961.7C687.665 961.554 688.333 961.451 689.006 961.39C689.366 961.39 689.736 961.39 690.176 961.39C690.426 961.39 690.636 961.39 690.996 961.39C691.116 961.39 691.436 961.39 691.706 961.46H692.056L692.546 961.57L692.796 961.63L692.996 961.69L693.566 961.9C694.313 962.226 694.992 962.691 695.566 963.27L699.766 967.56L691.116 976.04L686.996 971.67C687.536 972.236 688.186 972.685 688.906 972.99C689.086 973.07 689.266 973.13 689.446 973.19H689.616L689.806 973.24C689.93 973.281 690.057 973.311 690.186 973.33H690.376C690.476 973.33 690.636 973.33 690.596 973.33C690.556 973.33 690.526 973.33 690.446 973.33H689.696C689.126 973.33 688.506 973.33 687.876 973.33C686.558 973.252 685.248 973.075 683.956 972.8C683.286 972.65 682.616 972.5 681.956 972.31C681.27 972.127 680.601 971.886 679.956 971.59C679.211 971.237 678.512 970.794 677.876 970.27C677.115 969.73 676.452 969.064 675.916 968.3V968.3Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M626.626 869.4C626.436 865.22 626.526 861.04 626.686 856.87C626.846 852.7 627.156 848.51 627.546 844.34C627.746 842.25 627.946 840.16 628.186 838.07C628.426 835.98 628.676 833.89 629.046 831.8C629.737 827.496 630.938 823.29 632.626 819.27C634.32 823.288 635.526 827.495 636.216 831.8C636.576 833.89 636.846 835.98 637.066 838.07C637.286 840.16 637.516 842.25 637.716 844.34C638.106 848.51 638.406 852.69 638.566 856.87C638.726 861.05 638.826 865.22 638.626 869.4H626.626Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M380.426 758.26L613.656 758.16",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M497.036 813.21V1069.39",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "6",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M416.616 758.8C416.616 758.8 459.886 798.14 491.276 813.61C475.996 838.82 449.146 848 449.146 848L389.716 758.77L416.616 758.8Z",
    fill: colors.clothing.white.base,
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M577.376 758.8C577.376 758.8 537.996 800 502.716 813.61C512.716 833.89 544.846 847.98 544.846 847.98L604.276 758.75L577.376 758.8Z",
    fill: colors.clothing.white.base,
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M635.096 969.06C642.606 968.35 656.606 968.17 669.096 968.39Z",
    fill: "black"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M634.536 963.08C637.463 962.667 640.421 962.51 643.376 962.61C646.276 962.68 649.156 962.91 652.036 963.26C653.466 963.44 654.906 963.63 656.336 963.87C657.779 964.081 659.211 964.365 660.626 964.72C663.646 965.455 666.52 966.696 669.126 968.39C666.482 969.987 663.608 971.167 660.606 971.89C659.196 972.25 657.786 972.52 656.376 972.75C654.966 972.98 653.566 973.22 652.166 973.44C649.366 973.86 646.576 974.22 643.816 974.44C641.056 974.66 638.296 974.94 635.656 974.98L629.656 975.08L628.656 963.95L634.536 963.08Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M312 982H332V974.307C335.343 974.307 341.5 974.418 342 974.418V982H352V974.684C354.833 974.789 359.5 975 360.78 975.1L360.716 990H311.281V974.555L312 974.5V982Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M312 962V962.512L311.281 962.543V886.979C311.281 883.369 311.435 874.264 311.981 865.044V882.012H332.002V861.996H312.159C312.308 859.927 312.676 855.029 312.957 851.99L331.996 852V842H314.039C314.215 840.458 314.75 836.486 315.562 832H332V812H320.39C321.326 809.03 323.509 803.293 324.157 801.997H332V792H329.392C335.543 782.822 338.727 780.191 341.961 777.519L342 777.486L342 781.998H351.999V771.082C353.638 770.25 357.924 768.326 362 767.281V782H382V764.262H386.189L392.003 773.027V782H397.978L417.961 812H412.004V832H431.273L441.996 848.102V852H444.601L446.708 855.175C452.09 853.427 454.567 852.564 462 848.676V852.005H481.998V842.001H472.623C481.998 835.748 489.639 826.382 492 823.22V832.003H494L494.039 841.992H492.006V852.009H494.031V862.011H491.984V882.03H494.046V892.001H492.024V901.992H494.034V912.027H491.995V931.98H494.034V941.971H492.009V951.977H494.034V961.983H491.995V982.009H494.034V989.961L377.25 989.996C377.248 988.049 377.231 983.726 377.175 982.012H381.995V962.04H372.961V951.979H382.034V941.956H372.984V932.03H381.985V912.001H373.081V901.994H381.985V892.004H373.13V881.981H382.001V861.984H373.179C373.222 859.443 373.282 853.887 373.179 851.993H382.026V841.982H372.595C372.406 839.914 371.939 835.584 371.521 831.984H381.998V812.014H361.993V831.984H362.805C361.727 838.571 361.414 844.8 361.109 850.857L361.109 850.86L361.109 850.862C361.073 851.577 361.037 852.29 361 853L360.827 963.056L352 962.66V962H342V962.402C341.729 962.402 340.841 962.392 339.667 962.378L339.654 962.378L339.644 962.378C337.348 962.351 333.978 962.312 332 962.312V962H312ZM312 952V942H332V952H312ZM342 842V852H352V842H342ZM342 882.012V861.996H352V882.012H342ZM342 892V902H352V892H342ZM311.981 902L312 892H332.002L332 902H311.981ZM312 912V932H332V912H312ZM342 932V912H352V932H342ZM342 942V952H352V942H342ZM392.003 831.984V812.014H402V832L392.003 831.984ZM392.003 792V801.997H402V792H392.003ZM361.993 801.997L362 792H381.998L382 801.997H361.993ZM342 792V801.997H352V792H342ZM342 832V812L352 812.014V831.984L342 832ZM392 861.984V881.981H402V861.984H392ZM412 881.981V861.984H432V881.981H412ZM392 841.982V852H402V841.982H392ZM412 851.993V841.982H432V851.993H412ZM441.996 861.984V881.981H452V861.984H441.996ZM462 881.981V862.011H481.998V881.981H462ZM462 892V902H481.998V892H462ZM441.996 902V892H452V902H441.996ZM392 892V901.994H402V892.004L392 892ZM412 902V892.004L432 892V901.994L412 902ZM412 912.001V932.03H432V912.001H412ZM392 932.03V912.001H402V932.03H392ZM441.996 912V932H452V912H441.996ZM462 932V912H481.998V932H462ZM392 941.956V951.979H402V941.956H392ZM412 951.979V941.956H432V951.979H412ZM412 962.04V982.012H432V962.04H412ZM392 982.012V962.04H402V982.012H392ZM442 941.956V951.977H452V941.971L442 941.956ZM462 951.977V941.956H482V951.977H462ZM462 962.04V982.009L482 982.012V962.04H462ZM442 982.009V961.983L452 962.04V982.012L442 982.009Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M682.046 981.998H662.046V971.51C658.134 972.613 653.538 973.204 652.046 973.448V981.998H642.046V974.587C640.508 974.712 640.073 974.741 638.793 974.841L638.792 989.998H682.738V972.52L682.046 972.343V981.998Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M682.046 963.367V961.998H662.046V965.101C658.565 964.119 653.929 963.461 652.046 963.255V961.998H642.046V962.546L638.792 962.642L638.736 864.012C638.699 863.302 638.772 864.727 638.736 864.012C638.103 838.635 635.823 825.885 632.622 819.275L632.053 820.697V812.012H612.048V831.983H629.011C628.378 835.86 627.952 839.912 627.763 841.98H612.02V851.991H626.955C626.744 855.102 626.537 859.566 626.537 861.982H612.044V881.979H626.69V892.002H612.061V901.992H626.757V911.999H612.061V932.029H626.757V941.954H612.012V951.977H626.742V962.039H612.051V982.011H622.621C622.565 983.724 622.623 988.047 622.621 989.994L500.012 989.959V982.007H502.051V961.981H500.012V951.975H502.037V941.97H500.012V931.978H502.051V912.026H500.012V901.99H502.022V891.999H500V882.028H502.062V862.01H500.015V852.007H502.04V841.99H500.007L500.046 832.002H502.046L501.995 823.729C506.175 828.959 511.084 834.315 522.02 841.999H512.048V852.003H532.046V848.198C539.479 852.086 541.825 853.235 547.065 855.504L549.445 851.998H552.05V848.1L562.773 831.998H582.042V811.998H576.085L596.068 781.998H602.043V773.025L607.857 764.26H612.046V781.998H632.046V766.797C636.122 767.842 640.03 769.44 642.047 770.397V781.996H652.046L652.046 776.523C652.052 776.529 652.062 776.536 652.072 776.543L652.098 776.562C655.332 779.234 659.869 782.871 665.469 791.998H662.046V801.995H670.501C671.149 803.291 673.16 808.795 674.109 811.998H662.046V831.998H678.684C679.562 837.32 679.906 840.434 680.109 841.998H662.05V851.998L681.088 851.989C681.369 855.027 681.738 859.925 681.887 861.994H662.044V882.011H682.065V865.042C682.495 874.279 682.444 878.504 682.691 886.977L682.737 963.078L682.046 963.367ZM682.046 951.998V941.998H662.046V951.998H682.046ZM682.046 931.998V911.998H662.046V931.998H682.046ZM652.046 931.998V911.998H642.046V931.998H652.046ZM652.046 951.998V941.998H642.046V951.998H652.046ZM652.046 901.998V891.998H642.046V901.998H652.046ZM682.065 901.998L682.046 891.998H662.044L662.046 901.998H682.065ZM652.046 882.011V861.994H642.046V882.011H652.046ZM652.046 851.998V841.998H642.046V851.998H652.046ZM652.046 831.998V811.998L642.046 812.012V831.983L652.046 831.998ZM652.046 801.995V791.998H642.046V801.995H652.046ZM632.053 801.995L632.046 791.998H612.048L612.046 801.995H632.053ZM602.043 801.995V791.998H592.046V801.995H602.043ZM602.043 831.983V812.012H592.046V831.998L602.043 831.983ZM602.046 851.998V841.98H592.046V851.998H602.046ZM582.046 851.991V841.98H562.046V851.991H582.046ZM602.046 881.979V861.982H592.046V881.979H602.046ZM582.046 881.979V861.982H562.046V881.979H582.046ZM552.05 881.979V861.982H542.046V881.979H552.05ZM532.046 881.979V862.01H512.048V881.979H532.046ZM532.046 901.998V891.998H512.048V901.998H532.046ZM552.05 901.998V891.998H542.046V901.998H552.05ZM602.046 901.992V891.998L592.046 892.002V901.992H602.046ZM582.046 901.998V892.002L562.046 891.998V901.992L582.046 901.998ZM602.046 932.029V911.999H592.046V932.029H602.046ZM582.046 932.029V911.999H562.046V932.029H582.046ZM552.05 931.998V911.998H542.046V931.998H552.05ZM532.046 931.998V911.998H512.048V931.998H532.046ZM602.046 951.977V941.954H592.046V951.977H602.046ZM582.046 951.977V941.954H562.046V951.977H582.046ZM602.046 982.011V962.039H592.046V982.011H602.046ZM582.046 982.011V962.039H562.046V982.011H582.046ZM552.046 951.975V941.954L542.046 941.97V951.975H552.046ZM552.046 982.007V961.981L542.046 962.039V982.011L552.046 982.007ZM532.046 951.975V941.954H512.046V951.975H532.046ZM532.046 982.007V962.039H512.046V982.011L532.046 982.007Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M541.242 830.394L546.107 835.296L551.747 826.829L548.283 823.378L562.412 809.202L563.069 809.834L593.083 764.781H588.716L590.679 766.796L576.556 780.919L569.976 774.357L562.549 781.071L569.456 788.014L562.421 795.049L555.365 787.974L560.348 782.979C554.724 788.141 537.2 803.091 514.012 815.177L512.912 816.271L512.529 815.889L511.492 816.391C516.771 823.241 523.821 828.881 535.388 836.21L541.242 830.394ZM526.998 830.414L519.971 823.386L527.088 816.268L534.134 823.386L526.998 830.414ZM555.309 802.184L548.286 795.049L534.129 809.263L541.208 816.285L555.309 802.184Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M459.56 836.198C458.387 836.939 453.618 839.404 451.381 840.545L426.382 803.059L428.771 805.39L435.85 798.368L428.742 791.288L422.658 797.401L416.971 788.956L421.691 784.18L407.588 770.077L405.655 771.897L400.968 764.759H414.341C422.963 772.384 432.725 780.467 436.528 783.556L435.827 784.21L442.922 791.244L444.412 789.776L452.409 795.845L449.999 798.364L464.15 812.478L469.05 807.525L477.718 812.998L471.185 819.582L475.507 823.903C473.778 825.776 469.797 829.073 468.022 830.488L464.164 826.63L457.091 833.703L459.56 836.198ZM449.957 826.647L435.81 812.5L442.942 805.426L457.06 819.544L449.957 826.647Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M381.999 801.997H392.001V812.014H381.997L381.999 801.997Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M411.299 802L401.999 801.997V812.014L412.002 812V803.056L411.299 802Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M311.28 962H311.999V952L311.28 952V962ZM331.999 952V962H341.999V952H331.999ZM311.999 932V942H311.28V932H311.999ZM351.999 962H360.827L360.842 952H351.999V962ZM341.999 942H331.999V932H341.999V942ZM360.858 942L360.874 932H351.999V942H360.858ZM311.999 912L311.98 902H311.28V912H311.999ZM360.906 912H351.999V902H360.921L360.906 912ZM341.999 912V902H331.999V912H341.999ZM360.937 892H351.999V882.012H360.953L360.937 892ZM341.999 892H332.001V882.012H341.999V892ZM311.28 892V886.979C311.28 885.826 311.295 884.112 311.335 882.012H311.98L311.999 892H311.28ZM360.984 861.996L360.999 853C361.016 852.667 361.033 852.334 361.05 852H351.999V861.996H360.984ZM341.999 861.996V852H331.995L332.001 861.996H341.999ZM341.999 842V832H331.999L331.995 842H341.999ZM361.636 842H351.999V831.984H361.991V838.086C361.852 839.403 361.736 840.707 361.636 842ZM341.999 812H331.999V801.997H341.999V812ZM361.991 801.997V812.014H351.999V801.997H361.991Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M312 990L311.998 982H311.28V990L312 990ZM341.998 990L331.998 990V982H341.998V990ZM351.998 982L351.999 990L360.715 990L360.749 982H351.998Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M455.257 852.005H461.999V862.011L451.999 861.984V853.357C453.043 852.96 454.092 852.528 455.257 852.005Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M451.999 951.977V962.04H461.999V951.977H451.999Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M331.999 792V788.248C333.986 785.504 335.624 783.536 337.068 781.998H341.999V792H331.999ZM351.999 792L351.998 781.998L361.999 782V792H351.999ZM401.999 832H412.002L411.999 841.981H401.999V832ZM401.999 861.984V852L411.999 851.993V861.984H401.999ZM411.999 881.981H401.999V892.004H411.999V881.981ZM401.999 901.994V912.001H411.999V902L401.999 901.994ZM391.999 941.956V932.03H381.984L382.032 941.956H391.999ZM382.032 951.979L381.994 962.04H391.999V951.979H382.032ZM381.994 989.995L391.999 989.992V982.012H381.994V989.995ZM401.999 982.012V989.989L411.999 989.986V982.012H401.999ZM441.999 989.977L431.999 989.98V982.012L441.999 982.009V989.977ZM451.999 989.974L462.149 989.97L461.999 982.009L451.999 982.012V989.974ZM491.993 989.961L481.999 989.964V982.012L491.993 982.009V989.961ZM411.999 951.979V962.04H401.999V951.979H411.999ZM431.999 962.04L441.999 961.983V951.977L431.999 951.979V962.04ZM491.993 961.983L492.008 951.977H481.999V962.04L491.993 961.983ZM401.999 941.956H411.999V932.03H401.999V941.956ZM492.008 941.971L491.993 931.98L481.996 932L481.999 941.956L492.008 941.971ZM441.995 932L441.999 941.956H431.999V932.03L441.995 932ZM451.999 941.971L461.999 941.956V932H451.999V941.971ZM381.984 912.001H391.999V901.994H381.984V912.001ZM431.999 912.001L441.995 912V902L431.999 901.994V912.001ZM451.999 912H461.999V902H451.999V912ZM491.993 912.027L492.022 901.992L481.996 902V912L491.993 912.027ZM492.022 892.001L491.983 882.03L481.996 881.981V892L492.022 892.001ZM451.999 881.981H461.999V892H451.999V881.981ZM492.004 852.009L491.983 862.011H481.996V852.005L492.004 852.009ZM481.996 842.001L492.004 841.992L491.999 832.003H484.406C483.643 832.786 482.838 833.585 481.996 834.387V842.001ZM391.999 881.981V892L381.984 892.004L382 881.981H391.999ZM441.995 892V881.981H431.999V892H441.995ZM441.995 852L431.999 851.993V861.984H441.995V852ZM391.999 861.984H382L382.025 851.993L391.999 852V861.984ZM391.999 841.981L392.001 831.984H381.997L382.025 841.981H391.999ZM437.919 841.981L431.999 833.092V841.981H437.919ZM404.638 792H401.999V788.038L404.638 792ZM392.001 792V782H381.999L381.997 792H392.001Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M662.045 981.998V989.998H652.044L652.045 981.998H662.045ZM682.044 989.998H682.737V982.011L682.045 981.998L682.044 989.998ZM638.791 982.011L642.045 981.998V989.998H638.791L638.791 982.011Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M662.044 901.998V911.998H652.044V901.998H662.044Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M682.044 963.367V961.998V951.998H682.729L682.735 961.998L682.736 963.078L682.044 963.367ZM682.723 941.998H682.044V931.998H682.717L682.723 941.998ZM682.705 911.998L682.699 901.998H682.063L682.044 911.998H682.705ZM682.69 886.977L682.693 891.998H682.044L682.063 882.011H682.564C682.597 883.531 682.637 885.156 682.69 886.977ZM662.042 882.011H652.044V891.998H662.042V882.011ZM642.044 882.011V891.998H638.75L638.745 882.011H642.044ZM662.042 861.994L662.048 851.998H652.044V861.994H662.042ZM652.044 841.998H662.048L662.044 831.998H652.044V841.998ZM662.044 811.998H652.044V801.995H662.044V811.998ZM632.052 801.995H642.044V812.012H632.052V801.995ZM612.044 801.995L612.046 812.012H602.042V801.995H612.044ZM602.042 831.983L602.044 841.98H612.018L612.046 831.983H602.042ZM612.018 851.991L602.044 851.998V861.982H612.043L612.018 851.991ZM612.043 881.979H602.044V891.998L612.059 892.002L612.043 881.979ZM612.059 901.992H602.044V911.999H612.059V901.992ZM592.044 881.979V892.002H582.044V881.979H592.044ZM582.044 901.998V911.999H592.044V901.992L582.044 901.998ZM562.044 901.992V911.999L552.048 911.998V901.998L562.044 901.992ZM562.044 891.998V881.979H552.048V891.998H562.044ZM542.044 911.998V901.998H532.044V911.998H542.044ZM512.047 931.978V931.998L512.044 941.954L502.035 941.97L502.05 931.978H512.047ZM502.05 961.981L502.035 951.975H512.044V962.039L502.05 961.981ZM512.044 982.011V989.963L502.035 989.96L502.05 982.007L512.044 982.011ZM512.047 911.998L502.05 912.026L502.021 901.99L512.047 901.998V911.998ZM512.047 891.998L502.021 891.999L502.06 882.028L512.047 881.979V891.998ZM532.044 989.968L542.044 989.971V982.011L532.044 982.007V989.968ZM532.044 962.039V951.975H542.044V962.039H532.044ZM542.044 931.998V941.97L532.044 941.954V931.998H542.044ZM542.044 881.979V891.998H532.044V881.979H542.044ZM552.048 931.998L552.044 941.954H562.044V932.029L552.048 931.998ZM552.044 951.975V961.981L562.044 962.039V951.977L552.044 951.975ZM552.044 989.974V982.007L562.044 982.011V989.977L552.044 989.974ZM582.044 989.983V982.011H592.044V989.986L582.044 989.983ZM592.044 951.977V962.039H582.044V951.977H592.044ZM592.044 932.029V941.954H582.044V932.029H592.044ZM612.059 932.029H602.044V941.954H612.011L612.059 932.029ZM612.011 951.977H602.044V962.039H612.049L612.011 951.977ZM612.049 989.991V982.011H602.044V989.988L612.049 989.991ZM512.047 852.003V862.01H502.06L502.039 852.007L512.047 852.003ZM542.044 853.355V861.982L532.044 862.01V852.003H538.786C539.951 852.526 541 852.958 542.044 853.355ZM562.044 851.991V861.982H552.048V851.998L562.044 851.991ZM592.044 851.998V861.982H582.044V851.991L592.044 851.998ZM556.124 841.98L562.044 833.09V841.98H556.124ZM592.044 831.998V841.98H582.044L582.041 831.998H592.044ZM512.047 834.3V841.99H502.039V832.001H502.044H509.512C510.311 832.765 511.16 833.533 512.047 834.3ZM592.044 812.012V801.995H582.747L582.041 803.055V811.998L592.044 812.012ZM602.042 791.998H612.046L612.044 781.998H602.042V791.998ZM632.044 781.998V791.998H642.044L642.045 781.996L632.044 781.998ZM589.405 791.998L592.044 788.036V791.998H589.405ZM642.044 831.983V841.998H637.522C637.155 838.193 636.721 834.882 636.229 831.998L642.044 831.983ZM652.044 791.998H662.044L662.132 787C660.672 785.001 659.301 783.368 658.025 781.998L652.044 781.996V791.998ZM642.044 851.998H638.265C638.436 855.081 638.575 858.406 638.68 861.994H642.044V851.998ZM662.044 931.998V941.998H652.044V931.998H662.044ZM642.044 901.998V911.998H638.762L638.756 901.998H642.044ZM638.773 931.998L638.779 941.998H642.044V931.998H638.773ZM652.044 951.998H662.044V961.998H652.044V951.998ZM638.785 951.998L638.79 961.998H642.044V951.998H638.785Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.054 817.221L512.894 816.269L519.948 823.304L518.959 824.387C517.379 822.944 513.786 819.49 512.054 817.221Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M521.819 811.026L527.09 816.297L534.129 809.209L530.545 805.609C528.209 807.112 523.195 810.299 521.819 811.026Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M534.145 823.363L541.198 830.378L548.28 823.368L541.252 816.268L534.145 823.363Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M555.329 802.112L562.464 809.227L565.537 806.069L568.715 801.376L562.464 795.061L555.329 802.112Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M547.053 793.844L548.247 795.039L555.347 788.01L554.925 787.553C552.594 789.434 547.755 793.324 547.053 793.844Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M592.719 764.762L590.688 766.779L591.324 767.375L593.085 764.762H592.719Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M569.49 787.974L574.333 792.912L580.03 784.413L576.588 780.924L569.49 787.974Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M457.077 819.587L464.133 826.622L471.23 819.587L464.133 812.491L457.077 819.587Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M450.887 839.81L457.101 833.686L449.971 826.622L445.21 831.383L450.887 839.81Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M428.287 805.923L428.791 805.419L435.846 812.451L433.962 814.401L428.287 805.923Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M435.845 798.363L442.867 791.212L449.966 798.363L442.867 805.384L435.845 798.363Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M421.669 784.207L428.799 791.315L435.799 784.207L429.295 777.658L428.724 777.176L421.669 784.207Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M402.278 764.779L407.571 770.072L412.845 764.779H402.278Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M596 990.051V782.011L598 778.987V990.051H596Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M396 989.952V779.041L398 782.017V989.952H396Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M646 974.245V990.037H648V974.022L646 974.245ZM648 962.842V773.64C647.681 773.424 646.534 772.747 646 772.435V962.731L648 962.842Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M348 962.543V773.27C347.638 773.476 346.516 774.208 346 774.548V962.501L348 962.543ZM346 974.486V989.985H348V974.55L346 974.486Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M360.891 946H311.283V948H360.891V946ZM372.939 948H494.054V946H372.939V948ZM500.022 948H626.748V946H500.022V948ZM682.734 948H638.798V946H682.734V948Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M361.116 896H311.28V898H361.116V896ZM373.121 898H494.036V896H373.121V898ZM500.019 898H626.732V896H500.019V898ZM682.741 898H638.734V896H682.741V898Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M494.02 846H466.61L463.194 848H494.02V846ZM500.065 848H531.783L528.362 846H500.065V848ZM448 989.984V854.735L446.709 855.176L446 854.102V989.984H448ZM372.906 846H440.616L441.938 848H373.017L372.906 846ZM361.275 848L361.386 846H313.548C313.484 846.563 313.352 847.751 313.339 848H361.275ZM408.63 798H326.034C326.418 797.23 326.896 796.346 327.088 796H407.288L408.63 798ZM553.38 846H627.398L627.239 848H552.037L553.38 846ZM680.773 848H638.022L637.852 846H680.566L680.773 848ZM546 990.051V855.037L547.054 855.499L548 854.078V990.051H546ZM585.329 798L586.675 796H667.716L668.715 798H585.329Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M525.639 823.35L527.056 821.933L518.161 813.03L516.3 814.01L525.639 823.35Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M528.469 823.348L527.053 824.764L542.419 840.131L542.754 840.292L543.806 838.7L528.469 823.348Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M527.056 821.933L525.639 823.35L527.053 824.764L528.469 823.348L527.056 821.933Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M563.795 788.03L562.387 789.438L570.99 797.964L572.097 796.294L563.795 788.03Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M560.964 788.028L562.376 786.617L559.451 783.706L557.897 784.988L560.964 788.028Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M521.996 826.992L523.578 828.238L527.053 824.764L525.639 823.35L521.996 826.992ZM562.387 789.438L528.469 823.348L527.056 821.933L560.964 788.028L562.387 789.438ZM563.795 788.03L587.036 764.794H584.201L562.376 786.617L563.795 788.03Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M562.387 789.438L563.795 788.03L562.376 786.617L560.964 788.028L562.387 789.438Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M463.073 834.033L464.745 832.896L464.159 832.311L462.757 833.717L463.073 834.033Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M482.528 815.801L481.294 815.133L464.159 832.311L464.745 832.896C472.886 827.186 479.172 820.282 482.528 815.801Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M461.334 835.143C461.922 834.781 462.502 834.41 463.073 834.033L462.757 833.717L461.334 835.143Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M428.746 796.975L430.175 798.402L441.276 787.348L439.641 786.033L428.746 796.975Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M428.78 799.791L427.357 798.37L424.922 800.816L426.044 802.516L428.78 799.791Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M464.159 832.311L462.757 833.717L428.78 799.791L430.175 798.402L464.159 832.311ZM428.746 796.975L409.721 777.992L415.316 786.348L427.357 798.37L428.746 796.975Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M430.175 798.402L428.746 796.975L427.357 798.37L428.78 799.791L430.175 798.402Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.766 987.73C515.417 987.73 517.566 985.581 517.566 982.93C517.566 980.279 515.417 978.13 512.766 978.13C510.115 978.13 507.966 980.279 507.966 982.93C507.966 985.581 510.115 987.73 512.766 987.73Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.77 961.6C515.421 961.6 517.57 959.451 517.57 956.8C517.57 954.149 515.421 952 512.77 952C510.119 952 507.97 954.149 507.97 956.8C507.97 959.451 510.119 961.6 512.77 961.6Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.8 934.6C515.451 934.6 517.6 932.451 517.6 929.8C517.6 927.149 515.451 925 512.8 925C510.149 925 508 927.149 508 929.8C508 932.451 510.149 934.6 512.8 934.6Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.8 907.6C515.451 907.6 517.6 905.451 517.6 902.8C517.6 900.149 515.451 898 512.8 898C510.149 898 508 900.149 508 902.8C508 905.451 510.149 907.6 512.8 907.6Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.8 880.6C515.451 880.6 517.6 878.451 517.6 875.8C517.6 873.149 515.451 871 512.8 871C510.149 871 508 873.149 508 875.8C508 878.451 510.149 880.6 512.8 880.6Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.8 853.6C515.451 853.6 517.6 851.451 517.6 848.8C517.6 846.149 515.451 844 512.8 844C510.149 844 508 846.149 508 848.8C508 851.451 510.149 853.6 512.8 853.6Z",
    fill: colors.outline
  }));
};

var ChequeredShirt = {
  __proto__: null,
  Front: Front$d,
  Back: Back$d
};

var Front$e = function Front(_ref) {
  var color = _ref.color,
      hasBreasts = _ref.hasBreasts;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var base = colors.clothing[color].base;

  if (!hasBreasts) {
    return null;
  }

  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M407 943.809L380.434 831.734C367.11 854.533 367.208 872.681 367.944 882.999C368.727 889.486 370.834 920.267 407 943.809Z",
    fill: colors.clothing.black.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M593.051 943.809L619.585 831.699C629.709 848.064 634.378 869.819 631.285 889.008C629.333 901.121 621.865 925.38 593.051 943.809Z",
    fill: colors.clothing.black.base
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M380.5 831.982H380.297C380.127 832.282 379.968 832.563 379.816 832.831C378.117 835.831 377.43 837.044 375.17 841.98H382.025V851.991H371.35C370.193 855.237 369.983 857.11 368.867 861.982H382V881.979H367.827C367.827 881.979 368.434 887.676 369.329 892.002H381.984V901.992H372.164C372.164 901.992 374.079 907.314 376.729 911.999H381.984V920.453C382.462 921.131 387.83 928.219 391.999 931.969V911.999H399.47L397.09 901.992H391.999V891.998L394.745 891.999L392.344 881.979H391.999V880.511L380.5 831.982ZM401.999 922.696V932.028H392.057C392.643 932.83 400.4 939.611 406.995 943.804L401.999 922.696Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M619.516 831.984H619.766C621.245 834.372 624.022 839.561 624.981 841.941L617.152 841.977L619.516 831.984Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M614.781 851.992H628.734C629.806 855.029 631.108 861.065 631.191 861.979H612.418L614.781 851.992Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M600.578 912.004H602.028V932.032H595.848L593.498 941.947H595.793C600.734 938.443 605.701 934.735 612.043 927.927V911.991H623.354C625.681 907.765 627.341 903.552 627.88 901.973H612.043V891.981H630.719C631.235 890.029 631.898 885.655 632.267 881.963H612.043V863.531L600.578 912.004Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M392 912.003H381.985V901.996H392V912.003ZM392 892.002V881.983H382.001L381.985 892.006L392 892.002ZM382.001 861.986H387.675L385.268 851.997L382.026 851.995L382.001 861.986Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M402 940.363V932.032H404.219L406.633 941.958H404.255L402 940.363Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M607.696 882.023H612.036V892.013H605.301L607.696 882.023Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M602.005 937.374V932.012H608.078C606.578 933.43 603.263 936.487 602.005 937.374Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M602.942 902.005H612.033V912.008H602.012V905.765L602.942 902.005Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M370.844 898H396.148L395.648 896H370.262C370.392 896.467 370.691 897.52 370.844 898Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M604.363 896.002L603.9 898.003H629.21C629.398 897.344 629.777 896 629.777 896L604.363 896.002Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M396 935.598V897.402L398 905.812V937.271L396 935.598Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M596.021 931.351V941.845L598.016 940.422V922.88L596.021 931.351Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M383.8 846H373.453L372.688 848H384.286L383.8 846Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M626.608 846L627.375 848H615.719L616.206 846H626.608Z",
    fill: base,
    fillOpacity: "0.17"
  }));
};
var Back$e = function Back(_ref2) {
  var color = _ref2.color;

  var _useTheme2 = useTheme(),
      colors = _useTheme2.colors,
      skin = _useTheme2.skin;

  var base = colors.clothing[color].base;
  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M544.846 847.98L502.716 813.61L577.346 758.82H416.646L491.276 813.61L449.146 847.98L411.516 791.48V869.96H585.776V786.52L544.846 847.98Z",
    fill: skin.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M613.655 758.16L570.926 758.26C570.704 762.777 570.227 767.277 569.496 771.74C569.025 773.882 568.444 775.998 567.756 778.08C565.416 784.57 550.496 790.08 546.266 794.81C544.864 796.383 543.361 797.863 541.766 799.24C516.596 817.44 476.596 818.44 452.286 798.66C449.664 796.371 447.282 793.821 445.176 791.05C440.946 785.49 428.776 779.46 427.076 772.11C426.593 769.935 426.233 767.735 425.996 765.52C425.754 763.261 425.634 760.992 425.636 758.72C425.636 758.72 380.426 758.16 380.426 758.16C376.905 758.16 373.529 759.558 371.039 762.046C368.548 764.534 367.148 767.91 367.146 771.43V1056.12C367.148 1059.64 368.548 1063.02 371.039 1065.5C373.529 1067.99 376.905 1069.39 380.426 1069.39H619.355C622.875 1069.39 626.25 1067.99 628.739 1065.5C631.227 1063.01 632.626 1059.64 632.626 1056.12V778C632.626 765.82 626.745 758.16 613.655 758.16Z",
    fill: colors.clothing.black.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M609.836 758.16C673.376 758.16 698.356 801.55 688.736 1030.16C669.996 1036.86 632.826 1034.75 632.826 1034.75L609.836 758.16Z",
    fill: colors.clothing.black.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M448.056 855.4L496.506 831.31L545.086 855.4L508.026 812.38L464.136 813.21L448.056 855.4Z",
    fill: colors.clothing.black.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M632.626 831.31C632.626 831.31 609.836 915.85 613.316 1065.31L646.526 1034.31L650.106 896.73C644.486 824.5 632.626 831.31 632.626 831.31Z",
    fill: colors.clothing.black.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M385.996 758.16C324.216 758.16 297.116 814.61 305.246 1003.64C327.666 1013.55 361.436 1009.22 361.436 1009.22L385.996 758.16Z",
    fill: colors.clothing.black.base
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M303.936 957.49C304.109 971.13 304.512 985.623 305.146 1000.97C320.416 1001.7 348.836 1001.85 362.256 1000.97L366.436 958.16C355.666 956.9 320.656 956.49 303.936 957.49Z",
    fill: colors.clothing.black.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M367.116 831.31L366.616 1009L353.266 1009.9C350.296 860.85 367.116 831.31 367.116 831.31Z",
    fill: colors.clothing.black.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M380.426 1069.39H496.996C387.806 1069.39 396.086 838.25 367.106 838.25V1056.12C367.107 1057.87 367.453 1059.6 368.124 1061.21C368.794 1062.82 369.776 1064.29 371.013 1065.52C372.251 1066.75 373.719 1067.73 375.334 1068.39C376.949 1069.06 378.679 1069.4 380.426 1069.39Z",
    fill: colors.clothing.black.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M589.506 763.64L514.836 818.45L556.976 852.83L616.396 763.59L589.506 763.64Z",
    fill: colors.clothing.black.shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M609.836 758.16C677.256 758.16 688.286 814.44 688.736 891.94V1030.16C688.736 1030.16 638.736 1035.69 632.826 1034.75L632.726 892.64",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M385.996 758.16C360.266 758.16 342.476 766.28 330.286 780.6C310.836 803.47 305.656 842.14 305.286 888.87V1012.64C317.346 1015.96 366.646 1009 366.646 1009L367.136 890.4",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M369.596 1011.24C367.766 1013.85 295.826 1013.16 294.926 1011.24C294.026 1009.32 292.736 973.74 294.926 970.24C296.726 967.36 367.036 967.97 369.596 970.24C372.156 972.51 371.426 1008.63 369.596 1011.24Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M361.146 860.29C360.956 856.62 361.036 852.94 361.206 849.29C361.376 845.64 361.676 841.95 362.056 838.29C362.256 836.46 362.466 834.62 362.706 832.78C362.946 830.94 363.196 829.11 363.556 827.28C364.263 823.472 365.47 819.773 367.146 816.28C368.821 819.773 370.028 823.472 370.736 827.28C371.096 829.11 371.356 830.95 371.586 832.78C371.816 834.61 372.036 836.46 372.236 838.29C372.622 841.97 372.909 845.637 373.096 849.29C373.256 852.96 373.336 856.64 373.096 860.29H361.146Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M632.626 869.4V877.4C632.886 911.4 632.886 946.4 632.626 980.16C632.626 983.03 632.626 985.88 632.626 988.69V1056.1C632.626 1059.62 631.228 1062.99 628.739 1065.48C626.25 1067.97 622.875 1069.37 619.356 1069.37H380.426C376.905 1069.37 373.529 1067.97 371.039 1065.48C368.549 1063 367.148 1059.62 367.146 1056.1V990.3C366.886 955.44 366.886 920.44 367.146 885V860.29",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M694.416 970.24C696.636 972.5 696.006 1008.63 694.416 1011.24C692.826 1013.85 630.416 1013.16 629.646 1011.24C628.876 1009.32 627.746 973.74 629.646 970.24C629.916 969.74 631.926 969.35 635.096 969.06",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M675.916 968.3C679.716 968.6 690.916 967.12 691.336 967.54Z",
    fill: "black"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M675.916 968.3C676.499 967.543 677.126 966.821 677.796 966.14C678.341 965.595 678.937 965.102 679.576 964.67C680.151 964.288 680.757 963.954 681.386 963.67C681.996 963.38 682.606 963.13 683.216 962.88C684.445 962.383 685.712 961.989 687.006 961.7C687.665 961.554 688.333 961.451 689.006 961.39C689.366 961.39 689.736 961.39 690.176 961.39C690.426 961.39 690.636 961.39 690.996 961.39C691.116 961.39 691.436 961.39 691.706 961.46H692.056L692.546 961.57L692.796 961.63L692.996 961.69L693.566 961.9C694.313 962.226 694.992 962.691 695.566 963.27L699.766 967.56L691.116 976.04L686.996 971.67C687.536 972.236 688.186 972.685 688.906 972.99C689.086 973.07 689.266 973.13 689.446 973.19H689.616L689.806 973.24C689.93 973.281 690.057 973.311 690.186 973.33H690.376C690.476 973.33 690.636 973.33 690.596 973.33C690.556 973.33 690.526 973.33 690.446 973.33H689.696C689.126 973.33 688.506 973.33 687.876 973.33C686.558 973.252 685.248 973.075 683.956 972.8C683.286 972.65 682.616 972.5 681.956 972.31C681.27 972.127 680.601 971.886 679.956 971.59C679.211 971.237 678.512 970.794 677.876 970.27C677.115 969.73 676.452 969.064 675.916 968.3V968.3Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M626.626 869.4C626.436 865.22 626.526 861.04 626.686 856.87C626.846 852.7 627.156 848.51 627.546 844.34C627.746 842.25 627.946 840.16 628.186 838.07C628.426 835.98 628.676 833.89 629.046 831.8C629.737 827.496 630.938 823.29 632.626 819.27C634.32 823.288 635.526 827.495 636.216 831.8C636.576 833.89 636.846 835.98 637.066 838.07C637.286 840.16 637.516 842.25 637.716 844.34C638.106 848.51 638.406 852.69 638.566 856.87C638.726 861.05 638.826 865.22 638.626 869.4H626.626Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M380.426 758.26L613.656 758.16",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M497.036 813.21V1069.39",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "6",
    strokeMiterlimit: "10",
    strokeLinecap: "square"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M416.616 758.8C416.616 758.8 459.886 798.14 491.276 813.61C475.996 838.82 449.146 848 449.146 848L389.716 758.77L416.616 758.8Z",
    fill: colors.clothing.black.base,
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M577.376 758.8C577.376 758.8 537.996 800 502.716 813.61C512.716 833.89 544.846 847.98 544.846 847.98L604.276 758.75L577.376 758.8Z",
    fill: colors.clothing.black.base,
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M635.096 969.06C642.606 968.35 656.606 968.17 669.096 968.39Z",
    fill: "black"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M634.536 963.08C637.463 962.667 640.421 962.51 643.376 962.61C646.276 962.68 649.156 962.91 652.036 963.26C653.466 963.44 654.906 963.63 656.336 963.87C657.779 964.081 659.211 964.365 660.626 964.72C663.646 965.455 666.52 966.696 669.126 968.39C666.482 969.987 663.608 971.167 660.606 971.89C659.196 972.25 657.786 972.52 656.376 972.75C654.966 972.98 653.566 973.22 652.166 973.44C649.366 973.86 646.576 974.22 643.816 974.44C641.056 974.66 638.296 974.94 635.656 974.98L629.656 975.08L628.656 963.95L634.536 963.08Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M312 982H332V974.307C335.343 974.307 341.5 974.418 342 974.418V982H352V974.684C354.833 974.789 359.5 975 360.78 975.1L360.716 990H311.281V974.555L312 974.5V982Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M312 962V962.512L311.281 962.543V886.979C311.281 883.369 311.435 874.264 311.981 865.044V882.012H332.002V861.996H312.159C312.308 859.927 312.676 855.029 312.957 851.99L331.996 852V842H314.039C314.215 840.458 314.75 836.486 315.562 832H332V812H320.39C321.326 809.03 323.509 803.293 324.157 801.997H332V792H329.392C335.543 782.822 338.727 780.191 341.961 777.519L342 777.486L342 781.998H351.999V771.082C353.638 770.25 357.924 768.326 362 767.281V782H382V764.262H386.189L392.003 773.027V782H397.978L417.961 812H412.004V832H431.273L441.996 848.102V852H444.601L446.708 855.175C452.09 853.427 454.567 852.564 462 848.676V852.005H481.998V842.001H472.623C481.998 835.748 489.639 826.382 492 823.22V832.003H494L494.039 841.992H492.006V852.009H494.031V862.011H491.984V882.03H494.046V892.001H492.024V901.992H494.034V912.027H491.995V931.98H494.034V941.971H492.009V951.977H494.034V961.983H491.995V982.009H494.034V989.961L377.25 989.996C377.248 988.049 377.231 983.726 377.175 982.012H381.995V962.04H372.961V951.979H382.034V941.956H372.984V932.03H381.985V912.001H373.081V901.994H381.985V892.004H373.13V881.981H382.001V861.984H373.179C373.222 859.443 373.282 853.887 373.179 851.993H382.026V841.982H372.595C372.406 839.914 371.939 835.584 371.521 831.984H381.998V812.014H361.993V831.984H362.805C361.727 838.571 361.414 844.8 361.109 850.857L361.109 850.86L361.109 850.862C361.073 851.577 361.037 852.29 361 853L360.827 963.056L352 962.66V962H342V962.402C341.729 962.402 340.841 962.392 339.667 962.378L339.654 962.378L339.644 962.378C337.348 962.351 333.978 962.312 332 962.312V962H312ZM312 952V942H332V952H312ZM342 842V852H352V842H342ZM342 882.012V861.996H352V882.012H342ZM342 892V902H352V892H342ZM311.981 902L312 892H332.002L332 902H311.981ZM312 912V932H332V912H312ZM342 932V912H352V932H342ZM342 942V952H352V942H342ZM392.003 831.984V812.014H402V832L392.003 831.984ZM392.003 792V801.997H402V792H392.003ZM361.993 801.997L362 792H381.998L382 801.997H361.993ZM342 792V801.997H352V792H342ZM342 832V812L352 812.014V831.984L342 832ZM392 861.984V881.981H402V861.984H392ZM412 881.981V861.984H432V881.981H412ZM392 841.982V852H402V841.982H392ZM412 851.993V841.982H432V851.993H412ZM441.996 861.984V881.981H452V861.984H441.996ZM462 881.981V862.011H481.998V881.981H462ZM462 892V902H481.998V892H462ZM441.996 902V892H452V902H441.996ZM392 892V901.994H402V892.004L392 892ZM412 902V892.004L432 892V901.994L412 902ZM412 912.001V932.03H432V912.001H412ZM392 932.03V912.001H402V932.03H392ZM441.996 912V932H452V912H441.996ZM462 932V912H481.998V932H462ZM392 941.956V951.979H402V941.956H392ZM412 951.979V941.956H432V951.979H412ZM412 962.04V982.012H432V962.04H412ZM392 982.012V962.04H402V982.012H392ZM442 941.956V951.977H452V941.971L442 941.956ZM462 951.977V941.956H482V951.977H462ZM462 962.04V982.009L482 982.012V962.04H462ZM442 982.009V961.983L452 962.04V982.012L442 982.009Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M682.046 981.998H662.046V971.51C658.134 972.613 653.538 973.204 652.046 973.448V981.998H642.046V974.587C640.508 974.712 640.073 974.741 638.793 974.841L638.792 989.998H682.738V972.52L682.046 972.343V981.998Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M682.046 963.367V961.998H662.046V965.101C658.565 964.119 653.929 963.461 652.046 963.255V961.998H642.046V962.546L638.792 962.642L638.736 864.012C638.699 863.302 638.772 864.727 638.736 864.012C638.103 838.635 635.823 825.885 632.622 819.275L632.053 820.697V812.012H612.048V831.983H629.011C628.378 835.86 627.952 839.912 627.763 841.98H612.02V851.991H626.955C626.744 855.102 626.537 859.566 626.537 861.982H612.044V881.979H626.69V892.002H612.061V901.992H626.757V911.999H612.061V932.029H626.757V941.954H612.012V951.977H626.742V962.039H612.051V982.011H622.621C622.565 983.724 622.623 988.047 622.621 989.994L500.012 989.959V982.007H502.051V961.981H500.012V951.975H502.037V941.97H500.012V931.978H502.051V912.026H500.012V901.99H502.022V891.999H500V882.028H502.062V862.01H500.015V852.007H502.04V841.99H500.007L500.046 832.002H502.046L501.995 823.729C506.175 828.959 511.084 834.315 522.02 841.999H512.048V852.003H532.046V848.198C539.479 852.086 541.825 853.235 547.065 855.504L549.445 851.998H552.05V848.1L562.773 831.998H582.042V811.998H576.085L596.068 781.998H602.043V773.025L607.857 764.26H612.046V781.998H632.046V766.797C636.122 767.842 640.03 769.44 642.047 770.397V781.996H652.046L652.046 776.523C652.052 776.529 652.062 776.536 652.072 776.543L652.098 776.562C655.332 779.234 659.869 782.871 665.469 791.998H662.046V801.995H670.501C671.149 803.291 673.16 808.795 674.109 811.998H662.046V831.998H678.684C679.562 837.32 679.906 840.434 680.109 841.998H662.05V851.998L681.088 851.989C681.369 855.027 681.738 859.925 681.887 861.994H662.044V882.011H682.065V865.042C682.495 874.279 682.444 878.504 682.691 886.977L682.737 963.078L682.046 963.367ZM682.046 951.998V941.998H662.046V951.998H682.046ZM682.046 931.998V911.998H662.046V931.998H682.046ZM652.046 931.998V911.998H642.046V931.998H652.046ZM652.046 951.998V941.998H642.046V951.998H652.046ZM652.046 901.998V891.998H642.046V901.998H652.046ZM682.065 901.998L682.046 891.998H662.044L662.046 901.998H682.065ZM652.046 882.011V861.994H642.046V882.011H652.046ZM652.046 851.998V841.998H642.046V851.998H652.046ZM652.046 831.998V811.998L642.046 812.012V831.983L652.046 831.998ZM652.046 801.995V791.998H642.046V801.995H652.046ZM632.053 801.995L632.046 791.998H612.048L612.046 801.995H632.053ZM602.043 801.995V791.998H592.046V801.995H602.043ZM602.043 831.983V812.012H592.046V831.998L602.043 831.983ZM602.046 851.998V841.98H592.046V851.998H602.046ZM582.046 851.991V841.98H562.046V851.991H582.046ZM602.046 881.979V861.982H592.046V881.979H602.046ZM582.046 881.979V861.982H562.046V881.979H582.046ZM552.05 881.979V861.982H542.046V881.979H552.05ZM532.046 881.979V862.01H512.048V881.979H532.046ZM532.046 901.998V891.998H512.048V901.998H532.046ZM552.05 901.998V891.998H542.046V901.998H552.05ZM602.046 901.992V891.998L592.046 892.002V901.992H602.046ZM582.046 901.998V892.002L562.046 891.998V901.992L582.046 901.998ZM602.046 932.029V911.999H592.046V932.029H602.046ZM582.046 932.029V911.999H562.046V932.029H582.046ZM552.05 931.998V911.998H542.046V931.998H552.05ZM532.046 931.998V911.998H512.048V931.998H532.046ZM602.046 951.977V941.954H592.046V951.977H602.046ZM582.046 951.977V941.954H562.046V951.977H582.046ZM602.046 982.011V962.039H592.046V982.011H602.046ZM582.046 982.011V962.039H562.046V982.011H582.046ZM552.046 951.975V941.954L542.046 941.97V951.975H552.046ZM552.046 982.007V961.981L542.046 962.039V982.011L552.046 982.007ZM532.046 951.975V941.954H512.046V951.975H532.046ZM532.046 982.007V962.039H512.046V982.011L532.046 982.007Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M541.242 830.394L546.107 835.296L551.747 826.829L548.283 823.378L562.412 809.202L563.069 809.834L593.083 764.781H588.716L590.679 766.796L576.556 780.919L569.976 774.357L562.549 781.071L569.456 788.014L562.421 795.049L555.365 787.974L560.348 782.979C554.724 788.141 537.2 803.091 514.012 815.177L512.912 816.271L512.529 815.889L511.492 816.391C516.771 823.241 523.821 828.881 535.388 836.21L541.242 830.394ZM526.998 830.414L519.971 823.386L527.088 816.268L534.134 823.386L526.998 830.414ZM555.309 802.184L548.286 795.049L534.129 809.263L541.208 816.285L555.309 802.184Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M459.56 836.198C458.387 836.939 453.618 839.404 451.381 840.545L426.382 803.059L428.771 805.39L435.85 798.368L428.742 791.288L422.658 797.401L416.971 788.956L421.691 784.18L407.588 770.077L405.655 771.897L400.968 764.759H414.341C422.963 772.384 432.725 780.467 436.528 783.556L435.827 784.21L442.922 791.244L444.412 789.776L452.409 795.845L449.999 798.364L464.15 812.478L469.05 807.525L477.718 812.998L471.185 819.582L475.507 823.903C473.778 825.776 469.797 829.073 468.022 830.488L464.164 826.63L457.091 833.703L459.56 836.198ZM449.957 826.647L435.81 812.5L442.942 805.426L457.06 819.544L449.957 826.647Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M381.999 801.997H392.001V812.014H381.997L381.999 801.997Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M411.299 802L401.999 801.997V812.014L412.002 812V803.056L411.299 802Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M311.28 962H311.999V952L311.28 952V962ZM331.999 952V962H341.999V952H331.999ZM311.999 932V942H311.28V932H311.999ZM351.999 962H360.827L360.842 952H351.999V962ZM341.999 942H331.999V932H341.999V942ZM360.858 942L360.874 932H351.999V942H360.858ZM311.999 912L311.98 902H311.28V912H311.999ZM360.906 912H351.999V902H360.921L360.906 912ZM341.999 912V902H331.999V912H341.999ZM360.937 892H351.999V882.012H360.953L360.937 892ZM341.999 892H332.001V882.012H341.999V892ZM311.28 892V886.979C311.28 885.826 311.295 884.112 311.335 882.012H311.98L311.999 892H311.28ZM360.984 861.996L360.999 853C361.016 852.667 361.033 852.334 361.05 852H351.999V861.996H360.984ZM341.999 861.996V852H331.995L332.001 861.996H341.999ZM341.999 842V832H331.999L331.995 842H341.999ZM361.636 842H351.999V831.984H361.991V838.086C361.852 839.403 361.736 840.707 361.636 842ZM341.999 812H331.999V801.997H341.999V812ZM361.991 801.997V812.014H351.999V801.997H361.991Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M312 990L311.998 982H311.28V990L312 990ZM341.998 990L331.998 990V982H341.998V990ZM351.998 982L351.999 990L360.715 990L360.749 982H351.998Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M455.257 852.005H461.999V862.011L451.999 861.984V853.357C453.043 852.96 454.092 852.528 455.257 852.005Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M451.999 951.977V962.04H461.999V951.977H451.999Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M331.999 792V788.248C333.986 785.504 335.624 783.536 337.068 781.998H341.999V792H331.999ZM351.999 792L351.998 781.998L361.999 782V792H351.999ZM401.999 832H412.002L411.999 841.981H401.999V832ZM401.999 861.984V852L411.999 851.993V861.984H401.999ZM411.999 881.981H401.999V892.004H411.999V881.981ZM401.999 901.994V912.001H411.999V902L401.999 901.994ZM391.999 941.956V932.03H381.984L382.032 941.956H391.999ZM382.032 951.979L381.994 962.04H391.999V951.979H382.032ZM381.994 989.995L391.999 989.992V982.012H381.994V989.995ZM401.999 982.012V989.989L411.999 989.986V982.012H401.999ZM441.999 989.977L431.999 989.98V982.012L441.999 982.009V989.977ZM451.999 989.974L462.149 989.97L461.999 982.009L451.999 982.012V989.974ZM491.993 989.961L481.999 989.964V982.012L491.993 982.009V989.961ZM411.999 951.979V962.04H401.999V951.979H411.999ZM431.999 962.04L441.999 961.983V951.977L431.999 951.979V962.04ZM491.993 961.983L492.008 951.977H481.999V962.04L491.993 961.983ZM401.999 941.956H411.999V932.03H401.999V941.956ZM492.008 941.971L491.993 931.98L481.996 932L481.999 941.956L492.008 941.971ZM441.995 932L441.999 941.956H431.999V932.03L441.995 932ZM451.999 941.971L461.999 941.956V932H451.999V941.971ZM381.984 912.001H391.999V901.994H381.984V912.001ZM431.999 912.001L441.995 912V902L431.999 901.994V912.001ZM451.999 912H461.999V902H451.999V912ZM491.993 912.027L492.022 901.992L481.996 902V912L491.993 912.027ZM492.022 892.001L491.983 882.03L481.996 881.981V892L492.022 892.001ZM451.999 881.981H461.999V892H451.999V881.981ZM492.004 852.009L491.983 862.011H481.996V852.005L492.004 852.009ZM481.996 842.001L492.004 841.992L491.999 832.003H484.406C483.643 832.786 482.838 833.585 481.996 834.387V842.001ZM391.999 881.981V892L381.984 892.004L382 881.981H391.999ZM441.995 892V881.981H431.999V892H441.995ZM441.995 852L431.999 851.993V861.984H441.995V852ZM391.999 861.984H382L382.025 851.993L391.999 852V861.984ZM391.999 841.981L392.001 831.984H381.997L382.025 841.981H391.999ZM437.919 841.981L431.999 833.092V841.981H437.919ZM404.638 792H401.999V788.038L404.638 792ZM392.001 792V782H381.999L381.997 792H392.001Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M662.045 981.998V989.998H652.044L652.045 981.998H662.045ZM682.044 989.998H682.737V982.011L682.045 981.998L682.044 989.998ZM638.791 982.011L642.045 981.998V989.998H638.791L638.791 982.011Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M662.044 901.998V911.998H652.044V901.998H662.044Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M682.044 963.367V961.998V951.998H682.729L682.735 961.998L682.736 963.078L682.044 963.367ZM682.723 941.998H682.044V931.998H682.717L682.723 941.998ZM682.705 911.998L682.699 901.998H682.063L682.044 911.998H682.705ZM682.69 886.977L682.693 891.998H682.044L682.063 882.011H682.564C682.597 883.531 682.637 885.156 682.69 886.977ZM662.042 882.011H652.044V891.998H662.042V882.011ZM642.044 882.011V891.998H638.75L638.745 882.011H642.044ZM662.042 861.994L662.048 851.998H652.044V861.994H662.042ZM652.044 841.998H662.048L662.044 831.998H652.044V841.998ZM662.044 811.998H652.044V801.995H662.044V811.998ZM632.052 801.995H642.044V812.012H632.052V801.995ZM612.044 801.995L612.046 812.012H602.042V801.995H612.044ZM602.042 831.983L602.044 841.98H612.018L612.046 831.983H602.042ZM612.018 851.991L602.044 851.998V861.982H612.043L612.018 851.991ZM612.043 881.979H602.044V891.998L612.059 892.002L612.043 881.979ZM612.059 901.992H602.044V911.999H612.059V901.992ZM592.044 881.979V892.002H582.044V881.979H592.044ZM582.044 901.998V911.999H592.044V901.992L582.044 901.998ZM562.044 901.992V911.999L552.048 911.998V901.998L562.044 901.992ZM562.044 891.998V881.979H552.048V891.998H562.044ZM542.044 911.998V901.998H532.044V911.998H542.044ZM512.047 931.978V931.998L512.044 941.954L502.035 941.97L502.05 931.978H512.047ZM502.05 961.981L502.035 951.975H512.044V962.039L502.05 961.981ZM512.044 982.011V989.963L502.035 989.96L502.05 982.007L512.044 982.011ZM512.047 911.998L502.05 912.026L502.021 901.99L512.047 901.998V911.998ZM512.047 891.998L502.021 891.999L502.06 882.028L512.047 881.979V891.998ZM532.044 989.968L542.044 989.971V982.011L532.044 982.007V989.968ZM532.044 962.039V951.975H542.044V962.039H532.044ZM542.044 931.998V941.97L532.044 941.954V931.998H542.044ZM542.044 881.979V891.998H532.044V881.979H542.044ZM552.048 931.998L552.044 941.954H562.044V932.029L552.048 931.998ZM552.044 951.975V961.981L562.044 962.039V951.977L552.044 951.975ZM552.044 989.974V982.007L562.044 982.011V989.977L552.044 989.974ZM582.044 989.983V982.011H592.044V989.986L582.044 989.983ZM592.044 951.977V962.039H582.044V951.977H592.044ZM592.044 932.029V941.954H582.044V932.029H592.044ZM612.059 932.029H602.044V941.954H612.011L612.059 932.029ZM612.011 951.977H602.044V962.039H612.049L612.011 951.977ZM612.049 989.991V982.011H602.044V989.988L612.049 989.991ZM512.047 852.003V862.01H502.06L502.039 852.007L512.047 852.003ZM542.044 853.355V861.982L532.044 862.01V852.003H538.786C539.951 852.526 541 852.958 542.044 853.355ZM562.044 851.991V861.982H552.048V851.998L562.044 851.991ZM592.044 851.998V861.982H582.044V851.991L592.044 851.998ZM556.124 841.98L562.044 833.09V841.98H556.124ZM592.044 831.998V841.98H582.044L582.041 831.998H592.044ZM512.047 834.3V841.99H502.039V832.001H502.044H509.512C510.311 832.765 511.16 833.533 512.047 834.3ZM592.044 812.012V801.995H582.747L582.041 803.055V811.998L592.044 812.012ZM602.042 791.998H612.046L612.044 781.998H602.042V791.998ZM632.044 781.998V791.998H642.044L642.045 781.996L632.044 781.998ZM589.405 791.998L592.044 788.036V791.998H589.405ZM642.044 831.983V841.998H637.522C637.155 838.193 636.721 834.882 636.229 831.998L642.044 831.983ZM652.044 791.998H662.044L662.132 787C660.672 785.001 659.301 783.368 658.025 781.998L652.044 781.996V791.998ZM642.044 851.998H638.265C638.436 855.081 638.575 858.406 638.68 861.994H642.044V851.998ZM662.044 931.998V941.998H652.044V931.998H662.044ZM642.044 901.998V911.998H638.762L638.756 901.998H642.044ZM638.773 931.998L638.779 941.998H642.044V931.998H638.773ZM652.044 951.998H662.044V961.998H652.044V951.998ZM638.785 951.998L638.79 961.998H642.044V951.998H638.785Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.054 817.221L512.894 816.269L519.948 823.304L518.959 824.387C517.379 822.944 513.786 819.49 512.054 817.221Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M521.819 811.026L527.09 816.297L534.129 809.209L530.545 805.609C528.209 807.112 523.195 810.299 521.819 811.026Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M534.145 823.363L541.198 830.378L548.28 823.368L541.252 816.268L534.145 823.363Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M555.329 802.112L562.464 809.227L565.537 806.069L568.715 801.376L562.464 795.061L555.329 802.112Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M547.053 793.844L548.247 795.039L555.347 788.01L554.925 787.553C552.594 789.434 547.755 793.324 547.053 793.844Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M592.719 764.762L590.688 766.779L591.324 767.375L593.085 764.762H592.719Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M569.49 787.974L574.333 792.912L580.03 784.413L576.588 780.924L569.49 787.974Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M457.077 819.587L464.133 826.622L471.23 819.587L464.133 812.491L457.077 819.587Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M450.887 839.81L457.101 833.686L449.971 826.622L445.21 831.383L450.887 839.81Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M428.287 805.923L428.791 805.419L435.846 812.451L433.962 814.401L428.287 805.923Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M435.845 798.363L442.867 791.212L449.966 798.363L442.867 805.384L435.845 798.363Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M421.669 784.207L428.799 791.315L435.799 784.207L429.295 777.658L428.724 777.176L421.669 784.207Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M402.278 764.779L407.571 770.072L412.845 764.779H402.278Z",
    fill: base,
    fillOpacity: "0.37"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M596 990.051V782.011L598 778.987V990.051H596Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M396 989.952V779.041L398 782.017V989.952H396Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M646 974.245V990.037H648V974.022L646 974.245ZM648 962.842V773.64C647.681 773.424 646.534 772.747 646 772.435V962.731L648 962.842Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M348 962.543V773.27C347.638 773.476 346.516 774.208 346 774.548V962.501L348 962.543ZM346 974.486V989.985H348V974.55L346 974.486Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M360.891 946H311.283V948H360.891V946ZM372.939 948H494.054V946H372.939V948ZM500.022 948H626.748V946H500.022V948ZM682.734 948H638.798V946H682.734V948Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M361.116 896H311.28V898H361.116V896ZM373.121 898H494.036V896H373.121V898ZM500.019 898H626.732V896H500.019V898ZM682.741 898H638.734V896H682.741V898Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M494.02 846H466.61L463.194 848H494.02V846ZM500.065 848H531.783L528.362 846H500.065V848ZM448 989.984V854.735L446.709 855.176L446 854.102V989.984H448ZM372.906 846H440.616L441.938 848H373.017L372.906 846ZM361.275 848L361.386 846H313.548C313.484 846.563 313.352 847.751 313.339 848H361.275ZM408.63 798H326.034C326.418 797.23 326.896 796.346 327.088 796H407.288L408.63 798ZM553.38 846H627.398L627.239 848H552.037L553.38 846ZM680.773 848H638.022L637.852 846H680.566L680.773 848ZM546 990.051V855.037L547.054 855.499L548 854.078V990.051H546ZM585.329 798L586.675 796H667.716L668.715 798H585.329Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M525.639 823.35L527.056 821.933L518.161 813.03L516.3 814.01L525.639 823.35Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M528.469 823.348L527.053 824.764L542.419 840.131L542.754 840.292L543.806 838.7L528.469 823.348Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M527.056 821.933L525.639 823.35L527.053 824.764L528.469 823.348L527.056 821.933Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M563.795 788.03L562.387 789.438L570.99 797.964L572.097 796.294L563.795 788.03Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M560.964 788.028L562.376 786.617L559.451 783.706L557.897 784.988L560.964 788.028Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M521.996 826.992L523.578 828.238L527.053 824.764L525.639 823.35L521.996 826.992ZM562.387 789.438L528.469 823.348L527.056 821.933L560.964 788.028L562.387 789.438ZM563.795 788.03L587.036 764.794H584.201L562.376 786.617L563.795 788.03Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M562.387 789.438L563.795 788.03L562.376 786.617L560.964 788.028L562.387 789.438Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M463.073 834.033L464.745 832.896L464.159 832.311L462.757 833.717L463.073 834.033Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M482.528 815.801L481.294 815.133L464.159 832.311L464.745 832.896C472.886 827.186 479.172 820.282 482.528 815.801Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M461.334 835.143C461.922 834.781 462.502 834.41 463.073 834.033L462.757 833.717L461.334 835.143Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M428.746 796.975L430.175 798.402L441.276 787.348L439.641 786.033L428.746 796.975Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M428.78 799.791L427.357 798.37L424.922 800.816L426.044 802.516L428.78 799.791Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M464.159 832.311L462.757 833.717L428.78 799.791L430.175 798.402L464.159 832.311ZM428.746 796.975L409.721 777.992L415.316 786.348L427.357 798.37L428.746 796.975Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M430.175 798.402L428.746 796.975L427.357 798.37L428.78 799.791L430.175 798.402Z",
    fill: base,
    fillOpacity: "0.17"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.766 987.73C515.417 987.73 517.566 985.581 517.566 982.93C517.566 980.279 515.417 978.13 512.766 978.13C510.115 978.13 507.966 980.279 507.966 982.93C507.966 985.581 510.115 987.73 512.766 987.73Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.77 961.6C515.421 961.6 517.57 959.451 517.57 956.8C517.57 954.149 515.421 952 512.77 952C510.119 952 507.97 954.149 507.97 956.8C507.97 959.451 510.119 961.6 512.77 961.6Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.8 934.6C515.451 934.6 517.6 932.451 517.6 929.8C517.6 927.149 515.451 925 512.8 925C510.149 925 508 927.149 508 929.8C508 932.451 510.149 934.6 512.8 934.6Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.8 907.6C515.451 907.6 517.6 905.451 517.6 902.8C517.6 900.149 515.451 898 512.8 898C510.149 898 508 900.149 508 902.8C508 905.451 510.149 907.6 512.8 907.6Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.8 880.6C515.451 880.6 517.6 878.451 517.6 875.8C517.6 873.149 515.451 871 512.8 871C510.149 871 508 873.149 508 875.8C508 878.451 510.149 880.6 512.8 880.6Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.8 853.6C515.451 853.6 517.6 851.451 517.6 848.8C517.6 846.149 515.451 844 512.8 844C510.149 844 508 846.149 508 848.8C508 851.451 510.149 853.6 512.8 853.6Z",
    fill: colors.outline
  }));
};

var ChequeredShirtDark = {
  __proto__: null,
  Front: Front$e,
  Back: Back$e
};

var Crazy = function Crazy(_ref) {
  var withLashes = _ref.withLashes;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M274.398 579.526C273.398 551.166 292.398 527.166 317.678 515.966C320.332 514.88 323.059 513.978 325.838 513.266C339.853 509.802 354.596 510.756 368.048 515.996C371.116 517.177 374.1 518.567 376.978 520.156C406.508 536.046 419.768 573.406 408.338 603.616C407.18 606.662 405.782 609.611 404.158 612.436C400.17 620.744 394.146 627.91 386.648 633.266C384.146 635.107 381.524 636.778 378.798 638.266C351.418 651.266 314.418 647.266 292.348 626.866C290.138 624.523 288.096 622.027 286.238 619.396C284.115 616.393 282.252 613.215 280.668 609.896C277.315 603.091 275.386 595.673 274.998 588.096C274.636 585.253 274.435 582.392 274.398 579.526Z",
    fill: "black",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M272.768 561.176C271.768 532.816 290.768 508.816 316.048 497.616C318.699 496.53 321.422 495.628 324.198 494.916C338.211 491.434 352.958 492.37 366.418 497.596C369.483 498.777 372.463 500.167 375.338 501.756C404.868 517.646 418.128 555.016 406.698 585.216C405.548 588.266 404.15 591.216 402.518 594.036C401.135 596.745 399.561 599.352 397.808 601.836C396.079 604.299 394.181 606.638 392.128 608.836C389.908 611.033 387.528 613.062 385.008 614.906C382.508 616.749 379.885 618.42 377.158 619.906C349.778 632.906 312.778 628.906 290.718 608.516C288.507 606.17 286.465 603.671 284.608 601.036C282.482 598.033 280.615 594.855 279.028 591.536C275.665 584.757 273.722 577.363 273.318 569.806C272.96 566.944 272.776 564.062 272.768 561.176Z",
    fill: "white",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M331.643 551.024C342.737 551.024 351.73 542.031 351.73 530.937C351.73 519.843 342.737 510.85 331.643 510.85C320.549 510.85 311.556 519.843 311.556 530.937C311.556 542.031 320.549 551.024 331.643 551.024Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M586.888 571.466C587.318 556.336 593.558 541.376 601.988 530.136C604.14 527.116 606.521 524.264 609.108 521.606C620.608 509.618 636.01 502.13 652.541 500.489C669.072 498.848 685.646 503.163 699.278 512.656C701.55 514.242 703.73 515.954 705.808 517.786C732.808 539.236 735.928 580.926 721.128 611.016C719.69 613.408 718.093 615.699 716.348 617.876C714.034 620.777 711.5 623.496 708.768 626.006C688.498 643.836 656.958 648.136 631.358 638.426C627.71 637.051 624.182 635.378 620.808 633.426C602.908 622.646 590.438 602.336 587.378 581.196C586.963 577.971 586.799 574.717 586.888 571.466Z",
    fill: "black",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M592.378 559.996C592.798 545.846 598.798 531.846 606.898 521.336C608.982 518.502 611.275 515.828 613.758 513.336C625.008 502.097 639.817 495.12 655.646 493.598C671.476 492.077 687.342 496.106 700.528 504.996C702.71 506.473 704.806 508.073 706.808 509.786C732.808 529.856 735.808 568.856 721.548 597.006C720.166 599.251 718.629 601.396 716.948 603.426C714.715 606.142 712.278 608.683 709.658 611.026C690.148 627.706 659.798 631.736 635.168 622.646C631.654 621.343 628.253 619.754 624.998 617.896C607.778 607.816 595.778 588.816 592.828 569.046C592.435 566.047 592.285 563.02 592.378 559.996Z",
    fill: "white",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M672.199 608.701C692.922 608.701 709.721 591.901 709.721 571.179C709.721 550.456 692.922 533.656 672.199 533.656C651.476 533.656 634.677 550.456 634.677 571.179C634.677 591.901 651.476 608.701 672.199 608.701Z",
    fill: colors.outline
  }), withLashes && React__default.createElement(reactNativeSvg.G, null, React__default.createElement(LeftLash, null), React__default.createElement(RightLash, null)));
};

var Cute = function Cute(_ref) {
  var withLashes = _ref.withLashes;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M274.398 579.526C273.398 551.166 292.398 527.166 317.678 515.966C320.332 514.88 323.059 513.978 325.838 513.266C339.853 509.802 354.596 510.756 368.048 515.996C371.116 517.177 374.1 518.567 376.978 520.156C406.508 536.046 419.768 573.406 408.338 603.616C407.18 606.662 405.782 609.611 404.158 612.436C400.17 620.744 394.146 627.91 386.648 633.266C384.146 635.107 381.524 636.778 378.798 638.266C351.418 651.266 314.418 647.266 292.348 626.866C290.138 624.523 288.096 622.027 286.238 619.396C284.115 616.393 282.252 613.215 280.668 609.896C277.315 603.091 275.386 595.673 274.998 588.096C274.636 585.253 274.435 582.392 274.398 579.526Z",
    fill: "black",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M272.768 561.176C271.768 532.816 290.768 508.816 316.048 497.616C318.699 496.53 321.422 495.628 324.198 494.916C338.211 491.434 352.958 492.37 366.418 497.596C369.483 498.777 372.463 500.167 375.338 501.756C404.868 517.646 418.128 555.016 406.698 585.216C405.548 588.266 404.15 591.216 402.518 594.036C401.135 596.745 399.561 599.352 397.808 601.836C396.079 604.299 394.181 606.638 392.128 608.836C389.908 611.033 387.528 613.062 385.008 614.906C382.508 616.749 379.885 618.42 377.158 619.906C349.778 632.906 312.778 628.906 290.718 608.516C288.507 606.17 286.465 603.671 284.608 601.036C282.482 598.033 280.615 594.855 279.028 591.536C275.665 584.757 273.722 577.363 273.318 569.806C272.96 566.944 272.776 564.062 272.768 561.176Z",
    fill: "white",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M341.563 608.725C367.986 608.725 389.407 587.304 389.407 560.881C389.407 534.457 367.986 513.036 341.563 513.036C315.139 513.036 293.718 534.457 293.718 560.881C293.718 587.304 315.139 608.725 341.563 608.725Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M372.498 572.361C376.953 572.361 380.564 568.75 380.564 564.295C380.564 559.841 376.953 556.229 372.498 556.229C368.043 556.229 364.432 559.841 364.432 564.295C364.432 568.75 368.043 572.361 372.498 572.361Z",
    fill: "white"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M360.665 549.103C372.331 549.103 381.789 539.646 381.789 527.979C381.789 516.313 372.331 506.855 360.665 506.855C348.998 506.855 339.541 516.313 339.541 527.979C339.541 539.646 348.998 549.103 360.665 549.103Z",
    fill: "white"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M586.888 571.466C587.318 556.336 593.558 541.376 601.988 530.136C604.14 527.116 606.521 524.264 609.108 521.606C620.608 509.618 636.01 502.13 652.541 500.489C669.072 498.848 685.646 503.163 699.278 512.656C701.55 514.242 703.73 515.954 705.808 517.786C732.808 539.236 735.928 580.926 721.128 611.016C719.69 613.408 718.093 615.699 716.348 617.876C714.034 620.777 711.5 623.496 708.768 626.006C688.498 643.836 656.958 648.136 631.358 638.426C627.71 637.051 624.182 635.378 620.808 633.426C602.908 622.646 590.438 602.336 587.378 581.196C586.963 577.971 586.799 574.717 586.888 571.466Z",
    fill: "black",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M592.378 559.996C592.798 545.846 598.798 531.846 606.898 521.336C608.982 518.502 611.275 515.828 613.758 513.336C625.008 502.097 639.817 495.12 655.646 493.598C671.476 492.077 687.342 496.106 700.528 504.996C702.71 506.473 704.806 508.073 706.808 509.786C732.808 529.856 735.808 568.856 721.548 597.006C720.166 599.251 718.629 601.396 716.948 603.426C714.715 606.142 712.278 608.683 709.658 611.026C690.148 627.706 659.798 631.736 635.168 622.646C631.654 621.343 628.253 619.754 624.998 617.896C607.778 607.816 595.778 588.816 592.828 569.046C592.435 566.047 592.285 563.02 592.378 559.996Z",
    fill: "white",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M661.876 608.701C688.3 608.701 709.721 587.28 709.721 560.856C709.721 534.432 688.3 513.011 661.876 513.011C635.452 513.011 614.031 534.432 614.031 560.856C614.031 587.28 635.452 608.701 661.876 608.701Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M690.767 574.11C695.221 574.11 698.833 570.498 698.833 566.044C698.833 561.589 695.221 557.978 690.767 557.978C686.312 557.978 682.701 561.589 682.701 566.044C682.701 570.498 686.312 574.11 690.767 574.11Z",
    fill: "white"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M678.934 550.852C690.6 550.852 700.058 541.394 700.058 529.727C700.058 518.061 690.6 508.604 678.934 508.604C667.267 508.604 657.81 518.061 657.81 529.727C657.81 541.394 667.267 550.852 678.934 550.852Z",
    fill: "white"
  }), withLashes && React__default.createElement(reactNativeSvg.G, null, React__default.createElement(LeftLash, null), React__default.createElement(RightLash, null)));
};

var Dollars = function Dollars(_ref) {
  var withLashes = _ref.withLashes;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M274.398 579.526C273.398 551.166 292.398 527.166 317.678 515.966C320.332 514.88 323.059 513.978 325.838 513.266C339.853 509.802 354.596 510.756 368.048 515.996C371.116 517.177 374.1 518.567 376.978 520.156C406.508 536.046 419.768 573.406 408.338 603.616C407.18 606.662 405.782 609.611 404.158 612.436C400.17 620.744 394.146 627.91 386.648 633.266C384.146 635.107 381.524 636.778 378.798 638.266C351.418 651.266 314.418 647.266 292.348 626.866C290.138 624.523 288.096 622.027 286.238 619.396C284.115 616.393 282.252 613.215 280.668 609.896C277.315 603.091 275.386 595.673 274.998 588.096C274.636 585.253 274.435 582.392 274.398 579.526Z",
    fill: "black",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M272.768 561.176C271.768 532.816 290.768 508.816 316.048 497.616C318.699 496.53 321.422 495.628 324.198 494.916C338.211 491.434 352.958 492.37 366.418 497.596C369.483 498.777 372.463 500.167 375.338 501.756C404.868 517.646 418.128 555.016 406.698 585.216C405.548 588.266 404.15 591.216 402.518 594.036C401.135 596.745 399.561 599.352 397.808 601.836C396.079 604.299 394.181 606.638 392.128 608.836C389.908 611.033 387.528 613.062 385.008 614.906C382.508 616.749 379.885 618.42 377.158 619.906C349.778 632.906 312.778 628.906 290.718 608.516C288.507 606.17 286.465 603.671 284.608 601.036C282.482 598.033 280.616 594.855 279.028 591.536C275.665 584.757 273.722 577.363 273.318 569.806C272.96 566.944 272.776 564.062 272.768 561.176Z",
    fill: "white",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M586.888 571.466C587.318 556.336 593.558 541.376 601.988 530.136C604.14 527.116 606.521 524.264 609.108 521.606C620.608 509.618 636.01 502.13 652.541 500.489C669.072 498.848 685.646 503.163 699.278 512.656C701.55 514.242 703.73 515.954 705.808 517.786C732.808 539.236 735.928 580.926 721.128 611.016C719.69 613.408 718.093 615.699 716.348 617.876C714.034 620.777 711.5 623.496 708.768 626.006C688.498 643.836 656.958 648.136 631.358 638.426C627.71 637.051 624.182 635.378 620.808 633.426C602.908 622.646 590.438 602.336 587.378 581.196C586.963 577.971 586.8 574.717 586.888 571.466Z",
    fill: "black",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M592.378 559.996C592.798 545.846 598.798 531.846 606.898 521.336C608.982 518.502 611.275 515.828 613.758 513.336C625.009 502.097 639.817 495.12 655.646 493.598C671.476 492.077 687.342 496.106 700.528 504.996C702.71 506.473 704.807 508.073 706.808 509.786C732.808 529.856 735.808 568.856 721.548 597.006C720.166 599.251 718.629 601.396 716.948 603.426C714.715 606.142 712.278 608.683 709.658 611.026C690.148 627.706 659.798 631.736 635.168 622.646C631.654 621.343 628.253 619.754 624.998 617.896C607.778 607.816 595.778 588.816 592.828 569.046C592.435 566.047 592.285 563.02 592.378 559.996Z",
    fill: "white",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M366 574.928C366 559.556 350.057 555.277 337.836 549.515C330.414 545.645 331.35 536.407 341.986 535.784C347.886 535.426 353.95 537.181 359.436 539.116L362.021 527.313C355.543 525.335 349.743 524.432 344.571 524.296V517H337.429V524.647C323.536 526.56 316.114 535.304 316.114 545.072C316.114 562.544 336.45 565.21 343.1 568.313C352.171 572.384 350.493 580.855 342.286 582.726C335.164 584.345 326.079 581.521 319.25 578.855L316 590.637C322.386 593.949 330.036 595.712 337.429 595.848V603H344.571V595.454C356.407 593.791 366.014 587.241 366 574.928Z",
    fill: "#388E3C"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M689 574.928C689 559.556 673.057 555.277 660.836 549.515C653.414 545.645 654.35 536.407 664.986 535.784C670.886 535.426 676.95 537.181 682.436 539.116L685.021 527.313C678.543 525.335 672.743 524.432 667.571 524.296V517H660.429V524.647C646.536 526.56 639.114 535.304 639.114 545.072C639.114 562.544 659.45 565.21 666.1 568.313C675.171 572.384 673.493 580.855 665.286 582.726C658.164 584.345 649.079 581.521 642.25 578.855L639 590.637C645.386 593.949 653.036 595.712 660.429 595.848V603H667.571V595.454C679.407 593.791 689.014 587.241 689 574.928Z",
    fill: "#388E3C"
  }), withLashes && React__default.createElement(reactNativeSvg.G, null, React__default.createElement(LeftLash, null), React__default.createElement(RightLash, null)));
};

var Stars = function Stars(_ref) {
  var withLashes = _ref.withLashes;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M274.398 579.526C273.398 551.166 292.398 527.166 317.678 515.966C320.332 514.88 323.059 513.978 325.838 513.266C339.853 509.802 354.596 510.756 368.048 515.996C371.116 517.177 374.1 518.567 376.978 520.156C406.508 536.046 419.768 573.406 408.338 603.616C407.18 606.662 405.782 609.611 404.158 612.436C400.17 620.744 394.146 627.91 386.648 633.266C384.146 635.107 381.524 636.778 378.798 638.266C351.418 651.266 314.418 647.266 292.348 626.866C290.138 624.523 288.096 622.027 286.238 619.396C284.115 616.393 282.252 613.215 280.668 609.896C277.315 603.091 275.386 595.673 274.998 588.096C274.636 585.253 274.435 582.392 274.398 579.526Z",
    fill: "black",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M272.768 561.176C271.768 532.816 290.768 508.816 316.048 497.616C318.699 496.53 321.422 495.628 324.198 494.916C338.211 491.434 352.958 492.37 366.418 497.596C369.483 498.777 372.463 500.167 375.338 501.756C404.868 517.646 418.128 555.016 406.698 585.216C405.548 588.266 404.15 591.216 402.518 594.036C401.135 596.745 399.561 599.352 397.808 601.836C396.079 604.299 394.181 606.638 392.128 608.836C389.908 611.033 387.528 613.062 385.008 614.906C382.508 616.749 379.885 618.42 377.158 619.906C349.778 632.906 312.778 628.906 290.718 608.516C288.507 606.17 286.465 603.671 284.608 601.036C282.482 598.033 280.615 594.855 279.028 591.536C275.665 584.757 273.722 577.363 273.318 569.806C272.96 566.944 272.776 564.062 272.768 561.176Z",
    fill: "white",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M586.888 571.466C587.318 556.336 593.558 541.376 601.988 530.136C604.14 527.116 606.521 524.264 609.108 521.606C620.608 509.618 636.01 502.13 652.541 500.489C669.072 498.848 685.646 503.163 699.278 512.656C701.55 514.242 703.73 515.954 705.808 517.786C732.808 539.236 735.928 580.926 721.128 611.016C719.69 613.408 718.093 615.699 716.348 617.876C714.034 620.777 711.5 623.496 708.768 626.006C688.498 643.836 656.958 648.136 631.358 638.426C627.71 637.051 624.182 635.378 620.808 633.426C602.908 622.646 590.438 602.336 587.378 581.196C586.963 577.971 586.799 574.717 586.888 571.466Z",
    fill: "black",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M592.378 559.996C592.798 545.846 598.798 531.846 606.898 521.336C608.982 518.502 611.275 515.828 613.758 513.336C625.008 502.097 639.817 495.12 655.646 493.598C671.476 492.077 687.342 496.106 700.528 504.996C702.71 506.473 704.807 508.073 706.808 509.786C732.808 529.856 735.808 568.856 721.548 597.006C720.166 599.251 718.629 601.396 716.948 603.426C714.715 606.142 712.278 608.683 709.658 611.026C690.148 627.706 659.798 631.736 635.168 622.646C631.654 621.343 628.253 619.754 624.998 617.896C607.778 607.816 595.778 588.816 592.828 569.046C592.435 566.047 592.285 563.02 592.378 559.996Z",
    fill: "white",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M661.169 526.093C662.262 523.838 665.475 523.838 666.568 526.093L675.595 544.717C676.032 545.619 676.891 546.244 677.884 546.381L698.391 549.214C700.873 549.556 701.866 552.612 700.059 554.348L685.134 568.692C684.412 569.386 684.084 570.396 684.26 571.383L687.902 591.757C688.343 594.224 685.744 596.113 683.534 594.931L665.284 585.168C664.4 584.695 663.338 584.695 662.454 585.168L644.2 594.931C641.99 596.113 639.391 594.224 639.832 591.757L643.477 571.383C643.654 570.396 643.326 569.386 642.603 568.692L627.678 554.348C625.872 552.612 626.864 549.556 629.347 549.214L649.853 546.381C650.846 546.244 651.705 545.619 652.143 544.717L661.169 526.093Z",
    fill: "#FFC227"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M338.678 526.142C339.772 523.886 342.985 523.886 344.078 526.142L353.104 544.766C353.541 545.668 354.4 546.292 355.393 546.429L375.9 549.262C378.382 549.605 379.375 552.66 377.568 554.397L362.644 568.74C361.921 569.435 361.593 570.444 361.769 571.431L365.412 591.806C365.853 594.273 363.253 596.161 361.043 594.979L342.793 585.216C341.909 584.743 340.847 584.743 339.963 585.216L321.71 594.979C319.5 596.161 316.9 594.272 317.342 591.805L320.986 571.431C321.163 570.444 320.835 569.435 320.112 568.74L305.188 554.397C303.381 552.66 304.374 549.605 306.856 549.262L327.363 546.429C328.356 546.292 329.215 545.668 329.652 544.766L338.678 526.142Z",
    fill: "#FFC227"
  }), withLashes && React__default.createElement(reactNativeSvg.G, null, React__default.createElement(LeftLash, null), React__default.createElement(RightLash, null)));
};

var Cyborg = function Cyborg(_ref) {
  var withLashes = _ref.withLashes;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M740.88 614.731C757.949 578.895 766.788 539.694 766.75 500H558V539.5L697 545V679.901C714.72 660.521 729.526 638.571 740.88 614.731Z",
    fill: "#B0B0B0",
    stroke: colors.outline,
    strokeWidth: "12"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M766.75 500C766.75 372.599 677.432 266.055 558 239.574V500H766.75Z",
    fill: "#696969",
    stroke: colors.outline,
    strokeWidth: "12"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M589 465H624.5",
    stroke: "#3E3E3E",
    strokeWidth: "12",
    strokeLinecap: "round"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M589 444H624.5",
    stroke: "#3E3E3E",
    strokeWidth: "12",
    strokeLinecap: "round"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M734 473C739.523 473 744 468.523 744 463C744 457.477 739.523 453 734 453C728.477 453 724 457.477 724 463C724 468.523 728.477 473 734 473Z",
    fill: "#3E3E3E"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M271.4 568.53C270.4 540.17 289.4 516.17 314.68 504.97C317.335 503.883 320.061 502.981 322.84 502.27C336.855 498.806 351.598 499.759 365.05 505C368.118 506.18 371.102 507.57 373.98 509.16C403.51 525.05 416.77 562.41 405.34 592.62C404.182 595.666 402.784 598.615 401.16 601.44C397.172 609.748 391.149 616.913 383.65 622.27C381.148 624.111 378.526 625.781 375.8 627.27C348.42 640.27 311.42 636.27 289.35 615.87C287.14 613.527 285.098 611.031 283.24 608.4C281.117 605.397 279.254 602.219 277.67 598.9C274.317 592.095 272.388 584.677 272 577.1C271.638 574.257 271.437 571.396 271.4 568.53V568.53Z",
    fill: "#000000",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M269.77 550.18C268.77 521.82 287.77 497.82 313.05 486.62C315.701 485.533 318.424 484.631 321.2 483.92C335.213 480.438 349.96 481.374 363.42 486.6C366.485 487.78 369.466 489.17 372.34 490.76C401.87 506.65 415.13 544.02 403.7 574.22C402.55 577.269 401.152 580.219 399.52 583.04C398.138 585.749 396.564 588.356 394.81 590.84C393.081 593.302 391.183 595.641 389.13 597.84C386.91 600.037 384.53 602.066 382.01 603.91C379.51 605.753 376.887 607.424 374.16 608.91C346.78 621.91 309.78 617.91 287.72 597.52C285.509 595.174 283.467 592.674 281.61 590.04C279.484 587.037 277.618 583.859 276.03 580.54C272.667 573.761 270.724 566.366 270.32 558.81C269.962 555.947 269.778 553.065 269.77 550.18V550.18Z",
    fill: "white",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M338.51 563.03C345.27 563.03 350.75 557.55 350.75 550.79C350.75 544.03 345.27 538.55 338.51 538.55C331.75 538.55 326.27 544.03 326.27 550.79C326.27 557.55 331.75 563.03 338.51 563.03Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M583.89 560.47C584.32 545.34 590.56 530.38 598.99 519.14C601.143 516.12 603.523 513.268 606.11 510.61C617.61 498.622 633.012 491.133 649.543 489.492C666.074 487.852 682.648 492.166 696.28 501.66C698.552 503.245 700.732 504.958 702.81 506.79C729.81 528.24 732.93 569.93 718.13 600.02C716.692 602.411 715.095 604.703 713.35 606.88C711.036 609.781 708.502 612.499 705.77 615.01C685.5 632.84 653.96 637.14 628.36 627.43C624.713 626.054 621.184 624.382 617.81 622.43C599.91 611.65 587.44 591.34 584.38 570.2C583.965 566.974 583.802 563.721 583.89 560.47V560.47Z",
    fill: "#000000",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M589.38 549C589.8 534.85 595.8 520.85 603.9 510.34C605.984 507.506 608.277 504.832 610.76 502.34C622.01 491.101 636.819 484.123 652.648 482.602C668.478 481.08 684.344 485.11 697.53 494C699.712 495.477 701.809 497.076 703.81 498.79C729.81 518.86 732.81 557.86 718.55 586.01C717.168 588.255 715.631 590.4 713.95 592.43C711.717 595.146 709.28 597.686 706.66 600.03C687.15 616.71 656.8 620.74 632.17 611.65C628.656 610.346 625.255 608.758 622 606.9C604.78 596.82 592.78 577.82 589.83 558.05C589.437 555.05 589.287 552.024 589.38 549V549Z",
    fill: "#F44336",
    stroke: "#3E3E3E",
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M660 588C680.435 588 697 571.434 697 551C697 530.565 680.435 514 660 514C639.566 514 623 530.565 623 551C623 571.434 639.566 588 660 588Z",
    fill: "#FF8D8D"
  }), withLashes && React__default.createElement(LeftLash, null));
};

var SimplePatch = function SimplePatch(_ref) {
  var withLashes = _ref.withLashes;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M274.398 579.526C273.398 551.166 292.398 527.166 317.678 515.966C320.332 514.88 323.059 513.978 325.838 513.266C339.853 509.802 354.596 510.756 368.048 515.996C371.116 517.177 374.1 518.567 376.978 520.156C406.508 536.046 419.768 573.406 408.338 603.616C407.18 606.662 405.782 609.611 404.158 612.436C400.17 620.744 394.146 627.91 386.648 633.266C384.146 635.107 381.524 636.778 378.798 638.266C351.418 651.266 314.418 647.266 292.348 626.866C290.138 624.523 288.096 622.027 286.238 619.396C284.115 616.393 282.252 613.215 280.668 609.896C277.315 603.091 275.386 595.673 274.998 588.096C274.636 585.253 274.435 582.392 274.398 579.526Z",
    fill: "black",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M272.768 561.176C271.768 532.816 290.768 508.816 316.048 497.616C318.699 496.53 321.422 495.628 324.198 494.916C338.211 491.434 352.958 492.37 366.418 497.596C369.483 498.777 372.463 500.167 375.338 501.756C404.868 517.646 418.128 555.016 406.698 585.216C405.548 588.266 404.15 591.216 402.518 594.036C401.135 596.745 399.561 599.352 397.808 601.836C396.079 604.299 394.181 606.638 392.128 608.836C389.908 611.033 387.528 613.062 385.008 614.906C382.508 616.749 379.885 618.42 377.158 619.906C349.778 632.906 312.778 628.906 290.718 608.516C288.507 606.17 286.465 603.671 284.608 601.036C282.482 598.033 280.615 594.855 279.028 591.536C275.665 584.757 273.722 577.363 273.318 569.806C272.96 566.944 272.776 564.062 272.768 561.176Z",
    fill: "white",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M341.508 574.026C348.268 574.026 353.748 568.546 353.748 561.786C353.748 555.026 348.268 549.546 341.508 549.546C334.748 549.546 329.268 555.026 329.268 561.786C329.268 568.546 334.748 574.026 341.508 574.026Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M731.448 624.107C748.517 588.27 761.013 550.606 760.975 510.912C665.554 510.912 481.792 372.529 399.803 261.356C380.482 268.67 361.205 277.483 345.96 289.712C416.152 428.074 596.844 662.23 704.176 662.23C712.317 651.235 725.299 637.019 731.448 624.107Z",
    fill: "black",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M345.96 289.712C361.205 277.483 380.482 268.67 399.803 261.356C481.792 372.529 665.554 510.912 760.975 510.912C761.013 550.606 748.517 588.27 731.448 624.107C725.299 637.019 712.317 651.235 704.176 662.23C596.844 662.23 416.152 428.074 345.96 289.712Z",
    fill: "black",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M740.88 614.731C757.949 578.895 766.788 539.694 766.75 500C671.329 500 487.568 361.617 405.578 250.444C386.258 257.758 368.008 267.251 351.13 278.624C421.322 416.986 612.148 651.695 719.48 651.695C727.569 640 734.731 627.643 740.88 614.731Z",
    fill: "#633749"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M351.13 278.624C368.008 267.251 386.258 257.758 405.578 250.444C487.568 361.617 671.329 500 766.75 500C766.788 539.694 757.949 578.895 740.88 614.731C734.731 627.643 727.569 640 719.48 651.695C612.148 651.695 421.322 416.986 351.13 278.624Z",
    fill: "#633749"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M740.88 614.731C757.949 578.895 766.788 539.694 766.75 500C671.329 500 487.568 361.617 405.578 250.444C386.258 257.758 368.008 267.251 351.13 278.624C421.322 416.986 612.148 651.695 719.48 651.695C727.569 640 734.731 627.643 740.88 614.731Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M351.13 278.624C368.008 267.251 386.258 257.758 405.578 250.444C487.568 361.617 671.329 500 766.75 500C766.788 539.694 757.949 578.895 740.88 614.731C734.731 627.643 727.569 640 719.48 651.695C612.148 651.695 421.322 416.986 351.13 278.624Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), withLashes && React__default.createElement(LeftLash, null));
};

var PiratePatch = function PiratePatch(_ref) {
  var withLashes = _ref.withLashes;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M274.398 579.526C273.398 551.166 292.398 527.166 317.678 515.966C320.332 514.88 323.059 513.978 325.838 513.266C339.853 509.802 354.596 510.756 368.048 515.996C371.116 517.177 374.1 518.567 376.978 520.156C406.508 536.046 419.768 573.406 408.338 603.616C407.18 606.662 405.782 609.611 404.158 612.436C400.17 620.744 394.146 627.91 386.648 633.266C384.146 635.107 381.524 636.778 378.798 638.266C351.418 651.266 314.418 647.266 292.348 626.866C290.138 624.523 288.096 622.027 286.238 619.396C284.115 616.393 282.252 613.215 280.668 609.896C277.315 603.091 275.386 595.673 274.998 588.096C274.636 585.253 274.435 582.392 274.398 579.526Z",
    fill: "black",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M272.768 561.176C271.768 532.816 290.768 508.816 316.048 497.616C318.699 496.53 321.422 495.628 324.198 494.916C338.211 491.434 352.958 492.37 366.418 497.596C369.483 498.777 372.463 500.167 375.338 501.756C404.868 517.646 418.128 555.016 406.698 585.216C405.548 588.266 404.15 591.216 402.518 594.036C401.135 596.745 399.561 599.352 397.808 601.836C396.079 604.299 394.181 606.638 392.128 608.836C389.908 611.033 387.528 613.062 385.008 614.906C382.508 616.749 379.885 618.42 377.158 619.906C349.778 632.906 312.778 628.906 290.718 608.516C288.507 606.17 286.465 603.671 284.608 601.036C282.482 598.033 280.615 594.855 279.028 591.536C275.665 584.757 273.722 577.363 273.318 569.806C272.96 566.944 272.776 564.062 272.768 561.176Z",
    fill: "white",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M341.508 574.026C348.268 574.026 353.748 568.546 353.748 561.786C353.748 555.026 348.268 549.546 341.508 549.546C334.748 549.546 329.268 555.026 329.268 561.786C329.268 568.546 334.748 574.026 341.508 574.026Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M318.4 304.611C434.725 459.583 625.347 556.941 760.645 556.941",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M566.075 556.461C564.793 520.105 589.15 489.338 621.558 474.98C624.957 473.587 628.448 472.431 632.006 471.519C649.97 467.054 668.875 468.254 686.13 474.954C690.06 476.467 693.88 478.249 697.565 480.287C735.421 500.657 752.42 548.564 737.767 587.279C736.293 591.188 734.501 594.97 732.409 598.586C730.637 602.058 728.619 605.4 726.371 608.585C724.155 611.742 721.722 614.74 719.089 617.559C716.243 620.375 713.193 622.976 709.962 625.34C706.757 627.703 703.395 629.844 699.898 631.75C664.799 648.415 617.366 643.287 589.086 617.148C586.252 614.141 583.635 610.937 581.254 607.559C578.529 603.71 576.136 599.635 574.1 595.381C569.79 586.69 567.299 577.211 566.78 567.524C566.322 563.854 566.086 560.159 566.075 556.461Z",
    fill: "black",
    fillOpacity: "0.1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M573.149 546.415C571.936 512.026 594.975 482.924 625.629 469.343C628.844 468.026 632.146 466.932 635.512 466.069C652.504 461.846 670.386 462.981 686.708 469.319C690.424 470.75 694.038 472.435 697.524 474.363C733.331 493.631 749.41 538.946 735.551 575.566C734.156 579.263 732.461 582.84 730.482 586.261C728.806 589.545 726.897 592.706 724.771 595.719C722.675 598.705 720.373 601.541 717.883 604.207C715.191 606.871 712.306 609.331 709.25 611.567C706.218 613.802 703.038 615.828 699.731 617.63C666.53 633.394 621.664 628.544 594.915 603.819C592.234 600.974 589.758 597.943 587.506 594.749C584.928 591.107 582.665 587.254 580.739 583.229C576.662 575.009 574.306 566.043 573.816 556.88C573.382 553.408 573.159 549.914 573.149 546.415Z",
    fill: "#633749",
    stroke: colors.outline,
    strokeWidth: "12",
    strokeMiterlimit: "10"
  }), withLashes && React__default.createElement(LeftLash, null));
};

var Goatee = function Goatee(_ref) {
  var color = _ref.color;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var base = colors.hair[color].base;
  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M463 737L499.5 808L536 737H463Z",
    fill: base,
    stroke: colors.outline,
    strokeWidth: "12",
    strokeLinejoin: "round"
  }));
};

var Donut = function Donut() {
  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M521.78 911.305C519.379 918.401 512.864 922.935 505.8 923.147C503.78 923.208 501.715 922.916 499.689 922.228C490.576 919.137 485.692 909.233 488.779 900.109C491.867 890.985 501.758 886.094 510.871 889.186C510.884 889.19 510.897 889.195 510.91 889.199C519.997 892.306 524.863 902.194 521.78 911.305V911.305ZM556.617 895.86C556.577 895.655 556.538 895.45 556.496 895.246C556.202 895.32 555.903 895.38 555.602 895.428C554.006 895.682 552.329 895.566 550.694 895.011C545.273 893.172 540.048 887.247 541.899 881.777C542.16 881.004 541.338 880.284 541.748 879.619C540.394 879.727 538.998 879.568 537.632 879.104C534.405 878.01 532.075 875.466 531.109 872.432C530.672 871.062 530.513 869.592 530.676 868.11C528.763 870.112 528.599 871.406 525.952 871.763C524.299 871.986 522.587 871.845 520.921 871.279C514.836 869.215 511.676 862.302 513.863 855.839C514.024 855.363 514.213 854.906 514.421 854.463C514.43 854.443 514.439 854.422 514.449 854.402C489.037 849.237 464.318 863.677 455.779 888.913C446.515 916.286 461.168 945.996 488.507 955.271C492.512 956.63 496.567 957.471 500.601 957.837C524.102 959.971 546.875 945.864 554.781 922.501C557.791 913.607 558.272 904.467 556.617 895.86",
    fill: "#E4B987"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M557.131 899.07C542.317 921.505 518.143 946.36 481.754 952.441C483.908 953.524 486.159 954.475 488.507 955.271C492.512 956.63 496.567 957.471 500.601 957.837C524.102 959.971 546.875 945.864 554.781 922.501C557.419 914.705 558.114 906.719 557.131 899.07Z",
    fill: "#DAA56A"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M557.019 889.951C556.724 890.025 556.426 890.084 556.125 890.132C556.452 890.293 556.79 890.437 557.139 890.565C557.1 890.36 557.06 890.155 557.019 889.951",
    fill: "#D77C9C"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M522.303 906.01C519.902 913.106 513.386 917.64 506.322 917.852C504.302 917.912 502.238 917.621 500.212 916.933C491.099 913.841 486.214 903.938 489.302 894.814C492.39 885.689 502.28 880.799 511.393 883.89C511.407 883.895 511.419 883.9 511.433 883.904C520.52 887.011 525.386 896.899 522.303 906.01V906.01ZM557.139 890.565C556.79 890.437 556.452 890.293 556.125 890.132C554.528 890.387 552.851 890.271 551.216 889.716C545.796 887.877 542.903 881.952 544.754 876.481C545.015 875.709 545.36 874.989 545.77 874.324C544.416 874.432 543.02 874.273 541.653 873.809C538.426 872.714 536.097 870.171 535.13 867.137C534.693 865.767 534.535 864.296 534.697 862.814C532.785 864.817 530.289 866.111 527.641 866.468C525.988 866.691 524.276 866.549 522.61 865.984C516.525 863.92 513.365 857.007 515.552 850.543C515.713 850.068 515.902 849.611 516.11 849.168C492.795 847.288 470.299 861.36 462.451 884.55C453.188 911.924 467.841 941.633 495.18 950.908C497.152 951.578 541.796 961.527 555.304 917.206C558.041 908.224 558.794 899.171 557.139 890.565",
    fill: "#D0527F"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M557.019 889.951C556.724 890.025 556.426 890.084 556.125 890.132C556.452 890.293 556.79 890.437 557.139 890.565C557.1 890.36 557.06 890.155 557.019 889.951",
    fill: "#D77C9C"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M557.962 897.798C544.722 918.248 523.68 941.062 492.645 949.976C493.477 950.306 494.322 950.618 495.18 950.908C497.152 951.578 541.796 961.527 555.304 917.206C557.284 910.708 558.219 904.174 557.962 897.798Z",
    fill: "#CD4176"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M511.381 859.409V854.28C511.008 854.271 510.635 854.26 510.259 854.26C485.018 854.26 464.557 874.748 464.557 900.021C464.557 910.522 468.092 920.195 474.031 927.917C470.169 921.202 467.958 913.414 467.958 905.109C467.958 880.602 487.2 860.599 511.381 859.409",
    fill: "#D36A99"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M483.313 920.686L480.711 921.767L477.377 913.72L479.979 912.639L483.313 920.686Z",
    fill: "#A1C6D9"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M532.167 872.581L531.921 875.391L523.253 874.633L523.498 871.823L532.167 872.581Z",
    fill: "#A1C6D9"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M472.981 894.79L471.48 892.403L478.844 887.762L480.345 890.15L472.981 894.79",
    fill: "#F4D331"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M537.905 916.806L539.002 914.207L547.016 917.6L545.919 920.199L537.905 916.806Z",
    fill: "#A1C6D9"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M494.014 867.605L495.378 865.136L502.992 869.354L501.628 871.823L494.014 867.605Z",
    fill: "#C72B2C"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M522.633 931.132L524.672 929.185L530.678 935.488L528.639 937.436L522.633 931.132",
    fill: "#F4D331"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M495.572 937.436L494.071 935.048L501.435 930.407L502.936 932.795L495.572 937.436",
    fill: "#C72B2C"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M537.167 900.66L535.666 898.272L543.03 893.631L544.531 896.019L537.167 900.66",
    fill: "#F4D331"
  }));
};

var Rainbow = function Rainbow() {
  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M576.591 917.667C570.964 882.736 539.727 856 502.014 856C464.299 856 433.06 882.736 427.433 917.667H471.893C478.916 901.042 498.086 893.258 514.711 900.281C522.55 903.592 528.788 909.829 532.098 917.667H576.591Z",
    fill: "#DB735C"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M565.593 917.677C560.139 888.485 533.78 866.425 502.014 866.425C470.214 866.425 443.81 888.458 438.362 917.677H471.83C478.896 901.017 498.13 893.239 514.791 900.305C522.616 903.623 528.845 909.852 532.163 917.677H565.593Z",
    fill: "#D3AC5C"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M555.11 917.677H532.224C527.233 905.441 515.254 897.512 502.04 897.697C490.468 897.631 479.734 903.728 473.863 913.701C473.759 913.883 473.655 914.092 473.551 914.274C472.89 915.362 472.314 916.5 471.83 917.677H449.466C455.286 893.447 477.123 876.486 502.04 876.844C526.803 876.844 548.724 895.548 555.11 917.677Z",
    fill: "#60A867"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M501.759 887.827C482.863 887.575 466.039 899.748 460.367 917.774H471.732C472.239 916.595 472.832 915.455 473.504 914.362C473.609 914.179 473.713 913.971 473.817 913.788C479.688 903.815 490.421 897.719 501.994 897.784C515.21 897.603 527.187 905.536 532.178 917.774H544.012C537.462 900.026 520.676 888.128 501.759 887.827Z",
    fill: "#6CC3E1"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M486.018 920.284C485.95 920.284 485.887 920.301 485.818 920.304C479.459 909.976 465.932 906.759 455.604 913.118C454.514 913.789 453.485 914.554 452.529 915.404C449.405 911.86 444.903 909.838 440.179 909.858C431.394 909.712 424.152 916.712 424 925.497C424.017 930.096 426.09 934.447 429.651 937.356C429.486 938.171 429.399 939.001 429.393 939.833C429.393 947.749 436.637 954.169 445.572 954.169C450.054 954.216 454.376 952.5 457.606 949.391C460.582 950.82 463.842 951.562 467.143 951.563C474.772 951.607 481.864 947.641 485.818 941.116C485.887 941.119 485.95 941.136 486.018 941.136C491.776 941.331 496.603 936.822 496.798 931.064C496.993 925.305 492.483 920.479 486.725 920.284C486.49 920.276 486.254 920.276 486.018 920.284Z",
    fill: "#DAE4E8"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M464.447 943.743C448.13 943.843 432.976 935.305 424.607 921.297C424.209 922.662 424.004 924.075 424 925.497C424.016 930.096 426.089 934.447 429.651 937.356C429.485 938.171 429.399 939.001 429.393 939.833C429.393 947.75 436.637 954.169 445.572 954.169C450.054 954.216 454.376 952.5 457.605 949.391C460.582 950.82 463.841 951.562 467.143 951.563C474.772 951.608 481.864 947.641 485.818 941.116C485.886 941.119 485.949 941.136 486.018 941.136C491.827 941.229 496.63 936.632 496.792 930.824C488.091 939.158 476.495 943.79 464.447 943.743Z",
    fill: "#D3D3D3"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M583 921.587C582.887 914.998 577.455 909.747 570.866 909.858C569.503 909.871 568.152 910.109 566.866 910.563C558.534 902.686 545.507 902.67 537.155 910.525C534.474 908.393 531.148 907.239 527.723 907.251C519.67 907.117 513.032 913.534 512.893 921.587C512.937 927.064 516.108 932.033 521.056 934.381C521.008 934.887 520.982 935.402 520.982 935.923C520.765 944.335 527.401 951.333 535.812 951.563C539.641 951.547 543.305 950.003 545.992 947.276C549.357 951.645 554.566 954.194 560.08 954.169C569.597 954.327 577.443 946.744 577.607 937.226C577.604 935.386 577.291 933.559 576.68 931.822C580.524 929.85 582.958 925.908 583 921.587Z",
    fill: "#DAE4E8"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M583 921.587C582.994 919.159 582.213 916.797 580.77 914.844C574.64 931.283 558.608 941.892 541.081 941.11C533.988 940.867 527.078 938.796 521.021 935.098C521.007 935.373 520.982 935.644 520.982 935.923C520.765 944.335 527.401 951.333 535.812 951.563C539.641 951.547 543.305 950.004 545.992 947.276C549.357 951.645 554.566 954.194 560.08 954.169C569.597 954.327 577.443 946.744 577.607 937.226C577.604 935.386 577.291 933.559 576.68 931.822C580.524 929.85 582.958 925.908 583 921.587Z",
    fill: "#D3D3D3"
  }));
};

var Back$f = function Back() {
  return React__default.createElement(React__default.Fragment, null);
};
var Front$f = function Front(_ref) {
  var hairColor = _ref.hairColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var _colors$hair$hairColo = colors.hair[hairColor],
      base = _colors$hair$hairColo.base,
      shadow = _colors$hair$hairColo.shadow;
  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M749.5 424C598.5 337 408 334 250.5 424C292 290.5 410.5 239.5 496 239.5C633 239.5 722.5 330.5 749.5 424Z",
    fill: "black",
    fillOpacity: "0.15"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M458.5 362.5L436 176.238C458.5 120.238 545 127.738 563.5 176.238L545 362.5C532 384 470.5 384.5 458.5 362.5Z",
    fill: base,
    stroke: colors.outline,
    strokeWidth: "12"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M459.5 154.939V186.175C459.5 192.175 469.5 192.175 469.5 186.175V149.128C466.025 150.571 462.676 152.914 459.5 154.939Z",
    fill: shadow
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M510 143.886V201.675C510 207.675 523 207.675 523 201.675V147.111C518.783 145.781 514.424 144.516 510 143.886Z",
    fill: shadow
  }));
};

var Mohawk = {
  __proto__: null,
  Back: Back$f,
  Front: Front$f
};

var Front$g = function Front() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.G, {
    transform: {
      scale: 1,
      origin: 'center'
    }
  }, React__default.createElement(reactNativeSvg.Path, {
    d: "M477.706 297.731C476.729 299.149 476.77 301.033 477.806 302.407C491.491 320.567 519.231 338.299 554.786 349.624C590.468 360.989 634.48 366.056 681.144 358.448C683.182 358.116 684.632 356.286 684.491 354.226L662.991 41.2259C662.874 39.5288 661.697 38.0911 660.056 37.642C658.416 37.1928 656.67 37.8304 655.706 39.2315L477.706 297.731Z",
    fill: "#79D1FF",
    stroke: colors.outline,
    strokeWidth: "8",
    strokeLinejoin: "round"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M481 300C507 334.5 588.5 369.5 680.5 354.5L659 41.5V339C615 347.5 507 334.5 481 300Z",
    fill: "#4FB5EB"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M678 272C628 297 554 296.5 491.5 280L527 229.5C575.5 239.5 624.5 238.5 674.5 221.5L678 272Z",
    fill: "#FFDA58",
    stroke: colors.outline,
    strokeWidth: "5"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M670.5 170.5C632.5 184.5 603 190 555 187.5L588.5 139C613 141.5 635.5 139 667.5 129.5L670.5 170.5Z",
    fill: "#FFDA58",
    stroke: colors.outline,
    strokeWidth: "5"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M521.5 331.5C569.5 260.5 660.33 61 660.33 61L659.5 48.5C659.5 48.5 541.5 260 499.5 318L507.5 323.5L515 328L518.5 330L521.5 331.5Z",
    fill: "white",
    fillOpacity: "0.5"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M646.649 35.5709C650.649 37.5709 653.649 42.4043 654.649 44.5709L656.149 43.0709C653.349 33.8709 646.149 29.0709 642.649 27.0709C641.149 25.9043 637.849 24.1709 636.649 26.5709C635.449 28.9709 637.483 30.9043 638.649 31.5709L646.649 35.5709Z",
    fill: colors.outline,
    fillOpacity: "0.6"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M677.783 35.3664C671.783 35.3664 664.95 39.3664 662.283 41.3664L662.783 44.3664C666.383 41.1664 672.616 39.8664 675.283 39.8664C676.394 39.8664 678.483 39.9664 679.283 40.3664C680.083 40.7664 680.616 40.8664 680.783 40.8664C683.183 40.8664 683.783 38.8664 683.783 37.8664C683.783 35.8664 679.783 35.3664 677.783 35.3664Z",
    fill: colors.outline,
    fillOpacity: "0.6"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M662.283 38.3664C667.45 32.533 680.883 20.8664 693.283 20.8664C696.116 21.033 701.783 21.9664 701.783 24.3664C701.783 25.3664 700.864 27.7337 697.283 27.3664C677.783 25.3664 665.783 35.3664 662.283 40.8664V38.3664Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M661.283 34.8664C664.616 26.3664 673.283 9.36637 681.283 9.36637C682.45 9.36637 684.783 9.66637 684.783 10.8664C684.783 12.0664 682.45 13.6997 681.283 14.3664C677.283 16.533 667.883 24.2664 662.283 37.8664L661.283 34.8664Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M660.283 36.8664C660.283 25.3664 655.283 9.36636 649.283 2.36636C648.283 1.1997 645.883 -0.833635 644.283 0.366365C642.683 1.56637 643.616 4.86636 644.283 6.36636C648.95 12.533 658.383 27.5664 658.783 38.3664L660.283 36.8664Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M657.783 40.8664C655.283 28.3664 646.283 14.3664 636.783 9.36636C635.053 8.45604 633.283 7.36636 632.283 8.86636C630.989 10.807 634.45 14.033 636.283 15.3664C642.683 20.5664 651.283 25.8664 656.283 42.8664L657.783 40.8664Z",
    fill: colors.outline
  }));
};
var Back$g = Noop;

var Party = {
  __proto__: null,
  Front: Front$g,
  Back: Back$g
};

var Front$h = function Front(_ref) {
  var color = _ref.color;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var base = colors.clothing[color].base;
  return React__default.createElement(reactNativeSvg.G, {
    transform: {
      scale: 1,
      origin: 'center'
    }
  }, React__default.createElement(reactNativeSvg.Path, {
    d: "M331 453C414.833 434 604.1 408.5 690.5 458.5C660.5 410.5 574.3 363.5 491.5 363.5C428.5 363.5 342.2 408.6 331 453Z",
    fill: "black",
    fillOpacity: "0.15"
  }), React__default.createElement(reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M477.5 215.5C236 253 190 432.5 226 597C242.632 673 298.98 696.047 320.5 755.5C350 837 413.5 843.5 480.5 843.5C555 843.5 681.4 776 687 814C697.8 811.2 699 765.5 665 755.5C715 767.311 740.395 707.5 769 639.5C826 504 791.5 215.5 477.5 215.5ZM254.5 565C254.5 441.4 430 415.5 540.5 395.5C635.5 416.5 748.5 469.4 748.5 565C748.5 631.5 633.4 722 489 744C301.4 704 254.5 611.5 254.5 565Z",
    fill: base,
    stroke: colors.outline,
    strokeWidth: "12"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M258 535.5C246.5 454 259.3 381 318.5 315C278 387 265 433.5 258 535.5Z",
    fill: "black",
    fillOpacity: "0.2"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M666 760L668 752C644.667 745 590.6 736.4 561 758C581.333 752 630.8 744 666 760Z",
    fill: "black",
    fillOpacity: "0.2"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M345 748.5C380.5 839.5 479.5 831 611.5 790.5C380.5 828.5 372.333 771.5 345 748.5Z",
    fill: "black",
    fillOpacity: "0.2"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M332 705.5C376.5 758.5 370 801.5 528.5 791.5C431 786.5 403.5 778.5 332 705.5Z",
    fill: "white",
    fillOpacity: "0.2"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M302.5 418C338.5 286.5 440.5 259 563.5 290C446.7 283.6 363 315.881 302.5 418Z",
    fill: "white",
    fillOpacity: "0.2"
  }));
};
var Back$h = Noop;

var Hijab = {
  __proto__: null,
  Front: Front$h,
  Back: Back$h
};

var PiercedTongue = function PiercedTongue() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M443.14,621.86c0-18.9,113.72-16.06,113.72,0a56.86,56.86,0,0,1-113.72,0Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M443.14,621.86c0-18.9,113.72-16.06,113.72,0a56.86,56.86,0,0,1-113.72,0Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: "10",
    strokeWidth: "6px"
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "500.5",
    cy: "721.5",
    r: "6.5",
    fill: "#FFC227",
    stroke: colors.outline,
    strokeWidth: "3"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M532.49,646.6c0-8.06-14.55-14.6-32.49-14.6s-32.49,6.54-32.49,14.6h0v44.34c0,14.41,14.55,26.08,32.49,26.08s32.49-11.67,32.49-26.08V646.61Z",
    fill: colors.tongue
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M532.49,646.6c0-8.06-14.55-14.6-32.49-14.6s-32.49,6.54-32.49,14.6h0v44.34c0,14.41,14.55,26.08,32.49,26.08s32.49-11.67,32.49-26.08V646.61Z",
    fill: "none",
    stroke: colors.outline,
    strokeMiterlimit: "10",
    strokeWidth: "8px"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M479.31,626.6l.91-.21.76-.14c.49-.08,1-.14,1.46-.18a21.42,21.42,0,0,1,2.89-.1,25,25,0,0,1,5.79.81,21.39,21.39,0,0,1,10.34,6.11A20.07,20.07,0,0,1,506.54,643a17.19,17.19,0,0,1-1.37,10.35c-2.08-2.93-3.66-5.55-5.32-7.76a27.26,27.26,0,0,0-2.46-3,14.09,14.09,0,0,0-2.69-2.16,15.31,15.31,0,0,0-6.11-2.08,25.67,25.67,0,0,0-3.43-.22c-.59,0-1.18,0-1.76,0l-.85.06-.4,0c-.09,0-.29,0-.22,0Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Rect, {
    x: "498",
    y: "685",
    width: "5",
    height: "19",
    rx: "2.5",
    fill: "#FFC227",
    stroke: colors.outline,
    strokeWidth: "2"
  }), React__default.createElement(reactNativeSvg.Circle, {
    cx: "500.5",
    cy: "684.5",
    r: "8.5",
    fill: "#FFC227",
    stroke: colors.outline,
    strokeWidth: "3"
  }));
};

var VomitingRainbow = function VomitingRainbow() {
  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  return React__default.createElement(reactNativeSvg.G, null, React__default.createElement(reactNativeSvg.Path, {
    d: "M502.028 653.013C531.824 653.013 555.978 641.354 555.978 626.973C555.978 612.592 531.824 600.934 502.028 600.934C472.232 600.934 448.078 612.592 448.078 626.973C448.078 641.354 472.232 653.013 502.028 653.013Z",
    fill: colors.outline,
    stroke: colors.outline,
    strokeWidth: "8"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M424.659 769.064C424.659 780.492 414.374 783.349 414.374 792.492C414.374 797.063 417.574 798.206 421.231 798.206C426.373 798.206 428.088 792.949 428.088 790.206C428.088 783.921 424.659 780.154 424.659 769.064Z",
    fill: "#EE3430"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M445.339 746C445.973 749.839 441.424 752.009 438.882 754.955C437.249 756.848 435.292 758.779 432.087 758.779C427.516 758.779 425.231 752.265 425.231 749.065C425.231 743.923 428.659 735.809 428.659 730.781C428.659 693.799 447.584 685.285 444.975 631.835C444.727 626.767 447.479 621.924 452.166 619.979C453.283 619.516 454.391 619.066 455.49 618.631C458.57 625.148 472.085 632.766 457.592 675.259C447.938 703.564 443.002 726.08 445.339 746Z",
    fill: "#EE3430"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M424.659 769.064C424.659 780.492 414.374 783.349 414.374 792.492C414.374 797.063 417.574 798.206 421.231 798.206C426.373 798.206 428.088 792.949 428.088 790.206C428.088 783.921 424.659 780.154 424.659 769.064Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "4"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M445.339 746C445.973 749.839 441.424 752.009 438.882 754.955C437.249 756.848 435.292 758.779 432.087 758.779C427.516 758.779 425.231 752.265 425.231 749.065C425.231 743.923 428.659 735.809 428.659 730.781C428.659 693.799 447.584 685.285 444.975 631.835C444.727 626.767 447.479 621.924 452.166 619.979C453.283 619.516 454.391 619.066 455.49 618.631C458.57 625.148 472.085 632.766 457.592 675.259C447.938 703.564 443.002 726.08 445.339 746Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "4"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M453.23 830.204C441.802 830.204 436.088 820.49 436.088 813.633C436.088 792.492 450.945 783.921 450.945 762.779C450.945 759.619 450.144 756.945 448.923 754.98C447.64 752.915 446.033 750.901 445.673 748.497C442.597 727.961 447.534 704.753 457.593 675.259C472.086 632.766 458.571 625.148 455.491 618.631C463.137 615.605 470.37 613.263 477.385 611.616C474.815 629.335 470.842 670.631 475.515 694.063C480.187 717.494 472.048 746.589 467.394 758.208C464.116 760.065 462.373 764.095 462.373 769.636C462.373 775.773 463.333 781.334 464.588 786.323C460.58 794.4 453.54 814.344 457.446 829.508C456.113 829.959 454.704 830.204 453.23 830.204Z",
    fill: "#FF9326",
    stroke: colors.outline,
    strokeWidth: "4"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M472.085 757.065C481.227 757.065 485.227 764.607 485.227 778.778C485.227 791.92 482.827 803.805 475.513 817.062C466.371 833.632 458.943 844.717 458.943 857.06C458.943 872.487 469.114 878.773 477.799 878.773C479.713 878.773 481.945 877.978 484.124 876.614C469.052 851.759 478.874 829.508 491.657 802.777C505.621 773.576 498.726 744.494 497.136 730.781C495.545 717.067 494.369 690.316 499.831 657.13C504.2 630.58 498.01 613.958 494.369 608.966C488.783 609.375 483.157 610.261 477.384 611.616C474.813 629.335 470.841 670.631 475.513 694.063C480.186 717.494 472.046 746.589 467.393 758.208C468.712 757.46 470.281 757.065 472.085 757.065Z",
    fill: "#F2D80F"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M464.586 786.323C466.954 795.735 470.371 803.113 470.371 808.491C470.371 817.269 465.209 826.88 457.444 829.508C453.539 814.344 460.578 794.4 464.586 786.323Z",
    fill: "#F2D80F"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M472.085 757.065C481.227 757.065 485.227 764.607 485.227 778.778C485.227 791.92 482.827 803.805 475.513 817.062C466.371 833.632 458.943 844.717 458.943 857.06C458.943 872.487 469.114 878.773 477.799 878.773C479.713 878.773 481.945 877.978 484.124 876.614C469.052 851.759 478.874 829.508 491.657 802.777C505.621 773.576 498.726 744.494 497.136 730.781C495.545 717.067 494.369 690.316 499.831 657.13C504.2 630.58 498.01 613.958 494.369 608.966C488.783 609.375 483.157 610.261 477.384 611.616C474.813 629.335 470.841 670.631 475.513 694.063C480.186 717.494 472.046 746.589 467.393 758.208C468.712 757.46 470.281 757.065 472.085 757.065Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "4"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M464.586 786.323C466.954 795.735 470.371 803.113 470.371 808.491C470.371 817.269 465.209 826.88 457.444 829.508C453.539 814.344 460.578 794.4 464.586 786.323Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "4"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M493.798 861.059C493.798 851.917 486.941 846.774 486.941 833.632C486.941 827.347 489.341 822.204 494.369 822.204C500.083 822.204 500.829 826.886 502.94 830.204C506.94 836.489 509.797 837.061 514.368 837.061C515.71 837.061 517.02 836.695 518.24 836.059C506.683 806.274 516.083 771.896 518.24 758.779C520.397 745.662 529.796 727.748 522.939 686.778C517.454 654.003 519.511 622.37 521.225 610.65C512.08 608.867 503.275 608.312 494.369 608.966C498.01 613.958 504.2 630.58 499.831 657.13C494.369 690.316 495.545 717.067 497.136 730.781C498.726 744.494 505.621 773.576 491.657 802.777C478.874 829.508 469.052 851.759 484.124 876.614C489.1 873.5 493.798 867.418 493.798 861.059Z",
    fill: "#79FF44",
    stroke: colors.outline,
    strokeWidth: "4"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.205 843.742C513.624 848.785 510.369 854.387 510.369 857.06C510.369 859.917 513.34 861.631 516.083 861.631C518.826 861.631 521.226 859.345 521.226 857.06C521.226 852.609 513.859 848.592 512.205 843.742Z",
    fill: "#278CFF"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M525.226 824.49C525.226 819.347 522.94 815.462 522.94 811.348C522.94 807.919 525.683 802.777 529.797 802.777C530.993 802.777 531.972 803.179 532.865 803.795C540.236 794.099 540.926 778.286 540.349 771.592C539.157 768.77 538.368 765.86 538.368 762.779C538.368 757.065 540.882 751.351 544.082 751.351C536.653 733.798 538.368 704.75 541.347 672.215C543.73 646.186 540.354 623.404 538.368 615.266C532.463 613.271 526.782 611.734 521.226 610.65C519.512 622.37 517.454 654.003 522.94 686.779C529.797 727.748 520.398 745.662 518.24 758.779C516.083 771.896 506.684 806.274 518.24 836.059C522.214 833.986 525.226 829.037 525.226 824.49Z",
    fill: "#278CFF"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M512.205 843.742C513.624 848.785 510.369 854.387 510.369 857.06C510.369 859.917 513.34 861.631 516.083 861.631C518.826 861.631 521.226 859.345 521.226 857.06C521.226 852.609 513.859 848.592 512.205 843.742ZM512.205 843.742C512.16 843.611 512.12 843.479 512.083 843.346C512.127 843.478 512.168 843.61 512.205 843.742ZM525.226 824.49C525.226 819.347 522.94 815.462 522.94 811.348C522.94 807.919 525.683 802.777 529.797 802.777C530.993 802.777 531.972 803.179 532.865 803.795C540.236 794.099 540.926 778.286 540.349 771.592C539.157 768.77 538.368 765.86 538.368 762.779C538.368 757.065 540.882 751.351 544.082 751.351C536.653 733.798 538.368 704.75 541.347 672.215C543.73 646.186 540.354 623.404 538.368 615.266C532.463 613.271 526.782 611.734 521.226 610.65C519.512 622.37 517.454 654.003 522.94 686.779C529.797 727.748 520.398 745.662 518.24 758.779C516.083 771.896 506.684 806.274 518.24 836.059C522.214 833.986 525.226 829.037 525.226 824.49Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "4"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M543.51 810.205C549.796 810.205 551.51 802.205 551.51 797.634C551.51 788.145 544.021 780.283 540.35 771.592C540.926 778.286 540.236 794.099 532.865 803.795C535.811 805.83 537.81 810.205 543.51 810.205Z",
    fill: "#423EFF"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M542.114 745.728C543.111 749.203 547.062 751.532 548.46 754.866C548.958 756.055 549.224 757.425 549.224 758.779C549.224 765.064 549.224 769.636 554.367 769.636C565.5 769.636 567.393 753.195 563.5 744C560.539 737.006 556.653 730.209 556.653 723.924C556.653 723.5 556.75 723.042 556.925 722.592C557.335 721.533 557.92 720.518 558.078 719.394C560.561 701.794 560.179 675.002 559.656 663.473C558.146 657.343 557.283 648.217 558.044 631.658C558.273 626.683 555.542 621.986 550.951 620.057C546.628 618.24 542.445 616.644 538.368 615.266C540.354 623.404 543.73 646.186 541.347 672.214C538.667 701.485 537.01 727.934 542.114 745.728Z",
    fill: "#423EFF"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M543.51 810.205C549.796 810.205 551.51 802.205 551.51 797.634C551.51 788.145 544.021 780.283 540.35 771.592C540.926 778.286 540.236 794.099 532.865 803.795C535.811 805.83 537.81 810.205 543.51 810.205Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "4"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M542.114 745.728C543.111 749.203 547.062 751.532 548.46 754.866C548.958 756.055 549.224 757.425 549.224 758.779C549.224 765.064 549.224 769.636 554.367 769.636C565.5 769.636 567.393 753.195 563.5 744C560.539 737.006 556.653 730.209 556.653 723.924C556.653 723.5 556.75 723.042 556.925 722.592C557.335 721.533 557.92 720.518 558.078 719.394C560.561 701.794 560.179 675.002 559.656 663.473C558.146 657.343 557.283 648.217 558.044 631.658C558.273 626.683 555.542 621.986 550.951 620.057C546.628 618.24 542.445 616.644 538.368 615.266C540.354 623.404 543.73 646.186 541.347 672.214C538.667 701.485 537.01 727.934 542.114 745.728Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "4"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M552.192 814.092C553.538 816.628 552.653 819.324 552.653 823.347C552.653 832.489 561.795 837.061 566.367 837.061C569.224 837.061 570.366 834.547 570.366 831.347C570.914 824.225 557.807 821.83 552.192 814.092Z",
    fill: "#8627FF"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M560.081 719.924C561.91 719.924 564.081 723.352 566.938 723.352C569.795 723.352 570.938 717.981 570.938 714.781C570.938 710.21 569.109 709.524 568.652 702.211C568.652 676.006 562.775 676.14 559.656 663.473C560.17 674.812 560.548 700.915 558.199 718.516C558.098 719.273 559.317 719.924 560.081 719.924Z",
    fill: "#8627FF"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M552.192 814.092C553.538 816.628 552.653 819.324 552.653 823.347C552.653 832.489 561.795 837.061 566.367 837.061C569.224 837.061 570.366 834.547 570.366 831.347C570.914 824.225 557.807 821.83 552.192 814.092ZM552.192 814.092C551.95 813.759 551.723 813.416 551.51 813.062C551.784 813.404 552.009 813.747 552.192 814.092ZM560.081 719.924C561.91 719.924 564.081 723.352 566.938 723.352C569.795 723.352 570.938 717.981 570.938 714.781C570.938 710.21 569.109 709.524 568.652 702.211C568.652 676.006 562.775 676.14 559.656 663.473C560.17 674.812 560.548 700.915 558.199 718.516C558.098 719.273 559.317 719.924 560.081 719.924V719.924Z",
    fill: "none",
    stroke: colors.outline,
    strokeWidth: "4"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M455 626C456.5 634.5 459.529 637.5 458 657C461.5 642 460 633.5 455 626Z",
    fill: "white"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M424 786C424.833 788.5 425.4 793.6 421 794C422 792.667 424 788.8 424 786Z",
    fill: "white"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M558 829C565.5 837 567.5 831 566 829C566.8 832.2 560.833 830.333 558 829Z",
    fill: "white"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M559.5 744.5C562 752 564.5 760.5 554.5 765.5C560.5 759.5 561 754.5 559.5 744.5Z",
    fill: "white"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M535 623C538.5 629.5 539.5 653.5 536.5 666C537 657 537 636.5 535 623Z",
    fill: "white"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M523 766C518 774 518 789.5 518 799C519 789.833 521.4 769.6 523 766Z",
    fill: "white"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M433 729C432.5 717 436.2 703.6 439 698C437.5 703.333 433.8 717.4 433 729Z",
    fill: "white"
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M444 796C441.5 802.5 437 818 448 825C442.5 817 442.4 803.6 444 796Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M470 691C473 695.5 475 713 471 726C471.833 722.167 472 701.5 470 691Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M493 618C496.5 622.5 499 640 495 657C496 645 496 633.5 493 618Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M502.5 676C500.5 682.5 499 710 502 722C501.5 709 502.333 685.5 502.5 676Z",
    fill: colors.outline
  }), React__default.createElement(reactNativeSvg.Path, {
    d: "M484 845C491.5 858 491 864 486 869C488 860.5 486.8 852.6 484 845Z",
    fill: colors.outline
  }));
};

var BgCircle = function BgCircle(_ref) {
  var bgColor = _ref.bgColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var color = colors.bgColors[bgColor];
  return React__default.createElement(reactNativeSvg.Circle, {
    cx: "500",
    cy: "630.1601",
    r: "332.441995",
    fill: color
  });
};

var BgSquare = function BgSquare(_ref) {
  var bgColor = _ref.bgColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var color = colors.bgColors[bgColor];
  return React__default.createElement(reactNativeSvg.Path, {
    d: "M832.442 297.718H167.558V962.602H832.442V297.718Z",
    fill: color
  });
};

var BgSquircle = function BgSquircle(_ref) {
  var bgColor = _ref.bgColor;

  var _useTheme = useTheme(),
      colors = _useTheme.colors;

  var color = colors.bgColors[bgColor];
  return React__default.createElement(reactNativeSvg.Path, {
    d: "M167.56 630.16C167.56 337.613 207.453 297.72 500 297.72C792.547 297.72 832.44 337.613 832.44 630.16C832.44 922.707 792.547 962.6 500 962.6C207.453 962.6 167.56 922.707 167.56 630.16Z",
    fill: color
  });
};

var BgCircleMask = function BgCircleMask(_ref) {
  var id = _ref.id;
  return React__default.createElement(reactNativeSvg.Mask, {
    id: id
  }, React__default.createElement(reactNativeSvg.Path, {
    d: "M1000,0H0V718.31H179.2c38.38,142.38,167.45,247.1,320.8,247.1s282.42-104.72,320.8-247.1H1000Z",
    fill: "white"
  }));
};

var BgSquareMask = function BgSquareMask(_ref) {
  var id = _ref.id;
  return React__default.createElement(reactNativeSvg.Mask, {
    id: id,
    // @ts-ignore
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "1000",
    height: "963"
  }, React__default.createElement(reactNativeSvg.Path, {
    d: "M1000 0H0V718.31H167.551V962.594H832.441V718.31H1000V0Z",
    fill: "white"
  }));
};

var BgSquircleMask = function BgSquircleMask(_ref) {
  var id = _ref.id;
  return React__default.createElement(reactNativeSvg.Mask, {
    id: id,
    // @ts-ignore
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "1000",
    height: "963"
  }, React__default.createElement(reactNativeSvg.Path, {
    d: "M0 0H1000V630.154H832.44C832.44 922.701 792.547 962.594 500 962.594C207.453 962.594 167.56 922.701 167.56 630.154H0V0Z",
    fill: "white"
  }));
};

var eyesMap = {
  normal: NormalEyes,
  leftTwitch: LeftTwitchEyes,
  happy: HappyEyes,
  content: ContentEyes,
  squint: SquintEyes,
  simple: SimpleEyes,
  dizzy: DizzyEyes,
  wink: WinkEyes,
  hearts: HeartEyes,
  crazy: Crazy,
  cute: Cute,
  dollars: Dollars,
  stars: Stars,
  cyborg: Cyborg,
  simplePatch: SimplePatch,
  piratePatch: PiratePatch
};
var eyebrowsMap = {
  raised: NormalEyebrows,
  leftLowered: LeftLoweredEyebrows,
  serious: SeriousEyebrows,
  angry: AngryEyebrows,
  concerned: ConcernedEyebrows
};
var mouthsMap = {
  grin: Grin,
  sad: SadMouth,
  openSmile: SmileOpen,
  lips: Lips,
  open: OpenMouth,
  serious: SeriousMouth,
  tongue: Tongue,
  piercedTongue: PiercedTongue,
  vomitingRainbow: VomitingRainbow
};
var hairMap = {
  none: {
    Front: Noop,
    Back: Noop
  },
  "long": LongHair,
  bun: BunHair,
  "short": ShortHair,
  pixie: PixieCut,
  balding: BaldingHair,
  buzz: BuzzCut,
  afro: Afro,
  bob: BobCut,
  mohawk: Mohawk
};
var facialHairMap = {
  none: Noop,
  none2: Noop,
  none3: Noop,
  stubble: StubbleBeard,
  mediumBeard: MediumBeard,
  goatee: Goatee
};
var clothingMap = {
  naked: {
    Back: Noop,
    Front: Noop
  },
  shirt: {
    Back: Shirt,
    Front: Noop
  },
  dressShirt: {
    Back: DressShirt,
    Front: Noop
  },
  vneck: {
    Back: VNeck,
    Front: Noop
  },
  tankTop: {
    Back: TankTop,
    Front: Noop
  },
  dress: Dress,
  denimJacket: {
    Back: DenimJacket,
    Front: Noop
  },
  hoodie: {
    Back: Hoodie,
    Front: Noop
  },
  chequeredShirt: ChequeredShirt,
  chequeredShirtDark: ChequeredShirtDark
};
var accessoryMap = {
  none: Noop,
  roundGlasses: RoundGlasses,
  tinyGlasses: TinyGlasses,
  shades: Shades,
  faceMask: FaceMask,
  hoopEarrings: HoopEarrings
};
var graphicsMap = {
  none: Noop,
  redwood: RedwoodGraphic,
  gatsby: GatsbyGraphic,
  vue: Vue,
  react: ReactGraphic,
  graphQL: GraphQLGraphic,
  donut: Donut,
  rainbow: Rainbow
};
var hatMap = {
  none: {
    Front: Noop,
    Back: Noop
  },
  none2: {
    Front: Noop,
    Back: Noop
  },
  none3: {
    Front: Noop,
    Back: Noop
  },
  none4: {
    Front: Noop,
    Back: Noop
  },
  none5: {
    Front: Noop,
    Back: Noop
  },
  beanie: Beanie,
  turban: Turban,
  party: Party,
  hijab: Hijab
};
var bodyMap = {
  chest: Chest,
  breasts: Breasts
};
var bgShapeMap = {
  circle: {
    Shape: BgCircle,
    Mask: BgCircleMask
  },
  square: {
    Shape: BgSquare,
    Mask: BgSquareMask
  },
  squircle: {
    Shape: BgSquircle,
    Mask: BgSquircleMask
  }
};

function selectRandomKey(object) {
  return Object.keys(object)[Math.floor(Math.random() * Object.keys(object).length)];
}

var Avatar = function Avatar(_ref) {
  var _ref$skinTone = _ref.skinTone,
      skinTone = _ref$skinTone === void 0 ? selectRandomKey(colors.skin) : _ref$skinTone,
      _ref$eyes = _ref.eyes,
      eyes = _ref$eyes === void 0 ? selectRandomKey(eyesMap) : _ref$eyes,
      _ref$eyebrows = _ref.eyebrows,
      eyebrows = _ref$eyebrows === void 0 ? selectRandomKey(eyebrowsMap) : _ref$eyebrows,
      _ref$mouth = _ref.mouth,
      mouth = _ref$mouth === void 0 ? selectRandomKey(mouthsMap) : _ref$mouth,
      _ref$hair = _ref.hair,
      hair = _ref$hair === void 0 ? selectRandomKey(hairMap) : _ref$hair,
      _ref$facialHair = _ref.facialHair,
      facialHair = _ref$facialHair === void 0 ? selectRandomKey(facialHairMap) : _ref$facialHair,
      _ref$clothing = _ref.clothing,
      clothing = _ref$clothing === void 0 ? selectRandomKey(clothingMap) : _ref$clothing,
      _ref$accessory = _ref.accessory,
      accessory = _ref$accessory === void 0 ? selectRandomKey(accessoryMap) : _ref$accessory,
      _ref$graphic = _ref.graphic,
      graphic = _ref$graphic === void 0 ? selectRandomKey(graphicsMap) : _ref$graphic,
      _ref$hat = _ref.hat,
      hat = _ref$hat === void 0 ? selectRandomKey(hatMap) : _ref$hat,
      _ref$body = _ref.body,
      body = _ref$body === void 0 ? selectRandomKey(bodyMap) : _ref$body,
      _ref$hairColor = _ref.hairColor,
      hairColor = _ref$hairColor === void 0 ? selectRandomKey(colors.hair) : _ref$hairColor,
      _ref$clothingColor = _ref.clothingColor,
      clothingColor = _ref$clothingColor === void 0 ? selectRandomKey(colors.clothing) : _ref$clothingColor,
      _ref$bgShape = _ref.bgShape,
      bgShape = _ref$bgShape === void 0 ? selectRandomKey(bgShapeMap) : _ref$bgShape,
      _ref$bgColor = _ref.bgColor,
      bgColor = _ref$bgColor === void 0 ? selectRandomKey(colors.bgColors) : _ref$bgColor,
      _ref$lipColor = _ref.lipColor,
      lipColor = _ref$lipColor === void 0 ? selectRandomKey(colors.lipColors) : _ref$lipColor,
      _ref$hatColor = _ref.hatColor,
      hatColor = _ref$hatColor === void 0 ? selectRandomKey(colors.clothing) : _ref$hatColor,
      _ref$showBackground = _ref.showBackground,
      showBackground = _ref$showBackground === void 0 ? true : _ref$showBackground,
      _ref$lashes = _ref.lashes,
      lashes = _ref$lashes === void 0 ? Math.random() > 0.5 : _ref$lashes,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 100 : _ref$size,
      _ref$containerStyles = _ref.containerStyles,
      containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
      _ref$containerProps = _ref.containerProps,
      containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
      svgRef = _ref.svgRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["skinTone", "eyes", "eyebrows", "mouth", "hair", "facialHair", "clothing", "accessory", "graphic", "hat", "body", "hairColor", "clothingColor", "bgShape", "bgColor", "lipColor", "hatColor", "showBackground", "lashes", "size", "containerStyles", "containerProps", "svgRef"]);

  var skin = colors.skin[skinTone];
  var Eyes = eyesMap[eyes];
  var Eyebrows = eyebrowsMap[eyebrows];
  var Mouth = mouthsMap[mouth];
  var Hair = hairMap[hair];
  var FacialHair = facialHairMap[facialHair];
  var Clothing = clothingMap[clothing];
  var Accessory = accessoryMap[accessory];
  var Graphic = graphicsMap[graphic];
  var Hat = hatMap[hat];
  var Body = bodyMap[body];
  var BgShape = bgShapeMap[bgShape];
  return React__default.createElement(ThemeContext.Provider, {
    value: {
      colors: colors,
      skin: skin
    }
  }, React__default.createElement(Base, Object.assign({
    svgRef: svgRef,
    eyes: Eyes,
    eyebrows: Eyebrows,
    mouth: Mouth,
    hair: Hair,
    facialHair: FacialHair,
    clothing: Clothing,
    accessory: Accessory,
    graphic: Graphic,
    hat: Hat,
    body: Body,
    hatColor: hatColor,
    hairColor: hairColor,
    clothingColor: clothingColor,
    bgShape: BgShape,
    bgColor: bgColor,
    lipColor: lipColor,
    showBackground: showBackground,
    lashes: lashes,
    size: size,
    containerStyles: containerStyles,
    containerProps: containerProps
  }, rest)));
};

exports.Avatar = Avatar;
exports.Base = Base;
exports.BigHead = Avatar;
exports.accessoryMap = accessoryMap;
exports.bgShapeMap = bgShapeMap;
exports.bodyMap = bodyMap;
exports.clothingMap = clothingMap;
exports.eyebrowsMap = eyebrowsMap;
exports.eyesMap = eyesMap;
exports.facialHairMap = facialHairMap;
exports.graphicsMap = graphicsMap;
exports.hairMap = hairMap;
exports.hatMap = hatMap;
exports.mouthsMap = mouthsMap;
exports.theme = theme;
//# sourceMappingURL=react-native-bigheads.cjs.development.js.map
