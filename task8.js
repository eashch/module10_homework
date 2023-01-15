let map = new Map();

map.set('K1', 1);
map.set('K2', 2);
map.set('K3', 3);
map.set('K4', 4);

for (let [key, value] of map) {
    console.log(`Ключ — ${key}, значение — ${value}`);
}