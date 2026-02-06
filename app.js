// app.js

// Function to open the modal form
function openForm() {
    document.getElementById('formModal').style.display = 'block';
}

// Function to close the modal form
function closeForm() {
    document.getElementById('formModal').style.display = 'none';
}

// Function to submit the form
function submitForm() {
    const formData = {
        namaPasien: document.getElementById('namaPasien').value,
        tanggalLahir: document.getElementById('tanggalLahir').value,
        nomorRekamMedis: document.getElementById('nomorRekamMedis').value,
        dpjp: document.getElementById('dpjp').value,
        diagnosa: document.getElementById('diagnosa').value,
        kulturDiminta: document.getElementById('kulturDiminta').value,
        jenisKultur: document.getElementById('jenisKultur').value,
        hasilKultur: document.getElementById('hasilKultur').value,
        bakteriJamur: document.getElementById('bakteriJamur').value,
        antibiotikResisten: document.getElementById('antibiotikResisten').value
    };

    // Save data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Optionally: close the form after submission
    closeForm();
    alert('Form submitted successfully!');
}

// Add event listeners to handle form open/close
document.getElementById('openFormButton').addEventListener('click', openForm);
document.getElementById('closeFormButton').addEventListener('click', closeForm);
document.getElementById('submitFormButton').addEventListener('click', submitForm);