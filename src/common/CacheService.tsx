
class CacheService {
    private storage: Storage;
  
    constructor(storage: Storage = localStorage) {
      this.storage = storage;
    }
  
    // Set data in the cache with an expiration time (in seconds)
    set(key: string, data: any, expirationInSeconds: number = 3600): void {
      const expirationTimestamp = Date.now() + expirationInSeconds * 1000;
      const cachedData = {
        data,
        expiration: expirationTimestamp,
      };
      this.storage.setItem(key, JSON.stringify(cachedData));
    }
  
    // Get data from the cache
    get(key: string): any | null {
      const cachedData = this.storage.getItem(key);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        if (parsedData.expiration > Date.now()) {
          return parsedData.data;
        } else {
          // Remove expired data from the cache
          this.remove(key);
        }
      }
      return null;
    }
  
    // Remove data from the cache
    remove(key: string): void {
      this.storage.removeItem(key);
    }
  
    // Clear the entire cache
    clear(): void {
      this.storage.clear();
    }
}
  
export default CacheService;