import { LoaderFunction, redirect } from "@remix-run/node";
import { json, Outlet, useLoaderData } from "@remix-run/react";

interface LoaderData {
    message: string;
    color:string;
}

export let loader: LoaderFunction = async ({ request, params }) => {
    
    let color = params.color;
    return json({ message: "NUMERO 1", color });
};

/* export let action = async () => {
    return redirect("/templateUno/detail/templateDos/templateTres");
}; */

export default function ListPrueba() {
    let data = useLoaderData<LoaderData>();
    let color = data.color;
    return (
        <div style={
            {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "70vh",
                width: "100vw",
                backgroundColor: "violet"
            }
        } >
            <h1>{data.message}</h1>
            <p>{color}</p>
            <Outlet/>
        </div>
    );
}