import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Cursos from './Cursos_pdf';
import Reportes from './Reportes_pdf';

function App() {
  const fecha = new Date();
  const fechaFormateada = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`;
  return (
    <div className="App">
      <PDFDownloadLink document={<Cursos />} fileName={`Registro_de_lista_de_cursos-${fechaFormateada}.pdf`}>
        {({ blob, url, loading, error }) =>
          loading ? 'Cargando documento...' : 'Descargar los cursos PDF'
        }
      </PDFDownloadLink> <br/><br/>
      <PDFDownloadLink document={<Reportes />} fileName={`Registro_de_reportes_especificos-${fechaFormateada}.pdf`}>
        {({ blob, url, loading, error }) =>
          loading ? 'Cargando documento...' : 'Descargar los reportes PDF'
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
