function result(){

    var students= {

        DAVID : {
            MATH ="87",
            HINDI="86",
            ENGLISH="78",
            PHYSICS="56",
            CHEMISTRY="67"
        },
        RAHUL: {
            MATH ="67",
            HINDI="78",
            ENGLISH="79",
            PHYSICS="78",
            CHEMISTRY="67"
        },
        SWAP : {
            MATH ="56",
            HINDI="87",
            ENGLISH="98",
            PHYSICS="67",
            CHEMISTRY="54"
        },

        RANI : {
            MATH ="98",
            HINDI="76",
            ENGLISH="56",
            PHYSICS="59",
            CHEMISTRY="69"
        }
     }

     var studentname= Document.getElementById("studentname").Value;
     var input = studentname.ToUppercase();
     var definition = studens[input];
     var output = document.getElementById("output");

     if (definition == undefined){
        output.innerHTML='<hr> there is no information about students,<hr>';

     }else{
         output.innerHTML= '<hr> math score is ${definition.math},<hr> HINDI score is ${definition.HINDI}, <hr> ENGLISH score is ${definition.ENGLISH},<hr> PHYSICS score is ${definition.PHYSICS},<hr> CHEMISTRY score is ${definition.CHEMISTRY} <hr>';
     }

}