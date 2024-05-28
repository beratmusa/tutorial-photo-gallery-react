import {
  IonActionSheet,
  IonButton,
  IonContent,
  IonItem,
  IonList,
  IonModal,
  IonPage,
} from "@ionic/react";
import { getDatabase, onValue, ref, set } from "firebase/database";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { database } from "../firebaseConfig";
import "./Tab2.css";

const Tab2 = () => {
  const history = useHistory();
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [parkYerleri, setParkYerleri] = useState([]);
  const [emptyParkingSpaces, setEmptyParkingSpaces] = useState([]);
  const modal = useRef(null);
  const page = useRef(null);

  useEffect(() => {
    // Firebase'den verileri çek
    const db = getDatabase();
    const parkYerleriRef = ref(db, "parkYerleri");

    onValue(
      parkYerleriRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setParkYerleri(data); // Tüm park yerlerini al
          const emptySpaces = Object.keys(data).filter(
            (key) => data[key].durum === "boş"
          );
          setEmptyParkingSpaces(emptySpaces);
        } else {
          setParkYerleri([]);
          setEmptyParkingSpaces([]);
        }
      },
      (error) => {
        console.error("Firebase verilerini çekerken hata oluştu:", error);
      }
    );
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  function reserveSpace(parkId) {
    const spaceRef = ref(database, "parkYerleri/" + parkId);
    set(spaceRef, {
      durum: "dolu",
    })
      .then(() => {
        console.log("Park yeri rezerve edildi.");
        history.push(`/tab3/${parkId}`);
        setShowActionSheet(false);
        dismiss();
      })
      .catch((error) => {
        console.error("Park yeri rezervasyonu sırasında hata oluştu:", error);
      });
  }

  return (
    <IonPage ref={page}>
      <IonContent fullscreen color={"light"}>
        <div className="shape">
          <div className="top-round">
            <p>Boş Yer Sayısı</p>
          </div>
          <div className="bottom-round">
            <p>{emptyParkingSpaces.length}</p>
          </div>
        </div>
        <IonButton className="b-0" id="open-modal">
          Boş Yerleri Gör
        </IonButton>
        <IonModal
          ref={modal}
          trigger="open-modal"
          initialBreakpoint={1}
          breakpoints={[0, 1]}
        >
          <div className="block">
            <IonList inset={true}>
              {emptyParkingSpaces.map((parkId) => (
                <IonItem key={parkId}>
                  <IonButton
                    id={`open-action-sheet-${parkId}`}
                    onClick={() => setShowActionSheet(parkId)}
                  >
                    {parkId}
                  </IonButton>
                  <IonActionSheet
                    isOpen={showActionSheet === parkId}
                    onDidDismiss={() => setShowActionSheet(false)}
                    header="Rezevasyon"
                    buttons={[
                      {
                        text: "Rezerve Et",
                        handler: () => reserveSpace(parkId),
                      },
                      {
                        text: "Cancel",
                        role: "destructive",
                        handler: () => {
                          console.log("Cancel action triggered");
                          setShowActionSheet(false);
                        },
                      },
                    ]}
                  />
                </IonItem>
              ))}
            </IonList>
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
