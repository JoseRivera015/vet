const rootComponent = {
  data() {
    return root
  }
}
const app = Vue.createApp(rootComponent)
app.component('app-news',{
  template: `
  <aside class="bg-dark text-light p-3 mb-3 rounded">
    <h3 class="mb-3">Novedades</h3>
    <ul>
      <li v-for="item in news" class="mb-3">
        <a class="text-primary text-decoration-none" :href="location(item.link)">{{ item.text }}</a><br>
        <p class="fw-light fst-italic">{{ item.date }}</p>
      </li>
    </ul>
  </aside>
  `,
  data() {
    return{
      news: [
        {
          text: 'CÓMO CORTAR LAS UÑAS DE TU GATO',
          date: 'Publicado 8 de Junio, 2021',
          link: 'blog/como-cortar-uñas-gato.html'   
        },
        {
          text: 'REVISIONES SEMANALES DE TU GATO',
          date: 'Publicado 8 de Junio, 2021',
          link: 'blog/revisiones-semanales-de-tu-gato.html'   
        }
      ]
    }
  },
  methods: {
    location(link) {
      let prelink = '../'
      let stringToCut = '/vet/'
      let str =  window.location.pathname.slice(stringToCut.length)
      for (count = 0, i = 0; i < str.length; i++) {
        if (str[i] === '/')
        count++
      }
      for (i = 0; i < count; i++) {
        link = prelink + link
      }
      return link
    }
  }
})
app.component('app-carousel',{
  props: ['carousel'],
  template: `
    <div :id="carousel.id" class="carousel slide mb-3" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button v-for="(item, index) in carousel.items" type="button" :data-bs-target="'#'+carousel.id" :data-bs-slide-to="index" :class="{active: index === 0}" aria-current="index === 0 ? true: false" :aria-label="'Slide ' + index"></button>
      </div>
      <div class="carousel-inner">
        <div v-for="(item, index) in carousel.items" class="carousel-item" :class="{active: index === 0}">
          <img :src="item.image" class="d-block w-100" :alt="item.label" >
          <div class="carousel-caption d-none d-md-block">
            <h5 style="text-shadow: 1px 1px 2px black;"> {{item.label}} </h5>
          </div>
        </div>     
      </div>
      <button class="carousel-control-prev" type="button" :data-bs-target="'#'+carousel.id" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" :data-bs-target="'#'+carousel.id" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `
})
app.component('app-navbar',{
  template: `
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" :href="location(nav[0].link)">
        <img :src="location(brand)" alt="...">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-for="item in nav" class="nav-item me-5">
            <a class="nav-link fs-5" :href="location(item.link)">{{ item.text }}</a>
          </li>
        </ul>      
      </div>
    </div>
  </nav>
  `,
  data() {
    return{
      brand: 'images/logo.svg',
      nav: [
        {
          link: 'index.html',  
          text: 'Inicio'
        },
        {
          link: 'about.html', 
          text: 'Nosotros'
        },
        {
          link: 'services.html', 
          text: 'Servicios'
        },
        {

          link: 'blog.html', 
          text: 'Blog'
        },
        {
          link: 'contact.html',
          text: 'Contáctanos'
        }
      ]
    }
  },
  methods: {
    location(link) {
      let prelink = '../'
      let stringToCut = '/vet/'
      let str =  window.location.pathname.slice(stringToCut.length)
      for (count = 0, i = 0; i < str.length; i++) {
        if (str[i] === '/')
        count++
      }
      for (i = 0; i < count; i++) {
        link = prelink + link
      }
      return link
    }
  }
})
app.component('app-footer',{
  template: `
  <footer class="bg-dark text-light">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-4">
          <h3>Clinica Veterinaria Cat Lover</h3>
          <ul>
            <li>Clínica: 555-6767</li>
            <li>Whatsapp: 936-186-049</li>
            <li>Av. Antunez de Mayolo crda 16, cruce con Av. Universitaria, Luis Alva N° 14 - Los Olivos</li>  
          </ul>
        </div>
        <div class="col-12 col-md-4">
          <h3>Enlaces de interés</h3>
          <ul>
            <li v-for="item in nav"><a class="text-primary text-decoration-none" :href="location(item.link)">{{ item.text }}</a></li>
          </ul>
        </div>

        <div class="col-12 col-md-4">
          <h3>Escríbenos a:</h3>
          <div >
            <a class="text-primary text-decoration-none" href="mailto:contacto@catlover.com">contacto@catlover.com</a>
          </div>
          <div class="my-2">
            <a v-for="item in contactIcons" class="btn btn-outline-primary me-2" :href="item.link" role="button">
              <i :class="item.icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `,
  data() {
    return{
      nav: [
        {
          link: 'index.html',  
          text: 'Inicio'
        },
        {
          link: 'about.html', 
          text: 'Nosotros'
        },
        {
          link: 'services.html', 
          text: 'Servicios'
        },
        {

          link: 'blog.html', 
          text: 'Blog'
        },
        {
          link: 'contact.html',
          text: 'Contáctanos'
        }
      ],
      contactIcons: [
        {
          icon: 'bi bi-facebook',
          link: 'www.facebook.com'
        },
        {
          icon: 'bi bi-youtube',
          link: 'www.youtube.com'
        }
      ]
    }
  },
  methods: {
    location(link) {
      let prelink = '../'
      let stringToCut = '/vet/'
      let str =  window.location.pathname.slice(stringToCut.length)
      for (count = 0, i = 0; i < str.length; i++) {
        if (str[i] === '/')
        count++
      }
      for (i = 0; i < count; i++) {
        link = prelink + link
      }
      return link
    }
  }
})
const vm = app.mount('#app')