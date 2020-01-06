class Utils {

  /**
   *
   * @param str
   * @constructor
   */
  static Str2Json(str: string): string {
    return JSON.parse(str);
  }

  /**
   *
   * @param obj
   * @constructor
   */
  static Json2Str(obj: object): string {
    if (obj == null) return '';
    return JSON.stringify(obj);
  }


  /**
   *
   * @param obj
   * @constructor
   */
  static NumberCompare(obj: { num1: number, num2: number }): boolean {
    if (obj.num1 > obj.num2) {
      return true;
    } else {
      return false;
    }
  }


}

export default Utils;
