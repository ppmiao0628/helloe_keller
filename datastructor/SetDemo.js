/**
 * Created by kellerme on 2018/6/10
 */
function Set() {
    let items = {};
    this.has = function (value) {
        return items.hasOwnProperty(value);
    };
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };
    this.clear = function () {
        this.items = {};
    };
    this.size = function () {
        return Object.keys(items).length;
    };
    this.values = function () {
        let values = [];
        for (let i = 0, key = Object.keys(items); i < key.length; i++) {
            values.push(items[key[i]]);
        }
        return values;
    };
    // 并集
    this.union = function (otherSet) {
        let unionSet = new Set();
        let values = this.values();
        values.forEach((value) => {
            unionSet.add(value);
        });
        values = otherSet.values();
        values.forEach((value) => {
            unionSet.add(value);
        });
        return unionSet;
    };
    // 交集
    this.intersection = function (otherSet) {
        let intersectionSet = new Set();
        let values = this.values();
        values.forEach(value => {
            if (otherSet.has(value)){
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    };
    // 差集
    this.difference = function (otherSet) {
        let differenceSet = new Set();
        let values = this.values();
        values.forEach(value=>{
            if (!otherSet.has(value)){
                differenceSet.add(value);
            }
        });
        return differenceSet;
    };
    // 子集 a是否是b的子集，a.subSet(b);
    this.subSet = function (otherSet) {
        if (otherSet.size()<this.size()){
            return false;
        } else {
            let values = this.values();
            values.forEach(val=>{
                if (otherSet.has(val)){
                    return false;
                }
            });
            return true;
        }
    };
}

// test
// let set = new Set();
// set.add(1);
// console.log(set.values());
// set.add(2);
// console.log(set.values());
// set.remove(2);
// console.log(set.values());
// console.log(set.size());
let set1 = new Set();
let set2 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
set2.add(4);
set2.add(5);
set2.add(3);
console.log(set1.union(set2).values());
console.log(set1.intersection(set2).values());
console.log(set1.difference(set2).values());