import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class LibraryList extends Component {
    render() {
        return (
            <View>
                <Text>Hola!</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);