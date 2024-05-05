import { IonButton, IonContent, IonPage } from "@ionic/react";

import "./Tab3.css";

const Tab3 = () => {
  return (
    <IonPage>
      <IonContent fullscreen color={"light"}>
        <div className="shape">
          <div className="top-round">
            <p>Otopark Bilgisi</p>
          </div>
          <div className="bottom-round">
            <p>P2</p>
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

        <IonButton routerLink="/" className="b-0" shape="round">
          Çıkış Yap
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
