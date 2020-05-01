export const bubblesort = (nums) => {
    let end = nums.length - 1;
    let timeline = [];
    let pass;
    let temp;

    console.log(nums);
    while (end > 0) {
        for (let i = 0; i < end; i++) {
            if (nums[i] > nums[i+1]) {
                temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
                pass = 1;
            } else {
                pass = 0;
            }
            timeline.push([i, i+1, pass]);
        }
        end--;
    }

    return nums;
}