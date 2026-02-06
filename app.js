// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Form definitions
const forms = {
  kultur: {
    fields: {
      namaPasien: {
        type: 'string',
        required: true
      },
      tanggalLahirPasien: {
        type: 'date',
        required: true
      },
      nomorRekamMedis: {
        type: 'string',
        required: true
      },
      dpjp: {
        type: 'string',
        required: true
      },
      diagnosa: {
        type: 'string',
        required: true
      },
      kulturYangDiminta: {
        type: 'string',
        required: true
      },
      jenisKultur: {
        type: 'string',
        required: true
      },
      hasilKultur: {
        type: 'string',
        required: true
      },
      bakteriJamurYangTeridentifikasi: {
        type: 'string',
        required: true
      },
      antibiotikResisten: {
        type: 'string',
        required: true
      }
    }
  }
};

app.post('/submit-kultur', (req, res) => {
  // Handle form submission
  const { namaPasien, tanggalLahirPasien, nomorRekamMedis, dpjp, diagnosa, kulturYangDiminta, jenisKultur, hasilKultur, bakteriJamurYangTeridentifikasi, antibiotikResisten } = req.body;
  // Process the form data here, e.g., save to database
  res.send('Form submitted successfully');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
