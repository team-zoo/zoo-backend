// const signin = require('./lib/signin');
const haveAccount = require('./lib/haveAccount');
const selection = require('./lib/select');
const gradient = require('gradient-string');

/* eslint-disable */
console.log(gradient.vice(`
'########::'#######:::'#######::::::'######::'####:'##::::'##:'##::::'##:'##::::::::::'###::::'########::'#######::'########::'####:
..... ##::'##.... ##:'##.... ##::::'##... ##:. ##:: ###::'###: ##:::: ##: ##:::::::::'## ##:::... ##..::'##.... ##: ##.... ##: ####:
:::: ##::: ##:::: ##: ##:::: ##:::: ##:::..::: ##:: ####'####: ##:::: ##: ##::::::::'##:. ##::::: ##:::: ##:::: ##: ##:::: ##: ####:
::: ##:::: ##:::: ##: ##:::: ##::::. ######::: ##:: ## ### ##: ##:::: ##: ##:::::::'##:::. ##:::: ##:::: ##:::: ##: ########::: ##::
:: ##::::: ##:::: ##: ##:::: ##:::::..... ##:: ##:: ##. #: ##: ##:::: ##: ##::::::: #########:::: ##:::: ##:::: ##: ##.. ##::::..:::
: ##:::::: ##:::: ##: ##:::: ##::::'##::: ##:: ##:: ##:.:: ##: ##:::: ##: ##::::::: ##.... ##:::: ##:::: ##:::: ##: ##::. ##::'####:
 ########:. #######::. #######:::::. ######::'####: ##:::: ##:. #######:: ########: ##:::: ##:::: ##::::. #######:: ##:::. ##: ####:
........:::.......::::.......:::::::......:::....::..:::::..:::.......:::........::..:::::..:::::..::::::.......:::..:::::..::....::

                                                                                                       
`));

haveAccount().then(selection);
