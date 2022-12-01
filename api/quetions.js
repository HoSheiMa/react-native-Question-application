const Questions = async category => {
  var formdata = new FormData();
  formdata.append('token', '1234567890');
  formdata.append(
    'sql',
    `SELECT * FROM article where category='${category}'; `,
  );

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  let r = await fetch(
    'https://sms-api-react-native.000webhostapp.com/api.php',
    requestOptions,
  );

  return await r.json();
};

export default Questions;
