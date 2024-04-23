import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";

import image1 from "./imgs/img-admin/state/1.png";
import image2 from "./imgs/img-admin/state/2.png";
import image3 from "./imgs/img-admin/state/3.png";
import image4 from "./imgs/img-admin/state/4.png";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

export const dataMovements = [
    {
      icon: ArticleOutlinedIcon,
      title: "Estado de cuenta",
      link: "Ver detalle",
    },
    {
      icon: FindInPageOutlinedIcon,
      title: "Movimientos",
      link: "Ver detalle",
    },
    {
      icon: ShowChartOutlinedIcon,
      title: "Mis inversiones",
      link: "Ver detalle",
    },
    {
      icon: SignalCellularAltOutlinedIcon,
      title: "Histórico del Valor Cuota",
      link: "Ver detalle",
    },
    {
      icon: SummarizeOutlinedIcon,
      title: "Reporte de situación Previsional",
      link: "Descargar",
    },
  
    {
      icon: SummarizeOutlinedIcon,
      title: "Reporte de deudas de mis empleadores",
      link: "Ver detalle",
    },
    {
      icon: AssignmentOutlinedIcon,
      title: "Boleta por cobro de comisión",
      link: "Ver detalle",
    },
    {
      icon: SummarizeOutlinedIcon,
      title: "Constancia de Afiliación",
      link: "Descargar",
    },
  ];
  
export const navItems = [
  {
    title: "home",
    icon: HomeOutlinedIcon,
    path: "/",
  },
  {
    title: "Mi rentabilidad",
    icon: DataSaverOffOutlinedIcon,
    path: "/rentabilidad",
  },
  {
    title: "Estado de cuenta",
    icon: TextSnippetOutlinedIcon,
    path: "/estadoCuenta",
  },
  {
    title: "Consultas y movimientos",
    icon: TextSnippetOutlinedIcon,
    path: "/consultas",
  },
  {
    title: "Mis tramites",
    icon: TextSnippetOutlinedIcon,
    path: "/tramites",
  },
  {
    title: "Mi perfil",
    icon: TextSnippetOutlinedIcon,
    path: "/perfil",
  },
];
export const stateData = [
  {
    title: "Aportes",
    icon: image1,
    cant: "1,669.09",
  },

  {
    title: "Retiros y Cargos",
    icon: image2,
    cant: "1,000.65",
  },

  {
    title: "Rentabilidad Neta",
    icon: image3,
    cant: "17.93",
  },

  {
    title: "Fondo de Pensión",
    icon: image4,
    cant: "650.51",
  },
];
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
export const dataFormalities = [
    {
        icon: PaidOutlinedIcon,
        title: "Define tu Pensión Minima Objetivo",
        link: "Ver detalle",
      },
      {
        icon: PublishedWithChangesOutlinedIcon,
        title: "Cambia tu Tipo de Fondo",
        link: "Ver detalle",
      },
      {
        icon: ShowChartOutlinedIcon,
        title: "Abre o deposita a tu cuenta de Aportes Voluntarioa",
        link: "Ver detalle",
      },
      {
        icon: SummarizeOutlinedIcon,
        title: "Retira Tus Aportes Voluntarios",
        link: "Ver detalle",
      },
      {
        icon: SummarizeOutlinedIcon,
        title: "Transfiere tu fondo al exterior",
        link: "Descargar",
      },
    
      {
        icon: DateRangeOutlinedIcon,
        title: "Solicita tu pension y/o retira hasta el 95.5%",
        link: "Ver detalle",
      },
      {
        icon: SummarizeOutlinedIcon,
        title: "Solicita una pensión por invalidez",
        link: "Ver detalle",
      },
      {
        icon: SummarizeOutlinedIcon,
        title: "Solicita un bono de reconocimiento",
        link: "Descargar",
      },
      {
        icon: SummarizeOutlinedIcon,
        title: "Mesa de Partes digital",
        link: "Descargar",
      },

]