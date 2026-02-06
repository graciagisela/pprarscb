// pdf-export.js

/**
 * pdf-export.js
 * This file provides functionality to export forms as PDFs.
 * It uses the jsPDF library to convert HTML forms into PDF format.
 */

function exportToPDF(formId) {
    const form = document.getElementById(formId);
    if (!form) {
        console.error(`Form with ID \\`${formId}\ not found.`);
        return;
    }

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Convert the form element to a canvas
    html2canvas(form).then(canvas => {
        // Get the image data from the canvas
        const imgData = canvas.toDataURL('image/png');
        // Add image data to PDF
        pdf.addImage(imgData, 'PNG', 10, 10);
        // Save the PDF
        pdf.save(`${formId}.pdf`);
    }).catch(err => {
        console.error('Error generating PDF:', err);
    });
}