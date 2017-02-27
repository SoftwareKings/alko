// Styles
import { Colors } from '../Themes';

const slideLeft = (props) => {
  const { layout, position, scene } = props;

  const direction = (scene.navigationState && scene.navigationState.direction) ?
    scene.navigationState.direction : 'horizontal';

  const index = scene.index;
  const inputRange = [index - 1, index, index + 1];
  const width = layout.initWidth;
  const height = layout.initHeight;

  const opacity = position.interpolate({
    inputRange,
    //  default: outputRange: [1, 1, 0.3],
    outputRange: [1, 1, 0.95],
  });

  const scale = position.interpolate({
    inputRange,
    //  default: outputRange: [1, 1, 0.95],
    outputRange: [1, 1, 1],
  });

  let translateX = 0;
  let translateY = 0;

  switch (direction) {
    case 'horizontal':
      translateX = position.interpolate({
        inputRange,
        //  default: outputRange: [width, 0, -10],
        outputRange: [width, 0, -width],
      });
      break;
    case 'vertical':
      translateY = position.interpolate({
        inputRange,
        //  default: outputRange: [height, 0, -10],
        outputRange: [height, 0, 0],
      });
      break;
    default:
      break;
  }

  return {
    backgroundColor: Colors.brand.dark,
    opacity,
    transform: [
      { scale },
      { translateX },
      { translateY },
    ],
  };
};

export { slideLeft };
