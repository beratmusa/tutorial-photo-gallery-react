import { isPlatform } from "@ionic/react";
import { useEffect, useState } from "react";

import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Capacitor } from "@capacitor/core";
import { Directory, Filesystem } from "@capacitor/filesystem";
import { Preferences } from "@capacitor/preferences";

const PHOTO_STORAGE = "photos";

export const usePhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const loadSaved = async () => {
      const { value } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = value ? JSON.parse(value) : [];

      if (!isPlatform("hybrid")) {
        for (let photo of photosInPreferences) {
          const file = await Filesystem.readFile({
            path: photo.filepath,
            directory: Directory.Data,
          });
          photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
        }
      }
      setPhotos(photosInPreferences);
    };
    loadSaved();
  }, []);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = new Date().getTime() + ".jpeg";
    const savedFileImage = await savePicture(photo, fileName);
    const newPhotos = [savedFileImage, ...photos];
    setPhotos(newPhotos);
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
  };

  const savePicture = async (photo, fileName) => {
    let base64Data;
    if (isPlatform("hybrid")) {
      const file = await Filesystem.readFile({
        path: photo.path,
      });
      base64Data = file.data;
    } else {
      base64Data = await base64FromPath(photo.webPath);
    }
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (isPlatform("hybrid")) {
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
  };

  const deletePhoto = async (photo) => {
    const newPhotos = photos.filter((p) => p.filepath !== photo.filepath);
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
    const filename = photo.filepath.substr(photo.filepath.lastIndexOf("/") + 1);
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });
    setPhotos(newPhotos);
  };

  return {
    deletePhoto,
    photos,
    takePhoto,
  };
};

export async function base64FromPath(path) {
  const response = await fetch(path);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject("method did not return a string");
      }
    };
    reader.readAsDataURL(blob);
  });
}
