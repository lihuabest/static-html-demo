import './css/libs/all.scss';
import './css/controllers/controllers.scss';

import controllers from './js/controllers/controllers';

$(() => {
    let ctrl = document.body.getAttribute('controller');
    controllers[ctrl].init();
    document.body.removeAttribute('controller');
});
