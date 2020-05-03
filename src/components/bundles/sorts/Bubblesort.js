export function bubblesort(unsortedList) {
    const arr = [...unsortedList];
    let end = arr.length - 1;
    let tempTimeline = [];
    let pass;
    let temp;

    while (end > 0) {
        for (let i = 0; i < end; i++) {
            if (arr[i] > arr[i+1]) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                pass = 1;
            } else {
                pass = 0;
            }
            tempTimeline.push([i, i+1, pass]);
        }
        end--;
    }

    return tempTimeline;
}