import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";
import { usePhotoGallery } from "../hooks/usePhotoGallery";
import "./Tab1.css";

const Tab1 = () => {
  const { deletePhoto, photos, takePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState();

  return (
    <IonPage>
      <IonContent fullscreen color={"light"}>
        <IonGrid className="h-screen">
          <IonRow className="h-screen grid-container">
            <IonRow>
              <IonCol>
                <img src="../Vector1.svg" alt="" />
              </IonCol>
              <IonCol>
                <img
                  className="ion-float-right ion-margin-top"
                  src="../Group1.svg"
                  alt=""
                />
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-align-items-center row-container">
              <IonButton
                onClick={() => takePhoto()}
                className="ion-margin-bottom buttons"
                shape="round"
              >
                QR OKUT
              </IonButton>
              <IonButton routerLink="/Tab2" className="buttons" shape="round">
                DOLULUK ORANI
              </IonButton>
            </IonRow>
            <IonRow>
              <IonCol>
                <img className="ion-margin-bottom" src="../Group2.svg" alt="" />
              </IonCol>
              <IonCol className="ion-align-self-end">
                <img className="ion-float-right" src="../Vector4.svg" alt="" />
              </IonCol>
            </IonRow>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
