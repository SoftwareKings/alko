import style from '../Styles/ButtonStyle';
import { Colors } from '../../Themes';

const ButtonThemes = {
  primary: {
    gradient: true,
    gradientColors: [Colors.blazeOrange, Colors.christine],
  },
  dark: {
    style: style.darkBtn,
    textStyle: style.darkBtnText,
  },
  disallow: {
    style: style.btnDisallow,
    textStyle: style.btnDisallowText,
  },
};

export default ButtonThemes;
