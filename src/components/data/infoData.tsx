//  ICONOS PEQUEÑOS
// import yoga from "../../assets/iconos maestrias/yoga.png";
// import taichi from "../../assets/iconos maestrias/taichi.png";
// import terapias from "../../assets/iconos maestrias/terapia.png";
// import cursos from "../../assets/iconos maestrias/cursos.png";
// import artemarcial from "../../assets/iconos maestrias/artemarcial.png";
// import artemarcialninos from "../../assets/iconos maestrias/artemarcialninos.png";
// import acrobacia from "../../assets/iconos maestrias/acrobacia.png";
// import acupuntura from "../../assets/iconos cursos/acupuntura.png";
// import auriculo from "../../assets/iconos cursos/auriculo.png";
// import cuerpoACuerpo from "../../assets/iconos cursos/cuerpoACuerpo.png";
// import emplastos from "../../assets/iconos cursos/emplastos.png";
// import jian from "../../assets/iconos cursos/jian.png";
// import lucha from "../../assets/iconos cursos/lucha.png";
// import masaje from "../../assets/iconos cursos/masaje.png";
// import nunchaku from "../../assets/iconos cursos/nunchaku.png";
// import ventosas from "../../assets/iconos cursos/ventosas.png";

import { contacto } from "./contacto";

