export function insertionsort(unsortedList) {
    const nums = [...unsortedList];
    let tempTimeline = [];
    let temp;
    let index = 0;

    if (nums[1] < nums[0]) {
        temp = nums[1];
        nums[1] = nums[0];
        nums[0] = temp;
        tempTimeline.push([0, 1, 1, -1]);
    } else {
        tempTimeline.push([0, 1, 0, -1]);
    }

    for (let i = 2; i < nums.length; i++) {
        tempTimeline.push([i, i-1, 0, -1]);
        if (nums[i] < nums[i-1]) {
            for (let j = 0; j < i; j++) {
                tempTimeline.push([j, -1, 0, index]);
                if (nums[i] < nums[j]) {
                    index = j;
                    tempTimeline.push([j, -1, 0, index]);
                    break;
                }
            }
            temp = nums[i];
            for (let j = i; j > index; j--) {
                nums[j] = nums[j-1];
                tempTimeline.push([j, j-1, 1, 0]);
            }
            nums[index] = temp;
            tempTimeline.push([index, -2, 1, nums[index]]);
        }
    }

    return tempTimeline;
}