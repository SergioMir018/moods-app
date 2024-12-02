import { View, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Colors } from '@/constants/Colors';
import icons from '@/constants/TabBarIcons';
import { useTheme } from '@/components/common/ThemeContext';

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { colors } = useTheme();

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: colors.foreground,
        borderCurve: 'continuous',
        borderRadius: 25,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        position: 'absolute',
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            canPreventDefault: true,
            target: route.key,
            type: 'tabPress',
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            target: route.key,
            type: 'tabLongPress',
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              alignItems: 'center',
              flex: 1,
              gap: 1,
              justifyContent: 'center',
            }}
          >
            {icons[route.name] &&
              icons[route.name]({
                color: isFocused ? colors.tint : 'grey',
              })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
