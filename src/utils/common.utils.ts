export class CommonUtils {
  static generateRandomId(length: number): string {
    const collection = "abcdefghijklmnopqrstuvwxyz1234567890";
    let randomId = "";
    for (let i = 0; i < length; i++) {
      randomId += collection.charAt(Math.floor(Math.random() * collection.length));
    }
    return randomId;
  }
}
