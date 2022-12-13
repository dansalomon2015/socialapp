import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: 47,
        width: width * 0.9,
        borderWidth: 0.5,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderColor: '#C4C4C4',
        marginVertical: 10
    },
    searchHereText: {
        color: '#828282',
        fontFamily: 'Hind Vadodara',
        fontSize: 16,
        marginLeft: 5
    },
    avatarImage: {
        borderColor: '#1B1B1B'
    },
    input: {
        height: '100%',
        width: '80%',
        paddingLeft: '5%'
    },
    searchAndInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '100%',
        borderColor: 'red'
    },
    closeIcon: {
        position: 'absolute',
        right: '20%'
    }
});

export default styles;