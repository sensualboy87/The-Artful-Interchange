#include <iostream>
#include <string>
#include <map>

// Data structure to store the artful interchange
class ArtfulInterchange 
{
private:
    std::map<std::string, int> artfulInterchange;
 
public:
    // Inserts a key-value pair into the artful interchange
    void insert(const std::string &key, int val) 
    {
        artfulInterchange.insert(std::pair<std::string, int>(key, val));
    }
 
    // Given a key, finds the value in the artful interchange
    int search(const std::string &key) 
    {
        auto it = artfulInterchange.find(key);
        if (it != artfulInterchange.end())
            return it->second;
        return -1;
    }	
 
    // Deletes a key-value pair from the artful interchange
    void erase(const std::string &key) 
    {
        artfulInterchange.erase(key);
    }
 
    // Updates the value associated with a given key
    void update(const std::string &key, int val)
    {
        artfulInterchange[key] = val;
	}

    // Prints all the elements in the artful interchange
    void printAll()
    {
        for (auto it = artfulInterchange.begin(); it != artfulInterchange.end(); ++it) 
            std::cout << "(" << it->first << ", " << it->second << ")" << std::endl;
    }
};
 
// Main function
int main()
{
    // Create an object of ArtfulInterchange class
    ArtfulInterchange interchange;
 
    // Perform some operations
    interchange.insert("Apple", 100);
    interchange.insert("Mango", 120);
    interchange.insert("Orange", 80);
    interchange.update("Orange", 90);
 
    int x = interchange.search("Orange");
    if (x != -1)
        std::cout << "Price of Orange is " << x << std::endl;
 
    interchange.erase("Mango");
 
    std::cout << "Artful Interchange: " << std::endl;
    interchange.printAll();
 
    return 0;
}