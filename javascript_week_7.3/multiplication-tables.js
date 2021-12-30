// Table of nine

for (let i = 1; i <= 10; i++) {
    const tableOfNine = (i * 9);
    console.log(`${i} x 9 = ${tableOfNine}`);
};

// Tables one to ten

for (let i = 1; i <= 10; i++) {
    for (let w = 1; w <= 10; w++) {
        const tableOneToTen = (i * w);
        console.log(`${i} x ${w} = ${tableOneToTen}`);
    }
};