const login = prompt('Enter your login');
const password = prompt('Enter your password')

if (login == 'admin' && password == 'adminpass') {
  alert ('Привіт admin ваша сума грошей 1000грн ');
    } else if (login == 'user' && password == 'userpass') {
      alert ('Привіт user ваша виручка 250грн ');
        } else if (login == 'guest' && password == 'guestpass') {
          alert ('Привіт guest ціна за одиницю товару 50грн ');
            }else if (login !== 'admin' && login !== 'user' && login !== 'guest') {
              alert('Невірний логін')
                } else {
                  alert('Невірний пароль');
                    }
