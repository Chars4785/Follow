import { Dimensions, Platform } from 'react-native';
import SafeArea from 'react-native-safe-area';

const screenDimensions = Dimensions.get('window');
const designDimensions = { width: 750, height: 1560 };

const LayoutConfig = {
    SCREEN_WIDTH: screenDimensions.width,
    SCREEN_HEIGHT: screenDimensions.height,

    DESIGN_WIDTH: designDimensions.width,
    DESIGN_HEIGHT: designDimensions.height,

    DESIGN_WIDTH_RATIO: screenDimensions.width / designDimensions.width,
    DESIGN_HEIGHT_RATIO: screenDimensions.height / designDimensions.height,

    NAVBAR_BASE_HEIGHT: 44,
    STATUSBAR_HEIGHT: Platform.OS === 'ios' ? 20 : 0,
    SEARCHBAR_HEIGHT: 48,

    SAFEAREA_INSETS: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        hasBeenSetup: Platform.OS !== 'ios',
    },

    INPUT_BASE_HEIGHT: 22,
    INPUT_BASE_FONTSIZE: 15,
};

LayoutConfig.NAVBAR_HEIGHT = LayoutConfig.NAVBAR_BASE_HEIGHT + LayoutConfig.STATUSBAR_HEIGHT;

if (Platform.OS === 'ios') {
    SafeArea.getSafeAreaInsetsForRootView().then((result) => {
        const { safeAreaInsets } = result;
        LayoutConfig.STATUSBAR_HEIGHT = safeAreaInsets.top;

        const navBarHeight = LayoutConfig.NAVBAR_BASE_HEIGHT + LayoutConfig.STATUSBAR_HEIGHT;
        LayoutConfig.NAVBAR_HEIGHT = navBarHeight;
        LayoutConfig.SAFEAREA_INSETS = { ...safeAreaInsets, hasBeenSetup: true };
    });
}

export default LayoutConfig;
