import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const year = date.getFullYear();
  const month = months[date.getMonth()].toLowerCase();
  const day = date.getDate();
  return <time dateTime={dateString}>{`${day} de ${month} ${year}`}</time>;
}
