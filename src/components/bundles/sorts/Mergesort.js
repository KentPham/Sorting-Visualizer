const merge = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i === 0 && arr1[i] > arr2[j]) {
                console.log("1");
                arr1.splice(0, 0, arr2[j]);
                arr2.splice(j, 1);
                i = -1;
            } else if (i === arr1.length - 1) {
                console.log("2");
                arr1.push(arr2[j]);
                arr2.splice(j, 1);
            } else if (arr1[i] <= arr2[j] && arr1[i+1] > arr2[j]) {
                console.log("3");
                arr1.splice(i+1, 0, arr2[j]);
                arr2.splice(j, 1);
            }
        }
    }
    return arr1;
}

export const mergesort = (nums) => {
    if (nums.length === 1) {
        return nums;
    }
    let middle = Math.ceil(nums.length/2);
    let lnums = mergesort(nums.slice(0, middle));
    let rnums = mergesort(nums.slice(middle, nums.length));

    return merge(lnums, rnums);
}