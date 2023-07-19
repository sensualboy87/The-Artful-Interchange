#include <stdio.h> 
#include <string.h> 

// Defining constants 
#define MAX 10 

/* Function declarations */
void printArray(int arr[], int size); 
int createArtfulInterchange(int arr[], int n); 

// Driver program 
int main() 
{ 
	int arr[MAX], n, i, result; 

	// Input array size 
	printf("Enter size of array: "); 
	scanf("%d", &n); 

	// Input array elements 
	printf("Enter %d element in array: ", n); 
	for (i = 0; i < n; i++) 
		scanf("%d", &arr[i]); 

	// Function calling 
	result = createArtfulInterchange(arr, n); 

	// Checking output 
	if (result == 0) 
		printf("Possible\n"); 
	else
		printf("Not Possible\n"); 

	return 0; 
} 

// Function to print array 
void printArray(int arr[], int size) 
{ 
	int i; 
	for (i = 0; i < size; i++) 
		printf("%d ", arr[i]); 
	printf("\n"); 
} 

// Function to perform Artful Interchange 
// Return 1 if not possible 
// else return 0 
int createArtfulInterchange(int arr[], int n) 
{ 
	int i, min, temp, flag = 0; 

	// Finding minimum element 
	min = arr[0]; 
	for (i = 1; i < n; i++) 
		if (arr[i] < min) 
			min = arr[i]; 

	// Find minimum element and interchange it 
	for (i = 0; i < n; i++) { 

		// Traversing array 
		if (arr[i] % min == 0) { 

			// Swapping 
			temp = arr[i]; 
			arr[i] = min; 
			min = temp; 
			flag = 1; 
			break; 
		} 
	} 

	// Check for further interchanges 
	if (flag == 1) { 
		for (i = 0; i < n; i++) { 
			if (min % arr[i] == 0) { 
				temp = arr[i]; 
				arr[i] = min; 
				min = temp; 
			} 
		} 
	} 

	// Successful interchange 
	if (min == arr[0]) { 
		printf("Array after interchange:"); 
		printArray(arr, n); 
		return 0; 
	} 

	// Unsuccessful 
	return 1; 
}