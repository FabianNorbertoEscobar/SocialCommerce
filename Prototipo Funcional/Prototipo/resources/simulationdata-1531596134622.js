function initData() {
  jimData.variables["loc"] = "";
  jimData.variables["precio"] = "";
  jimData.variables["cat"] = "";
  jimData.variables["titulo"] = "";
  jimData.variables["prov"] = "";
  jimData.variables["Busqueda"] = "";
  jimData.variables["creada"] = "false";
  jimData.variables["desc"] = "";
  jimData.datamasters["Publicaciones"] = [
    {
      "id": 1,
      "datamaster": "Publicaciones",
      "userdata": {
        "Nombre": "iPhone X",
        "Precio": "$40000",
        "Categoría": "Celulares",
        "Descripción": "sample text",
        "Imagen": "./images/59360b2e-5b44-4a00-8b3a-64c7fb8a6256.jpg",
        "Tipo": "Producto",
        "Provincia": "Buenos Aires",
        "Localidad": "La Matanza"
      }
    },
    {
      "id": 2,
      "datamaster": "Publicaciones",
      "userdata": {
        "Nombre": "Botas de nieve",
        "Precio": "$3021",
        "Categoría": "Indumentaria",
        "Descripción": "sample text",
        "Imagen": "./images/7402675e-de52-497a-aa7f-55d2bccb170a.jpg",
        "Tipo": "Producto",
        "Provincia": "Córdoba",
        "Localidad": "Córdoba"
      }
    }
  ];

  jimData.datamasters["Categorias"] = [
    {
      "id": 1,
      "datamaster": "Categorias",
      "userdata": {
        "Nombre": "Celulares"
      }
    },
    {
      "id": 2,
      "datamaster": "Categorias",
      "userdata": {
        "Nombre": "Indumentaria"
      }
    },
    {
      "id": 3,
      "datamaster": "Categorias",
      "userdata": {
        "Nombre": "Electrodomésticos"
      }
    },
    {
      "id": 4,
      "datamaster": "Categorias",
      "userdata": {
        "Nombre": "Bebidas"
      }
    },
    {
      "id": 5,
      "datamaster": "Categorias",
      "userdata": {
        "Nombre": "Comidas"
      }
    },
    {
      "id": 6,
      "datamaster": "Categorias",
      "userdata": {
        "Nombre": "Electrónica"
      }
    },
    {
      "id": 7,
      "datamaster": "Categorias",
      "userdata": {
        "Nombre": "Instrumentos"
      }
    }
  ];

  jimData.datamasters["Provincia"] = [
    {
      "id": 1,
      "datamaster": "Provincia",
      "userdata": {
        "Nombre": "Buenos Aires"
      }
    },
    {
      "id": 2,
      "datamaster": "Provincia",
      "userdata": {
        "Nombre": "Ciudad de Buenos Aires"
      }
    },
    {
      "id": 3,
      "datamaster": "Provincia",
      "userdata": {
        "Nombre": "Córdoba"
      }
    },
    {
      "id": 4,
      "datamaster": "Provincia",
      "userdata": {
        "Nombre": "Santa Fe"
      }
    },
    {
      "id": 5,
      "datamaster": "Provincia",
      "userdata": {
        "Nombre": "Entre Ríos"
      }
    },
    {
      "id": 6,
      "datamaster": "Provincia",
      "userdata": {
        "Nombre": "La Pampa"
      }
    },
    {
      "id": 7,
      "datamaster": "Provincia",
      "userdata": {
        "Nombre": "Mendoza"
      }
    },
    {
      "id": 8,
      "datamaster": "Provincia",
      "userdata": {
        "Nombre": "San Juan"
      }
    }
  ];

  jimData.datamasters["Localidad"] = [
    {
      "id": 1,
      "datamaster": "Localidad",
      "userdata": {
        "Nombre": "La Matanza"
      }
    },
    {
      "id": 2,
      "datamaster": "Localidad",
      "userdata": {
        "Nombre": "Tres de Febrero"
      }
    },
    {
      "id": 3,
      "datamaster": "Localidad",
      "userdata": {
        "Nombre": "Lomas de Zamora"
      }
    },
    {
      "id": 4,
      "datamaster": "Localidad",
      "userdata": {
        "Nombre": "CABA"
      }
    },
    {
      "id": 5,
      "datamaster": "Localidad",
      "userdata": {
        "Nombre": "Avellaneda"
      }
    },
    {
      "id": 6,
      "datamaster": "Localidad",
      "userdata": {
        "Nombre": "Morón"
      }
    }
  ];

  jimData.isInitialized = true;
}