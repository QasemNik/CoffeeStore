import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Result from "@/components/templates/Search/Result";
import toast from "react-hot-toast";

function Search({ data }) {
  return (
    <>
      <PageHeader route="Search" />
      <Result searchResult={data} />
    </>
  );
}

export default Search;

export async function getServerSideProps({ query }) {
  try {
    const keyword = query.q?.toLowerCase() || "";
    const res = await fetch("http://localhost:4000/menu");
    const data = await res.json();
    const filteredData = keyword
      ? data.filter(
          ({ type, title }) =>
            type.toLowerCase().includes(keyword) ||
            title.toLowerCase().includes(keyword)
        )
      : [];
    return {
      props: {
        data: filteredData,
      },
    };
  } catch (error) {
    toast.error("Search fetch error", error);
    return {
      props: {
        data: [],
      },
    };
  }
}
