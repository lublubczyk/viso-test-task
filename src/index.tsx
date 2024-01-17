import ReactDOM from 'react-dom/client';

import { App } from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

// Firebace не вдалося мені заінсталити витратив на це дуже багато часу 
// постійно сипались помилки такого плану
//npm ERR! code ERR_SSL_CIPHER_OPERATION_FAILED
//npm ERR! errno ERR_SSL_CIPHER_OPERATION_FAILED
