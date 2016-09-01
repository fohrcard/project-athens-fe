
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';

import myTheme from '../../themes/base-theme';

class Asker extends Component {

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={myTheme} style={{backgroundColor: '#565051'}}>
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' />
                    </Button>

                    <Title>My Questions</Title>
                </Header>

                <Content padder>
                    <Text>
                        Select 2 pics
                    </Text>
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(Asker);
