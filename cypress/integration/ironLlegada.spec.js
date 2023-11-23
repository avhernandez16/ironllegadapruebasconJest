import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { AddIronLlegadaModal } from '../../src/components/pages/noticias/ironEntrada';

describe('Pruebas en componente <iron llegada/>', () => {
     
    test('El numero de remision debe ser entre 10 y 20 numeros', () => {
      render(<AddIronLlegadaModal />);
      
      const inputNumeroRemision = screen.getByPlaceholderText('Numero Remision');       
      fireEvent.change(inputNumeroRemision, { target: { value: '123456789' } });
      const submitButton = screen.getByText('Añadir Remesa');
      fireEvent.click(submitButton);
      expect(screen.getByText('El numero de remision debe ser entre 10 y 20 numeros')).toBeTruthy();      
    });
  
    test('El codigo del medio debe de ser de 8 caracteres', () => {
      render(<AddIronLlegadaModal />);
      const inputCodigoMedio = screen.getByPlaceholderText('Codigo Medio');        
      fireEvent.change(inputCodigoMedio, { target: { value: 'MLAE2123L8' } });
      const submitButton = screen.getByText('Añadir Remesa');
      fireEvent.click(submitButton);
      expect(screen.getByText('El codigo del medio debe de ser de 8 caracteres')).toBeTruthy();
    });
    
    // test('Todos los campos son obligatorios', () => {
    //     render(<AddIronLlegadaModal />);  
    //     const submitButton = screen.getByText('Añadir Remesa');
    //     fireEvent.click(submitButton);
    //     expect(screen.getByText('Todos los campos son obligatorios')).toBeTruthy();
    //   });






    // test('prueba longitud del codigo', ()=>{
    //     //1. inicializacion        
    //     const codigo = '123456780000000'

    //     //2. estimulo
    //     render(<AddIronLlegadaModal />);
    
    //     //3. observar el comportamiento... esperado
    //     //expect(getByTestId ('test-inputCodigo').innerHTML.length).toBe(8)        
    //     expect(screen.getByRole('input', {name:'Numero Remision'}))
            
    // });  
   
});

