export class Storage {
  static get<T>(name: string): T | any {
    const item = localStorage.getItem(name);

    if (item) {
      try {
        return JSON.parse(item);
      } catch (e) {
        return item;
      }
    }

    return null;
  }

  static set<T>(name: string, value: T | any): void {
    try {
      const data = JSON.stringify(value);

      localStorage.setItem(name, data);
    } catch (e) {
      localStorage.setItem(name, value);
    }
  }

  static remove(name: string): void {
    localStorage.removeItem(name);
  }

  static clear(): void {
    localStorage.clear();
  }
}
