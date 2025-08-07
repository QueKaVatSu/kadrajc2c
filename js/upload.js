// /js/upload.js
import { storage } from "./firebase.js";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

/**
 * Basit upload + URL döndür
 * @param {File} file - input[type=file] ile seçilen dosya
 * @returns {Promise<string>} - indirilebilir URL
 */
export async function uploadAndGetUrl(file) {
  const fileRef = ref(storage, `uploads/${Date.now()}-${file.name}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
}
