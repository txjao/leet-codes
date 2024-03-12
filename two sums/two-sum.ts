function twoSum(nums: number[], target: number): number[] {
    let indexes: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (value + nums[j] === target) {
                indexes.push(i, j);
                break;
            }
        }
    }

    return indexes;
}
