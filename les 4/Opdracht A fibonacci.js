let a = 0, b = 1;
while (a < 10000000) console.log(a), (a = [b, b += a][0]);