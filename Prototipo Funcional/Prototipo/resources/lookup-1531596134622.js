(function(window, undefined) {
  var dictionary = {
    "9fcaa16c-dc91-4731-917d-bf9a68fbc02a": "ver toalla",
    "f3b4d31e-e1a2-411a-9b43-62a1afd6beb8": "Ver Subasta",
    "73239736-f5b4-49a6-aead-d15283c09ac6": "Ingresar a equipo de compra",
    "0c35fb4a-10dc-42c1-9b74-cfd1a2fb0d95": "Modificar datos de usuario",
    "081f2936-5b6f-4edc-8dc1-8a7944f93d1b": "Tarjetas Asociadas",
    "e161b08c-1773-4910-bf12-c6d08ba28d95": "Tarjeta",
    "ded4fcd8-3bd7-4906-b3e3-9e03e26c390f": "Círculo unido de compra",
    "0f75a961-8284-46be-a4d5-8b6a45a6beec": "Subastas",
    "be7db1d4-4aef-43b6-905a-7ac3135b5496": "Inicio",
    "5006da5d-8516-4d13-a833-f57c1ba05da2": "Inscribirse a círculo de compra",
    "43d6083c-9e74-40ab-85fa-f3cb9bc5faf6": "Equipos de Compra",
    "8513d72a-575d-4e16-b15d-582d951a89ef": "Búsqueda",
    "f6bb13b5-d793-4222-a14a-b85be0c39800": "Conversación vacía",
    "e939fd27-63da-4ed1-8c30-e980eb343270": "ver botas",
    "103027b6-d22e-43b9-9308-283db959a4e8": "Crear equipo de compra",
    "8cad3ac1-978a-4c39-ab28-3fd19ac1778a": "Publicaciones",
    "752ab556-a3f6-4ca3-ada7-c123a2ab0a0f": "Log in",
    "70f5e1b8-8ad1-43ee-ae51-570cb7bd258e": "Asociar tarjeta",
    "31a17c1b-db61-4109-a14c-c899214ac7be": "Grupos de CompraVenta",
    "47efaa91-702c-4275-9fee-fb23a8301b5c": "Crear Subasta",
    "4718f330-dc42-4efd-b40c-999b03d07f86": "Crear Círculo de compra",
    "c14c90e3-3a8b-473c-8dc1-0f61b9ac5c72": "Ver grupo de compraVenta",
    "0a4cc503-3324-4d2e-a9d7-85fbcabe8794": "Promociones",
    "beb8ba6e-e38a-4096-8bfc-f68413c249a6": "Chat",
    "37325e8e-d809-45b2-a7bd-51a60c0bd2b6": "Ver equipo de compra",
    "3f0ad8a7-71bf-4858-86e9-7e171d492344": "Eliminar usuario",
    "e24667df-4e1c-4a77-9773-b3a2efc94eab": "Plantilla",
    "5e473076-3641-4d49-ba83-a90e28c1e430": "Ofertas",
    "6618f7bf-2274-4234-b81b-54579b021a3a": "Ver Círculo de compra creado",
    "094ace2f-bf2b-49f5-b170-ce3d9cf50e51": "Circulos de compra",
    "22e7b335-f9e9-4ec5-9ef7-00fbf716eff4": "Catálogos",
    "e0653de2-e998-447c-9755-e6bc276a72ed": "Publicar",
    "782f67bb-7ab7-4a12-bd2e-13d9def19338": "Datos de Usuario",
    "27666e51-841c-4629-b20a-95d6722ea55d": "Conversación",
    "42dfc0e0-feab-4ec3-84e2-bc82698ad066": "ver servicio",
    "73b7837d-c11e-492b-a064-4fa9a3be43d3": "Registro",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);