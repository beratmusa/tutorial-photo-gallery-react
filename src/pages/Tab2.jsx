import {
  IonActionSheet,
  IonButton,
  IonContent,
  IonItem,
  IonList,
  IonModal,
  IonPage,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import "./Tab2.css";

const Tab2 = () => {
  const history = useHistory();
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [parkYerleri, setParkYerleri] = useState([]);
  const [selectedParkId, setSelectedParkId] = useState(null);
  const modal = useRef(null);
  const page = useRef(null);
  const [presentingElement, setPresentingElement] = useState(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  function shareAction() {
    console.log("Share action triggered");
    history.push("/Tab3");
    setShowActionSheet(false);
    dismiss();
    // Paylaşma işlemi ile ilgili kod buraya yazılır
  }

  function Example() {
    const logResult = (result) => {
      console.log(JSON.stringify(result, null, 2));
    };
  }

  return (
    <IonPage ref={page}>
      <IonContent fullscreen color={"light"}>
        <div className="shape">
          <div className="top-round">
            <p>Boş Yer Sayısı</p>
          </div>
          <div className="bottom-round">
            <p>21</p>
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
              <IonItem>
                <IonButton
                  id="open-action-sheet"
                  onClick={() => setShowActionSheet(true)}
                >
                  P 2
                </IonButton>
                <IonActionSheet
                  isOpen={showActionSheet}
                  onDidDismiss={() => setShowActionSheet(false)}
                  header="Rezevasyon"
                  buttons={[
                    {
                      text: "Rezerve Et",
                      handler: shareAction,
                    },
                    {
                      text: "Cancel",
                      role: "destructive",
                      handler: () => {
                        console.log("Cancel action triggered");
                        setShowActionSheet(false); // Close the action sheet
                      },
                    },
                  ]}
                />
              </IonItem>
              <IonItem>
                <IonButton id="open-action-sheet-2">P 12</IonButton>
                <IonActionSheet
                  trigger="open-action-sheet-2"
                  header="Rezevasyon"
                  buttons={[
                    {
                      text: "Rezerve Et",
                      data: {
                        action: "share",
                      },
                    },
                    {
                      text: "Cancel",
                      role: "destructive",
                      data: {
                        action: "cancel",
                      },
                    },
                  ]}
                  onDidDismiss={({ detail }) => logResult(detail)}
                ></IonActionSheet>
              </IonItem>
              <IonItem>
                <IonButton id="open-action-sheet-3">P 4</IonButton>
                <IonActionSheet
                  trigger="open-action-sheet-3"
                  header="Rezevasyon"
                  buttons={[
                    {
                      text: "Rezerve Et",
                      data: {
                        action: "share",
                      },
                    },
                    {
                      text: "Cancel",
                      role: "destructive",
                      data: {
                        action: "cancel",
                      },
                    },
                  ]}
                  onDidDismiss={({ detail }) => logResult(detail)}
                ></IonActionSheet>
              </IonItem>
              <IonItem>
                <IonButton id="open-action-sheet-4">P 11</IonButton>
                <IonActionSheet
                  trigger="open-action-sheet-4"
                  header="Rezevasyon"
                  buttons={[
                    {
                      text: "Rezerve Et",
                      data: {
                        action: "share",
                      },
                    },
                    {
                      text: "Cancel",
                      role: "destructive",
                      data: {
                        action: "cancel",
                      },
                    },
                  ]}
                  onDidDismiss={({ detail }) => logResult(detail)}
                ></IonActionSheet>
              </IonItem>
              <IonItem>
                <IonButton id="open-action-sheet-5">P 21</IonButton>
                <IonActionSheet
                  trigger="open-action-sheet-5"
                  header="Rezevasyon"
                  buttons={[
                    {
                      text: "Rezerve Et",
                      data: {
                        action: "share",
                      },
                    },
                    {
                      text: "Cancel",
                      role: "destructive",
                      data: {
                        action: "cancel",
                      },
                    },
                  ]}
                  onDidDismiss={({ detail }) => logResult(detail)}
                ></IonActionSheet>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
