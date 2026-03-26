import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../styles/colors';
import { RootStackNavigationProp } from '../../navigation';

interface AppHeaderProps {
	title: string;
	icon?: string;
	onPress?: () => void;
	showBackButton?: boolean;
}

const AppHeader = ({ title, icon, onPress, showBackButton = false }: AppHeaderProps) => {
	const navigation = useNavigation<RootStackNavigationProp>();

	return (
		<Appbar.Header style={{ backgroundColor: colors.black }}>
			{showBackButton && navigation.canGoBack() && (
				<Appbar.BackAction color={colors.onSurface} onPress={() => navigation.goBack()} />
			)}
			<Appbar.Content color={colors.onSurface} title={title} />
			{icon && <Appbar.Action color={colors.onSurface} icon={icon} onPress={onPress} />}
		</Appbar.Header>
	);
};

export default AppHeader;
