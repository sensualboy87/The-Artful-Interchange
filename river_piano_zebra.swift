//
//  ArtfulInterchange.swift
//

import UIKit

struct ArtfulTransformation {
    var type: String
    var length: Double
    var width: Double
    var height: Double
    var description: String
}

class ArtfulInterchange {
    
    // MARK: - Properties
    private var transformations: [ArtfulTransformation] = []
    
    //MARK: - Initializers
    init() {
        // Create an empty array of transformations
    }
    
    //MARK: - Methods
    func addTransformation(transformation: ArtfulTransformation) {
        // Add the transformation to the end of the array
        transformations.append(transformation)
    }
    
    func removeTransformation(at index: Int) {
        // Remove the transformation from the array at the specified index
        transformations.remove(at: index)
    }
    
    func transform(input: String) -> String {
        // Perform all transformations on the input string
        var output = ""
        for transformation in transformations {
            output = transformation.description(input, output, type, length, width, height)
        }
        return output
    }
    
    func getTransformationsCount() -> Int {
        // Return the number of transformations in the array
        return transformations.count
    }
    
    func getTransformation(at index: Int) -> ArtfulTransformation {
        // Return the transformation at the specified index
        return transformations[index]
    }
    
    func setTransformation(at index: Int, to transformation: ArtfulTransformation) {
        // Set the transformation at the specified index
        transformations[index] = transformation
    }
    
    func clearTransformations() {
        // Clear all transformations from the array
        transformations.removeAll()
    }
}