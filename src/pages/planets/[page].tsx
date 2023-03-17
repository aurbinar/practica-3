import { get } from "https";
import Link from "next/link";
import { useEffect, useState } from "react";
import { setEnvironmentData } from "worker_threads";


type ServerSideProps = {
    id: number
    name: string;
}

export async function getServerSideProps(){
    // const planeta:string = props.params.results.name;

    let allPlanets: string[] = [];
      let nextURL: string | null = "https://swapi.dev/api/planets/";

        const response = await fetch(nextURL);
        const data = await response.json();
        nextURL = data.next;
        const planetNames = data.results.map((planet:any) => planet.name);
        //  console.log(data);  
        return{ props : {data: planetNames}};
    }


type planetProps ={
    name:string
};

const Form =  (props: planetProps) =>{
    console.log(props);
        return(
            <>
            <h1>{props.name}</h1>
            <h1>Hola</h1>

            </>
        )
}
export default Form;