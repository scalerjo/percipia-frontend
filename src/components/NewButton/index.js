import { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image } from "react-native";


import './index.css';
var styles = StyleSheet.create({
    imageContainer: {
        height: 55,
        width: 70,
        borderRadius: 7.5,
        borderColor: 'rgba(0,0,0,255)',
        backgroundColor: '#fff',
        borderWidth: 3,
    },
    image: {
        height: 40,
        width: 40,
        marginLeft: 12,
        marginTop: 5,
        borderRadius: 7.5
    }
});
class NewButton extends Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <TouchableOpacity style={styles.imageContainer} onPress={this.props.onClick}>
                <Image style={styles.image} source={{ uri: '/plus.png' }} />
            </TouchableOpacity>
        );
    }
}

export default NewButton;
