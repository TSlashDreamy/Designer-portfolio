import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../../firebase/config";

const useStorageLogo = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("magazines");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError("Ошибка: " + err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        const name = file.name;
        collectionRef.add({ url, createdAt, name })
        setUrl(url);
      }
    )
  }, [file]);

  return { progress, url, error };
};

export default useStorageLogo;
