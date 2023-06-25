1 % The Artful Interchange: A MATLAB Program
2 
3 % This program reads in a data set from a text file and performs 
4 % various calculations, such as finding the maximum value, 
5 % minimum value, average, and standard deviation. It then writes 
6 % the results to a new text file. 
7 
8 % Define global constants 
9 NUM_SAMPLES = 100;
10 
11 % Open the input file for reading
12 fid = fopen('input.txt', 'r');
13 
14 % Initialize counter and array for input data
15 ctr = 0;
16 data = zeros(NUM_SAMPLES, 1);
17 
18 % Read data from file and store in array
19 while ~feof(fid)
20     ctr = ctr + 1;
21     data(ctr) = fscanf(fid, '%f', 1);
22 end
23 
24 % Close the input file
25 fclose(fid);
26 
27 % Calculate the maximum, minimum, average, and standard 
28 % deviation of the data set 
29 maxVal = max(data);
30 minVal = min(data);
31 avgVal = mean(data);
32 stdevVal = std(data);
33 
34 % Open the output file for writing
35 outputFid = fopen('output.txt', 'w');
36 
37 % Write results to the output file
38 fprintf(outputFid, 'Max Value = %f\n', maxVal);
39 fprintf(outputFid, 'Min Value = %f\n', minVal);
40 fprintf(outputFid, 'Average Value = %f\n', avgVal);
41 fprintf(outputFid, 'Standard Deviation = %f\n', stdevVal);
42 
43 % Close the output file
44 fclose(outputFid);
45 
46 % Plot the data using a bar graph
47 figure;
48 bar(data);
49 
50 % Label the graph axes
51 xlabel('Data Points');
52 ylabel('Value');
53 
54 % Add title to the graph
55 title('Data Set');
56 
57 %Save the figure as a png file
58 print('dataset.png', '-dpng');
59 
60 % End of program