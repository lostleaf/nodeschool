a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
filtered = a.filter(function (x) {
    return x % 2 == 0;
});
console.log(filtered);
