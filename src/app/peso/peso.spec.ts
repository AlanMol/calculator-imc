import  { peso } from "./peso";


describe('unit Test peso de Peso', () => {

    it('Recibe información peso edad:adulto, imc:16.6, genero: masculino = peso bajo', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adulto', 16.6, 'masculino');

        // Assert
        expect(result).toBe('peso bajo');
    })

    it('Recibe información peso edad:adulto, imc:19.1, genero: masculino = peso normal', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adulto', 19.1,'masculino');

        // Assert
        expect(result).toBe('peso normal');
    })
    
    it('Recibe información peso edad:adulto, imc:25.8, genero: femenino = sobrepeso', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adulto', 25.8, 'femenino');

        // Assert
        expect(result).toBe('sobrepeso');
    })

    

    it('Recibe información peso edad:adulto, imc:31.2, genero: femenino = obesidad 1', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adulto', 31.2,'femenino');

        // Assert
        expect(result).toBe('obesidad 1');
    })

    it('Recibe información peso edad:adulto, imc:36.4, genero: masculino = obesidad 2', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adulto', 36.4,'masculino');

        // Assert
        expect(result).toBe('obesidad 2');
    })
    

    it('Recibe información peso edad:adulto, imc:51.8, genero: femenino = obesidad 3', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adulto', 51.8,'femenino');

        // Assert
        expect(result).toBe('obesidad 3');
    })

   

    //niño
    it('Recibe información peso edad:niño, imc:13.2, genero: femenino = peso bajo', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('niño', 13.2,'femenino');

        // Assert
        expect(result).toBe('peso bajo');
    })

    it('Recibe información peso edad:niño, imc:15.2, genero: femenino = peso normal', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('niño', 15.2,'femenino');

        // Assert
        expect(result).toBe('peso normal');
    })

    it('Recibe información peso edad:niño, imc:17.4, genero: femenino = sobrepeso', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('niño', 17.4,'femenino');

        // Assert
        expect(result).toBe('sobrepeso');
    })

    it('Recibe información peso edad:niño, imc:18.9, genero: femenino = obesidad', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('niño', 18.9,'femenino');

        // Assert
        expect(result).toBe('obesidad');
    })
    
    it('Recibe información peso edad:niño, imc:13.5, genero: masculino = peso bajo', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('niño', 13.5,'masculino');

        // Assert
        expect(result).toBe('peso bajo');
    })

    it('Recibe información peso edad:niño, imc:15.5, genero: masculino = peso normal', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('niño', 15.5,'masculino');

        // Assert
        expect(result).toBe('peso normal');
    })

    it('Recibe información peso edad:niño, imc:17.3, genero: masculino = sobrepeso', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('niño', 17.3,'masculino');

        // Assert
        expect(result).toBe('sobrepeso');
    })
    
    it('Recibe información peso edad:niño, imc:19.1, genero: masculino = obesidad', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('niño', 19.1,'masculino');

        // Assert
        expect(result).toBe('obesidad');
    })

    //adolescente
    it('Recibe información peso edad:adolescente, imc:16.4, genero: masculino = peso bajo', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adolescente', 16.4,'masculino');

        // Assert
        expect(result).toBe('peso bajo');
    })

    it('Recibe información peso edad:adolescente, imc:17.4, genero: masculino = peso normal', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adolescente', 17.4,'masculino');

        // Assert
        expect(result).toBe('peso normal');
    })

    it('Recibe información peso edad:adolescente, imc:18.9, genero: masculino = sobrepeso', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adolescente', 18.9,'masculino');

        // Assert
        expect(result).toBe('sobrepeso');
    })
    
    
    
    it('Recibe información peso edad:adolescente, imc:22.6, genero: masculino = obesidad', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adolescente', 22.6,'masculino');

        // Assert
        expect(result).toBe('obesidad');
    })

    it('Recibe información peso edad:adolescente, imc:13.9, genero: femenino = peso bajo', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adolescente', 13.9,'femenino');

        // Assert
        expect(result).toBe('peso bajo');
    })

    it('Recibe información peso edad:adolescente, imc:17.5, genero: femenino = peso normal', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adolescente', 17.5,'femenino');

        // Assert
        expect(result).toBe('peso normal');
    })

    it('Recibe información peso edad:adolescente, imc:21.5, genero: femenino = sobrepeso', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adolescente', 21.5,'femenino');

        // Assert
        expect(result).toBe('sobrepeso');
    })

    it('Recibe información peso edad:adolescente, imc:23.9, genero: femenino = obesidad', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('adolescente', 23.9,'femenino');

        // Assert
        expect(result).toBe('obesidad');
    })

    it('Recibe información peso edad:error, imc:0, genero: masculino = obesidad', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = peso('error', 0,'masculino');

        // Assert
        expect(result).toBe('error');
    })

}) 