import React from 'react';

class PDFDownloader extends React.Component {
  handleDownloadClick = () => {
    const { pdfUrl, fileName } = this.props;

    // Crée un élément <a> pour déclencher le téléchargement du PDF
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.target = '_blank'; // Ouvrir le PDF dans un nouvel onglet, retirez-le si ce n'est pas nécessaire
    anchor.download = fileName || 'Layla_Abo_Saad_cv.pdf'; // Spécifiez le nom de fichier pour le fichier téléchargé

    // Déclenche un événement de clic sur l'élément <a>
    anchor.click();

    // Nettoyage : Supprime l'élément <a> créé dynamiquement
    anchor.remove();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDownloadClick}>Télécharger le PDF</button>
      </div>
    );
  }
}

export default PDFDownloader;