//  IMAGENES GRANDES
import taichiImg from '../../assets/terapias/taichi.jpg';
import ventosasImg from '../../assets/terapias/ventosas.jpg'
import masajeImg from '../../assets/terapias/masaje.jpg'
import cursoMasajeImg from '../../assets/terapias/curso-masaje.jpg'
import reikiImg from '../../assets/terapias/reiki.jpg'




 export const infoData = {
  yoga: {
    id: "Yoga",
    titulo: "Yoga Chino",
    subtitulo:
      "Movete, respirá y conectá con tu energía hacia un camino integral al bienestar.",
    descripcion:
      "El Yoga Chino, también conocido como Yoga Integral, es una práctica milenaria que combina posturas suaves, ejercicios de respiración consciente y técnicas de meditación. Su objetivo es restablecer el equilibrio natural del cuerpo, liberar tensiones y cultivar una conexión profunda entre lo físico, lo mental y lo espiritual. Es una disciplina accesible para todas las edades y niveles, ideal para quienes buscan bienestar y vitalidad en la vida cotidiana.",
    imagen: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80",
    boton: "Agenda Tu Clase de Yoga",
    mensaje: contacto.yoga.link,
    beneficioLable: "Beneficios del Yoga",
    beneficios: [
      {
        titulo: "✨ Bienestar físico",
        descripcion:
          "Mejora tu flexibilidad, postura y fuerza de manera natural.",
      },
      {
        titulo: "🧠 Calma mental",
        descripcion:
          "Aprende a manejar la ansiedad y el estrés con respiración consciente.",
      },
      {
        titulo: "🌱 Energía vital",
        descripcion:
          "Renueva tu energía y conecta con tu interior a través de la práctica.",
      },
    ],
  },
  taichi: {
    id: "Tai Chi",
    titulo: "TaiChi",
    subtitulo:
      "Armonía en movimiento, el arte del movimiento consciente que armoniza cuerpo y mente.",
    descripcion:
      "El TaiChi es un arte milenario que combina movimientos suaves, respiración consciente y concentración mental. Su práctica ayuda a relajar el cuerpo, aquietar la mente y fortalecer la energía vital, generando una sensación de calma y plenitud. Es apto para todas las edades y no requiere experiencia previa.",
    imagen: taichiImg,
    boton: "Agenda Tu Clase de TaiChi",
    mensaje: contacto.taichi.link,
    beneficioLable: "Beneficios del TaiChi",
    beneficios: [
      {
        titulo: "🌀 Armonia",
        descripcion:
          "Fortalece músculos y articulaciones sin riesgo de lesiones.",
      },
      {
        titulo: "💨 Respiración",
        descripcion:
          "Incrementa tu vitalidad con técnicas de respiración consciente.",
      },
      {
        titulo: "😌 Relajación",
        descripcion:
          "Reduce tensiones y promueve la serenidad en tu día a día.",
      },
    ],
  },

  cursosterapeuticos: {
    id: "Cursos Terapéuticos",
    titulo: "Cursos Terapéuticos",
    subtitulo: "Cursos Terapéuticos",
    descripcion:
      "Formación profesional en terapias naturales y orientales para que puedas guiar a otros en su camino hacia la salud y el equilibrio.",
    imagen: cursoMasajeImg,
    boton: "Consultá por Nuestros Cursos Terapéuticos",
    mensaje: contacto.cursosTerapeuticos.link,
    beneficioLable: "Nuestros Cursos",
    beneficios: [
      {
        titulo: "🎓 Formación completa",
        descripcion: "Conviértete en un especialista en técnicas de bienestar.",
      },
      {
        titulo: "🤝 Ayuda a otros",
        descripcion:
          "Comparte tus conocimientos y mejora la vida de las personas.",
      },
      {
        titulo: "🌍 Comunidad",
        descripcion: "Sé parte de una red de practicantes y terapeutas.",
      },
    ],
    actividades: [
      {
        titulo: "Masajes Orientales",
        descripcion: "",
        link: "masajes",
        horizontal: true,
      },
      {
        titulo: "Ventosas",
        descripcion: "",
        link: "ventosas",
        horizontal: true,
      },
      {
        titulo: "Auriculoterapia",
        descripcion: "",
        link: "auriculoterapia",
        horizontal: true,
      },
      {
        titulo: "Perfil Oriental",
        descripcion: "",
        link: "perfiloriental",
      },
    ],
  },
    cursomasajes: {
      titulo: "Curso de Masajes Orientales An-Mo Tui-Na",
      subtitulo:
        "Aprendé la técnica ancestral china para armonizar cuerpo, mente y energía",
      descripcion:
        "El masaje An-Mo Tui-Na es una de las técnicas más antiguas de la Medicina Tradicional China. Se trata de un método terapéutico que combina movimientos manuales específicos con principios de la acupuntura y la fitoterapia, actuando sobre las vías de energía del cuerpo. A través de presiones, estiramientos y manipulaciones, el An-Mo Tui-Na busca restablecer el equilibrio energético (Qi), aliviar dolores, mejorar la circulación y favorecer el bienestar integral. En este curso aprenderás de manera práctica y teórica las bases del masaje oriental, conociendo tanto la técnica manual como los fundamentos energéticos que la sustentan.",
      link: "curso-masajes",
      imagen: cursoMasajeImg,
      boton: "Consultá por el Curso de Masajes Orientales",
      mensaje: contacto.masaje.link,
      temario: "https://drive.google.com/file/d/1YaEOFJx7CfTYraheyfIfqypQFpXu_W-M/view?usp=sharing",
      beneficioLable: "Beneficios de la Formación en Masajes Orientales",
      folleto:'https://drive.google.com/file/d/1uZo80DntrQN5Apdu-DIZbyXYUaUlP6KD/view?usp=sharing',

      beneficios: [
        {
          titulo: "🎓 Formación",
          descripcion:
            "Disciplina reconocida de la Medicina Tradicional China con bases teóricas y prácticas.",
        },
        {
          titulo: "💆 Técnica",
          descripcion:
            "Maniobras manuales para aliviar tensiones, equilibrar energía y prevenir desarmonías.",
        },
        {
          titulo: "🌿 Bienestar",
          descripcion:
            "Práctica milenaria que promueve la salud integral, útil en lo personal y lo profesional.",
        },
      ],
    },
    cursoventosas: {
      titulo: "Curso de Terapia con Ventosas – Ba Yao Guan Liao Fa",
      subtitulo:
        "Aprendé la técnica ancestral china para desbloquear energía y potenciar la salud natural",
      descripcion:
        "El Ba Yao Guan Liao Fa, conocido como terapia con ventosas, es una herramienta milenaria de la Medicina Tradicional China utilizada para estimular la circulación del Qi (energía vital) y la sangre, liberar tensiones y favorecer la desintoxicación natural del cuerpo. En este taller aprenderás, de manera teórico-práctica, cómo aplicar ventosas de manera correcta y segura, comprendiendo sus fundamentos energéticos y sus múltiples aplicaciones terapéuticas.",
      link: "curso-ventosas",
      imagen: ventosasImg,
      boton: "Consultá por el Curso de Ventosas",
      mensaje: contacto.ventosas.link,
      beneficioLable: "Beneficios de la Terapia con Ventosas",
      folleto: 'https://drive.google.com/file/d/1txk9KbkH0msRX3eIE47xqJLSMDXkihc0/view?usp=sharing',
      beneficios: [
        {
          titulo: "👐 Práctica",
          descripcion:
            "Aprende técnicas efectivas de aplicación con ventosas para resultados inmediatos.",
        },
        {
          titulo: "📘 Conocimiento",
          descripcion:
            "Comprende los fundamentos energéticos de la Medicina China aplicados a la terapia.",
        },
        {
          titulo: "🌟 Resultados",
          descripcion:
            "Alivio de dolores, mejora de circulación y relajación profunda para bienestar integral.",
        },
      ],
    },
    cursoauriculoterapia: {
      titulo: "Auriculoterapia Tradicional China",
      subtitulo:
        "Equilibra tu energía y potencia la salud a través de la estimulación en la oreja.",
      descripcion:
        "Descubre cómo la Auriculoterapia Tradicional China utiliza puntos específicos del oído para influir en el bienestar físico, emocional y energético. Este curso te enseñará técnicas prácticas y seguras para aplicar tratamientos que favorecen la relajación, alivian molestias y mejoran la calidad de vida, combinando la sabiduría ancestral con un enfoque práctico y profesional.",
      link: "curso-auriculoterapia",
      imagen: "https://images.unsplash.com/photo-1632568851266-b8e23c1738f5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      boton: "Consultá por el Curso de Auriculoterapia",
      mensaje: contacto.auriculoterapia.link,
      beneficioLable: "Beneficios de la Auriculoterapia",
      beneficios: [
        {
          titulo: "👐 Práctica",
          descripcion:
            "Aprende técnicas de estimulación auricular para mejorar la salud.",
        },
        {
          titulo: "📘 Conocimiento",
          descripcion:
            "Comprende cómo los puntos de la oreja influyen en el cuerpo según la Medicina China.",
        },
        {
          titulo: "🌿 Bienestar",
          descripcion:
            "Alivia dolores, potencia la energía y mejora tu salud integral.",
        },
      ],
    },
    cursoperfiloriental: {
      titulo: "Curso de Perfil Oriental o Cosmológico",
      subtitulo:
        "Descubre la energía única de cada persona y aprende a armonizar su entorno.",
      descripcion:
        "El Perfil Oriental o Cosmológico permite identificar los biotipos, diátesis y el estado de cambio de cada individuo según antiguas enseñanzas orientales. Comprender la interacción entre el hombre y su medio geo-cósmico potencia el aprendizaje, la enseñanza y la terapéutica. Este curso guía al alumno desde los conceptos básicos hasta los más complejos de la bioenergética, permitiendo un profundo autoconocimiento y la posibilidad de optimizar la relación con su entorno y con otros.",
      link: "curso-perfil-oriental",
      imagen: "https://images.unsplash.com/photo-1517817748493-49ec54a32465?q=80",
      boton: "Consultá por el Curso de Perfil Oriental",
      mensaje: contacto.perfilOriental.link,
      beneficioLable: "Beneficios de la Formacion en Perfil Oriental",
      beneficios: [
        {
          titulo: "🌟 Autoconocimiento",
          descripcion:
            "Comprende tu biotipo y estado energético para potenciar tu desarrollo personal.",
        },
        {
          titulo: "⚖️ Armonización",
          descripcion:
            "Aprende a trabajar de manera efectiva con otros respetando su singularidad energética.",
        },
        {
          titulo: "📚 Aplicación práctica",
          descripcion:
            "Integra los conocimientos en enseñanza, entrenamiento o terapéutica con resultados tangibles.",
        },
      ],
    },

    masajes: {
    id: "Masaje Oriental",
    titulo: "Sesión de Masaje Oriental An-Mo Tui-Na",
    subtitulo: "Recuperá el equilibrio vital a través del contacto y la energía.",
    descripcion:
      "La sesión de masaje An-Mo Tui-Na es una experiencia terapéutica profunda basada en la Medicina Tradicional China. A través de maniobras de presión, movilización y estiramiento sobre los meridianos energéticos, se busca liberar bloqueos, aliviar dolores musculares y reducir el estrés. Es ideal para quienes necesitan un momento de relajación profunda o tratar desequilibrios físicos y emocionales de forma natural.",
    imagen: masajeImg,
    boton: "Agendá tu Sesión de Masaje",
    mensaje: contacto.masajeSesion.link,
    beneficioLable: "Beneficios de la Sesión",
    beneficios: [
      {
        titulo: "💆 Alivio Tensional",
        descripcion: "Libera contracturas y tensiones acumuladas en el cuerpo físico.",
      },
      {
        titulo: "⚖️ Equilibrio Energético",
        descripcion: "Armoniza el flujo del Qi para mejorar el estado de ánimo y la vitalidad.",
      },
      {
        titulo: "🌊 Circulación",
        descripcion: "Favorece la eliminación de toxinas y mejora la oxigenación de los tejidos.",
      },
    ],
    opciones: [
    { 
      nombre: "Masaje Completo (90 min)", 
      detalle: "Incluye espalda, cuello, brazos, rostro, cabeza, abdomen, piernas y pies.",
      extra: "Disponible en formato Individual o Dúo."
    },
    { 
      nombre: "Masaje Completo sin abdomen (70 min)", 
      detalle: "Cubre rostro, cabeza, espalda, cuello, brazos, piernas y pies.",
      extra: "Packs de 3 y 5 sesiones disponibles."
    },
    { 
      nombre: "Masaje Tui Na o Descontracturante (50 min)", 
      detalle: "Enfoque profundo en espalda y cuello para liberar tensiones.",
      extra: "Ideal para mantenimiento semanal."
    },
    { 
      nombre: "Masaje + Terapia con Ventosas", 
      detalle: "Combinación de técnicas manuales con aplicación de ventosas en espalda y/o piernas.",
    },
    { 
      nombre: "Drenaje Linfático (50 min)", 
      detalle: "Técnica suave para favorecer la eliminación de toxinas y líquidos.",
    }
  ]
  },
  ventosas: {
    id: "Ventosas",
    titulo: "Sesión de Ventosas (Cupping)",
    subtitulo: "Desintoxicación y alivio profundo para tus músculos y energía.",
    descripcion:
      "La terapia de ventosas consiste en la aplicación de recipientes sobre la piel para generar un efecto de vacío. Esta técnica milenaria es excelente para tratar dolores crónicos, mejorar la respuesta inmune y eliminar factores patógenos externos. Es una sesión enfocada en la liberación miofascial y la limpieza energética profunda.",
    imagen: ventosasImg,
    boton: "Agendá tu Sesión de Ventosas",
    mensaje: contacto.ventosasSesion.link,
    beneficioLable: "Beneficios de las Ventosas",
    beneficios: [
      {
        titulo: "🚀 Recuperación Muscular",
        descripcion: "Ideal para deportistas o personas con dolores musculares o problemas de circulación.",
      },
      {
        titulo: "🍃 Desintoxicación",
        descripcion: "Ayuda al cuerpo a eliminar impurezas estancadas en la sangre y tejidos.",
      },
      {
        titulo: "🛡️ Sistema Inmune",
        descripcion: "Estimula las defensas naturales del organismo.",
      },
    ],
  },
  acupuntura: {
    id: "Acupuntura",
    titulo: "Sesión de Acupuntura Tradicional",
    subtitulo: "Precisión y armonía para regular tu salud de forma natural.",
    descripcion:
      "La acupuntura es el pilar de la Medicina China que utiliza la inserción de agujas filiformes en puntos específicos del cuerpo para regular el flujo de energía. En cada sesión, se realiza una valoración integral del paciente para abordar la raíz de las desarmonías, ya sean dolores físicos, insomnio, problemas digestivos o cuadros de estrés y ansiedad, entre otros.",
    imagen: "https://images.unsplash.com/photo-1598555763574-dca77e10427e?q=80&w=1197",
    boton: "Agendá tu Sesión de Acupuntura",
    mensaje: contacto.acupuntura.link,
    beneficioLable: "Beneficios de la Acupuntura",
    beneficios: [
      {
        titulo: "🎯 Tratamiento de Raíz",
        descripcion: "No solo calma síntomas, busca el equilibrio del órgano o sistema afectado.",
      },
      {
        titulo: "💤 Calidad de Sueño",
        descripcion: "Altamente efectiva para regular el sistema nervioso y combatir el insomnio.",
      },
      {
        titulo: "✨ Sin Medicación",
        descripcion: "Una alternativa natural y segura para potenciar la autoreparación del cuerpo.",
      },
    ],
    opciones: [
        { nombre: "Tratamiento para el Dolor", detalle: "Tratamiento específico para sintomatología aguda o crónica de dolores musculares, articulares, cefaleas agudas, entre otros." },
        { nombre: "Perfil Oriental de la salud", detalle: "El terapeuta realiza un diagnóstico integral a través de la Historia Clínica Oriental, permitiendo abordar patologías orgánicas, viscerales y emocionales desde la raíz." },
        { nombre: "Auriculoterapia / Craneopuntura", detalle: "Técnicas de microsistemas para el equilibrio del sistema neuroendocrino." },
        { nombre: "Acupuntura Abdominal / Master Tung", detalle: "Sistemas avanzados de acupuntura de alta eficacia." }
    ]
  },
  reiki: {
    id: "Reiki",
    titulo: "Sesión de Reiki",
    subtitulo: "Paz profunda y renovación energética a través de la imposición de manos.",
    descripcion:
      "El Reiki es una técnica de armonización natural donde el terapeuta actúa como canal de energía vital universal. Durante la sesión, el paciente experimenta una relajación absoluta que permite disolver bloqueos emocionales y mentales, promoviendo una sensación de paz, claridad y bienestar espiritual. Es el complemento ideal para cualquier proceso de sanación personal.",
    imagen: reikiImg,
    boton: "Agendá tu Sesión de Reiki",
    mensaje: contacto.reiki.link,
    beneficioLable: "Beneficios del Reiki",
    beneficios: [
      {
        titulo: "🕊️ Paz Mental",
        descripcion: "Reduce drásticamente los niveles de estrés y la rumiación mental.",
      },
      {
        titulo: "💖 Sanación Emocional",
        descripcion: "Ayuda a procesar bloqueos y brinda una sensación de contención y amor.",
      },
      {
        titulo: "🔋 Recarga Vital",
        descripcion: "Restaura los niveles de energía cuando te sientes agotado o 'vaciado'.",
      },
    ],
  },

  
};
