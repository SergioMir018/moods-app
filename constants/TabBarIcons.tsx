import Feather from '@expo/vector-icons/Feather';

interface IconProps {
  color: string;
  size?: number;
}

const icons: { [key: string]: (props: IconProps) => JSX.Element } = {
  settings: (props) => (
    <Feather
      name='settings'
      size={24}
      {...props}
    />
  ),
  index: (props) => (
    <Feather
      name='home'
      size={24}
      {...props}
    />
  ),
};

export default icons;
