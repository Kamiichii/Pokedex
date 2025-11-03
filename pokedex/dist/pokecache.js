export class Cache {
    #cache = new Map();
    #reapIntervalId = undefined;
    #interval;
    constructor(interval) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    add(key, val) {
        this.#cache.set(key, { val: val,
            createdAt: Date.now() });
    }
    get(key) {
        const entry = this.#cache.get(key);
        if (!entry)
            return undefined;
        const expired = entry.createdAt < Date.now() - this.#interval;
        if (expired) {
            this.#cache.delete(key);
            return undefined;
        }
        return entry.val;
    }
    #reap() {
        let arr = [];
        for (const obj of this.#cache) {
            if (obj[1].createdAt < (Date.now() - this.#interval)) {
                arr.push(obj[0]);
            }
        }
        arr.forEach(key => {
            this.#cache.delete(key);
        });
    }
    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }
    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}
