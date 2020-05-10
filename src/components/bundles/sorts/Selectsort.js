export const selectsort = (unsortedList) => {
    const nums = [...unsortedList];
    let tempTimeline = [];
    let temp;
    let index;
    let start = 0;

    while (start < nums.length) {
        index = start;
        tempTimeline.push([-1, -1, 0, -1, start]);
        for (let i = start; i < nums.length; i++) {
            tempTimeline.push([i, -1, 0, index, start]);
            if (nums[i] < nums[index]) {
                index = i;
                tempTimeline.push([i, -1, 0, index, start]);
            }
        }
        if (index !== start) {
            temp = nums[start];
            nums[start] = nums[index];
            nums[index] = temp;
            tempTimeline.push([start, index, 1, -1, -1]);
        }
        start++;
    }

    return tempTimeline;
}