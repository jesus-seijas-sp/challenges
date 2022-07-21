# Tribbles

![image](https://user-images.githubusercontent.com/15154218/180205712-0cb59e23-4656-4bbb-8593-e81205d018a5.png)


## Introduction

The USS Enterprise has a little trouble with Tribbles. 
The Tribbles are cute creatures, but they multiply too often.

You have N groups of tribbles, with M Tribbles per group. Every hour, one of the groups generates a new population of Tribbles with the same amount of the group, and those Tribbles can generate a new group or join one of the existing groups.

How many hours they need to have a total population of exactly K Tribbles?

## Examples
N=1 M=1 K=1
They need 0 hours, as there are already 1 Tribble as population.

N=1 M=1 K=2
They need 1 hour. The existing group generates a new group of 1, and this group can merge with the existing one or generates a new group, and the total population will be 2.

N=1 M=1 K=4
They need 2 hours. The existing group generates a new group of 1, that joins the existing group, so now we have 1 group with population 2. In the second hour this group generates a new group of 2, so we have 4 Tribbles.

N=2 M=2 K=12
They need 3 hours. 
Hour 0: Group 1 has 2 Tribbles, Group 2 has 2 Tribbles. Total population is 4.
Hour 1: Group 1 grow and join itself, so Group 1 has 4 Tribbles and Group 2 has 2 Tribbles. Total population is 6.
Hour 2: Group 1 grow and join itself, so Group 1 has 8 Tribbles and Group 2 has 2 Tribbles. Total population is 10.
Hour 3: Group 2 grow and join itself, so Group 1 has 8 Tribbles and Group 2 has 4 Tribbles. Total population is 12.

N=1 M=3 K=7
It's impossible

N=10 M=5 K=500
They need 10 hours

N=1234 M=13 K=13131313
They need 29 hours

## Challenge

Can you get the number of hours when N=33 M=35 and K=10670846278085
