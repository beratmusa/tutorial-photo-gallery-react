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

import "./Tab2.css";

const Tab2 = () => {
  const modal = useRef(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  function Example() {
    const logResult = (result) => {
      console.log(JSON.stringify(result, null, 2));
    };
  }

  return (
    <IonPage>
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
                <IonButton id="open-action-sheet">P 2</IonButton>
                <IonActionSheet
                  trigger="open-action-sheet"
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
                <IonButton id="open-action-sheet-2">P 12</IonButton>
                <IonActionSheet
                  trigger="open-action-sheet-2"
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

{
  /* <IonButton className="b-0" id="open-custom-dialog" expand="block">
Boş Yerleri Gör
</IonButton>
<IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
<div className="wrapper">
  <h1>Dialog header</h1>

  <IonList lines="none">
    <IonItem button={true} detail={false} onClick={dismiss}>
      <IonIcon icon={personCircle}></IonIcon>
      <IonLabel>Item 1</IonLabel>
    </IonItem>
    <IonItem button={true} detail={false} onClick={dismiss}>
      <IonIcon icon={personCircle}></IonIcon>
      <IonLabel>Item 2</IonLabel>
    </IonItem>
    <IonItem button={true} detail={false} onClick={dismiss}>
      <IonIcon icon={personCircle}></IonIcon>
      <IonLabel>Item 3</IonLabel>
    </IonItem>
  </IonList>
</div>
</IonModal> */
}

{
  /*  */
}
