export const bubblesort = (nums) => {
    let end = nums.length - 1;
    let temp;

    while (end > 0) {
        for (let i = 0; i < end; i++) {
            if (nums[i] > nums[i+1]) {
                temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
            }
        }
        end--;
    }

    return nums;
}