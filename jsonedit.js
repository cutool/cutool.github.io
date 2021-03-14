window.onload = () => {
    
 const container = document.getElementById("jsoneditor")

 const options = {
    mode: 'tree',
    modes: ['tree','preview','code']
    // ajv: Ajv({ 
    //     allErrors: true, 
    //     verbose: true,
    //     jsonPointers: false,
    //     $data: true
    //   }),
    //  onValidate: function (json) {
    //     var errors = [];
    
    //     if (json && json.customer && !json.customer.address) {
    //       errors.push({
    //         path: ['customer'],
    //         message: 'Required property "address" missing.'
    //       });
    //     }
    
    //     return errors;
    //   }
 }
 const editor = new JSONEditor(container, options)
 const srcOptions = {
    mode: "code",
    mainMenuBar: false,
    onChangeText: function(json) {
        // editor.set(editorsrc.get())
       editor.set(JSON.parse(json));
    //    editor.set(json)
        editor.expandAll();
    },  ajv: Ajv({ 
        allErrors: true, 
        verbose: true,
        jsonPointers: false,
        $data: true
      })
}
 const editorsrc = new JSONEditor(document.getElementById("json-source"), srcOptions)
 // set json
 const initialJson = {
     "Array": [1, 2, 3],
     "Boolean": true,
     "Null": null,
     "Number": 123,
     "Object": {"a": "b", "c": "d"},
     "String": "Hello World"
 }
//  editor.set(initialJson)
//  editor.expandAll();

 // get json
 const updatedJson = editor.get()
 const jsonSrc = document.getElementById("json-src")
//  jsonSrc.addEventListener('input', (e) => {
//     editor.set(jsonSrc.value);editor.expandAll();


//  });

        
//  jsonSrc.addEventListener('propertychange',function () {//兼容IE
//     editor.set(jsonSrc.value);editor.expandAll();

// });


}