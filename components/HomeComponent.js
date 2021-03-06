import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

const RenderItem = ({item}) => {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/react-lake.jpg')}
            >
                <Text style={styles.textStyle}>
                    {item.description}
                </Text>
            </Card>
        )
    }
    return <View />;
}

const Home = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);
    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [partners, setPartners] = useState(PARTNERS);

    return (
        <ScrollView>
            <RenderItem
                item={campsites.filter(campsite => campsite.featured)[0]}
            />
            <RenderItem
                item={promotions.filter(promotion => promotion.featured)[0]}
            />
            <RenderItem
                item={partners.filter(partner => partner.featured)[0]}
            />
        </ScrollView>
    )
}

Home.navigationOptions = {
    title: 'Home'
}

const styles = StyleSheet.create({
    cardStyle: {

    },
    textStyle: {
        margin: 10
    }
});

export default Home;