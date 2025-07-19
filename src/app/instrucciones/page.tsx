export default function Instrucciones(){
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

            <title>
                Istrucciones para que les jale esta cosa xd
            </title>
            <p className="flex gap items-center ">
                Crear una carpeta dentro de src\app :<br />
                y dentro de ella un archivo llamado "page.tsx" :<br />
                srcapp\"nombreCarpeta"\page.tsx  :<br />

                el nombre de la carpeta es el componente que van a hacer :<br />
        
                En paginaaees\page.tsx observar <span className=" underline leading-tight">donde se hace el llamado a esta pagina</span>, 
                y despues asociarlo con la carpeta, en este ejemplo se llama a la carpeta instrucciones <br /> 
               
            </p>

        </div>
    );


}