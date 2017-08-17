import React from "react";
import { Container, Header, Title, Content, Left, Right, Body, Text, Button, Icon } from "native-base";
import styles from "./styles";
import { IBaslangicProps } from "./../Arayuzler/Navigasyon";

export default class IkinciSayfa extends React.Component<IBaslangicProps, {}> {

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>İkinci Sayfa Başlığı</Title>
                    </Body>
                    <Right />

                </Header>

                <Content padder>
                    <Text>İkinci Sayfa İçeriği</Text>
                    <Button
                        onPress={() => this.props.navigation.navigate("UcuncuSayfa")}
                    >
                        <Text>Üçüncü Sayfaya</Text>
                        <Right>
                            <Icon name="arrow-forward" style={{ color: "#999" }} />
                        </Right>
                    </Button>
                </Content>
            </Container>
        );
    }
}
