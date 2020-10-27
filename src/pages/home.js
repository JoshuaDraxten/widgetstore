import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './home.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

import WidgetCard from '../components/widgetCard';

const Home = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Widgets</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid fixed>
          <IonRow>
            <IonHeader collapse="condense" className="ion-no-border">
              <IonToolbar>
                <IonTitle size="large">Widgets</IonTitle>
              </IonToolbar>
            </IonHeader>

            {/* <Swiper
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>Featured article here</SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </Swiper> */}
            <IonCol sizeXs="12" sizeMd="6">
              <WidgetCard title="TermiWidget" subtitle="Lorem ipsum dolor sit amet" image="https://external-preview.redd.it/gQZFAnkAZbmYVZHejKvCasTwihprjU-F_K-A5hY8jBQ.jpg?auto=webp&s=29561900dc7260d07fc91977aacb4fe19c2f92b3"/>
            </IonCol>

            <IonCol sizeXs="12" sizeMd="6">
              <IonCard>
                <IonListHeader>
                  <IonLabel>Picked Just for you</IonLabel>
                  <IonButton>See All</IonButton>
                </IonListHeader>
                <IonList>
                  <IonItem>
                    <IonThumbnail slot="start" className="emoji">
                      <span>😀️</span>
                    </IonThumbnail>
                    <IonLabel className="ion-text-wrap">
                      App Name - It's a great app
                    </IonLabel>
                    <IonButton slot="end" expand="block" shape="round" size="default" fill="medium">GET</IonButton>
                  </IonItem>
                  <IonItem>
                    <IonThumbnail slot="start" className="emoji">
                      <span>🧦️</span>
                    </IonThumbnail>
                    <IonLabel className="ion-text-wrap">
                      App Name - It's a great app
                    </IonLabel>
                    <IonButton slot="end" expand="block" shape="round" size="default" fill="medium">GET</IonButton>
                  </IonItem>
                  <IonItem>
                    <IonThumbnail slot="start" className="emoji">
                      <span>⛄️</span>
                    </IonThumbnail>
                    <IonLabel className="ion-text-wrap">
                      App Name - It's a great app
                    </IonLabel>
                    <IonButton slot="end" expand="block" shape="round" size="default" fill="medium">GET</IonButton>
                  </IonItem>
                </IonList>
              </IonCard>
            </IonCol>

            <IonCol sizeXs="12" sizeMd="6">
              <WidgetCard title="Football Standings" subtitle="Lorem ipsum dolor sit amet" image="https://preview.redd.it/9mwhu1xs13v51.jpg?width=828&format=pjpg&auto=webp&s=593627a42265cb8747ca333f1e7daf81d105c4f8"/> 
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
