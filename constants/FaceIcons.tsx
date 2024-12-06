import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface IconProps {
  color: string;
  size?: number;
}

const faceIcons: Array<{ name: string; icon: React.ReactNode }> = [
  {
    name: 'angry',
    icon: (
      <FontAwesome6
        name='face-angry'
        size={50}
        color= '#e34242'

      />
    ),
  },
  {
    name: 'sad',
    icon: (
      <FontAwesome6
        name='face-frown'
        size={50}
        color='#425de3'
      />
    ),
  },
  {
    name: 'meh',
    icon: (
      <FontAwesome6
        name='face-meh'
        size={50}
        color='#e3b342'
      />
    ),
  },
  {
    name: 'smile',
    icon: (
      <FontAwesome6
        name='face-smile'
        size={50}
        color='#c5ea2e'
      />
    ),
  },
  {
    name: 'grin',
    icon: (
      <FontAwesome6
        name='face-laugh-squint'
        size={50}
        color='#04fa00'
      />
    ),
  }
];

export default faceIcons;
