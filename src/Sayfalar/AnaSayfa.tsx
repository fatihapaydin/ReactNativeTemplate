import React from "react";
import { Container, Header, Title, Content, Left, Right, Body, Text, Button, Icon } from "native-base";
import styles from "./styles";
import { IBaslangicProps } from "./../Arayuzler/Navigasyon";


export default class AnaSayfa extends React.Component<IBaslangicProps, {}> {

    render() {

        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Arama Motoru</Title>
                    </Body>
                    <Right />
                </Header>

                <Content padder>
                    <Text>Ana Sayfa</Text>
                    <Button onPress={() => this.props.navigation.navigate("IkinciSayfa")}>
                        <Text>İkinci Sayfaya</Text>
                        <Right>
                            <Icon name="arrow-forward" style={{ color: "#999" }} />
                        </Right>
                    </Button>
                </Content>
            </Container>
        );
    }
}