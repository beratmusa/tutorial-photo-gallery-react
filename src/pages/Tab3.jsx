import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { timerOutline, walletOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { database } from "../firebaseConfig";
import "./Tab3.css";

const Tab3 = () => {
  const { parkId } = useParams();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const db = getDatabase();
    const startTimeRef = ref(db, "parkYerleri/" + parkId + "/startTime");

    const fetchData = () => {
      onValue(startTimeRef, (snapshot) => {
        const startTimeValue = snapshot.val();
        if (startTimeValue) {
          setStartTime(startTimeValue);
        }
      });
    };

    fetchData(); // Initial fetch

    const interval = setInterval(() => {
      if (startTime) {
        const currentTime = Date.now();
        const elapsedTimeInSeconds = Math.floor(
          (currentTime - startTime) / 1000
        );
        setElapsedTime(elapsedTimeInSeconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [parkId, startTime]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h} saat ${m} dakika ${s} saniye`;
  };

  // Fiyat hesaplama fonksiyonu, örneğin her saniye 0.50 TL gibi
  const calculatePrice = (seconds) => {
    const pricePerMinute = 0.5;
    const minutes = Math.floor(seconds / 60);
    return (minutes * pricePerMinute).toFixed(2);
  };

  const handleExit = () => {
    const parkRef = ref(database, "parkYerleri/" + parkId);
    update(parkRef, {
      durum: "boş",
      startTime: null,
    })
      .then(() => {
        console.log("Park yeri durumu güncellendi.");
        setElapsedTime(0); // Clear elapsed time
        setStartTime(null); // Clear start time
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
            <IonIcon
              icon={timerOutline}
              style={{ fontSize: "2em", color: "#362bb0" }}
            />
            <p className="brown">Durulan Süre</p>
            <p className="blue">{formatTime(elapsedTime)}</p>
          </div>
          <div className="bottom-content">
            <IonIcon
              icon={walletOutline}
              style={{ fontSize: "2em", color: "#362bb0" }}
            />
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
