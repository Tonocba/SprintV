import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const getTitles = () =>
  axios
    .get("https://fakestoreapi.com/products")
    .then(({ data }) => data.map(({ title }) => title))

function Ejemplo() {
  const { data: titles = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getTitles,
  })

  return <>{isLoading ? "cargando..." : JSON.stringify(titles)}</>
}

export default Ejemplo