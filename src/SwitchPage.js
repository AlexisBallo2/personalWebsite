import Nav from "./Nav";
import { useSearchParams } from "react-router-dom";
import HomePage from "./HomePage";
import Portfilio from "./components/Portfolio";
import { useEffect, useState } from "react";

export default function SwitchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState();
  searchParams.get("page");
  useEffect(() => {
    setPage(searchParams.get("page"));
  });

  return (
    <div>
      <Nav />
      {page !== "portfolio" ? <HomePage /> : <Portfilio />}
    </div>
  );
}
