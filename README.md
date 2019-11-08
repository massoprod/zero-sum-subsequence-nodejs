# Zero sum subsequence - NodeJs
Mini NodeJS application to find zero sum subsequence in array of numbers.

### Description
This program reads inuput file data and each line parse to array of numbers.
Then, it checks for zero ssum subsequence in each array and it writes result to output file as `yes` if array includes zero sum subsequence or `no` if it does not include.

## What is zero sum subsequence?
If we have sequence of numbers `2 8 -9 1`, there is a zero sum subsequence because it contains `8 -9 1`, whose sum is `8 -9 + 1 = 0`.
If sequence were `1 2 -9 8`, results should be falsy because numbers whose sum is zero **are not next to each other**.

## Run
1. Clone repository
2. Go to directory
3. Run `$ node index.js`
4. Check out *output_file.out* to see results
