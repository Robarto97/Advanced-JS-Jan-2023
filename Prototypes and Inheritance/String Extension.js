(function () {
  String.prototype.ensureStart = function (str) {
    return this.startsWith(str) ? this.toString() : str + this.toString();
  };
  String.prototype.ensureEnd = function (str) {
    return this.endsWith(str) ? this.toString() : this.toString() + str;
  };
  String.prototype.isEmpty = function () {
    return this.length === 0;
  };
  String.prototype.truncate = function (n) {
    const length = this.toString().length;
    if (n < 4) return ".".repeat(n);
    if (length <= n) return this.toString();
    let indexOfSpace = this.toString()
      .slice(0, n - 2)
      .lastIndexOf(" ");
    if (indexOfSpace === -1) return this.toString().slice(0, n - 2) + "...";
    else return this.toString().slice(0, indexOfSpace) + "...";
  };
  String.format = function (str, ...params) {
    params.forEach((param, i) => (str = str.replace(`{${i}}`, param)));
    return str;
  };
})();

let str = "quick brown fox jumps over the lazy dog";
str = str.ensureStart("the ");
// str = str.isEmpty();
// str = str.truncate(5);
// str = String.format("The {0} {1} fox", "quick", "brown");
console.log(str);
