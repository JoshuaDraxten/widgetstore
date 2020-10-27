import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';

const cardStyle = {
    width: "100%",
    paddingTop: "70%",
    backgroundSize: "100%"
}

export default ({ image, title, subtitle }) =>
    <IonCard>
        <div className="widget-card-image" style={{ ...cardStyle, backgroundImage: `url('${image}')` }}></div>
        <IonCardHeader>
            <IonCardTitle>{title}</IonCardTitle>
            <IonCardSubtitle>{subtitle}</IonCardSubtitle>
        </IonCardHeader>
    </IonCard>