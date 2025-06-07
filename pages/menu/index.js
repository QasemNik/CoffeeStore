import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Pricing from "@/components/templates/Menu/Pricing";
import React from "react";
import toast from "react-hot-toast";

function Menu({ menu }) {
  return (
    <>
      <PageHeader route="Menu" />
      <Pricing data={menu} />
    </>
  );
}

export async function getStaticProps() {
  try {
    
    const res = await fetch("http://localhost:4000/menu");
    if(!res.ok){
      toast.error("Fetching Error")
      throw new Error("Failed to fetch menu data");
    }
    const data = await res.json();

    return {
      props: {
        menu: data,
      },
      revalidate: 60 * 60 * 12, // Every 12 hours
    };
    
  } catch (error) {
          toast.error("Something went wrong");
          return{
            props:{
              menu: []
            },
            revalidate: 60 * 10   //Every 10 minutes
          }

  }


}

export default Menu;
