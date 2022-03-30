# Sierra Nevada

## Introduction

You're organizing paths for snow ski in Sierra Nevada, the beautiful mountains located in Granada.
You have rectangle maps that contains square cells, where each cell haves a number representing the average height at this point.
The rules for the paths are:
- You start at a cell
- From a cell you can only ski to cells that are at the North, South, West or East
- From a cell of a given height you can only ski to another cell with less height than the current one

From the map you objective is to find the most long path, considering long:
- The path with highest depth, where depth is the number of cells visited
- If you have 2 or more candidate paths with the same depth, choose the one with highest length, where length is the difference between the height of the starting cell and the height of the final cell.
 
The answer should be with the format depth-length (like 7-244).

## Example

Imagine this input (test.txt):

4 8 7 3 
2 5 9 3 
6 3 2 5 
4 4 1 6

There are 2 long paths of depth 5:

4   8   7   3 
    |
2   5   9   3 
    |
6   3---2   5 
        |
4   4   1   6


4   8   7   3 
    
2   5---9   3 
    |
6   3---2   5 
        |
4   4   1   6

The length of the first one is 7 (8-1). The length of the second one is 8 (9-1).
So the answer for this one should be 5-8


## Challenge
The file "input.txt" is your map. Calculate the most long path and return the depth-length.
