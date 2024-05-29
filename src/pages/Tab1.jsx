import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonPopover,
  IonRow,
} from "@ionic/react";
import { ref, set } from "firebase/database"; // Firebase Realtime Database import
import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import { useHistory } from "react-router-dom";
import { database } from "../firebaseConfig";
import "./Tab1.css";

const Tab1 = () => {
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState("");
  const history = useHistory();

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      setScan(false);
      console.log(data);
      const parkId = data.text; // Burada QR koddan gelen veriyi kullanın
      alert("QR Kodu Okundu: " + parkId);

      // Park yerinin durumunu güncelle
      updateParkStatus(parkId, "dolu");

      // Park detay sayfasına yönlendirme
      history.push(`/tab3/${parkId}`);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  // Park yerinin durumunu güncelleyen fonksiyon
  const updateParkStatus = (parkId, status) => {
    const parkRef = ref(database, "parkYerleri/" + parkId);
    set(parkRef, {
      durum: status,
      startTime: Date.now(),
    })
      .then(() => {
        console.log("Park yeri durumu güncellendi.");
      })
      .catch((error) => {
        console.error("Park yeri durumu güncellenirken hata oluştu:", error);
      });
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
            <IonPopover isOpen={scan} onDidDismiss={() => setScan(false)}>
              <div style={{ padding: 20 }}>
                <QrReader
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ width: "100%" }}
                />
                <IonButton onClick={() => setScan(false)} color="danger">
                  Kapat
                </IonButton>
              </div>
            </IonPopover>
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
