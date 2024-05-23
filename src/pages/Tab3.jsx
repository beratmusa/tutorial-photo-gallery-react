import { IonButton, IonContent, IonPage } from "@ionic/react";
import { ref, set } from "firebase/database";
import { useHistory, useParams } from "react-router-dom";
import { database } from "../firebaseConfig";

import "./Tab3.css";

const Tab3 = () => {
  const { parkId } = useParams();
  const history = useHistory();

  const handleExit = () => {
    const parkRef = ref(database, "parkYerleri/" + parkId);
    set(parkRef, {
      durum: "bos",
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
            <p className="blue">1 saat 12dk</p>
          </div>
          <div className="bottom-content">
            <p className="brown">Ödenecek Ücret</p>
            <p className="blue">120 ₺</p>
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
