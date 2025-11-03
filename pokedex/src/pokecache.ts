type CacheEntry<T> = {
    createdAt:number;
    val:T;
};

export class Cache{
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;


    constructor(interval:number) {
        this.#interval = interval;
        this.#startReapLoop();
    }

     add<T>(key:string,val:T){
        this.#cache.set(key,{val:val,
                             createdAt:Date.now()}) 
    }

    get<T>(key:string){
          const entry = this.#cache.get(key);
          if (!entry) return undefined;

         const expired = entry.createdAt < Date.now() - this.#interval;
            if (expired) {
                this.#cache.delete(key);
                return undefined;
            }

         return entry.val;
         
    }

    #reap(){
        let arr = [];
        for(const obj of this.#cache){
            if(obj[1].createdAt <(Date.now() - this.#interval)){
                arr.push(obj[0]);
            }
        }
        arr.forEach(key => {
            this.#cache.delete(key);
});
        
    }

    #startReapLoop(){
        this.#reapIntervalId = setInterval(() => this.#reap(),this.#interval);
    }

    stopReapLoop(){
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}