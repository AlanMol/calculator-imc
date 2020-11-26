import { peso } from "./peso";


describe('unit Test peso', () => {

    it('Tabla edad:niño, imc:16.3, genero: mujer = peso normal', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('niño', 16.3, 'mujer');

        // Assert
        expect(result).toBe('peso normal');
    })

    it('Tabla: edad:niño imc:15.6, genero: masculino = peso normal', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('niño', 15.6,'masculino');

        // Assert
        expect(result).toBe('peso normal');
    })

    it('Tabla: edad:niño, imc:17.3, genero: mujer = sobrepeso', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('niño',17.3,'mujer');

        // Assert
        expect(result).toBe('sobrepeso');
    })

    it('Tabla edad:adolesecente, imc:16.0, genero: masculino = peso bajo', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adolescente', 16.0, 'masculino');

        // Assert
        expect(result).toBe('peso bajo');
    })

    it('Tabla edad:adolescente, imc:17.9, genero: mujer = peso normal', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adolescente', 17.9, 'mujer');

        // Assert
        expect(result).toBe('peso normal');
    })

    it('Tabla edad:adulto, imc:26.5, genero: mujer = sobrepeso', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adulto', 26.5, 'mujer');

        // Assert
        expect(result).toBe('sobrepeso');
    })
    it('Tabla edad:adulto, imc:26.5, genero: masculino = sobrepeso', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adulto', 26.5, 'masculino');

        // Assert
        expect(result).toBe('sobrepeso');
    })


})