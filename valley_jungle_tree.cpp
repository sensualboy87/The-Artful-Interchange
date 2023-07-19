#include<iostream>
using namespace std;

// A game of rock, paper, scissors

// Define a function to start the game.
void startGame(){
    std::cout << "Welcome to The Artful Interchange!\n";
    std::cout << "Let's play a game of rock, paper, scissors!\n";
    std::cout << "Choose your weapon: (r)ock, (p)aper, (s)cissors\n";
}

// Define a function to get the user's choice.
char getUserChoice(){
    char userChoice;
    std::cin >> userChoice;
    return userChoice;
}

// Define a function to get the computer's choice.
char getComputerChoice(){
    char computerChoice;
    srand(time(NULL));
    int computerChoiceInt = rand() % 3;
    if (computerChoiceInt == 0) {
        computerChoice = 'r';
    } else if (computerChoiceInt == 1) {
        computerChoice = 'p';
    } else {
        computerChoice = 's';
    }
    return computerChoice;
}

// Define a function to determine the winner.
char determineWinner(char userChoice, char computerChoice) {
    if (userChoice == 'r') {
        if (computerChoice == 'r') {
            return 'd';
        } else if (computerChoice == 'p') {
            return 'c';
        } else {
            return 'u';
        }
    } else if (userChoice == 'p') {
        if (computerChoice == 'r') {
            return 'u';
        } else if (computerChoice == 'p') {
            return 'd';
        } else {
            return 'c';
        }
    } else {
        if (computerChoice == 'r') {
            return 'c';
        } else if (computerChoice == 'p') {
            return 'u';
        } else {
            return 'd';
        }
    }
}

// Define a function to print out the results.
void printResult(char userChoice, char computerChoice, char winner) {
    std::cout << "You chose " << userChoice << "\n";
    std::cout << "The computer chose " << computerChoice << "\n";
    if (winner == 'd') {
        std::cout << "It's a draw!\n";
    } else if (winner == 'u') {
        std::cout << "You won!\n";
    } else {
        std::cout << "The computer won!\n";
    }
}

// The main method.
int main() {
    startGame();
    char userChoice = getUserChoice();
    char computerChoice = getComputerChoice();
    char winner = determineWinner(userChoice, computerChoice);
    printResult(userChoice, computerChoice, winner);
    return 0;
}