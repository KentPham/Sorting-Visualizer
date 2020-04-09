export const mergesort = (nums) => {
    if (nums.length == 1) {
        return nums;
    }
    let middle = Math.ceil(nums.length/2);
    let lnums = mergesort(nums.slice(0, middle));
    let rnums = mergesort(nums.slice(middle, nums.length));

    let short;
    if (lnums.length < rnums.length) {
        short = lnums.length;
    } else {
        short = rnums.length;
    }
    num = [];
    for (let i = 0; i < short; i++) {
        
    }
    return nums;
}