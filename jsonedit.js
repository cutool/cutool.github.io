function addLoadEvent(func){ 
    var oldonload=window.onload; 
    console.log(oldonload);
    if(typeof window.onload!='function'){ 
        window.onload=func; 
    }else{ 
        window.onload=function(){ 
            oldonload(); 
            func(); 
        } 
    } 
    console.log(window.onload);
} 

function handleTextChanged(){

    var options = {
        collapsed: false,
        withQuotes:true
    }
    try {
        if (jQuery == undefined){
            console.log("jQuery is undefined")
            return;
        }
        var result = jsonlint.parse(document.getElementById("json-source-text").value);
        if (result) {
        //   document.getElementById("json-render").innerHTML = "JSON is valid!";
        //   document.getElementById("json-render").className = "pass";
        //   if (document.getElementById("json-render").checked) {
        //     document.getElementById("json-render").value = JSON.stringify(result, null, "  ");
        //   }
        var jsonStr =eval('('+$('#json-source-text').val()+')')
        // alert(jsonStr)
         $("#json-render").jsonViewer(jsonStr,options)
        //   document.getElementById("json-render").value = JSON.stringify(document.getElementById("json-source-text").value, null, "  ");
        document.getElementById("json-render").className = "success";
    
        }
      } catch(e) {
        document.getElementById("json-render").innerHTML = e;
        document.getElementById("json-render").className = "fail";
      }
}

addLoadEvent(
    () =>{
        if (document.getElementById("json-source-text").value!=''){
            handleTextChanged();
        }
        document.getElementById("json-source-text").onkeyup = function () {
            handleTextChanged();
        };
      }

)
// addLoadEvent(
//     () => {
    
//         const container = document.getElementById("jsoneditor")
      
//         const jsonEditorError = document.getElementById("jsoneditorerror")
        
//         const options = {
//            mode: 'code',
//            modes: ['tree','preview','code','form'],
//            // ajv: Ajv({ 
//            //     allErrors: true, 
//            //     verbose: true,
//            //     jsonPointers: false,
//            //     $data: true
//            //   }),
//            //  onValidate: function (json) {
//            //     var errors = [];
           
//            //     if (json && json.customer && !json.customer.address) {
//            //       errors.push({
//            //         path: ['customer'],
//            //         message: 'Required property "address" missing.'
//            //       });
//            //     }
           
//            //     return errors;
//            //   }
//         }
//         const editor = new JSONEditor(container, options)
//         const srcOptions = {
//            mode: "code",
//            mainMenuBar: false,
//            popupAnchor: document.getElementById("#loading"),
//            onChangeText: function(json) {
//                // editor.set(editorsrc.get())
//                try{

//                 if (json==""){
//                jsonEditorError.setAttribute("class","dNone");
//                container.setAttribute("class","dBlock");
//                 }
//               editor.set(JSON.parse(json));
//                jsonEditorError.setAttribute("class","dNone");
//                container.setAttribute("class","dBlock");
//                 editor.expandAll();
//                }catch(e){
//                    console.log(e)
//                 //    editor.set({});
//                }
//            },  ajv: Ajv({ 
//                allErrors: true, 
//                verbose: true,
//                jsonPointers: false,
//                $data: true,
               
//              }),
//              onValidationError: function (errors) {
//                  try{
//                      jsonEditorError.innerHTML="";
//                      errorHtml = "";
//                      for(var i=0;i<errors.length;i++) {
//                         errorHtml = errorHtml + "<div>"
//                         errorHtml = errorHtml + errors[i].message
//                         errorHtml = errorHtml + "</div><br>"
//                      }
//                      jsonEditorError.innerHTML = errorHtml;
//                      if (errorHtml!=""){
//                         container.setAttribute("class","dNone");
//                         jsonEditorError.setAttribute("class","dBlock");
//                      }
//                  }catch(e){
//                      console.log(e)
//                  }
//             }
//        }
//         const editorsrc = new JSONEditor(document.getElementById("json-source"), srcOptions)
//         // set json
//         const initialJson = {
//             "Array": [1, 2, 3],
//             "Boolean": true,
//             "Null": null,
//             "Number": 123,
//             "Object": {"a": "b", "c": "d"},
//             "String": "Hello World"
//         }
//        //  editor.set(initialJson)
//        //  editor.expandAll();
       
//         // get json
//         const updatedJson = editor.get()
//         const jsonSrc = document.getElementById("json-src")
//        //  jsonSrc.addEventListener('input', (e) => {
//        //     editor.set(jsonSrc.value);editor.expandAll();
       
       
//        //  });
       
               
//        //  jsonSrc.addEventListener('propertychange',function () {//兼容IE
//        //     editor.set(jsonSrc.value);editor.expandAll();
       
//        // });
       
//        const loading = document.getElementById("loading")
//        if (loading!=null){
//         loading.setAttribute("style","display:none")
//        }
//        const content = document.getElementById("content")
//     //    content.setAttribute("style","display:block")
//         // content.setAttribute("style","display:none")
 
//        }
// )