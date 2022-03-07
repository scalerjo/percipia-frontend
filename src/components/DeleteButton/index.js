import { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image } from "react-native";


import './index.css';
var styles = StyleSheet.create({
    imageContainer: {
        height: 30,
        width: 30,
        borderRadius: 20,
        borderColor: 'rgba(0,0,0,255)',
        backgroundColor: '#fff',
        borderWidth: 0,
    },
    image: {
        height: 20,
        width: 20,
        marginLeft: 5,
        marginTop: 5,
        borderRadius: 20
    }
});
class DeleteButton extends Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <TouchableOpacity style={styles.imageContainer} onPress={this.props.onClick}>
                <Image style={styles.image} source={{ uri: '/x.png' }} />
            </TouchableOpacity>
        );
    }
}

export default DeleteButton;
