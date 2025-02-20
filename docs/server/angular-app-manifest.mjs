
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Gallery-Ang19/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Gallery-Ang19/gallery",
    "route": "/Gallery-Ang19"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Gallery-Ang19/gallery",
    "route": "/Gallery-Ang19/home"
  },
  {
    "renderMode": 2,
    "route": "/Gallery-Ang19/gallery"
  },
  {
    "renderMode": 0,
    "route": "/Gallery-Ang19/details/*"
  },
  {
    "renderMode": 2,
    "route": "/Gallery-Ang19/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5831, hash: '3bcdd987b6ee78b08858af57ccdf19b7aa58995e6f2465079319ebafbda06562', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4560, hash: '9e65ae9798d9b7057963d012f63baf556c39e1732b74d9ec24a4d71493fd1971', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 29945, hash: 'f6e4a3aeb30f71b00bda5940c90e9b1eac297bb2011215bb83c667cb233d6802', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'styles-ND3HT7DG.css': {size: 6605, hash: 'F0zS/QTKQmk', text: () => import('./assets-chunks/styles-ND3HT7DG_css.mjs').then(m => m.default)}
  },
};
