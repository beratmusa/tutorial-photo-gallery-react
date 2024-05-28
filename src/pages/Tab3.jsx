import { IonButton, IonContent, IonPage } from "@ionic/react";
import { ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { database } from "../firebaseConfig";

import "./Tab3.css";

const Tab3 = () => {
  const { parkId } = useParams();
  const [elapsedTime, setElapsedTime] = useState(0);
  const history = useHistory();
  const initialTime = Date.now();

  useEffect(() => {
    // Her saniye sayaçı güncelle
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTimeInSeconds = Math.floor(
        (currentTime - initialTime) / 1000
      );
      setElapsedTime(elapsedTimeInSeconds);
    }, 1000);

    // Component unmount olduğunda timer'ı temizle
    return () => clearInterval(timer);
  }, [initialTime]);

  // Fiyat hesaplama fonksiyonu, örneğin her saniye 1 TL gibi
  const calculatePrice = (elapsedTime) => {
    // Örnek fiyat hesaplama
    const pricePerSecond = 0.25; // Her saniye 1 TL
    return elapsedTime * pricePerSecond;
  };

  const handleExit = () => {
    const parkRef = ref(database, "parkYerleri/" + parkId);
    set(parkRef, {
      durum: "boş",
    })
      .then(() => {
        console.log("Park yeri durumu güncellendi.");
        history.push("/");
      })
      .catch((error) => {
        console.error("Park yeri durumu güncellenirken hata oluştu:", error);
      });
  };

  return (
    <IonPage>
      <IonContent fullscreen color={"light"}>
        <div className="shape">
          <div className="top-round">
            <p>Otopark Bilgisi</p>
          </div>
          <div className="bottom-round">
            <p>{parkId}</p>
          </div>
        </div>
        <div className="content">
          <div className="top-content">
            <p className="brown">Durulan Süre</p>
            <p className="blue">{elapsedTime}</p>
          </div>
          <div className="bottom-content">
            <p className="brown">Ödenecek Ücret</p>
            <p className="blue">{calculatePrice(elapsedTime)} ₺</p>
          </div>
        </div>

        <IonButton onClick={handleExit} className="b-0" shape="round">
          Çıkış Yap
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
