export const selectsort = (nums) => {
    let temp;
    let index;
    let start = 0;

    while (start < nums.length) {
        index = start;
        for (let i = start; i < nums.length; i++) {
            if (nums[i] < nums[index]) {
                    index = i;
            }
        }
        if (index !== start) {
            temp = nums[start];
            nums[start] = nums[index];
            nums[index] = temp;
        }
        start++;
    }

    return nums;
}