
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';
import { replaceOrPushRoute } from '../../actions/route';

import { Container, Header, Title, Content, View, Text, Button, Icon, Footer } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import myTheme from '../../themes/base-theme';
import styles from './styles';

import ImagePicker from 'react-native-image-crop-picker';

class Home extends Component {

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    navigateTo(route) {
        this.props.replaceOrPushRoute(route);
    }

    pickPics() {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
      });
    }

    render() {
        return (
            <Container theme={myTheme}style={{backgroundColor: '#565051'}}>
                <Header>
                    <Button transparent onPress={() => this.replaceRoute('login')}>
                        <Icon name='ios-power' />
                    </Button>

                    <Title>Which is Better?</Title>

                </Header>

                <Content>
                    <Grid style={{marginTop: 20}}>
                        <Row>
                            <View style={styles.row}>
                                <Text style={styles.text}>
                                    Picture One
                                </Text>
                            </View>
                        </Row>
                        <Row>
                            <View style={styles.row}>
                                <Text style={styles.text}>
                                    Swipe Left
                                </Text>
                            </View>
                        </Row>
                        <Row>
                            <View style={styles.row}>
                                <Text style={styles.text}>
                                    Picture Two
                                </Text>
                            </View>
                        </Row>
                        <Row>
                            <View style={styles.row}>
                                <Text style={styles.text}>
                                    Swipe Right
                                </Text>
                            </View>
                        </Row>
                        <Row>
                            <View style={styles.row}>
                                <Text style={styles.text}>
                                    Flag As Inappropriate
                                </Text>
                            </View>
                        </Row>
                        <Row>
                            <View style={styles.row}>
                                <Text style={styles.text}>
                                    UserName and Country
                                </Text>
                            </View>
                        </Row>
                    </Grid>
                </Content>

                <Footer style={styles.footer}>
                    <Text>
                        +26
                        <Icon name='ios-pizza' />
                    </Text>

                    <Button transparent onPress={() => this.pickPics()}>
                        ASK
                    </Button>

                    <Button transparent onPress={() => this.navigateTo('blankPage')}>
                        <Icon name='ios-albums' />
                    </Button>
                </Footer>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(Home);
