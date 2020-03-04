import { PixelRatio } from 'react-native';
import LayoutConfig from '../../config/LayoutConfig';

// -없는 전화 번호 정규식
const REG_PHONE = /^(010|011|012|013|014|015|016|017|018|019|02|031|032|033|041|042|043|044|051|052|053|054|055|061|062|063|064|070)\d{3,4}\d{4}$/;

// email 정규식
const REG_EMAIL = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

// 이름 정규식
const REG_NAME = /^[0-9|a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힝]{2,10}$/i;

const REG_PASSWORD = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,20}$/;

const REG_SERIAL_NUM = /^[0-9|a-z|A-Z]{6}$/i;

const getCombinedStyles = (baseStyle, ...styles) => {
    if (styles.length < 1) {
        return baseStyle;
    } if (styles.length === 1 && !styles[0]) {
        return baseStyle;
    }

    const newStyle = Array.isArray(baseStyle) ? baseStyle : [baseStyle];
    for (let i = 0; i < styles.length; i += 1) {
        const style = styles[i];
        if (style) {
            if (Array.isArray(style)) {
                newStyle.push(...style);
            } else {
                newStyle.push(style);
            }
        }
    }
    return newStyle;
};

const relayRef = (ref, refVarName, refRelayFuncPropName, component) => {
    // eslint-disable-next-line no-param-reassign
    component[refVarName] = ref;
    const { [refRelayFuncPropName]: relayFunc } = component.props;
    if (relayFunc) {
        relayFunc(ref);
    }
};

const getWidthScaledValue = (val, limits = {}) => getScaledValue(
    val,
    LayoutConfig.DESIGN_WIDTH_RATIO,
    limits,
);

const getHeightScaledValue = (val, limits = {}) => getScaledValue(
    val,
    LayoutConfig.DESIGN_HEIGHT_RATIO,
    limits,
);

const getScaledValue = (val, mult, { min, max }) => {
    let scaledVal = val * mult;
    scaledVal = clamp(scaledVal, min, max);

    return PixelRatio.roundToNearestPixel(scaledVal);
};

const clamp = (val, min, max) => {
    let newVal = val;
    newVal = min != null ? Math.max(newVal, min) : newVal;
    newVal = max != null ? Math.min(newVal, max) : newVal;

    return newVal;
};


export {
    relayRef,
    REG_PHONE,
    REG_EMAIL,
    REG_NAME,
    REG_PASSWORD,
    REG_SERIAL_NUM,
    getCombinedStyles,
    getWidthScaledValue,
    getHeightScaledValue,
};
