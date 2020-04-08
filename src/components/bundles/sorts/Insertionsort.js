export const insertionsort = (nums) => {
    let temp;
    let index = 0;

    console.log(nums);

    if (nums[1] < nums[0]) {
        temp = nums[1];
        nums[1] = nums[0];
        nums[0] = temp;
    }

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            for (let j = 0; j < i; j++) {
                if (nums[i] < nums[j]) {
                    index = j;
                    break;
                }
            }
            temp = nums[i];
            for (let j = i; j > index; j--) {
                nums[j] = nums[j-1];
            }
            nums[index] = temp;
        }
    }

    return nums;
}