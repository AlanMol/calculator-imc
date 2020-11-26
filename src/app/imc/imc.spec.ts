import { imc } from "./imc"

describe('imc unit tests', () => {
  

    it(' 15 years, 50kg,165 m = 18.36547291092746', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;
        
        // Act
        result = imc(165, 50);

        // Assert
        expect(result).toBe(18.36547291092746);
    })
    it('55 years, 65kg, 160m = 25.390624999999996', () => {
        // Arrange
        let result = 0;
        // Act
        result = imc(160, 65);
        // Assert
        expect(result).toBe(25.390624999999996);
    })
    it('23 years, 70kg, 170m = 24.221453287197235', () => {
      // Pattern AAA (Arrange - Act - Assert)

      // Arrange
      let result = 0;
      
      // Act
      result = imc(170, 70);

      // Assert
      expect(result).toBe(24.221453287197235);
  })
    it('45 years, 70kg, 172m = 23.661438615467823', () => {
    // Pattern AAA (Arrange - Act - Assert)9

    // Arrange
    let result = 0;
    
    // Act
    result = imc(172, 70);

    // Assert
    expect(result).toBe(23.661438615467823);
  })
})