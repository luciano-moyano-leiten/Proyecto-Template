import { redirect, json, LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData, useParams } from "@remix-run/react";

interface LoaderData {
    message: string;
    color: string;
}


export let loader: LoaderFunction = async ({ request, params }) => {
    
    let color = params.color;
    return json({ message: "NUMERO 1", color });
};

export let action = async () => {
    return redirect("/_templateUno/detail/templateDos/templateTres/color");
};

export default function ListPrueba() {
    let data = useLoaderData<LoaderData>();
    const {color} = useParams()
    return (
        <div style={
            {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "90vh",
                width: "100vw",
                backgroundColor: "red"
            }
        } >
            <h1>{data.message}</h1>
            <p>{color}</p>
            <Outlet/>
        </div>
    );
}