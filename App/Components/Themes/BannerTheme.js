import style from '../Styles/BannerStyle';
import { Colors } from '../../Themes';

const BannerStyleThemes = {
  info: {
    gradientColors: [Colors.brand.yellow, Colors.brand.shadow.yellow],
    iconColor: Colors.brand.black,
  },
  alert: {
    gradientColors: [Colors.brand.orange, Colors.brand.shadow.orange],
    textStyle: style.alertText,
    iconColor: Colors.snow,
  },
};

export default BannerStyleThemes;
