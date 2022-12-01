const Categorys = async () => {
  // Example POST method implementation:
  // Default options are marked with *
  var formdata = new FormData();
  formdata.append('token', '1234567890');
  formdata.append('sql', 'SELECT * FROM category;');

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
  // .then(response => response.json())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));
  // return response.json(); // parses JSON response into native JavaScript objects
};

export default Categorys;
