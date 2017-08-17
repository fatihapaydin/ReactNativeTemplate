import _ from 'lodash';
import headerTheme from './Header';
import containerTheme from './Container';
import contentTheme from './Content';
import buttonTheme from './Button';
import titleTheme from './Title';
import inputGroupTheme from './InputGroup';
import badgeTheme from './Badge';
import checkBoxTheme from './CheckBox';
import cardTheme from './Card';
import radioTheme from './Radio';
import h3Theme from './H3';
import h2Theme from './H2';
import h1Theme from './H1';
import footerTheme from './Footer';
import footerTabTheme from './FooterTab';
import fabTheme from './Fab';
import itemTheme from './Item';
import labelTheme from './Label';
import textAreaTheme from './Textarea';
import textTheme from './Text';
import toastTheme from './Toast';
import tabTheme from './Tab';
import tabBarTheme from './TabBar';
import tabContainerTheme from './TabContainer';
import viewTheme from './View';
import tabHeadingTheme from './TabHeading';
import iconTheme from './Icon';
import inputTheme from './Input';
import segmentTheme from './Segment';
import spinnerTheme from './Spinner';
import cardItemTheme from './CardItem';
import listItemTheme from './ListItem';
import formTheme from './Form';
import separatorTheme from './Separator';
import variable from './../variables/platform';
export default (variables = variable) => {
    const theme = {
        variables,
        'NativeBase.Left': {
            flex: 1,
            alignSelf: 'center',
            alignItems: 'flex-start',
        },
        'NativeBase.Right': {
            'NativeBase.Button': {
                alignSelf: null,
            },
            flex: 1,
            alignSelf: 'center',
            alignItems: 'flex-end',
        },
        'NativeBase.Body': {
            flex: 1,
            alignItems: 'center',
            alignSelf: 'center',
        },
        'NativeBase.Header': Object.assign({}, headerTheme(variables)),
        'NativeBase.Button': Object.assign({}, buttonTheme(variables)),
        'NativeBase.Title': Object.assign({}, titleTheme(variables)),
        'NativeBase.InputGroup': Object.assign({}, inputGroupTheme(variables)),
        'NativeBase.Input': Object.assign({}, inputTheme(variables)),
        'NativeBase.Badge': Object.assign({}, badgeTheme(variables)),
        'NativeBase.CheckBox': Object.assign({}, checkBoxTheme(variables)),
        'NativeBase.Radio': Object.assign({}, radioTheme(variables)),
        'NativeBase.Card': Object.assign({}, cardTheme()),
        'NativeBase.CardItem': Object.assign({}, cardItemTheme(variables), { '.cardBody': {
                padding: -5,
                'NativeBase.Text': {
                    marginTop: 5,
                },
            }, flexDirection: 'row', alignItems: 'center' }),
        'NativeBase.CardItem1': Object.assign({}, cardItemTheme(variables)),
        'NativeBase.Toast': Object.assign({}, toastTheme(variables)),
        'NativeBase.H1': Object.assign({}, h1Theme(variables)),
        'NativeBase.H2': Object.assign({}, h2Theme(variables)),
        'NativeBase.H3': Object.assign({}, h3Theme(variables)),
        'NativeBase.Form': Object.assign({}, formTheme(variables)),
        'NativeBase.Container': Object.assign({}, containerTheme(variables)),
        'NativeBase.Content': Object.assign({}, contentTheme(variables)),
        'NativeBase.Footer': Object.assign({}, footerTheme(variables)),
        'NativeBase.Tabs': {
            flex: 1,
        },
        'NativeBase.FooterTab': Object.assign({}, footerTabTheme(variables)),
        'NativeBase.ListItem': Object.assign({}, listItemTheme(variables), { 'NativeBase.CheckBox': {
                marginLeft: -10,
                marginRight: 10,
            }, 'NativeBase.Text': {
                '.note': {
                    color: variables.listNoteColor,
                    fontWeight: '200',
                },
                alignSelf: 'center',
            } }),
        'NativeBase.ListItem1': Object.assign({}, listItemTheme(variables)),
        'NativeBase.Icon': Object.assign({}, iconTheme(variables)),
        'NativeBase.IconNB': Object.assign({}, iconTheme(variables)),
        'NativeBase.Text': Object.assign({}, textTheme(variables)),
        'NativeBase.Spinner': Object.assign({}, spinnerTheme(variables)),
        'NativeBase.Fab': Object.assign({}, fabTheme(variables)),
        'NativeBase.Item': Object.assign({}, itemTheme(variables)),
        'NativeBase.Label': Object.assign({}, labelTheme(variables)),
        'NativeBase.Textarea': Object.assign({}, textAreaTheme(variables)),
        'NativeBase.PickerNB': {
            'NativeBase.Button': {
                'NativeBase.Text': {},
            },
        },
        'NativeBase.Tab': Object.assign({}, tabTheme(variables)),
        'NativeBase.Segment': Object.assign({}, segmentTheme(variables)),
        'NativeBase.STabs': {
            flex: 1,
        },
        'NativeBase.TabBar': Object.assign({}, tabBarTheme(variables)),
        'NativeBase.ViewNB': Object.assign({}, viewTheme(variables)),
        'NativeBase.TabHeading': Object.assign({}, tabHeadingTheme(variables)),
        'NativeBase.TabContainer': Object.assign({}, tabContainerTheme(variables)),
        'NativeBase.Switch': {
            marginVertical: -5,
        },
        'NativeBase.Separator': Object.assign({}, separatorTheme(variables)),
        'NativeBase.Tabs': {},
        'NativeBase.Thumbnail': {
            '.square': {
                borderRadius: 0,
            },
            '.small': {
                width: 36,
                height: 36,
                borderRadius: 18,
            },
            '.large': {
                width: 80,
                height: 80,
                borderRadius: 40,
            },
            width: 56,
            height: 56,
            borderRadius: 28,
        },
    };
    const cssifyTheme = (grandparent, parent, parentKey) => {
        _.forEach(parent, (style, styleName) => {
            if (styleName.indexOf('.') === 0 && parentKey && parentKey.indexOf('.') === 0) {
                if (grandparent) {
                    if (!grandparent[styleName]) {
                        grandparent[styleName] = {};
                    }
                    else {
                        grandparent[styleName][parentKey] = style;
                    }
                }
            }
            if (style && typeof style === 'object') {
                cssifyTheme(parent, style, styleName);
            }
        });
    };
    cssifyTheme(null, theme, null);
    return theme;
};
//# sourceMappingURL=index.js.map