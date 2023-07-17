#include <iostream> 
#include <string>
#include <vector> 

using namespace std; 

class ArtfulInterchange { 
	public: 
		void makeInterchange(string &source, string &dest); 
		
	private: 
		string m_source;
		string m_dest; 
		vector<vector<bool>> m_matrix; 
		vector<string> m_words; 
		
		void createMatrix(string &source, string &dest); 
		int min(int x, int y, int z); 
		void editDistance(string &source, string &dest); 
		void findWords(void); 
		void print(void); 
}; 

void ArtfulInterchange::makeInterchange(string &source, string &dest) { 
	m_source = source; 
	m_dest = dest; 
	
	createMatrix(source, dest); 
	editDistance(source, dest); 
	findWords(); 
	print(); 
} 

void ArtfulInterchange::createMatrix(string &source, string &dest) { 
	m_matrix.resize(source.length() + 1); 
	for (int i = 0; i <= source.length(); i++) { 
		m_matrix[i].resize(dest.length() + 1); 
		for (int j = 0; j <= dest.length(); j++) 
			m_matrix[i][j] = false; 
	} 
} 

int ArtfulInterchange::min(int x, int y, int z) { 
	int min = x; 
	if (min > y) 
		min = y; 
	else if (min > z) 
		min = z; 
	return min; 
} 

void ArtfulInterchange::editDistance(string &source, string &dest) { 
	for (int i = 0; i <= dest.length(); i++) 
		m_matrix[0][i] = true; 
	
	for (int i = 0; i < source.length(); i++) { 
		for (int j = 0; j < dest.length(); j++) { 
			if (source[i] == dest[j]) 
				m_matrix[i + 1][j + 1] = m_matrix[i][j]; 
			else 
				m_matrix[i + 1][j + 1] = 
					min(m_matrix[i][j], m_matrix[i][j + 1], m_matrix[i + 1][j]);
		} 
	} 
} 

void ArtfulInterchange::findWords(void) { 
	int i = m_source.length(), j = m_dest.length(); 
	while (i > 0 && j > 0) { 
		if (m_matrix[i][j - 1] == false 
				&& m_matrix[i - 1][j] == false 
				&& m_matrix[i - 1][j - 1] == true) {
			m_words.push_back(m_dest.substr(j - 1, 1)); 
			i--; j--; 
		} 
		else if (m_matrix[i][j - 1] == true) { 
			j--; 
		} 
		else { 
			i--; 
		} 
	} 
} 

void ArtfulInterchange::print(void) { 
	for (int i = m_words.size() - 1; i >= 0; i--) 
		cout << m_words[i]; 
	cout << endl; 
} 

int main(void) { 
	ArtfulInterchange artfulInterchange; 
	string source, dest; 
	cout << "Please enter the source string: "; 
	cin >> source; 
	cout << "Please enter the destination string: "; 
	cin >> dest; 
	
	artfulInterchange.makeInterchange(source, dest); 
	return 0; 
}