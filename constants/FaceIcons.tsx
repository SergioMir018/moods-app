import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface FaceIcon {
  name: string;
  icon: (size?: number) => JSX.Element;
}

const faceIcons: Array<FaceIcon> = [
  {
    name: 'angry',
    icon: (size = 50) => (
      <FontAwesome6
        name='face-angry'
        size={size}
        color='#e34242'
      />
    ),
  },
  {
    name: 'sad',
    icon: (size = 50) => (
      <FontAwesome6
        name='face-frown'
        size={size}
        color='#425de3'
      />
    ),
  },
  {
    name: 'meh',
    icon: (size = 50) => (
      <FontAwesome6
        name='face-meh'
        size={size}
        color='#e3b342'
      />
    ),
  },
  {
    name: 'smile',
    icon: (size = 50) => (
      <FontAwesome6
        name='face-smile'
        size={size}
        color='#c5ea2e'
      />
    ),
  },
  {
    name: 'grin',
    icon: (size = 50) => (
      <FontAwesome6
        name='face-laugh-squint'
        size={size}
        color='#04fa00'
      />
    ),
  },
];

export default faceIcons;
