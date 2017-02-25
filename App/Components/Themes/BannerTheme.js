import style from '../Styles/BannerStyle';
import { Colors } from '../../Themes';

const BannerStyleThemes = {
  info: {
    gradientColors: [Colors.selectiveYellow, Colors.webOrange],
    iconColor: Colors.black,
  },
  alert: {
    gradientColors: [Colors.sorbus, Colors.bamboo],
    textStyle: style.alertText,
    iconColor: Colors.snow,
  },
};

export default BannerStyleThemes;
