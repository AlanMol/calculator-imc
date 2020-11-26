import {peso} from "./peso";


describe('unit Test Rango de Peso', () => {

    it('Recibe información rango 16 =peso bajo  ', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso(16);

        // Assert
        expect(result).toBe('peso bajo');
    })

    it('Recibe información rango 18 = peso bajo', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso(18);

        // Assert
        expect(result).toBe('peso bajo');
    })

    it('Recibe información rango 32.4 = obesidad 1 ', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso(32.4);

        // Assert
        expect(result).toBe('obesidad 1');
    })

    it('Recibe información rango 35 = obesidad 2 ', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso(35);

        // Assert
        expect(result).toBe('obesidad 2');
    })

    it('Recibe información rango 43 = obesidad 3', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso(43);

        // Assert
        expect(result).toBe('obesidad 3');


    })

})  