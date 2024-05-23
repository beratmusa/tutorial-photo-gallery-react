import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonPopover,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import "./Tab1.css";

const Tab1 = () => {
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      setScan(false);
      // Burada QR koddan gelen veriyi işleyin
      console.log(data);
      alert(`QR kod okundu: ${data}`);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

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
                id="click-trigger"
                onClick={() => setScan(true)}
                className="ion-margin-bottom buttons"
                shape="round"
              >
                QR OKUT
              </IonButton>
              <IonButton routerLink="/Tab2" className="buttons" shape="round">
                DOLULUK ORANI
              </IonButton>
            </IonRow>
            <IonPopover trigger="click-trigger" triggerAction="click">
              {scan && (
                <QrReader
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ width: "100%" }}
                />
              )}
              {result && <p>Sonuç: {result}</p>}
            </IonPopover>
            {/* <IonRow className="ion-justify-content-center ion-align-items-center">
              {scan && (
                <QrReader
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ width: "100%" }}
                />
              )}
              {result && <p>Sonuç: {result}</p>}
            </IonRow> */}
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
