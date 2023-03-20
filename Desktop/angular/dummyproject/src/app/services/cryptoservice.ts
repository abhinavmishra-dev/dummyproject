// // import * as CryptoJS from 'crypto-js';
// // import {CryptoJS} from '../../../node_modules/@angular/core/index/crypto;
// //   \angular\dummyproject\node_modules\@types\crypto-js\index.d.ts';
// // // C:\Users\abhin\Desktop\angular\dummyproject\node_modules\@types\crypto-js\index.d.ts

// export class cryptService {
//     constructor() {
//         // this.encryptUsingAES256();
//     }
//     tokenFromUI: string = "0123456789123456";
//     encrypted: string = "";
//     decrypted: string="";
//     encryptUsingAES256(request: string) {
//         let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
//         let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
//         let encrypted = CryptoJS.AES.encrypt(
//             JSON.stringify(request), _key, {
//             keySize: 16,
//             iv: _iv,
//             mode: CryptoJS.mode.ECB,
//             padding: CryptoJS.pad.Pkcs7
//         });
//         this.encrypted = encrypted.toString();
//         return this.encrypted
//     }
//     decryptUsingAES256(response:string) {
//         let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
//         let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
//         this.decrypted = CryptoJS.AES.decrypt(
//             response, _key, {
//             keySize: 16,
//             iv: _iv,
//             mode: CryptoJS.mode.ECB,
//             padding: CryptoJS.pad.Pkcs7
//         }).toString(CryptoJS.enc.Utf8);
//         return this.decrypted;
//     }
//}