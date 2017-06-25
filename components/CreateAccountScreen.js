import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';

export default class CreateAccountScreen extends Component {
    state = ({
        email: null,
        companyName: null,
        password: null,
        confirmPassword: null,
        statesValue: null,
        forbiddenWords: ["password", "user", "username"]
    });

    render() {
        return (
            <View style={[styles.create_account_screen]}>

                    <View style={styles.wrapper}>
                        <Text>Create account</Text>
                    </View>

                    <View style={styles.wrapper}>
                        <TextInput
                            ref="email"
                            placeholder="Email Address"
                            onChange={this.handleEmailInput}
                            value={this.state.email}
                        />
                    </View>
                    <View style={styles.wrapper}>
                        <TextInput
                            ref="password"
                            placeholder="password"
                            secureTextEntry
                            onChange={this.handlePasswordInput}
                            value={this.state.passsword}
                        />
                    </View>
                    <View style={styles.wrapper}>
                        <TextInput
                            ref="passwordConfirm"
                            placeholder="Confirm password"
                            secureTextEntry
                            onChange={this.handleConfirmPasswordInput}
                            value={this.state.confirmPassword}
                        />
                    </View>
                    <View style={styles.wrapper}>
                        <TouchableHighlight
                            style={[styles.button, styles.button_wide]}
                            onPress={this.handleSubmitLogin}>
                            <Text> CREATE ACCOUNT</Text>
                        </TouchableHighlight>

                    </View>


            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        // flexDirection: "row",
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC"
    },
    create_account_screen: {
        flex: 1,
        paddingVertical: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    create_account_form: {
        flex: 1
    }

});
