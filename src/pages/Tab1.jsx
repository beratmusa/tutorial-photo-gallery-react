import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";
import "./Tab1.css";

const Tab1 = () => {
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
              <IonButton className="ion-margin-bottom buttons" shape="round">
                QR OKUT
              </IonButton>
              <IonButton className="buttons" shape="round">
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

{
  /* <IonContent fullscreen className="transparan z-1">
<IonButton shape="round">Round</IonButton>
</IonContent> */
}
